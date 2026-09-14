import React, { useState } from 'react';
import { X, MapPin, Sparkles, BookOpen, Layers, Award, Image as ImageIcon, ArrowLeft, Palette, Share2 } from 'lucide-react';

export default function StateDetailModal({ stateData, onClose, onFocusOnMap, onShare }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  if (!stateData) return null;

  const images = stateData.images || [];
  const currentImage = images[activeImageIndex];

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#FAF7F2] border border-[#D4AF37] rounded-3xl shadow-2xl overflow-hidden animate-slide-up my-auto max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-[#2C221E] text-[#FAF7F2] px-6 py-4 flex items-center justify-between border-b border-[#D4AF37]/40">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2]/10 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-bold text-lg font-serif">
              {stateData.id}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-2xl font-bold font-serif-title text-[#FAF7F2] tracking-wide">
                  {stateData.state}
                </h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#2C221E] font-semibold">
                  {stateData.category}
                </span>
              </div>
              <p className="text-xs text-[#D4AF37]/90 flex items-center mt-0.5">
                <MapPin className="w-3.5 h-3.5 mr-1" />
                <span>Location: <strong>{stateData.location}</strong></span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#D4AF37] hover:bg-white/10 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* Main Title Banner */}
          <div className="bg-white p-6 rounded-2xl border border-[#E8E1D7] shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B85D3A]">
                Major Art Form
              </span>
              <h3 className="text-3xl font-bold text-[#2C221E] font-serif-title mt-1">
                🎨 {stateData.artForm}
              </h3>
              <p className="text-sm text-[#6B5E57] mt-1 leading-relaxed">
                {stateData.description}
              </p>
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <button
                onClick={() => onShare && onShare(stateData)}
                className="px-4 py-2.5 rounded-xl bg-[#D4AF37] text-[#2C221E] hover:bg-[#c49f27] font-semibold text-xs flex items-center space-x-1.5 shadow-sm transition-all cursor-pointer"
                title="Get shareable link for this state art form"
              >
                <Share2 className="w-4 h-4 text-[#2C221E]" />
                <span>Share Link</span>
              </button>

              <button
                onClick={() => {
                  onFocusOnMap(stateData);
                  onClose();
                }}
                className="px-4 py-2.5 rounded-xl bg-[#2C221E] text-[#D4AF37] hover:bg-[#1E1715] font-semibold text-xs flex items-center space-x-1.5 border border-[#D4AF37]/50 shadow-sm cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Locate on Map</span>
              </button>
            </div>
          </div>

          {/* Image Showcase & Gallery */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold text-[#2C221E] font-serif-title flex items-center">
                <ImageIcon className="w-5 h-5 mr-2 text-[#B85D3A]" />
                Visual Artwork Gallery
              </h4>
              <span className="text-xs text-[#6B5E57]">
                Image {activeImageIndex + 1} of {images.length || 1}
              </span>
            </div>

            {/* Display Image with Fallback */}
            <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden bg-[#EAE6DF] border border-[#E8E1D7] flex items-center justify-center">
              {currentImage && !imageErrors[activeImageIndex] ? (
                <img
                  src={currentImage.url}
                  alt={currentImage.alt || `Artwork image - ${stateData.state}`}
                  onError={() => handleImageError(activeImageIndex)}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              ) : (
                /* Fallback Container if Image fails or absent */
                <div className="flex flex-col items-center justify-center p-6 text-center bg-[#FAF7F2] border-2 border-dashed border-[#D4AF37]/60 rounded-2xl w-full h-full">
                  <div className="w-16 h-16 rounded-full bg-[#2C221E] text-[#D4AF37] flex items-center justify-center text-2xl font-serif font-bold mb-3 shadow-md">
                    🎨
                  </div>
                  <h4 className="text-xl font-bold text-[#2C221E] font-serif-title">
                    Artwork image – {stateData.state}
                  </h4>
                  <p className="text-xs text-[#6B5E57] mt-1 max-w-md">
                    {stateData.artForm} from {stateData.location}, {stateData.state}. High resolution museum archival record placeholder.
                  </p>
                </div>
              )}

              {/* Caption Overlay */}
              {currentImage && !imageErrors[activeImageIndex] && currentImage.caption && (
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 text-white text-xs flex flex-col justify-end space-y-1">
                  <span className="inline-flex items-center self-start px-2 py-0.5 rounded bg-[#D4AF37] text-[#2C221E] text-[10px] font-bold uppercase tracking-wider">
                    🏛️ Authentic Indian Cultural Archive Photograph
                  </span>
                  <p className="font-medium text-[#FAF7F2] leading-snug">{currentImage.caption}</p>
                </div>
              )}
            </div>

            {/* Gallery Thumbnails */}
            {images.length > 1 && (
              <div className="flex items-center space-x-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#D4AF37] scale-105 shadow-md'
                        : 'border-[#E8E1D7] opacity-60 hover:opacity-100'
                    }`}
                  >
                    {!imageErrors[idx] ? (
                      <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-[#2C221E] text-[#D4AF37] text-[10px] flex items-center justify-center font-bold">
                        {stateData.id} #{idx+1}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* All Art Forms Grid */}
          {stateData.artForms && stateData.artForms.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-[#2C221E] font-serif-title flex items-center">
                <Palette className="w-5 h-5 mr-2 text-[#D4AF37]" />
                Art Forms of {stateData.state}
                <span className="ml-2 text-xs font-normal text-[#6B5E57] bg-[#E8E1D7] px-2 py-0.5 rounded-full">
                  {stateData.artForms.length} Traditions
                </span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stateData.artForms.map((af, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-xl border border-[#E8E1D7] shadow-sm hover:border-[#D4AF37] transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-bold text-sm text-[#2C221E] font-serif-title group-hover:text-[#B85D3A] transition-colors">
                        🎨 {af.name}
                      </h5>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#2C221E] text-[#D4AF37]">
                        {af.type}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B5E57] leading-relaxed">{af.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Details Grid: Historical Context & Key Characteristics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Historical Context */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8E1D7] shadow-sm space-y-3">
              <h4 className="text-lg font-bold text-[#2C221E] font-serif-title flex items-center text-[#B85D3A]">
                <BookOpen className="w-5 h-5 mr-2" />
                Historical Context
              </h4>
              <p className="text-sm text-[#6B5E57] leading-relaxed">
                {stateData.historicalContext}
              </p>
            </div>

            {/* Key Characteristics */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8E1D7] shadow-sm space-y-3">
              <h4 className="text-lg font-bold text-[#2C221E] font-serif-title flex items-center text-[#D4AF37]">
                <Layers className="w-5 h-5 mr-2" />
                Key Features & Characteristics
              </h4>
              <ul className="space-y-2 text-xs text-[#2C221E]">
                {stateData.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-[#B85D3A] font-bold mt-0.5">•</span>
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Cultural Significance */}
          <div className="bg-white p-6 rounded-2xl border border-[#E8E1D7] shadow-sm space-y-3">
            <h4 className="text-lg font-bold text-[#2C221E] font-serif-title flex items-center">
              <Award className="w-5 h-5 mr-2 text-[#B85D3A]" />
              Cultural Significance
            </h4>
            <p className="text-sm text-[#6B5E57] leading-relaxed">
              {stateData.culturalSignificance}
            </p>
          </div>

          {/* Related Artists & Artworks */}
          {stateData.relatedArtworks && stateData.relatedArtworks.length > 0 && (
            <div className="bg-[#2C221E] text-[#FAF7F2] p-6 rounded-2xl border border-[#D4AF37]/50 shadow-md">
              <h4 className="text-base font-bold font-serif-title text-[#D4AF37] mb-3 flex items-center">
                <Sparkles className="w-4 h-4 mr-2" />
                Notable Masterpieces & Related Artworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {stateData.relatedArtworks.map((art, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[#FAF7F2]/10 border border-[#D4AF37]/40 text-xs text-[#FAF7F2] font-medium"
                  >
                    {art}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF7F2] px-6 py-4 border-t border-[#E8E1D7] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#2C221E] text-[#D4AF37] hover:bg-[#1E1715] font-semibold text-xs flex items-center space-x-2 border border-[#D4AF37]/50 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Map</span>
          </button>

          <span className="text-xs text-[#6B5E57]">
            State Code: <strong>{stateData.id}</strong> • Coordinates: {stateData.coordinates[0].toFixed(2)}, {stateData.coordinates[1].toFixed(2)}
          </span>
        </div>

      </div>
    </div>
  );
}
