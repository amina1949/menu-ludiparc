



import React from 'react';
import logo1 from '../IMG/logo1.png';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 relative">
      <div className="relative">
        <img 
          src={logo1} 
          className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-[#8B6B23] via-[#BF9B30] to-[#FFDC73] rounded-xl flex items-center justify-center transform shadow-lg"
        />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-[#2C1810] rounded-full border-2 border-[#FFDC73] shadow-xl"></div>
      </div>
      <div className="relative">
        <span className="text-lg sm:text-2xl font-bold text-[#FFDC73] drop-shadow-lg">
          La Carte du Ludiparc
        </span>
        <div className="absolute -bottom-1 left-0 right-0 h-px gold-gradient opacity-50"></div>
      </div>
    </div>
  );
};

export default Logo;
