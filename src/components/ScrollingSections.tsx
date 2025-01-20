import React, { useEffect, useState } from 'react';
import TextRotator from './TextRotator';
import Typewriter from './Typewriter';

interface ScrollingSectionsProps {
  children: React.ReactNode[];
}

const ScrollingSections: React.FC<ScrollingSectionsProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling) return;
      
      setIsScrolling(true);
      
      if (e.deltaY > 0 && activeSection < children.length - 1) {
        setActiveSection(prev => prev + 1);
      } else if (e.deltaY < 0 && activeSection > 0) {
        setActiveSection(prev => prev - 1);
      }
      
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000); // Debounce scrolling
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [activeSection, children.length, isScrolling]);

  return (
    <div className="h-screen overflow-hidden">
      <div 
        className="transition-transform duration-1000 ease-in-out h-screen"
        style={{ transform: `translateY(-${activeSection * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div className="h-screen overflow-auto">
            {child}
          </div>
        ))}
      </div>
      
      {/* Navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-2">
        {children.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeSection ? 'bg-blue-500 scale-125' : 'bg-gray-300'
            }`}
            onClick={() => setActiveSection(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollingSections;