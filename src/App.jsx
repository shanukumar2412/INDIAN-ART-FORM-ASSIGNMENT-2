import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SearchAndFilter from './components/SearchAndFilter';
import SVGMap from './components/SVGMap';
import StateGrid from './components/StateGrid';
import StateDetailModal from './components/StateDetailModal';
import ShareModal from './components/ShareModal';
import StatisticsSection from './components/StatisticsSection';
import TimelineSection from './components/TimelineSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import { INDIAN_ART_DATA } from './data/indianArtData';
import { Share2, Sparkles, MapPin } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedState, setSelectedState] = useState(INDIAN_ART_DATA[0]);
  const [detailModalState, setDetailModalState] = useState(null);
  const [focusKey, setFocusKey] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  // Share Modal State
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [shareModalData, setShareModalData] = useState(null);

  // Parse URL Search Params on initial page load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const stateParam = params.get('state');
      const artParam = params.get('art');

      if (stateParam || artParam) {
        const found = INDIAN_ART_DATA.find((item) => {
          const matchStateName = stateParam && item.state.toLowerCase() === stateParam.toLowerCase();
          const matchStateId = stateParam && item.id.toLowerCase() === stateParam.toLowerCase();
          const matchArtForm = artParam && item.artForm.toLowerCase() === artParam.toLowerCase();
          const matchLocation = stateParam && item.location.toLowerCase() === stateParam.toLowerCase();
          return matchStateName || matchStateId || matchArtForm || matchLocation;
        });

        if (found) {
          setSelectedState(found);
          setDetailModalState(found);
          // Scroll to map section smoothly
          setTimeout(() => {
            const mapElement = document.getElementById('map-section');
            if (mapElement) {
              mapElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 300);
        }
      }
    }
  }, []);

  // Update browser URL query param whenever selected state changes
  const updateUrlParam = (stateItem) => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location);
    if (stateItem) {
      url.searchParams.set('state', stateItem.state);
    } else {
      url.searchParams.delete('state');
    }
    window.history.replaceState({}, '', url);
  };

  // Reactive Filter & Search Logic
  const filteredStates = useMemo(() => {
    return INDIAN_ART_DATA.filter((item) => {
      let matchesCategory = true;
      if (activeCategory === 'Top 5 Featured') {
        matchesCategory = !!item.isFeatured;
      } else if (activeCategory !== 'All') {
        matchesCategory = item.category === activeCategory;
      }

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.state.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.artForm.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.historicalContext.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  // Handler when clicking a card or marker
  const handleSelectState = (stateItem) => {
    setSelectedState(stateItem);
    setFocusKey((prev) => prev + 1);
    updateUrlParam(stateItem);

    const mapElement = document.getElementById('map-section');
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Handler to open detailed modal
  const handleOpenDetailModal = (stateItem) => {
    setDetailModalState(stateItem);
    updateUrlParam(stateItem);
  };

  // Handler to open Share Modal
  const handleOpenShareModal = (stateItem = null) => {
    setShareModalData(stateItem || detailModalState || selectedState);
    setShareModalOpen(true);
  };

  // Navigation click handler
  const handleNavigate = (sectionId) => {
    if (sectionId === 'share') {
      handleOpenShareModal(detailModalState || selectedState);
      return;
    }
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.getElementById(sectionId === 'map' ? 'map-section' : sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C221E] font-sans antialiased selection:bg-[#D4AF37] selection:text-[#2C221E]">
      
      {/* Header Bar */}
      <Header onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* Hero Banner Section */}
        <div id="hero">
          <HeroSection
            onExploreMap={() => handleNavigate('map')}
            onViewArtForms={() => handleNavigate('art-forms')}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Search & Filter Bar */}
          <SearchAndFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            totalCount={INDIAN_ART_DATA.length}
            filteredCount={filteredStates.length}
          />

          {/* MAIN FEATURE: SVG India Map */}
          <section id="map-section" className="scroll-mt-24 mb-16">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif-title text-[#2C221E]">
                  Interactive India Art Map
                </h2>
                <p className="text-xs text-[#6B5E57] mt-0.5">
                  Click any marker on the map to view regional art history popups & details
                </p>
              </div>

              <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                {selectedState && (
                  <div className="text-xs font-semibold text-[#B85D3A] bg-white px-3 py-1.5 rounded-lg border border-[#E8E1D7] shadow-xs">
                    Focused: <strong>{selectedState.state} ({selectedState.artForm})</strong>
                  </div>
                )}

                <button
                  onClick={() => handleOpenShareModal(selectedState)}
                  className="px-3 py-1.5 rounded-lg bg-[#2C221E] text-[#D4AF37] hover:bg-[#1E1715] font-semibold text-xs flex items-center space-x-1.5 shadow-xs border border-[#D4AF37]/50 transition-colors"
                  title="Share link to currently focused state on map"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Share View</span>
                </button>
              </div>
            </div>

            <SVGMap
              statesData={filteredStates}
              selectedState={selectedState}
              onSelectState={handleSelectState}
              onOpenDetailModal={handleOpenDetailModal}
            />
          </section>

          {/* Statistics Section */}
          <StatisticsSection />

          {/* 28 States Grid */}
          <StateGrid
            statesData={filteredStates}
            onSelectState={(stateItem) => {
              handleSelectState(stateItem);
              handleOpenDetailModal(stateItem);
            }}
          />

          {/* Timeline Section */}
          <TimelineSection />

          {/* About & Academic Section */}
          <AboutSection />

        </div>

      </main>

      {/* State Detail Panel / Modal */}
      {detailModalState && (
        <StateDetailModal
          stateData={detailModalState}
          onClose={() => {
            setDetailModalState(null);
            updateUrlParam(null);
          }}
          onFocusOnMap={(stateItem) => {
            handleSelectState(stateItem);
          }}
          onShare={(stateItem) => {
            handleOpenShareModal(stateItem);
          }}
        />
      )}

      {/* Shareable Link Modal */}
      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        stateData={shareModalData}
      />

      {/* Footer */}
      <Footer />

    </div>
  );
}
