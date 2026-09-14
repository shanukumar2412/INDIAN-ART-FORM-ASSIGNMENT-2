import React from 'react';
import { Map, Palette, Layers, History, Sparkles } from 'lucide-react';

export default function StatisticsSection() {
  const stats = [
    {
      number: "28",
      label: "States Covered",
      description: "100% representation of every Indian state",
      icon: Map,
      color: "#B85D3A"
    },
    {
      number: "28",
      label: "Art Traditions",
      description: "Unique master regional artistic heritages",
      icon: Palette,
      color: "#D4AF37"
    },
    {
      number: "5+",
      label: "Major Art Categories",
      description: "Paintings, Textiles, Tribal, Religious & Folk Craft",
      icon: Layers,
      color: "#4A5D4E"
    },
    {
      number: "1000+",
      label: "Years of Artistic Heritage",
      description: "Centuries of continuous cultural expression",
      icon: History,
      color: "#C25975"
    }
  ];

  return (
    <section className="py-12 bg-white/60 border-y border-[#E8E1D7] my-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#B85D3A] bg-[#FAF7F2] px-3.5 py-1 rounded-full border border-[#D4AF37]/50 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>National Heritage Metrics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C221E] font-serif-title tracking-tight">
            India’s Artistic Diversity
          </h2>
          <p className="text-sm text-[#6B5E57] mt-2">
            A comprehensive educational breakdown across geographic regions and artistic mediums.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8E1D7] shadow-museum shadow-museum-hover relative overflow-hidden group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: '#2C221E', borderColor: '#D4AF37', border: '1px solid #D4AF37' }}
                >
                  <Icon className="w-6 h-6 text-[#D4AF37]" />
                </div>

                <div className="text-4xl font-extrabold text-[#2C221E] font-serif-title tracking-tight mb-1">
                  {item.number}
                </div>

                <div className="text-base font-bold text-[#2C221E] mb-1">
                  {item.label}
                </div>

                <p className="text-xs text-[#6B5E57] leading-relaxed">
                  {item.description}
                </p>

                {/* Subtle Decorative Accent */}
                <div
                  className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full opacity-5 pointer-events-none group-hover:scale-150 transition-transform"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
