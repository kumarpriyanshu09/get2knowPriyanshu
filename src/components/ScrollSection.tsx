import React, { useEffect, useRef, useState } from 'react';

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  onScroll?: (progress: number) => void;
}

export default function ScrollSection({ children, className = '', onScroll }: ScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollRange = windowHeight * 0.5; // Trigger range
      
      let progress = 0;
      if (rect.top <= windowHeight * 0.5) {
        progress = Math.min(1, Math.max(0, (windowHeight * 0.5 - rect.top) / scrollRange));
      }

      setScrollProgress(progress);
      onScroll?.(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [onScroll]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
