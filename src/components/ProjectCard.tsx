import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  demoLink?: string;  // Made optional to fix the linter error
  githubLink?: string;
  image?: string; // Make image optional
  viewDetailsButton?: React.ReactNode;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubLink,
  image,
  viewDetailsButton,
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
    // Use semantic card background - Add flex flex-col
    <div className="bg-card-bg dark:bg-card-bg-dark rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 h-full flex flex-col">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      ) : (
        // Placeholder if no image is provided
        <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
          No Image
        </div>
      )}
      {/* Make padding container flex column and ensure it fills height */}
      <div className="p-6 flex flex-col flex-grow"> 
         {/* Use semantic text colors */}
        <h3 className="text-xl font-bold mb-2 text-text-primary dark:text-text-primary-dark">
          {title}
        </h3>

        {/* Tags: Allow wrapping, align left */}
        <div className="flex flex-wrap gap-1.5 mb-3 justify-start"> 
          {technologies.map((tech) => (
            <span
              key={tech}
              // Keep whitespace-nowrap to prevent breaks within a tag
              className="px-2 py-1 bg-tag-bg dark:bg-tag-bg-dark text-tag-text dark:text-tag-text-dark rounded-full text-sm whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description Area */}
        <div className="relative mb-4"> {/* Added margin bottom */}
          <p 
            ref={textRef}
            className={`text-text-secondary dark:text-text-secondary-dark ${!isExpanded ? 'line-clamp-3' : ''}`}
            style={{ lineHeight: '1.5em' }}
          >
            {description}
          </p>
          {isOverflowing && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              // Use accent color for Read More link
              className="text-text-accent dark:text-text-accent-dark flex items-center gap-1 hover:underline mt-1" 
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

        {/* Footer for Links/Buttons - Pushed to bottom */}
        <div className="mt-auto pt-4 flex justify-center items-center gap-4"> 
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              // Use accent color for GitHub link
              className="text-text-accent dark:text-text-accent-dark underline hover:no-underline font-bold text-sm" 
            >
              GitHub
            </a>
          )}
          {/* Render the button passed as a prop */}
          {viewDetailsButton} 
        </div>
      </div>
    </div>
  );
}
