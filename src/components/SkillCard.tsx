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
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 p-6">
      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        {category}
      </h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <skill.icon className="w-5 h-5" />
                <span className="font-medium">{skill.name}</span>
              </div>
              <span className="text-sm">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-black"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}