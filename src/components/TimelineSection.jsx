import React from 'react';
import { Sparkles, Clock, Compass, ShieldCheck } from 'lucide-react';
import { HISTORICAL_PERIODS } from '../data/indianArtData';

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-16 bg-[#2C221E] text-[#FAF7F2] relative overflow-hidden my-12 border-y border-[#D4AF37]/40">
      
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B85D3A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#D4AF37] bg-white/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 mb-3">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Chronological Epochs</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif-title tracking-tight text-[#FAF7F2]">
            A Journey Through <span className="text-[#D4AF37] italic font-serif">Indian Art</span>
          </h2>
          <p className="text-sm text-[#FAF7F2]/70 mt-3 leading-relaxed">
            Broad historical timeline depicting key stylistic eras from ancient rock murals to living contemporary folk heritage.
          </p>
        </div>

        {/* Timeline Path Container */}
        <div className="relative">
          
          {/* Vertical Center Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4AF37] via-[#B85D3A] to-[#D4AF37] -translate-x-1/2 opacity-40" />

          <div className="space-y-12 relative">
            {HISTORICAL_PERIODS.map((period, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col lg:flex-row items-center justify-between gap-8 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Card */}
                  <div className="w-full lg:w-[45%] bg-[#1E1715] p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/30 shadow-2xl hover:border-[#D4AF37] transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold px-3 py-1 rounded-md bg-[#D4AF37] text-[#2C221E]">
                        {period.period}
                      </span>
                      <span className="text-xs font-mono text-[#D4AF37]">
                        {period.timeframe}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold font-serif-title text-[#FAF7F2] mb-2">
                      {period.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#FAF7F2]/80 leading-relaxed mb-4">
                      {period.description}
                    </p>

                    <div className="pt-3 border-t border-white/10 text-xs text-[#D4AF37] flex items-center">
                      <ShieldCheck className="w-3.5 h-3.5 mr-1.5 shrink-0" />
                      <span>Key Highlights: <strong>{period.examples}</strong></span>
                    </div>
                  </div>

                  {/* Central Node Badge */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#2C221E] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-bold text-sm shadow-xl shrink-0">
                    {idx + 1}
                  </div>

                  {/* Empty Spacer Column for Desktop Symmetry */}
                  <div className="hidden lg:block w-[45%]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
