import React, { useState, useEffect } from 'react';

const TextRotator = ({ texts = [], interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  // Find the longest text to set the minimum width
  const maxLength = Math.max(...texts.map(text => text.length));

  useEffect(() => {
    const rotateText = () => {
      setOpacity(0);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setOpacity(1);
      }, 500);
    };

    const intervalId = setInterval(rotateText, interval);
    return () => clearInterval(intervalId);
  }, [texts, interval]);

  return (
    <div className="inline-block bg-black px-4 py-2 rounded-md">
      <span 
        className="inline-block font-bold text-white text-center"
        style={{
          transition: 'opacity 0.5s ease-in-out',
          opacity: opacity,
          minWidth: `${maxLength}ch`,
        }}
      >
        {texts[currentIndex]}
      </span>
    </div>
  );
};

export default TextRotator;