import React from 'react';
import { ArrowUp, Sparkles, BookOpen } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E1715] text-[#FAF7F2] border-t border-[#D4AF37]/40 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2]/10 border border-[#D4AF37] flex items-center justify-center">
              <span className="text-xl" role="img" aria-label="India Flag">🇮🇳</span>
            </div>
            <div>
              <h3 className="text-xl font-bold font-serif-title text-[#FAF7F2]">
                Interactive Art Map of India
              </h3>
              <p className="text-xs text-[#D4AF37]">
                Digital Museum & Educational Repository • 28 States Covered
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-[#2C221E] text-[#D4AF37] border border-[#D4AF37]/50 hover:bg-[#FAF7F2] hover:text-[#2C221E] transition-all shadow-md flex items-center space-x-2 text-xs font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF7F2]/60 gap-4">
          <p>
            Submitted for College Assignment (CO1) • 10 Marks Standard • Interactive Digital Map Project
          </p>
          <p className="flex items-center space-x-1">
            <span>Powered by React, Vite, Leaflet & OpenStreetMap</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
