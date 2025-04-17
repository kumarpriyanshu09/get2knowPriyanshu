import React, { useState } from 'react';
import { ChevronDown, ChevronUp, GraduationCap } from 'lucide-react';

interface EducationCardProps {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  gpa: React.ReactNode; // Changed type from string to React.ReactNode
  courses: string[];
}

export default function EducationCard({
  institution,
  degree,
  duration,
  location,
  gpa,
  courses = []
}: EducationCardProps) {
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
            <GraduationCap className="w-6 h-6 mt-1 text-text-secondary dark:text-text-secondary-dark" />
            <div>
              <h3 className="text-xl font-bold text-text-primary dark:text-text-primary-dark">
                {institution}
              </h3>
              <p className="text-lg font-medium text-text-secondary dark:text-text-secondary-dark">
                {degree}
              </p>
              <div className="text-sm text-text-accent dark:text-text-accent-dark">
                {duration} | {location}
              </div>
              <div className="text-sm text-text-accent dark:text-text-accent-dark mt-1">
                GPA: {gpa}
              </div>
            </div>
          </div>
          {courses && courses.length > 0 && (
            isExpanded ? (
              <ChevronUp className="w-5 h-5 text-text-accent dark:text-text-accent-dark" />
            ) : (
              <ChevronDown className="w-5 h-5 text-text-accent dark:text-text-accent-dark" />
            )
          )}
        </div>
      </div>

      {courses && courses.length > 0 && (
        <div
          className={`mt-4 transition-all duration-300 overflow-hidden ${
            isExpanded ? 'max-h-[1000px] sm:max-h-96' : 'max-h-0'
          }`}
        >
           {/* Use semantic text colors and adjust background */}
          <h4 className="font-bold mb-2 text-text-primary dark:text-text-primary-dark">Relevant Courses:</h4>
          <div className="space-y-2">
            {courses.map((course) => (
              <p
                key={course}
                // Removed background and rounded classes, adjusted padding
                className="text-text-secondary dark:text-text-secondary-dark pl-4 py-1 text-sm sm:text-base" 
                style={{
                  textIndent: '-0.8rem', // Keep bullet indentation
                  paddingLeft: '1.5rem', // Adjust left padding for bullet
                  wordBreak: 'break-word'
                }}
              >
                • {course}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
