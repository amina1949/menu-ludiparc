// Créateurs de cette application et propriétaires de BipCard _l'avenir vous attend avec les cartes NFC_
// info : insta :   getbipcard   , gmail : getbipcard@gmail.com      , wathssap : +21278399312 


import  { useState, useEffect } from 'react';
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
          <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-[#BF9B30] border-t-[#FFDC73] rounded-full animate-spin"></div>
          <p className="mt-4 text-lg sm:text-xl font-medium text-[#2C1810]">Chargement du menu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <BackgroundPattern />
      
      <div className="relative py-8 sm:py-16 px-4 mb-6 sm:mb-8 overflow-hidden moroccan-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-sm"></div>
        <div className="container mx-auto text-center relative">
          <div className="inline-block">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-amoresa font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8B6B23] via-[#FFDC73] to-[#BF9B30] mb-2 sm:mb-4 relative" style={{fontFamily: "'Amoresa Aged', cursive "}}>
            Ludiparc
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 gold-gradient"></div>
            </h1>
          </div>
          <p className="text-base sm:text-lg font-amoresa text-transparent bg-clip-text bg-gradient-to-r from-[#8B6B23] via-[#FFDC73] to-[#BF9B30] max-w-2xl mx-auto mt-4 sm:mt-6">
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
      
      <footer className="bg-[#2C1810]/90 backdrop-blur-md text-white py-6 sm:py-8 mt-10 sm:mt-16 border-t border-[#BF9B30]/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-base sm:text-lg font-medium mb-2 text-[#FFDC73]">{menuData.restaurantName}</p>
          <p className="text-xs sm:text-sm opacity-80">Ouvert tous les jours • 8:00 - 22:00</p>
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <a href="#" className="hover:text-[#FFDC73] transition-colors text-sm sm:text-base">
              Réserver une table
            </a>
            <span className="hidden sm:inline text-[#BF9B30]/30">|</span>
            <a href="https://www.ludiparc-meknes.com/contact/" className="hover:text-[#FFDC73] transition-colors text-sm sm:text-base">
              Contact
            </a>
            <span className="hidden sm:inline text-[#BF9B30]/30">|</span>
            <a href="https://g.co/kgs/9o5LnFF" className="hover:text-[#FFDC73] transition-colors text-sm sm:text-base">
              Voir l'emplacement
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;