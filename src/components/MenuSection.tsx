import React, { useRef, useEffect } from 'react';
import { MenuSection as MenuSectionType } from '../types/menu';
import MenuItem from './MenuItem';

interface MenuSectionProps {
  section: MenuSectionType;
  isActive: boolean;
  setActiveSection: (id: string) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ section, isActive, setActiveSection }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(section.id);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [section.id, setActiveSection]);

  return (
    <section
      id={section.id}
      ref={sectionRef}
      className={`py-8 scroll-mt-20 transition-all duration-300 ${
        isActive ? 'scale-100 opacity-100' : 'scale-98 opacity-90'
      }`}
    >
      <div className="relative mb-12 text-center">
        <div className="section-background inline-block px-12 py-4 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-white inline-block relative menu-title-decoration">
            {section.title}
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 gold-gradient"></div>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {section.items.map((item, index) => (
          <MenuItem key={`${section.id}-${index}`} item={item} />
        ))}
      </div>

      <div className="relative mt-12 mb-4">
        <div className="absolute left-0 right-0 h-px gold-gradient opacity-20"></div>
        <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-8 h-8 bg-[#2C1810] rounded-full border-2 border-[#BF9B30] transform rotate-45"></div>
      </div>
    </section>
  );
};

export default MenuSection;