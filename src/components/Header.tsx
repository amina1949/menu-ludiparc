// import React, { useState, useEffect } from 'react';
// import Logo from './Logo';
// import { MenuSection } from '../types/menu';

// interface HeaderProps {
//   sections: MenuSection[];
//   activeSection: string;
//   setActiveSection: (id: string) => void;
// }

// const Header: React.FC<HeaderProps> = ({ sections, activeSection, setActiveSection }) => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header 
//       className={`sticky top-0 z-50 w-full transition-all duration-300 ${
//         isScrolled ? 'bg-white/95 shadow-lg shadow-black/5 backdrop-blur-md py-2' : 'bg-transparent py-4'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-center mb-4">
//           <Logo />
//           <div className="mt-4 md:mt-0 bg-[#2C1810]/90 backdrop-blur-sm rounded-full shadow-lg shadow-black/10 p-1 border border-[#BF9B30]/10">
//             <nav className="flex gap-1 overflow-x-auto hide-scrollbar py-1 rounded-full">
//               {sections.map((section) => (
//                 <button
//                   key={section.id}
//                   onClick={() => setActiveSection(section.id)}
//                   className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                     activeSection === section.id
//                       ? 'bg-gradient-to-r from-[#BF9B30] to-[#FFDC73] text-[#2C1810] shadow-md' 
//                       : 'hover:bg-[#BF9B30]/10 text-white'
//                   }`}
//                 >
//                   {section.title}
//                 </button>
//               ))}
//             </nav>
//           </div>
//         </div>
//       </div>
      
//       <div className="w-full h-px gold-gradient opacity-20"></div>
//     </header>
//   );
// };

// export default Header;




// Header.tsx - Modified for better mobile experience
// import React, { useState, useEffect } from 'react';
// import Logo from './Logo';
// import { MenuSection } from '../types/menu';

// interface HeaderProps {
//   sections: MenuSection[];
//   activeSection: string;
//   setActiveSection: (id: string) => void;
// }

// const Header: React.FC<HeaderProps> = ({ sections, activeSection, setActiveSection }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header 
//       className={`sticky top-0 z-50 w-full transition-all duration-300 ${
//         isScrolled ? 'bg-white/95 shadow-lg shadow-black/5 backdrop-blur-md py-2' : 'bg-transparent py-2 sm:py-4'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex flex-row justify-between items-center mb-2 sm:mb-4">
//           <Logo />
          
//           {/* Mobile menu button */}
//           <button 
//             className="md:hidden bg-[#2C1810]/90 text-[#FFDC73] p-2 rounded-full shadow-lg"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
//             </svg>
//           </button>
          
//           {/* Desktop navigation */}
//           <div className="hidden md:block bg-[#2C1810]/90 backdrop-blur-sm rounded-full shadow-lg shadow-black/10 p-1 border border-[#BF9B30]/10">
//             <nav className="flex gap-1 overflow-x-auto hide-scrollbar py-1 rounded-full">
//               {sections.map((section) => (
//                 <button
//                   key={section.id}
//                   onClick={() => setActiveSection(section.id)}
//                   className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                     activeSection === section.id
//                       ? 'bg-gradient-to-r from-[#BF9B30] to-[#FFDC73] text-[#2C1810] shadow-md' 
//                       : 'hover:bg-[#BF9B30]/10 text-white'
//                   }`}
//                 >
//                   {section.title}
//                 </button>
//               ))}
//             </nav>
//           </div>
//         </div>
        
//         {/* Mobile navigation */}
//         {mobileMenuOpen && (
//           <div className="md:hidden bg-[#2C1810]/95 backdrop-blur-md rounded-xl shadow-lg shadow-black/10 p-3 border border-[#BF9B30]/10 mt-2 mb-3 transition-all">
//             <nav className="flex flex-col gap-2">
//               {sections.map((section) => (
//                 <button
//                   key={section.id}
//                   onClick={() => {
//                     setActiveSection(section.id);
//                     setMobileMenuOpen(false);
//                   }}
//                   className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
//                     activeSection === section.id
//                       ? 'bg-gradient-to-r from-[#BF9B30] to-[#FFDC73] text-[#2C1810] shadow-md' 
//                       : 'hover:bg-[#BF9B30]/10 text-white'
//                   }`}
//                 >
//                   {section.title}
//                 </button>
//               ))}
//             </nav>
//           </div>
//         )}
//       </div>
      
//       <div className="w-full h-px gold-gradient opacity-20"></div>
//     </header>
//   );
// };

// export default Header;




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