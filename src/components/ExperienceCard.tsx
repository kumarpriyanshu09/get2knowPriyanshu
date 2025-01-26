import React, { useState } from 'react';
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
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 p-6">
      <div
        className="cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <Building2 className="w-6 h-6 mt-1 text-gray-700 dark:text-gray-300" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {position}
              </h3>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
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
            isExpanded ? 'max-h-[1000px]' : 'max-h-0'
          }`}
        >
          {description.map((item, index) => (
            <p
              key={index}
              className="text-gray-700 dark:text-gray-300 pl-8 py-2 bg-gray-50/50 dark:bg-gray-700/50 rounded-md text-sm sm:text-base relative"
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