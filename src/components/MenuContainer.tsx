import React from 'react';
import { MenuSection as MenuSectionType } from '../types/menu';
import MenuSection from './MenuSection';

interface MenuContainerProps {
  sections: MenuSectionType[];
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const MenuContainer: React.FC<MenuContainerProps> = ({ 
  sections, 
  activeSection, 
  setActiveSection 
}) => {
  return (
    <div className="container mx-auto px-4 py-6">
      {sections.map((section) => (
        <MenuSection
          key={section.id}
          section={section}
          isActive={activeSection === section.id}
          setActiveSection={setActiveSection}
        />
      ))}
    </div>
  );
};

export default MenuContainer;