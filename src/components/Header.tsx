
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { MenuSection } from '../types/menu';

interface HeaderProps {
  sections: MenuSection[];
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ sections, activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-lg shadow-black/5 backdrop-blur-md py-2' : 'bg-transparent py-2 sm:py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-2 sm:mb-4">
          <Logo />
          <br/><br/>
          {/* Horizontal navigation for all screens */}
          <div className="mt-3 w-full overflow-x-auto">
            <div className="bg-[#2C1810]/90 backdrop-blur-sm rounded-full shadow-lg shadow-black/10 p-1 border border-[#BF9B30]/10 inline-flex mx-auto">
              <nav className="flex gap-1 overflow-x-auto hide-scrollbar py-1 px-2 rounded-full">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`whitespace-nowrap px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-[#BF9B30] to-[#FFDC73] text-[#2C1810] shadow-md' 
                        : 'hover:bg-[#BF9B30]/10 text-white'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full h-px gold-gradient opacity-20"></div>
    </header>
  );
};

export default Header;