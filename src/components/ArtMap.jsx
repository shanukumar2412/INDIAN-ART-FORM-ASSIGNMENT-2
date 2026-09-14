import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import { ArrowRight, Sparkles, AlertTriangle } from 'lucide-react';
import {
  INDIA_OFFICIAL_BOUNDARY,
  INDIA_BOUNDARY_STYLE,
  INDIA_BOUNDARY_GLOW_STYLE
} from '../data/indiaTerritory';

// Controller component to smoothly animate map flyTo selected state coordinates
function MapController({ selectedState, focusKey }) {
  const map = useMap();

  useEffect(() => {
    if (selectedState && selectedState.coordinates) {
      map.flyTo(selectedState.coordinates, 7, {
        duration: 1.5,
        easeLinearity: 0.25
      });
    }
  }, [selectedState, focusKey, map]);

  return null;
}

// Function to generate custom styled Leaflet HTML DivIcons based on category
const createCategoryIcon = (category, isSelected) => {
  const getIconColor = (cat) => {
    switch (cat) {
      case 'Painting': return '#B85D3A';
      case 'Textile': return '#8B4513';
      case 'Tribal Art': return '#D4AF37';
      case 'Religious Art': return '#4A5D4E';
      case 'Folk Art': return '#C25975';
      case 'Craft': return '#D97706';
      default: return '#2C221E';
    }
  };

  const color = getIconColor(category);
  const glow = isSelected
    ? 'box-shadow: 0 0 20px #D4AF37, 0 4px 14px rgba(0,0,0,0.4); z-index: 1000;'
    : 'box-shadow: 0 4px 10px rgba(0,0,0,0.3);';

  const html = `
    <div style="
      background-color: ${color};
      color: #FAF7F2;
      border: 2px solid #D4AF37;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${isSelected ? '42px' : '34px'};
      height: ${isSelected ? '42px' : '34px'};
      ${glow}
      transition: all 0.3s ease;
    ">
      <svg width="${isSelected ? '22' : '18'}" height="${isSelected ? '22' : '18'}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 21.7C17.3 17 20 13 20 9a8 8 0 1 0-16 0c0 4 2.7 8 8 12.7z"/>
        <circle cx="12" cy="9" r="3"/>
      </svg>
    </div>
  `;

  return L.divIcon({
    html,
    className: 'custom-art-marker-container',
    iconSize: isSelected ? [42, 42] : [34, 34],
    iconAnchor: isSelected ? [21, 42] : [17, 34],
    popupAnchor: [0, -34]
  });
};

