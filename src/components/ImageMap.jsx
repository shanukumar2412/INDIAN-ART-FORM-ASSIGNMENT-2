import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MapPin, X, ArrowRight, Sparkles, AlertTriangle, Info } from 'lucide-react';

// ─── Geographic bounds of the India map image ──────────────────────────────
// Carefully calibrated by measuring landmark positions on the generated image:
//   Image is 1024×1024px (square).
//   India's landmass spans approx:
//     Top  (PoK tip, ~37.1°N)  → pixel y ≈  3%  of image height
//     Bottom (Kanyakumari ~8.1°N) → pixel y ≈ 86% of image height
//     Left  (Gujarat coast ~68°E) → pixel x ≈ 10% of image width
//     Right (Arunachal ~97.4°E) → pixel x ≈ 91% of image width
//   (ocean/padding extends to all 4 image edges)
//
//   Using linear interpolation to solve for full-image lat/lon bounds:
//     x%=0 → lon_west, x%=100 → lon_east
//     y%=0 → lat_north, y%=100 → lat_south
//
//   From the pixel measurements above:
//     0.10 * (east-west)  + west  = 68.0   → west  = 68 - 0.10*(east-west)
//     0.91 * (east-west)  + west  = 97.4
//     => east-west = (97.4-68)/(0.91-0.10) = 29.4/0.81 = 36.3°
//     => west = 68 - 0.10*36.3 = 64.4°E  ,  east = 64.4+36.3 = 100.7°E
//
//     0.03 * (south-north) + north = 37.1  but y% increases downward so:
//     lat = north - y%*(north-south)
//     0.03*(north-south) subtracted from north = 37.1 → not straightforward
//     lat = north - y_frac*(north-south)
//     37.1 = north - 0.03*(north-south)
//     8.1  = north - 0.86*(north-south)
//     => (north-south) = (37.1-8.1)/(0.86-0.03) = 29/0.83 = 34.9°
//     => north = 37.1 + 0.03*34.9 = 38.15°N  , south = 38.15-34.9 = 3.25°N
const MAP_BOUNDS = {
  north: 38.2,   // extrapolated top edge of image (above PoK)
  south:  3.2,   // extrapolated bottom edge (below Kanyakumari, over ocean)
  west:  64.3,   // extrapolated left edge (west of Gujarat, over Arabian Sea)
  east: 100.8,   // extrapolated right edge (east of Arunachal, over Myanmar/ocean)
};


// ─── Convert geographic lat/lon to % position on the image ────────────────
function latLonToPercent(lat, lon) {
  const x = ((lon - MAP_BOUNDS.west)  / (MAP_BOUNDS.east  - MAP_BOUNDS.west))  * 100;
  const y = ((MAP_BOUNDS.north - lat) / (MAP_BOUNDS.north - MAP_BOUNDS.south)) * 100;
  return { x, y };
}

// ─── Category colour mapping ───────────────────────────────────────────────
const CATEGORY_COLORS = {
  'Painting':      { bg: '#B85D3A', text: '#FAF7F2', border: '#D4AF37' },
  'Textile':       { bg: '#8B4513', text: '#FAF7F2', border: '#D4AF37' },
  'Tribal Art':    { bg: '#D4AF37', text: '#2C221E', border: '#B85D3A' },
  'Religious Art': { bg: '#4A5D4E', text: '#FAF7F2', border: '#D4AF37' },
  'Folk Art':      { bg: '#C25975', text: '#FAF7F2', border: '#D4AF37' },
  'Craft':         { bg: '#D97706', text: '#FAF7F2', border: '#B85D3A' },
};

function getCategoryColor(cat) {
  return CATEGORY_COLORS[cat] || { bg: '#2C221E', text: '#FAF7F2', border: '#D4AF37' };
}

