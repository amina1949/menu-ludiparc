import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MenuContainer from './components/MenuContainer';
import BackgroundPattern from './components/BackgroundPattern';
import { menuData } from './data/menuData';

function App() {
  const [activeSection, setActiveSection] = useState<string>(menuData.sections[0].id);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white/80 backdrop-blur-md">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-[#BF9B30] border-t-[#FFDC73] rounded-full animate-spin"></div>
          <p className="mt-4 text-xl font-medium text-[#2C1810]">Chargement du menu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <BackgroundPattern />
      
      <div className="relative py-16 px-4 mb-8 overflow-hidden moroccan-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-sm"></div>
        <div className="container mx-auto text-center relative">
          <div className="inline-block">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-4 relative">
              ludiparc
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 gold-gradient"></div>
            </h1>
          </div>
          <p className="text-lg text-[#2C1810]/80 max-w-2xl mx-auto mt-6">
            un espace polyvalent pour vos evénements
          </p>
        </div>
      </div>
      
      <Header 
        sections={menuData.sections} 
        activeSection={activeSection}
        setActiveSection={handleSectionChange}
      />
      
      <main className="relative">
        <MenuContainer 
          sections={menuData.sections}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </main>
      
      <footer className="bg-[#2C1810]/90 backdrop-blur-md text-white py-8 mt-16 border-t border-[#BF9B30]/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-medium mb-2 text-[#FFDC73]">{menuData.restaurantName}</p>
          <p className="text-sm opacity-80">Ouvert tous les jours • 8:00 - 22:00</p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="#" className="hover:text-[#FFDC73] transition-colors">
              Réserver une table
            </a>
            <span className="text-[#BF9B30]/30">|</span>
            <a href="#" className="hover:text-[#FFDC73] transition-colors">
              Contact
            </a>
            <span className="text-[#BF9B30]/30">|</span>
            <a href="#" className="hover:text-[#FFDC73] transition-colors">
              Voir l'emplacement
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;