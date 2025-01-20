import React, { useEffect, useState } from 'react';

interface HeroWithAboutProps {
  heroContent: React.ReactNode;
  aboutContent: React.ReactNode;
}

export default function HeroWithAbout({ heroContent, aboutContent }: HeroWithAboutProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(1, Math.max(0, scrollPosition / windowHeight));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-[200vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative h-full flex items-center">
          {/* Hero Section */}
          <div 
            className="w-full md:w-1/2 transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(${scrollProgress > 0 ? '-50%' : '0'})`
            }}
          >
            {heroContent}
          </div>

          {/* About Section */}
          <div 
            className="absolute top-0 right-0 w-full md:w-1/2 h-full transition-all duration-700 ease-out"
            style={{
              opacity: scrollProgress,
              transform: `translateX(${scrollProgress > 0 ? '0' : '100%'})`,
              pointerEvents: scrollProgress > 0 ? 'auto' : 'none'
            }}
          >
            {aboutContent}
          </div>
        </div>
      </div>
    </div>
  );
}
