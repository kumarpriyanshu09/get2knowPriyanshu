import React, { useState, useEffect, useMemo } from 'react';

// Define the interface for the component's props
interface Props {
  texts: string[];
  interval?: number; // Optional interval prop
}

const TextRotator: React.FC<Props> = ({ texts = [], interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  // Memoize validTexts to prevent unnecessary effect runs
  const validTexts = useMemo(() => texts || [], [texts]);

  // Memoize maxLength calculation
  const maxLength = useMemo(() => {
    return validTexts.length > 0 ? Math.max(...validTexts.map(text => text.length)) : 0;
  }, [validTexts]);

  useEffect(() => {
    // Only run effect if there are texts to rotate
    if (validTexts.length === 0) return;

    const rotateText = () => {
      setOpacity(0);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % validTexts.length);
        setOpacity(1);
      }, 500); // Fade-out/fade-in duration
    };

    const intervalId = setInterval(rotateText, interval);
    return () => clearInterval(intervalId);
  }, [validTexts, interval]); // Depend on validTexts

  // Return null or a placeholder if there are no texts
  if (validTexts.length === 0) {
    return null; // Or return a placeholder span if needed
  }

  return (
    <span 
      // Use semantic classes for rotating text color
      className="inline-block font-bold text-text-rotating-accent dark:text-text-rotating-accent-dark text-center"
      style={{
        transition: 'opacity 0.5s ease-in-out',
        opacity: opacity,
        minWidth: `${maxLength}ch`,
      }}
    >
      {validTexts[currentIndex]}
    </span>
  );
};

export default TextRotator;