// ─── Individual Marker ─────────────────────────────────────────────────────
function StateMarker({ item, isSelected, onClick, onOpenDetail }) {
  const [showPopup, setShowPopup] = useState(false);
  const pos    = latLonToPercent(item.coordinates[0], item.coordinates[1]);
  const colors = getCategoryColor(item.category);
  const popupRef = useRef(null);

  // Close popup on outside click
  useEffect(() => {
    if (!showPopup) return;
    const handler = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [showPopup]);

  const handleMarkerClick = (e) => {
    e.stopPropagation();
    setShowPopup((p) => !p);
    onClick(item);
  };

  // Determine popup direction (flip if too close to right/bottom edge)
  const flipLeft = pos.x > 70;
  const flipUp   = pos.y > 65;

  return (
    <div
      style={{
        position: 'absolute',
        left: `${pos.x}%`,
        top:  `${pos.y}%`,
        transform: 'translate(-50%, -100%)',
        zIndex: isSelected ? 50 : showPopup ? 40 : 10,
      }}
    >
      {/* ── Pin button ─────────────────────────────── */}
      <button
        onClick={handleMarkerClick}
        title={`${item.state} — ${item.artForm}`}
        style={{
          background: colors.bg,
          border: `2.5px solid ${isSelected ? '#FFD700' : colors.border}`,
          color: colors.text,
          borderRadius: '50%',
          width:  isSelected ? 38 : 30,
          height: isSelected ? 38 : 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: isSelected
            ? `0 0 0 3px rgba(212,175,55,0.4), 0 0 16px rgba(212,175,55,0.6), 0 4px 12px rgba(0,0,0,0.35)`
            : '0 3px 8px rgba(0,0,0,0.3)',
          transition: 'all 0.2s ease',
        }}
      >
        <MapPin
          size={isSelected ? 20 : 16}
          strokeWidth={2.2}
          fill={isSelected ? '#FFD700' : 'none'}
          stroke={colors.text}
        />
      </button>

      {/* ── Popup card ─────────────────────────────── */}
      {showPopup && (
        <div
          ref={popupRef}
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'absolute',
            [flipLeft ? 'right' : 'left']: '110%',
            [flipUp   ? 'bottom' : 'top']: '0',
            width: 260,
            background: 'rgba(250,247,242,0.98)',
            backdropFilter: 'blur(12px)',
            border: '1.5px solid #D4AF37',
            borderRadius: 14,
            boxShadow: '0 12px 40px rgba(44,34,30,0.25)',
            padding: '14px',
            zIndex: 100,
          }}
        >
          {/* Close */}
          <button
            onClick={() => setShowPopup(false)}
            style={{
              position: 'absolute', top: 8, right: 8,
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#6B5E57', padding: 2,
            }}
          >
            <X size={14} />
          </button>

          {/* State name + location */}
          <div style={{ borderBottom: '1px solid #E8E1D7', paddingBottom: 8, marginBottom: 8 }}>
            <h3 style={{
              margin: 0, fontSize: 16, fontWeight: 700,
              color: '#2C221E', fontFamily: "'Cormorant Garamond', serif",
            }}>
              {item.state}
            </h3>
            <span style={{ fontSize: 11, color: '#B85D3A', fontWeight: 600 }}>
              📍 {item.location}
            </span>
          </div>

          {/* Primary art form */}
          <p style={{ margin: '0 0 6px', fontSize: 12, color: '#2C221E', fontWeight: 600 }}>
            🎨 {item.artForm}
          </p>

          {/* Art form pills */}
          {item.artForms && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 8 }}>
              {item.artForms.map((af, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 9, fontWeight: 600,
                    background: '#FAF7F2',
                    border: '1px solid rgba(212,175,55,0.5)',
                    borderRadius: 10, padding: '2px 6px',
                    color: '#2C221E',
                  }}
                >
                  {af.name}
                </span>
              ))}
            </div>
          )}

          {/* Historical context snippet */}
          <p style={{
            margin: '0 0 10px', fontSize: 11,
            color: '#6B5E57', lineHeight: 1.5,
            display: '-webkit-box', WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>
            {item.historicalContext}
          </p>

          {/* Category badge */}
          <span
            style={{
              display: 'inline-block',
              fontSize: 9, fontWeight: 700,
              background: colors.bg, color: colors.text,
              borderRadius: 20, padding: '2px 8px',
              marginBottom: 10, letterSpacing: '0.05em',
            }}
          >
            {item.category.toUpperCase()}
          </span>

          {/* View Details button */}
          <button
            onClick={() => { onOpenDetail(item); setShowPopup(false); }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '100%', padding: '8px 0',
              background: '#2C221E', color: '#D4AF37',
              border: '1px solid rgba(212,175,55,0.5)',
              borderRadius: 8, fontSize: 12, fontWeight: 600,
              cursor: 'pointer', gap: 6,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#1E1715'}
            onMouseLeave={e => e.currentTarget.style.background = '#2C221E'}
          >
            View Full Details <ArrowRight size={13} />
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Main ImageMap Component ───────────────────────────────────────────────
export default function ImageMap({
  statesData,
  selectedState,
  onSelectState,
  onOpenDetailModal,
}) {
  const containerRef = useRef(null);

  // Close all popups when clicking empty map area
  const handleMapClick = useCallback(() => {}, []);

  return (
    <div
      style={{
        borderRadius: 18,
        overflow: 'hidden',
        border: '1.5px solid rgba(212,175,55,0.45)',
        boxShadow: '0 8px 40px rgba(44,34,30,0.15)',
        background: '#BFE3F7',   // ocean blue background
        position: 'relative',
      }}
    >
      {/* ── Top Overlay Bar ────────────────────────────────────────── */}
      <div style={{
        position: 'absolute', top: 12, left: 12, zIndex: 30,
        background: 'rgba(44,34,30,0.92)', backdropFilter: 'blur(10px)',
        color: '#FAF7F2', border: '1px solid rgba(212,175,55,0.5)',
        padding: '8px 14px', borderRadius: 12,
        display: 'flex', alignItems: 'center', gap: 7,
        boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
      }}>
        <Sparkles size={14} color="#D4AF37" />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'Cinzel', serif" }}>
          Interactive Art Map of India
        </span>
      </div>

      {/* ── Official Boundary Notice ───────────────────────────────── */}
      <div style={{
        position: 'absolute', top: 12, right: 12, zIndex: 30,
        background: 'rgba(250,247,242,0.97)', backdropFilter: 'blur(8px)',
        border: '1px solid #D4AF37', padding: '7px 11px',
        borderRadius: 10, maxWidth: 220,
        display: 'flex', gap: 6, alignItems: 'flex-start',
        boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
      }}>
        <AlertTriangle size={12} color="#B85D3A" style={{ marginTop: 1, flexShrink: 0 }} />
        <p style={{ margin: 0, fontSize: 9.5, color: '#2C221E', lineHeight: 1.5 }}>
          Map as per <strong>Government of India</strong>.<br />
          Includes <strong>PoK</strong> &amp; <strong>Aksai Chin</strong>.
        </p>
      </div>

      {/* ── PoK / Aksai Chin Region Labels ────────────────────────── */}
      <div style={{
        position: 'absolute', bottom: 70, left: 14, zIndex: 20,
        display: 'flex', flexDirection: 'column', gap: 5,
      }}>
        <div style={{
          background: 'rgba(184,93,58,0.88)', color: '#fff',
          fontSize: 9, fontWeight: 700, padding: '3px 8px',
          borderRadius: 6, boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        }}>
          🇮🇳 PoK — Part of India (J&amp;K)
        </div>
        <div style={{
          background: 'rgba(74,93,78,0.88)', color: '#fff',
          fontSize: 9, fontWeight: 700, padding: '3px 8px',
          borderRadius: 6, boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        }}>
          🇮🇳 Aksai Chin — Part of India (Ladakh)
        </div>
      </div>

      {/* ── Map Image + Markers Container ─────────────────────────── */}
      <div
        ref={containerRef}
        onClick={handleMapClick}
        style={{ position: 'relative', width: '100%', lineHeight: 0 }}
      >
        {/* The India outline map image */}
        <img
          src="/india_map.png"
          alt="Official Map of India including PoK and Aksai Chin"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            userSelect: 'none',
            pointerEvents: 'none',   // let clicks pass through to markers
          }}
          draggable={false}
        />

        {/* Markers absolutely positioned over the image */}
        {statesData.map((item) => (
          <StateMarker
            key={item.id}
            item={item}
            isSelected={selectedState && selectedState.id === item.id}
            onClick={onSelectState}
            onOpenDetail={onOpenDetailModal}
          />
        ))}
      </div>

      {/* ── Legend ────────────────────────────────────────────────── */}
      <div style={{
        position: 'absolute', bottom: 12, right: 12, zIndex: 20,
        background: 'rgba(250,247,242,0.97)', backdropFilter: 'blur(8px)',
        border: '1px solid #E8E1D7', borderRadius: 12,
        padding: '10px 13px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
      }}>
        <p style={{
          margin: '0 0 7px', fontSize: 10, fontWeight: 700,
          color: '#2C221E', textTransform: 'uppercase',
          letterSpacing: '0.08em', fontFamily: "'Cinzel', serif",
        }}>
          Legend
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px 14px' }}>
          {Object.entries(CATEGORY_COLORS).map(([cat, c]) => (
            <div key={cat} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{
                width: 10, height: 10, borderRadius: '50%',
                background: c.bg, border: '1.5px solid #fff',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                flexShrink: 0,
              }} />
              <span style={{ fontSize: 9.5, color: '#4A3728', fontWeight: 500 }}>{cat}</span>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 8, paddingTop: 7, borderTop: '1px solid #E8E1D7',
          fontSize: 9, color: '#6B5E57', lineHeight: 1.4,
        }}>
          <Info size={9} style={{ marginRight: 3, verticalAlign: 'middle' }} />
          Click any <MapPin size={9} style={{ verticalAlign: 'middle', marginRight: 2 }} />
          marker to explore art traditions
        </div>
      </div>
    </div>
  );
}
