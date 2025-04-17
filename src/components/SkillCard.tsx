import { LucideIcon } from 'lucide-react'; // Changed Icon to LucideIcon

interface SkillCardProps {
  category: string;
  skills: {
    name: string;
    level: number;
    icon: LucideIcon; // Changed Icon to LucideIcon
  }[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    // Use semantic card background and primary text color
    <div className="bg-card-bg dark:bg-card-bg-dark rounded-lg shadow-lg overflow-hidden p-6 text-text-primary dark:text-text-primary-dark transition-transform hover:scale-105 duration-200">
      <h3 className="text-xl font-bold mb-4">
        {category}
      </h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex items-center">
            <div className="flex items-center gap-2">
              {/* Use semantic text colors */}
              <skill.icon className="w-5 h-5 text-text-secondary dark:text-text-secondary-dark" /> 
              <span className="font-medium text-text-secondary dark:text-text-secondary-dark">{skill.name}</span>
            </div>
          </div>
          {/* Use semantic progress bar fill color */}
          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"> 
            <div
              className="h-full bg-progress-fill dark:bg-progress-fill-dark" // Use semantic color
              style={{ width: `${skill.level}%` }}
            />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
