import { useState } from 'react'; // Removed React import
import { ChevronDown, ChevronUp, Building2 } from 'lucide-react';

interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  description?: string[];
}

export default function ExperienceCard({
  company,
  position,
  duration,
  location,
  description = []
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    // Use semantic card background
    <div className="bg-card-bg dark:bg-card-bg-dark rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 p-6">
      <div
        className="cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            {/* Use semantic text colors */}
            <Building2 className="w-6 h-6 mt-1 text-text-secondary dark:text-text-secondary-dark" />
            <div>
              <h3 className="text-xl font-bold text-text-primary dark:text-text-primary-dark">
                {position}
              </h3>
              <p className="text-lg font-medium text-text-secondary dark:text-text-secondary-dark">
                {company}
              </p>
              <div className="text-sm text-text-accent dark:text-text-accent-dark">
                {duration} | {location}
              </div>
            </div>
          </div>
          {description && description.length > 0 && (
            isExpanded ? (
              <ChevronUp className="w-5 h-5 text-text-accent dark:text-text-accent-dark" />
            ) : (
              <ChevronDown className="w-5 h-5 text-text-accent dark:text-text-accent-dark" />
            )
          )}
        </div>
      </div>

      {description && description.length > 0 && (
        <div
          className={`mt-4 space-y-2 transition-all duration-300 overflow-hidden ${
            isExpanded ? 'max-h-[1000px]' : 'max-h-0'
          }`}
        >
          {description.map((item, index) => (
            <p
              key={index}
              // Use semantic text colors and Cosmic White bullet background
              className="text-text-secondary dark:text-text-secondary-dark pl-8 py-2 bg-bullet-bg dark:bg-bullet-bg-dark rounded-md text-sm sm:text-base relative" // bullet-bg is now Cosmic White
            >
              <span className="absolute left-3">•</span>
              <span className="block pl-2 whitespace-pre-wrap">
                {item}
              </span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
