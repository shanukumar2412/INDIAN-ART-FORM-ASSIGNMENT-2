import React, { useState } from 'react';
import { MapPin, ArrowRight, Sparkles, Image as ImageIcon } from 'lucide-react';

export default function StateGrid({ statesData, onSelectState }) {
  const [failedImages, setFailedImages] = useState({});

  const handleImageError = (id) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="art-forms" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 pb-4 border-b border-[#E8E1D7]">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#B85D3A] bg-[#FAF7F2] px-3.5 py-1 rounded-full border border-[#D4AF37]/50 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Complete National Directory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C221E] font-serif-title tracking-tight">
              Explore All 28 States
            </h2>
            <p className="text-sm text-[#6B5E57] mt-1">
              Select any state card to open its complete detail museum panel & locate on map.
            </p>
          </div>

          <span className="text-xs font-semibold text-[#6B5E57] mt-4 sm:mt-0 bg-[#FAF7F2] px-3 py-1.5 rounded-lg border border-[#E8E1D7]">
            {statesData.length} States Displayed
          </span>
        </div>

        {/* 28 States Responsive Grid */}
        {statesData.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-[#E8E1D7]">
            <p className="text-base text-[#6B5E57]">No states found matching your search or filter parameters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {statesData.map((item) => {
              const primaryImage = item.images && item.images[0] ? item.images[0].url : null;
              const hasFailed = failedImages[item.id] || !primaryImage;

              return (
                <div
                  key={item.id}
                  onClick={() => onSelectState(item)}
                  className="bg-[#FAF7F2] rounded-2xl border border-[#E8E1D7] overflow-hidden shadow-museum shadow-museum-hover cursor-pointer group flex flex-col justify-between"
                >
                  
                  {/* Card Image Header */}
                  <div className="relative h-48 w-full bg-[#EAE6DF] overflow-hidden">
                    {!hasFailed ? (
                      <img
                        src={primaryImage}
                        alt={`Artwork image - ${item.state}`}
                        onError={() => handleImageError(item.id)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#2C221E] p-4 flex flex-col items-center justify-center text-center text-[#FAF7F2]">
                        <ImageIcon className="w-8 h-8 text-[#D4AF37] mb-2" />
                        <span className="text-xs font-serif font-bold text-[#D4AF37]">
                          Artwork image – {item.state}
                        </span>
                        <span className="text-[10px] text-[#FAF7F2]/70 mt-0.5">
                          {item.artForm}
                        </span>
                      </div>
                    )}

                    {/* Category Badge Overlay */}
                    <div className="absolute top-3 left-3 bg-[#2C221E]/90 text-[#D4AF37] border border-[#D4AF37]/50 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider backdrop-blur-sm">
                      {item.category}
                    </div>

                    {/* State ID Badge */}
                    <div className="absolute top-3 right-3 bg-[#FAF7F2]/90 text-[#2C221E] font-bold text-xs px-2 py-0.5 rounded border border-[#E8E1D7]">
                      {item.id}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-xl font-bold text-[#2C221E] font-serif-title group-hover:text-[#B85D3A] transition-colors">
                          {item.state}
                        </h3>
                      </div>

                      <p className="text-xs font-semibold text-[#6B5E57] flex items-center mb-2">
                        <MapPin className="w-3.5 h-3.5 text-[#B85D3A] mr-1 shrink-0" />
                        <span>{item.location}</span>
                      </p>

                      <div className="pt-2 border-t border-[#E8E1D7]/70">
                        <p className="text-xs font-bold text-[#B85D3A] flex items-center">
                          🎨 <span className="ml-1 text-[#2C221E] font-semibold">{item.artForm}</span>
                        </p>

                        {/* Art Forms Pills */}
                        {item.artForms && item.artForms.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {item.artForms.map((af, idx) => (
                              <span
                                key={idx}
                                className="inline-block px-1.5 py-0.5 text-[9px] font-semibold rounded bg-[#FAF7F2] border border-[#D4AF37]/50 text-[#2C221E]"
                              >
                                {af.name}
                              </span>
                            ))}
                          </div>
                        )}

                        <p className="text-xs text-[#6B5E57] line-clamp-2 mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Explore CTA Button */}
                    <div className="pt-3 border-t border-[#E8E1D7] flex items-center justify-between text-xs font-semibold text-[#2C221E] group-hover:text-[#B85D3A]">
                      <span>Explore Tradition</span>
                      <span className="flex items-center space-x-1 text-[#B85D3A]">
                        <span>Explore</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
