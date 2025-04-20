import React from 'react';
import { MenuItem as MenuItemType } from '../types/menu';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const { name, description, price, priceName, accompaniments } = item;
  
  return (
    <div className="group menu-item p-6 rounded-lg transition-all duration-300 flex justify-between items-start">
      <div className="flex-grow pr-4">
        <h3 className="text-lg font-medium text-[#2C1810] relative inline-block">
          {name}
          <div className="absolute -bottom-1 left-0 right-0 h-px bg-[#BF9B30]/20 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></div>
        </h3>
        {description && (
          <p className="text-[#8B6B23] text-sm mt-2 italic font-medium ">{description}</p>  //edite colot
        )}
        {accompaniments && (
          <p className="text-[#8B6B23] text-sm mt-2 italic font-medium">
            + {accompaniments}
          </p>
        )}
      </div>
      <div className="text-right flex flex-col items-end">
        {price && (
          <div className="relative">
            <span className="text-xl font-bold text-[#BF9B30] relative z-10">
              {price}
              <span className="text-xs align-top ml-1">DH</span>
            </span>
            <div className="absolute -inset-2 bg-[#BF9B30]/5 rounded-full transform scale-0 transition-transform group-hover:scale-100"></div>
          </div>
        )}
        {priceName && (
          <span className="block text-sm text-[#2C1810] font-medium mt-2 bg-[#FFDC73]/10 px-2 py-0.5 rounded">
            {priceName}
          </span>
        )}
      </div>
    </div>
  );
};

export default MenuItem;

