import {
  BarChart3,
  Brain,
  Database,
  Github,
  LinkedinIcon,
  Mail,
  PenTool,
  Code,
} from 'lucide-react';
import { useEffect } from 'react';
import ProjectCard from './components/ProjectCard';
import Section from './components/Section';
import SkillCard from './components/SkillCard';
import ThemeToggle from './components/ThemeToggle';

function App() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (!href?.startsWith('#')) return;
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', handleScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <ThemeToggle />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" className="font-bold text-xl">
              John Doe
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
              <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400">Experience</a>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section id="hero" className="pt-32 md:pt-40 text-center">
        <div className="max-w-3xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=200&h=200"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
            Data Scientist & Machine Learning Engineer
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Transforming data into actionable insights and building intelligent solutions
          </p>
          <a
            href="#projects"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View My Work
          </a>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-white dark:bg-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            With over 5 years of experience in data science and machine learning,
            I specialize in developing AI-powered solutions that solve real-world
            problems. My expertise spans from statistical analysis to deep learning,
            with a focus on creating scalable and efficient solutions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-2">Education</h3>
              <p className="text-gray-600 dark:text-gray-300">
                M.S. in Data Science<br />
                Stanford University
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">
                5+ Years<br />
                Data Science
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Projects</h3>
              <p className="text-gray-600 dark:text-gray-300">
                50+ Completed<br />
                Data Projects
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Clients</h3>
              <p className="text-gray-600 dark:text-gray-300">
                20+ Happy<br />
                Clients Served
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="AI-Powered Customer Segmentation"
            description="Developed a machine learning model to segment customers based on their behavior and preferences."
            technologies={['Python', 'Scikit-learn', 'Pandas', 'Tableau']}
            demoLink="https://example.com"
            githubLink="https://github.com"
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
          />
          <ProjectCard
            title="Predictive Sales Analysis"
            description="Built a time series forecasting system to predict future sales and optimize inventory."
            technologies={['Python', 'TensorFlow', 'SQL', 'Power BI']}
            demoLink="https://example.com"
            githubLink="https://github.com"
            image="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800"
          />
          <ProjectCard
            title="Natural Language Processing Pipeline"
            description="Created an NLP pipeline for sentiment analysis and text classification."
            technologies={['Python', 'NLTK', 'Transformers', 'Flask']}
            demoLink="https://example.com"
            githubLink="https://github.com"
            image="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800"
          />
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="bg-white dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard
            category="Programming Languages"
            skills={[
              { name: 'Python', level: 95, icon: Code },
              { name: 'SQL', level: 90, icon: Database },
              { name: 'R', level: 85, icon: BarChart3 },
            ]}
          />
          <SkillCard
            category="Machine Learning"
            skills={[
              { name: 'Deep Learning', level: 85, icon: Brain },
              { name: 'NLP', level: 80, icon: PenTool },
              { name: 'Computer Vision', level: 75, icon: BarChart3 },
            ]}
          />
          <SkillCard
            category="Data Visualization"
            skills={[
              { name: 'Tableau', level: 90, icon: BarChart3 },
              { name: 'Power BI', level: 85, icon: BarChart3 },
              { name: 'D3.js', level: 75, icon: BarChart3 },
            ]}
          />
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
            <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0" />
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">Senior Data Scientist</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Tech Corp • 2020 - Present</p>
              <p className="text-gray-600 dark:text-gray-300">
                Led a team of data scientists in developing and deploying machine learning models.
                Improved customer retention by 25% through predictive analytics.
              </p>
            </div>
          </div>
          <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
            <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0" />
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">Data Scientist</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Data Analytics Inc • 2018 - 2020</p>
              <p className="text-gray-600 dark:text-gray-300">
                Developed and implemented machine learning models for customer segmentation
                and recommendation systems.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-white dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
          <div className="flex justify-center gap-8 mt-12">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:john@example.com"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#about" className="hover:text-blue-400">About</a>
              <a href="#projects" className="hover:text-blue-400">Projects</a>
              <a href="#contact" className="hover:text-blue-400">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;