export default function ArtMap({
  statesData,
  selectedState,
  onSelectState,
  onOpenDetailModal,
  focusKey
}) {
  const defaultCenter = [22.5937, 78.9629];
  const defaultZoom = 4.8;

  return (
    <div className="relative w-full h-[550px] sm:h-[650px] rounded-2xl overflow-hidden border border-[#D4AF37]/50 shadow-museum">

      {/* Header Overlay Badge */}
      <div className="absolute top-4 left-4 z-20 bg-[#2C221E]/90 backdrop-blur-md text-[#FAF7F2] border border-[#D4AF37]/60 px-4 py-2 rounded-xl shadow-lg flex items-center space-x-2">
        <Sparkles className="w-4 h-4 text-[#D4AF37]" />
        <span className="text-xs font-semibold tracking-wide uppercase font-serif">
          Interactive Cultural Map of India
        </span>
      </div>

      {/* Official Boundary Disclaimer Badge */}
      <div className="absolute top-4 right-4 z-20 bg-[#FAF7F2]/95 backdrop-blur-md border border-[#D4AF37] text-[#2C221E] px-3 py-1.5 rounded-xl shadow-md flex items-center space-x-1.5 max-w-[240px]">
        <AlertTriangle className="w-3.5 h-3.5 text-[#B85D3A] shrink-0" />
        <p className="text-[10px] font-semibold leading-snug text-[#2C221E]">
          Map shows India's complete territory as per <strong>Government of India</strong>.
          Includes PoK & Aksai Chin.
        </p>
      </div>

      {/* PoK & Aksai Chin Labels */}
      <div className="absolute bottom-16 left-4 z-20 space-y-1.5 hidden sm:block">
        <div className="bg-[#B85D3A]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow">
          🇮🇳 PoK — Part of India (J&K)
        </div>
        <div className="bg-[#4A5D4E]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow">
          🇮🇳 Aksai Chin — Part of India (Ladakh)
        </div>
      </div>

      {/* Map Legend */}
      <div className="absolute bottom-4 right-4 z-20 bg-[#FAF7F2]/95 backdrop-blur-md border border-[#E8E1D7] p-3 rounded-xl shadow-md hidden sm:block">
        <p className="text-[11px] font-bold text-[#2C221E] uppercase tracking-wider mb-2 font-serif">
          Art Categories Legend
        </p>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-[#6B5E57]">
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-[#B85D3A] inline-block border border-white" />
            <span>Painting</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-[#8B4513] inline-block border border-white" />
            <span>Textile</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-[#D4AF37] inline-block border border-white" />
            <span>Tribal Art</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-[#4A5D4E] inline-block border border-white" />
            <span>Religious Art</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-[#C25975] inline-block border border-white" />
            <span>Folk Art</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-[#D97706] inline-block border border-white" />
            <span>Craft</span>
          </div>
        </div>
        {/* Official Boundary Legend */}
        <div className="mt-2 pt-2 border-t border-[#E8E1D7] flex items-center space-x-1.5 text-[10px] text-[#6B5E57]">
          <span
            className="inline-block w-6 h-2 rounded-full border-2"
            style={{ borderColor: '#B85D3A', borderStyle: 'dashed', backgroundColor: 'rgba(212,175,55,0.12)' }}
          />
          <span>India's Official Boundary</span>
        </div>
      </div>

      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        scrollWheelZoom={false}
        className="w-full h-full"
        minZoom={3}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* ─── India Official Territory Boundary Overlay ──────────────── */}
        {/* Outer glow layer */}
        <GeoJSON
          key="india-glow"
          data={INDIA_OFFICIAL_BOUNDARY}
          style={INDIA_BOUNDARY_GLOW_STYLE}
        />
        {/* Main official boundary polygon */}
        <GeoJSON
          key="india-official"
          data={INDIA_OFFICIAL_BOUNDARY}
          style={INDIA_BOUNDARY_STYLE}
        />
        {/* ────────────────────────────────────────────────────────────── */}

        <MapController selectedState={selectedState} focusKey={focusKey} />

        {statesData.map((item) => {
          const isSelected = selectedState && selectedState.id === item.id;
          const customIcon = createCategoryIcon(item.category, isSelected);

          return (
            <Marker
              key={item.id}
              position={item.coordinates}
              icon={customIcon}
              eventHandlers={{
                click: () => { onSelectState(item); }
              }}
            >
              <Popup autoPan={true}>
                <div className="max-w-xs p-1">

                  {/* State & Location Header */}
                  <div className="flex items-center justify-between border-b border-[#E8E1D7] pb-2 mb-2">
                    <h3 className="font-bold text-lg text-[#2C221E] font-serif-title tracking-wide">
                      {item.state}
                    </h3>
                    <span className="inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded bg-[#E8E1D7]/60 text-[#B85D3A]">
                      📍 {item.location}
                    </span>
                  </div>

                  {/* Primary Art Form */}
                  <div className="mb-2">
                    <p className="text-sm font-semibold text-[#B85D3A] flex items-center">
                      🎨 <span className="ml-1 text-[#2C221E]">{item.artForm}</span>
                    </p>
                  </div>

                  {/* Art Forms Pills */}
                  {item.artForms && item.artForms.length > 1 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.artForms.map((af, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[10px] font-semibold rounded bg-[#FAF7F2] border border-[#D4AF37]/50 text-[#2C221E]"
                        >
                          {af.name}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Historical Context Snippet */}
                  <div className="mb-3 text-xs text-[#6B5E57] leading-relaxed line-clamp-3">
                    <strong className="text-[#2C221E]">📜 Historical Context:</strong> {item.historicalContext}
                  </div>

                  {/* Key Features */}
                  {item.keyFeatures && (
                    <div className="mb-3 bg-[#FAF7F2] p-2 rounded-lg border border-[#E8E1D7]">
                      <p className="text-[11px] font-semibold text-[#2C221E] mb-1">⭐ Key Features:</p>
                      <ul className="text-[11px] text-[#6B5E57] space-y-0.5 list-disc list-inside">
                        {item.keyFeatures.slice(0, 2).map((feat, idx) => (
                          <li key={idx} className="truncate">{feat}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* View Details Button */}
                  <button
                    onClick={() => { onOpenDetailModal(item); }}
                    className="w-full mt-1 py-2 px-3 bg-[#2C221E] text-[#D4AF37] hover:bg-[#1E1715] font-semibold text-xs rounded-lg flex items-center justify-center space-x-1.5 transition-colors border border-[#D4AF37]/50 shadow-sm"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
