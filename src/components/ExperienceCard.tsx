import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Building2 } from 'lucide-react';

interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  description?: string[]; // Made description optional
}

export default function ExperienceCard({
  company,
  position,
  duration,
  location,
  description = [] // Added default empty array
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-300 ${
        isHovered ? 'transform -translate-y-1 shadow-xl' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <Building2 className="w-6 h-6 mt-1 text-blue-600 dark:text-blue-400" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {position}
              </h3>
              <p className="text-lg text-blue-600 dark:text-blue-400">
                {company}
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {duration} | {location}
              </div>
            </div>
          </div>
          {description && description.length > 0 && (
            isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            )
          )}
        </div>
      </div>

      {description && description.length > 0 && (
        <div
          className={`mt-4 space-y-2 transition-all duration-300 overflow-hidden ${
            isExpanded ? 'max-h-96' : 'max-h-0'
          }`}
        >
          {description.map((item, index) => (
            <p
              key={index}
              className="text-gray-700 dark:text-gray-300 pl-6"
              style={{
                textIndent: '-0.8rem',
                paddingLeft: '2rem'
              }}
            >
              • {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}