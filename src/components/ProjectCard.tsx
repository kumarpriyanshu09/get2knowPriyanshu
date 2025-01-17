interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
  image: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  demoLink,
  githubLink,
  image,
}: ProjectProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1.5 bg-black text-white rounded-md text-sm whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <div className="flex justify-center w-full">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white font-bold hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}