import React, { useState, useCallback } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import { MapPin, X, ArrowRight, Sparkles, AlertTriangle, Info } from 'lucide-react';

// ─── India States GeoJSON (official Indian state boundaries) ──────────────
const INDIA_GEO_URL =
  'https://gist.githubusercontent.com/jbrobst/56c13bbbf9d97d187fea01ca62ea5112/raw/e388c4cae20aa53cb5090210a42ebb9b765c0a36/india_states.geojson';

// ─── PoK + Aksai Chin custom GeoJSON (India's official claim) ────────────
const CLAIMED_TERRITORY_GEO = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { name: 'Pakistan-Occupied Kashmir (India Claim – J&K)' },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [73.90, 34.20], [74.05, 34.80], [73.90, 35.30], [73.50, 35.90],
          [73.20, 36.30], [72.60, 36.80], [73.00, 37.05], [74.10, 37.10],
          [75.50, 37.10], [76.60, 37.00], [77.00, 36.50], [76.10, 35.60],
          [75.50, 35.00], [74.50, 34.50], [73.90, 34.20],
        ]],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Aksai Chin (India Claim – Ladakh)' },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [77.80, 37.20], [78.30, 36.90], [79.00, 36.40], [79.80, 36.00],
          [80.30, 35.50], [80.60, 35.00], [80.20, 34.20], [79.00, 33.90],
          [78.00, 34.50], [77.50, 35.50], [77.80, 37.20],
        ]],
      },
    },
  ],
};

// ─── Category colours ─────────────────────────────────────────────────────
const CAT_COLORS = {
  'Painting':      '#B85D3A',
  'Textile':       '#8B4513',
  'Tribal Art':    '#D4AF37',
  'Religious Art': '#4A5D4E',
  'Folk Art':      '#C25975',
  'Craft':         '#D97706',
};
const catColor = (cat) => CAT_COLORS[cat] || '#2C221E';

// ─── Popup card shown when a marker is clicked ────────────────────────────
function MarkerPopup({ item, onClose, onOpenDetail, isLeft }) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        position: 'absolute',
        [isLeft ? 'right' : 'left']: 'calc(100% + 10px)',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 258,
        background: 'rgba(250,247,242,0.98)',
        backdropFilter: 'blur(14px)',
        border: '1.5px solid #D4AF37',
        borderRadius: 14,
        boxShadow: '0 14px 42px rgba(44,34,30,0.25)',
        padding: 14,
        zIndex: 200,
        pointerEvents: 'all',
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: 8, right: 8,
          background: 'none', border: 'none',
          cursor: 'pointer', color: '#6B5E57', padding: 2,
        }}
      >
        <X size={13} />
      </button>

      {/* Header */}
      <div style={{ borderBottom: '1px solid #E8E1D7', paddingBottom: 8, marginBottom: 8 }}>
        <h3 style={{
          margin: 0, fontSize: 15, fontWeight: 700,
          color: '#2C221E', fontFamily: "'Cormorant Garamond', serif",
        }}>
          {item.state}
        </h3>
        <span style={{ fontSize: 10.5, color: '#B85D3A', fontWeight: 600 }}>
          📍 {item.location}
        </span>
      </div>

      {/* Primary art */}
      <p style={{ margin: '0 0 6px', fontSize: 12, color: '#2C221E', fontWeight: 600 }}>
        🎨 {item.artForm}
      </p>

      {/* Art form pills */}
      {item.artForms && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 8 }}>
          {item.artForms.map((af, i) => (
            <span
              key={i}
              style={{
                fontSize: 9, fontWeight: 600,
                background: '#FAF7F2',
                border: '1px solid rgba(212,175,55,0.5)',
                borderRadius: 10, padding: '2px 5px',
                color: '#2C221E',
              }}
            >
              {af.name}
            </span>
          ))}
        </div>
      )}

      {/* Historical snippet */}
      <p style={{
        margin: '0 0 10px', fontSize: 10.5, color: '#6B5E57',
        lineHeight: 1.55, display: '-webkit-box',
        WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
      }}>
        {item.historicalContext}
      </p>

      {/* Category badge */}
      <span style={{
        display: 'inline-block', fontSize: 9, fontWeight: 700,
        background: catColor(item.category), color: '#fff',
        borderRadius: 20, padding: '2px 8px',
        marginBottom: 10, letterSpacing: '0.05em',
      }}>
        {item.category.toUpperCase()}
      </span>

      {/* Details button */}
      <button
        onClick={() => { onOpenDetail(item); onClose(); }}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '100%', padding: '8px 0',
          background: '#2C221E', color: '#D4AF37',
          border: '1px solid rgba(212,175,55,0.4)',
          borderRadius: 8, fontSize: 11.5, fontWeight: 600,
          cursor: 'pointer', gap: 5,
        }}
      >
        View Full Details <ArrowRight size={12} />
      </button>
    </div>
  );
}

