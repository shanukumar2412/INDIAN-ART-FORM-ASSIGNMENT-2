import React from 'react';
import { MapPin, Palette, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

export default function HeroSection({ onExploreMap, onViewArtForms }) {
  return (
    <section className="relative overflow-hidden bg-indian-pattern pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#E8E1D7]">
      {/* Decorative Gold & Terracotta Glowing Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#B85D3A]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Academic Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FAF7F2] border border-[#D4AF37] text-xs font-semibold text-[#B85D3A] shadow-sm mb-6">
          <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>College Assignment (CO1) Digital Museum Showcase</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#2C221E] font-serif-title tracking-tight max-w-4xl mx-auto leading-tight mb-6">
          Discover India <span className="text-gold-gradient italic font-serif">Through Art</span>
        </h1>

        {/* Hero Description */}
        <p className="text-lg sm:text-xl text-[#6B5E57] max-w-3xl mx-auto font-normal leading-relaxed mb-10">
          “Explore the diverse artistic traditions of India, from ancient Buddhist cave paintings and temple murals to tribal art, miniature paintings, textiles and folk traditions.”
        </p>

        {/* Hero Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExploreMap}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#2C221E] text-[#D4AF37] font-semibold text-base flex items-center justify-center space-x-3 shadow-lg hover:bg-[#1E1715] hover:scale-105 transition-all duration-200 border border-[#D4AF37]/60 group"
          >
            <MapPin className="w-5 h-5 text-[#D4AF37] group-hover:animate-bounce" />
            <span>Explore the Map</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onViewArtForms}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FAF7F2] text-[#2C221E] font-semibold text-base flex items-center justify-center space-x-3 shadow-md hover:bg-[#E8E1D7] transition-all duration-200 border border-[#2C221E]/20"
          >
            <Palette className="w-5 h-5 text-[#B85D3A]" />
            <span>View Art Forms</span>
          </button>
        </div>

        {/* Cultural Art Highlights Pill Row */}
        <div className="mt-12 pt-8 border-t border-[#E8E1D7]/60 flex flex-wrap justify-center items-center gap-3 text-xs text-[#6B5E57] font-medium">
          <span className="flex items-center space-x-1.5 bg-white/70 px-3 py-1.5 rounded-md border border-[#E8E1D7]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Tanjore Gold Leaf</span>
          </span>
          <span className="flex items-center space-x-1.5 bg-white/70 px-3 py-1.5 rounded-md border border-[#E8E1D7]">
            <Sparkles className="w-3.5 h-3.5 text-[#B85D3A]" />
            <span>Madhubani Folk Motifs</span>
          </span>
          <span className="flex items-center space-x-1.5 bg-white/70 px-3 py-1.5 rounded-md border border-[#E8E1D7]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Pahari Miniatures</span>
          </span>
          <span className="flex items-center space-x-1.5 bg-white/70 px-3 py-1.5 rounded-md border border-[#E8E1D7]">
            <Sparkles className="w-3.5 h-3.5 text-[#B85D3A]" />
            <span>Ajanta Cave Murals</span>
          </span>
          <span className="flex items-center space-x-1.5 bg-white/70 px-3 py-1.5 rounded-md border border-[#E8E1D7]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Bastar Dhokra Craft</span>
          </span>
        </div>

      </div>
    </section>
  );
}
