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
    <div className="bg-black/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden p-6 text-white transition-transform hover:scale-105 duration-200">
      <h3 className="text-xl font-bold mb-4">
        {category}
      </h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <skill.icon className="w-5 h-5" />
                <span className="font-medium">{skill.name}</span>
              </div>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-white"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}