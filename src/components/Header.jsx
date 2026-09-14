import React, { useState } from 'react';
import { Compass, Sparkles, Info, Palette, Menu, X, Share2 } from 'lucide-react';

export default function Header({ onNavigate, activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'map', label: 'Explore Map', icon: Compass },
    { id: 'art-forms', label: 'Art Forms', icon: Palette },
    { id: 'timeline', label: 'Timeline', icon: Sparkles },
    { id: 'about', label: 'About', icon: Info },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E8E1D7] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Main Title */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('hero')}>
            <div className="w-12 h-12 rounded-xl bg-[#2C221E] border border-[#D4AF37] flex items-center justify-center shadow-md">
              <span className="text-2xl" role="img" aria-label="India Flag">🇮🇳</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold text-[#2C221E] font-serif-title tracking-tight">
                  Interactive Art Map of India
                </h1>
              </div>
              <p className="text-xs text-[#6B5E57] hidden sm:block">
                Explore the geographic spread and cultural influence of Indian art traditions
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#2C221E] text-[#D4AF37] shadow-sm'
                      : 'text-[#2C221E] hover:bg-[#E8E1D7]/50 hover:text-[#B85D3A]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Share Button, Badge & Mobile Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={() => onNavigate('share')}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-[#D4AF37] text-[#2C221E] hover:bg-[#c49f27] transition-all shadow-sm cursor-pointer"
              title="Generate shareable link for this interactive map"
            >
              <Share2 className="w-3.5 h-3.5 mr-1 text-[#2C221E]" />
              <span>Share Link</span>
            </button>

            <span className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#2C221E] text-[#D4AF37] border border-[#D4AF37]/40 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#D4AF37]" />
              28 States • 28 Art Traditions
            </span>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#2C221E] hover:bg-[#E8E1D7]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8E1D7] px-4 pt-2 pb-4 space-y-2 animate-fade-in">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-base font-medium text-[#2C221E] hover:bg-[#E8E1D7]"
              >
                <Icon className="w-5 h-5 text-[#B85D3A]" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
