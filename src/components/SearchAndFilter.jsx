import React from 'react';
import { Search, X, Filter, Sparkles } from 'lucide-react';
import { ART_CATEGORIES } from '../data/indianArtData';

export default function SearchAndFilter({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  totalCount,
  filteredCount
}) {
  return (
    <div className="bg-[#FAF7F2] border border-[#E8E1D7] rounded-2xl p-4 sm:p-6 shadow-museum mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
        
        {/* Search Input Box */}
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6B5E57]">
            <Search className="w-5 h-5 text-[#B85D3A]" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search states, cities or art forms..."
            className="w-full pl-11 pr-10 py-3 bg-white border border-[#E8E1D7] rounded-xl text-sm font-medium text-[#2C221E] placeholder-[#6B5E57]/60 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#6B5E57] hover:text-[#2C221E]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Counter Badge */}
        <div className="flex items-center space-x-2 text-xs font-semibold text-[#6B5E57] bg-[#E8E1D7]/40 px-4 py-2 rounded-xl border border-[#E8E1D7]">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Showing <strong className="text-[#2C221E]">{filteredCount}</strong> of <strong>{totalCount}</strong> States</span>
        </div>

      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
        <div className="flex items-center text-xs font-semibold text-[#6B5E57] mr-1 shrink-0">
          <Filter className="w-3.5 h-3.5 mr-1 text-[#B85D3A]" />
          <span>Categories:</span>
        </div>
        {ART_CATEGORIES.map((category) => {
          const isSelected = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 shrink-0 ${
                isSelected
                  ? 'bg-[#2C221E] text-[#D4AF37] shadow-md border border-[#D4AF37]/60 scale-105'
                  : 'bg-white text-[#2C221E] hover:bg-[#E8E1D7]/60 border border-[#E8E1D7]'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
