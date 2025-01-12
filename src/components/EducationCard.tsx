import React, { useState } from 'react';
import { ChevronDown, ChevronUp, GraduationCap } from 'lucide-react';

interface EducationCardProps {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  gpa: string;
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
            <GraduationCap className="w-6 h-6 mt-1 text-blue-600 dark:text-blue-400" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {institution}
              </h3>
              <p className="text-lg text-blue-600 dark:text-blue-400">
                {degree}
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {duration} | {location}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                GPA: {gpa}
              </div>
            </div>
          </div>
          {courses && courses.length > 0 && (
            isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            )
          )}
        </div>
      </div>

      {courses && courses.length > 0 && (
        <div
          className={`mt-4 transition-all duration-300 overflow-hidden ${
            isExpanded ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <h4 className="font-bold mb-2 text-gray-900 dark:text-white pl-10">Relevant Courses:</h4>
          <div className="space-y-2">
            {courses.map((course, index) => (
              <p
                key={index}
                className="text-gray-700 dark:text-gray-300 relative pl-6"
                style={{
                  textIndent: '-1rem',
                  paddingLeft: '2rem'
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