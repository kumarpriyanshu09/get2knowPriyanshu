import React, { useEffect, useState } from 'react';

export default function ParallaxSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Hero Section - Always centered */}
      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center">
        <div className={`transition-transform duration-700 transform ${isVisible ? 'translate-x-[-25%]' : 'translate-x-0'}`}>
          {/* Hero content goes here */}
        </div>
      </div>

      {/* About Section - Slides in from right */}
      <div 
        className={`fixed top-0 right-0 w-1/2 h-screen transition-all duration-700 transform 
          ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
      >
        {/* About content goes here */}
      </div>

      {/* Spacer to allow scrolling */}
      <div className="h-[200vh]" />
    </div>
  );
}