// ─── Main SVG Map component ───────────────────────────────────────────────
export default function SVGMap({
  statesData,
  selectedState,
  onSelectState,
  onOpenDetailModal,
}) {
  const [openPopupId, setOpenPopupId] = useState(null);

  const handleMarkerClick = useCallback((item) => {
    setOpenPopupId((prev) => (prev === item.id ? null : item.id));
    onSelectState(item);
  }, [onSelectState]);

  const closePopup = useCallback(() => setOpenPopupId(null), []);

  return (
    <div
      onClick={closePopup}
      style={{
        background: 'linear-gradient(135deg, #C8E8F5 0%, #A8D8EA 100%)',
        borderRadius: 18,
        overflow: 'hidden',
        border: '1.5px solid rgba(212,175,55,0.45)',
        boxShadow: '0 8px 40px rgba(44,34,30,0.15)',
        position: 'relative',
      }}
    >
      {/* ── Header Badge ───────────────────────────────────────────── */}
      <div style={{
        position: 'absolute', top: 12, left: 12, zIndex: 30,
        background: 'rgba(44,34,30,0.92)', backdropFilter: 'blur(10px)',
        color: '#FAF7F2', border: '1px solid rgba(212,175,55,0.5)',
        padding: '7px 13px', borderRadius: 11,
        display: 'flex', alignItems: 'center', gap: 7,
        boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
      }}>
        <Sparkles size={13} color="#D4AF37" />
        <span style={{
          fontSize: 10.5, fontWeight: 700, letterSpacing: '0.08em',
          textTransform: 'uppercase', fontFamily: "'Cinzel', serif",
        }}>
          Interactive Art Map of India
        </span>
      </div>

      {/* ── Disclaimer Badge ───────────────────────────────────────── */}
      <div style={{
        position: 'absolute', top: 12, right: 12, zIndex: 30,
        background: 'rgba(250,247,242,0.97)', backdropFilter: 'blur(8px)',
        border: '1px solid #D4AF37', padding: '6px 10px',
        borderRadius: 10, maxWidth: 215,
        display: 'flex', gap: 6, alignItems: 'flex-start',
        boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
      }}>
        <AlertTriangle size={11} color="#B85D3A" style={{ marginTop: 1, flexShrink: 0 }} />
        <p style={{ margin: 0, fontSize: 9, color: '#2C221E', lineHeight: 1.5 }}>
          Map as per <strong>Government of India</strong>.<br />
          Includes <strong>PoK</strong> &amp; <strong>Aksai Chin</strong>.
        </p>
      </div>

      {/* ── Territory Labels ────────────────────────────────────────── */}
      <div style={{
        position: 'absolute', bottom: 80, left: 14, zIndex: 20,
        display: 'flex', flexDirection: 'column', gap: 5,
      }}>
        <div style={{
          background: 'rgba(184,93,58,0.88)', color: '#fff',
          fontSize: 8.5, fontWeight: 700, padding: '3px 8px',
          borderRadius: 5, boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
        }}>
          🇮🇳 PoK — Part of India (J&amp;K)
        </div>
        <div style={{
          background: 'rgba(74,93,78,0.88)', color: '#fff',
          fontSize: 8.5, fontWeight: 700, padding: '3px 8px',
          borderRadius: 5, boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
        }}>
          🇮🇳 Aksai Chin — Part of India (Ladakh)
        </div>
      </div>

      {/* ── Composable SVG Map ────────────────────────────────────── */}
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          // Centre slightly NW to give space to PoK in the north
          center: [82.5, 22.5],
          scale: 1070,
        }}
        width={820}
        height={920}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        {/* ── Ocean background ── */}
        <rect x={0} y={0} width={820} height={920}
          fill="url(#oceanGrad)" />
        <defs>
          <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#C8E8F5" />
            <stop offset="100%" stopColor="#A8D8EA" />
          </linearGradient>
        </defs>

        {/* ── PoK + Aksai Chin (official Indian claimed territory) ── */}
        <Geographies geography={CLAIMED_TERRITORY_GEO}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#FDF6DC"
                stroke="#B85D3A"
                strokeWidth={1.8}
                strokeDasharray="5,3"
                style={{
                  default: { outline: 'none' },
                  hover:   { outline: 'none' },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>

        {/* ── India States (official internal boundaries) ─────────── */}
        <Geographies geography={INDIA_GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#FDFBEF"
                stroke="#888"
                strokeWidth={0.5}
                strokeDasharray="3,2"
                style={{
                  default: { outline: 'none', fill: '#FDFBEF' },
                  hover:   { outline: 'none', fill: '#FFF8DC' },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>

        {/* ── State Markers (perfectly placed via D3 Mercator) ─────── */}
        {statesData.map((item) => {
          const [lat, lon] = item.coordinates;
          const isSelected  = selectedState && selectedState.id === item.id;
          const isOpen      = openPopupId === item.id;
          const fill        = catColor(item.category);
          // Flip popup to left side if longitude > 86 (eastern states)
          const flipLeft    = lon > 86;

          return (
            <Marker
              key={item.id}
              coordinates={[lon, lat]}   // react-simple-maps: [longitude, latitude]
            >
              {/* Glow ring for selected marker */}
              {isSelected && (
                <circle r={20} fill="rgba(212,175,55,0.25)"
                  style={{ animation: 'pulse 1.5s infinite' }} />
              )}

              {/* Main pin circle */}
              <circle
                r={isSelected ? 13 : 10}
                fill={fill}
                stroke={isSelected ? '#FFD700' : '#D4AF37'}
                strokeWidth={isSelected ? 2.5 : 1.8}
                style={{
                  cursor: 'pointer',
                  filter: isOpen || isSelected
                    ? 'drop-shadow(0 0 6px rgba(212,175,55,0.7))'
                    : 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                  transition: 'r 0.2s ease, filter 0.2s ease',
                }}
                onClick={(e) => { e.stopPropagation(); handleMarkerClick(item); }}
              />

              {/* Inner dot */}
              <circle r={3} fill="rgba(255,255,255,0.85)"
                style={{ pointerEvents: 'none' }} />

              {/* State name label (always visible) */}
              <text
                textAnchor="middle"
                y={isSelected ? -18 : -14}
                style={{
                  fontSize: isSelected ? 8.5 : 7,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: isSelected ? 700 : 600,
                  fill: '#2C221E',
                  pointerEvents: 'none',
                  letterSpacing: '0.02em',
                  textShadow: '0 1px 3px rgba(255,255,255,0.9)',
                  paintOrder: 'stroke',
                  stroke: 'rgba(255,255,255,0.9)',
                  strokeWidth: 3,
                  strokeLinejoin: 'round',
                }}
              >
                {item.state}
              </text>

              {/* Popup card (HTML via foreignObject) */}
              {isOpen && (
                <foreignObject
                  x={flipLeft ? -280 : 18}
                  y={-80}
                  width={270}
                  height={300}
                  style={{ overflow: 'visible' }}
                >
                  <div xmlns="http://www.w3.org/1999/xhtml">
                    <MarkerPopup
                      item={item}
                      onClose={closePopup}
                      onOpenDetail={onOpenDetailModal}
                      isLeft={flipLeft}
                    />
                  </div>
                </foreignObject>
              )}
            </Marker>
          );
        })}
      </ComposableMap>

      {/* ── Legend ─────────────────────────────────────────────────── */}
      <div style={{
        position: 'absolute', bottom: 12, right: 12, zIndex: 20,
        background: 'rgba(250,247,242,0.97)', backdropFilter: 'blur(8px)',
        border: '1px solid #E8E1D7', borderRadius: 12,
        padding: '9px 12px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
      }}>
        <p style={{
          margin: '0 0 6px', fontSize: 9.5, fontWeight: 700,
          color: '#2C221E', textTransform: 'uppercase',
          letterSpacing: '0.08em', fontFamily: "'Cinzel', serif",
        }}>
          Art Category Legend
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 12px' }}>
          {Object.entries(CAT_COLORS).map(([cat, color]) => (
            <div key={cat} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{
                width: 9, height: 9, borderRadius: '50%',
                background: color, flexShrink: 0,
                border: '1.5px solid rgba(255,255,255,0.8)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
              }} />
              <span style={{ fontSize: 9, color: '#4A3728', fontWeight: 500 }}>{cat}</span>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 7, paddingTop: 6, borderTop: '1px solid #E8E1D7',
          fontSize: 8.5, color: '#6B5E57',
        }}>
          <Info size={8} style={{ verticalAlign: 'middle', marginRight: 3 }} />
          Click any marker to explore
        </div>
      </div>
    </div>
  );
}
