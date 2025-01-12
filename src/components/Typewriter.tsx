import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  delay = 100,
  className = "" 
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span className={className}>{currentText}</span>
  );
};

export default Typewriter;