import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  demoLink?: string;  // Made optional to fix the linter error
  githubLink: string;
  image: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubLink,
  image,
}: ProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      const element = textRef.current;
      if (element) {
        // Check if content height exceeds 3 lines (assuming line-height is roughly 1.5em)
        const isContentOverflowing = element.scrollHeight > element.clientHeight;
        setIsOverflowing(isContentOverflowing);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [description]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <div className="relative">
          <p 
            ref={textRef}
            className={`text-gray-600 dark:text-gray-300 mb-4 ${!isExpanded ? 'line-clamp-3' : ''}`}
            style={{ lineHeight: '1.5em' }}
          >
            {description}
          </p>
          {isOverflowing && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-900 dark:text-gray-100 flex items-center gap-1 hover:underline"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Read More <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <div className="flex justify-center w-full">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 dark:text-gray-100 underline hover:no-underline font-bold"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}