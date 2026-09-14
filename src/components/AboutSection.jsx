import React from 'react';
import { BookOpen, Globe, Award, Sparkles, GraduationCap } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-[#E8E1D7] p-8 sm:p-12 shadow-museum relative overflow-hidden">
          
          {/* Subtle Corner Motif */}
          <div className="absolute top-0 right-0 p-8 text-[#D4AF37]/10 pointer-events-none font-serif text-9xl select-none font-bold">
            🇮🇳
          </div>

          <div className="max-w-3xl relative z-10 space-y-6">
            
            <div className="inline-flex items-center space-x-2 text-xs font-semibold text-[#B85D3A] bg-[#FAF7F2] px-4 py-1.5 rounded-full border border-[#D4AF37]">
              <Globe className="w-4 h-4 text-[#D4AF37]" />
              <span>Educational Art History & Geography Synthesis</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-[#2C221E] font-serif-title tracking-tight leading-tight">
              Why Indian Art Is Geographically Diverse
            </h2>

            <blockquote className="text-lg sm:text-xl text-[#2C221E] font-serif italic border-l-4 border-[#D4AF37] pl-6 py-2 bg-[#FAF7F2]/60 rounded-r-xl leading-relaxed">
              “India's artistic heritage reflects its geographical, religious, linguistic and cultural diversity. Different regions developed distinctive painting styles, textiles, sculpture, architecture and craft traditions. The map demonstrates how artistic ideas developed locally while also being influenced by trade, religion, royal patronage and cultural exchange.”
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E8E1D7]">
              <div className="space-y-1">
                <h4 className="font-bold text-[#2C221E] text-base font-serif-title flex items-center">
                  <Sparkles className="w-4 h-4 text-[#D4AF37] mr-1.5" />
                  28 States Integration
                </h4>
                <p className="text-xs text-[#6B5E57] leading-relaxed">
                  Complete geographic representation across all 28 states of the Republic of India.
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-[#2C221E] text-base font-serif-title flex items-center">
                  <BookOpen className="w-4 h-4 text-[#B85D3A] mr-1.5" />
                  Curated Data
                </h4>
                <p className="text-xs text-[#6B5E57] leading-relaxed">
                  Historical context, key characteristics, and cultural significance for each tradition.
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-[#2C221E] text-base font-serif-title flex items-center">
                  <GraduationCap className="w-4 h-4 text-[#D4AF37] mr-1.5" />
                  Academic Excellence
                </h4>
                <p className="text-xs text-[#6B5E57] leading-relaxed">
                  Engineered specifically for 10-mark college assignment (Course Outcome CO1).
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
