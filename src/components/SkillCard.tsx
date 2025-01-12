import { Icon } from 'lucide-react';

interface SkillCardProps {
  category: string;
  skills: {
    name: string;
    level: number;
    icon: Icon;
  }[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        {category}
      </h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center gap-2 mb-2">
              <skill.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}