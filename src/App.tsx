// At the top of App.tsx, add:
import profilePhoto from './assets/Priyanshu.jpg'  // replace yourphoto.jpg with your actual filename
import Priyanshu_Kumar_Resume from './assets/Priyanshu_Kumar_Resume.pdf'  // 
import ExperienceCard from './components/ExperienceCard'
import EducationCard from './components/EducationCard'

import {
  BarChart3,
  Brain,
  Database,
  Github,
  LinkedinIcon,
  Mail,
  PenTool,
  Code,
  Briefcase,
  Award,
} from 'lucide-react';
import { useEffect } from 'react';
import ProjectCard from './components/ProjectCard';
import Section from './components/Section';
import SkillCard from './components/SkillCard';
import ThemeToggle from './components/ThemeToggle';
import Typewriter from './components/Typewriter';

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
              Priyanshu Kumar
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
            src={profilePhoto}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
           <Typewriter 
              text="Priyanshu Kumar" 
              delay={150}
              className="inline-block"
            />
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
            Analytical storyteller
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">  
          Crafting Actionable Intelligence from Complex Data  
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href={Priyanshu_Kumar_Resume}
              download="Priyanshu_Kumar_Resume.pdf"
              className="inline-block bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-white dark:bg-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-left space-y-4">
           Welcome! I’m Priyanshu Kumar, a passionate data analyst and aspiring business strategist currently pursuing a Master’s in Business Analytics and Project Management at the University of Connecticut. My academic journey has equipped me with a strong foundation in data analysis and a keen eye for detail, enabling me to specialize in transforming raw datasets into actionable insights that drive informed business decisions.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-left space-y-4">
        I thrive at the intersection of analytical rigor and creative problem-solving. My expertise includes creating interactive dashboards using Power BI, debugging complex SQL queries, and applying advanced statistical techniques to uncover patterns that fuel strategic growth. Throughout my academic and professional experiences, I have led impactful projects, such as optimizing AI chatbot frameworks and delivering predictive analytics to enhance operational efficiency.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-left space-y-4">
           Values like collaboration, innovation, and precision shape my approach to work. I strongly believe in aligning data-driven insights with stakeholder goals to deliver results that truly matter. My mission is to leverage technology and data science to design sustainable, impactful solutions that empower organizations and individuals alike.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-left space-y-4">
           Beyond my work with data, I enjoy exploring nature, experimenting with new recipes, and engaging in thought-provoking discussions about technology and culture. These interests reflect my curiosity and drive to continuously learn and grow both personally and professionally.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-left space-y-4">
        Let’s connect and create something impactful together!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="font-bold mb-2">Education</h3>
          <p className="text-gray-600 dark:text-gray-300">
            M.S in Business Analytics and Project Management<br />
            University of Connecticut
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Experience</h3>
          <p className="text-gray-600 dark:text-gray-300">
            1+ Years<br />
            Data Analyst
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Projects</h3>
          <p className="text-gray-600 dark:text-gray-300">
            10+ Completed<br />
            Data Projects
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
            title="Stock Portfolio Optimization and Rebalancing Analysis"
            description="A financial modeling project combining Modern Portfolio Theory (MPT), integer programming, and Monte Carlo simulation to optimize stock investments and analyze rebalancing strategies."
            technologies={['Python', 'MPT optimization' , 'Monte Carlo simulation', 'Pandas' , 'NumPy', 'Matplotlib' , 'SciPy' , 'Statsmodels' , 'Pyomo']}
            githubLink="https://github.com/kumarpriyanshu09/stock-portfolio-optimization"
            image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOhvbY61xJhVqWkaTM8n7d2dnpBf8poOIAM7jwNRRist1OVRv7Od8mwty91K0537BSkCv04osqnyqLT5ZnGxliuBVbgBbq87-wuF_FVG7guUBrrvZumLgOJ4bIJ50f8oSwoQJGbIa2BKg/s800/Portfolio-Dashboard-Screenshot.png"
          />
          <ProjectCard
            title="Forecasting Blood Glucose Level"
            description="Time series analysis project focused on forecasting blood glucose levels using ARIMA and SARIMA models."
            technologies={['SAS Studio', 'Time Series Analysis', 'ARIMA', 'SARIMA']}
            demoLink="https://example.com"
            githubLink="https://github.com/kumarpriyanshu09/Forecasting-Blood-Glucose-Level"
            image="https://img.freepik.com/premium-vector/glucose-level-measurement_692379-388.jpg?w=2000"
          />
          <ProjectCard
            title="Credit Delinquency Prediction"
            description="This project develops a machine learning model to predict credit card payment delinquency, emphasizing transparency and feature importance."
            technologies={['Python', 'pandas', 'numpy', 'matplotlib' , 'seaborn' , 'scikit-learn' , 'statsmodels' , 'imbalanced-learn' , 'xgboost']}
            demoLink="https://example.com"
            githubLink="https://github.com/kumarpriyanshu09/credit-delinquency-prediction"
            image="https://cdn.dribbble.com/userupload/13724224/file/original-87985d803ddf448b1c32e13d88dc7da2.png?resize=2048x1536&vertical=center"
          />
          <ProjectCard
            title="Social Media Data Analysis"
            description="Data analysis project using SQL to extract insights from a social media platform, focusing on user behavior, content popularity, and trends."
            technologies={['SQL', 'ETL', 'MariaDB', 'ER Diagrams']}
            demoLink="https://example.com"
            githubLink="https://github.com/kumarpriyanshu09/social-media-data-analysis"
            image="https://cdn.dribbble.com/userupload/4177239/file/original-bb36e1ed1fff9e706d070e822af59b2e.png?resize=2048x1536&vertical=center"
          />
          <ProjectCard
            title="Yelp Restaurant Review Analysis"
            description="Text mining project that analyzes Yelp reviews to understand customer sentiment, identify key themes, and discover business insights."
            technologies={['Python' , 'Pandas' , 'NLTK' , 'TextBlob' , 'Scikit-learn' , 'Matplotlib' , 'Seaborn' , 'statsmodel']}
            demoLink="https://example.com"
            githubLink="https://github.com"
            image="https://s3.crackedcdn.com/phpimages/quickfix/7/9/5/157795.jpg?v=1"
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
            category="Project Management"
            skills={[
              { name: 'Agile(Scrum/Kanban)', level: 85, icon: Brain },
              { name: 'JIRA', level: 80, icon: PenTool },
            ]}
          />
          <SkillCard
            category="Data Visualization"
            skills={[
              { name: 'Excel', level: 90, icon: BarChart3 },
              { name: 'Power BI', level: 85, icon: BarChart3 },
              { name: 'Matplotlib', level: 75, icon: BarChart3 },
            ]}
          />
          <SkillCard
            category="Business Skills"
            skills={[
              { name: "Project Management", level: 85, icon: Briefcase },
              { name: "Strategic Planning", level: 80, icon: Brain },
              { name: "Team Leadership", level: 85, icon: Award }
            ]}
          />
        </div>
      </Section>

      {/* Experience Section */}
      {/* <Section id="experience">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
        <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0" />
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">Gen AI Engineer</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">ANANDA • August 2024 - December 2024</p>
          <ul 
            style={{
          textIndent: '-1em',
          paddingLeft: '1em',
            }}
            className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 hanging-indent">
          <li>Constructed RAG pipelines with Vicuna LLM, improving data extraction accuracy and chatbot clarity by 20%.</li>
          <li>Enhanced document embedding by integrating ChromaDB with LLMs, reducing data retrieval time by 15%.</li>
          <li>Optimized chatbot evaluations using BERT and ROUGE metrics, boosting semantic relevance of responses.</li>
          <li>Led data-driven team analysis of crypto strategies, revealing actionable insights for risk mitigation and trend forecasting.</li>
          <li>Collaborated with colleagues in LLM frameworks, fostering innovative data solutions and streamlining generative AI implementations.</li>
          </ul>
        </div>
          </div>
          <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
        <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0" />
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">Data Analyst</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">REINO PREFAB PRIVATE LTD.  • January 2023 - July 2023</p>
            <ul 
          style={{
            textIndent: '-1em',
            paddingLeft: '1em',
          }}
          className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 hanging-indent">
          <li>Revamped SQL data collection system, enhancing data accuracy by 100% and optimizing analysis efficiency.</li>
          <li>Applied R statistical techniques, driving strategic business decisions and optimizing operational efficiency.</li>
          <li>Built Power BI dashboards to visualize key metrics, supporting data-driven decision-making and improving marketing strategies.</li>
          <li>Refined data collection protocols, reducing entry errors by 15% and saving the team 10 hours weekly in data preprocessing.</li>
          <li>Conducted stakeholder briefings on data insights, fostering informed decision-making and stakeholder alignment.</li>
            </ul>
        </div>
          </div>
          <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
          <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0" />
          <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">Data Analyst Intern </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-2">Inator • August 2021 - November 2021</p>
        <ul 
          style={{
            textIndent: '-1em',
            paddingLeft: '1em',
          }}
          className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 hanging-indent">
          <li>Implemented Python-based player ranking algorithm, elevating model precision by 70% for team performance insights.</li>
          <li>Developed an interactive webpage using Flask and integrated K-means clustering, improving user engagement by 25%.</li>
          <li>Streamlined SQL data processes, slashing data errors by 60% and bolstering overall reliability for downstream analytical tasks.</li>
          </ul>
        </div>
          </div>
        </div>
        </Section> */}

      {/* Experience Section */}
<Section id="experience">
  <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
  <div className="max-w-3xl mx-auto space-y-6">
    <ExperienceCard
      company="ANANDA"
      position="Gen AI Engineer"
      duration="August 2024 - December 2024"
      location="Storrs, CT"
      description={[
        "Constructed RAG pipelines with Vicuna LLM, improving data extraction accuracy and chatbot clarity by 20%.",
        "Enhanced document embedding by integrating ChromaDB with LLMs, reducing data retrieval time by 15%.",
        "Optimized chatbot evaluations using BERT and ROUGE metrics, boosting semantic relevance of responses.",
        "Led data-driven team analysis of crypto strategies, revealing actionable insights for risk mitigation and trend forecasting.",
        "Collaborated with colleagues in LLM frameworks, fostering innovative data solutions and streamlining generative AI implementations."
      ]}
    />
    
    <ExperienceCard
      company="REINO PREFAB PRIVATE LTD."
      position="Data Analyst"
      duration="January 2023 - July 2023"
      location="Pune, India"
      description={[
        "Revamped SQL data collection system, enhancing data accuracy by 100% and optimizing analysis efficiency.",
        "Applied R statistical techniques, driving strategic business decisions and optimizing operational efficiency.",
        "Built Power BI dashboards to visualize key metrics, supporting data-driven decision-making and improving marketing strategies.",
        "Refined data collection protocols, reducing entry errors by 15% and saving the team 10 hours weekly in data preprocessing.",
        "Conducted stakeholder briefings on data insights, fostering informed decision-making and stakeholder alignment."
      ]}
    />
    
    <ExperienceCard
      company="Inator"
      position="Data Analyst Intern"
      duration="August 2021 - November 2021"
      location="Pune, India"
      description={[
        "Implemented Python-based player ranking algorithm, elevating model precision by 70% for team performance insights.",
        "Developed an interactive webpage using Flask and integrated K-means clustering, improving user engagement by 25%.",
        "Streamlined SQL data processes, slashing data errors by 60% and bolstering overall reliability for downstream analytical tasks."
      ]}
    />
  </div>
</Section>

{/* Education Section */}
<Section id="education" className="bg-gray-50 dark:bg-gray-900">
  <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
  <div className="max-w-3xl mx-auto space-y-6">
    <EducationCard
      institution="University of Connecticut"
      degree="M.S in Business Analytics and Project Management"
      duration="August 2023 - May 2025"
      location="Storrs, CT"
      gpa="3.76/4.0"
      courses={[
        "Data Mining and Business Intelligence",
        "Predictive Modeling",
        "Project Risk and Cost Management",
        "Advanced Business Analytics",
        "Statistics Business Analytics",
        "Business Decision Modeling",
        "Data Science using Python",
        "Big Data Analytics with Cloud",
        "Generative AI in Business",
        "Visual Analytics"
      ]}
    />
    
    <EducationCard
      institution="Maharashtra Institute of Technology"
      degree="Bachelor's in Electrical Engineering"
      duration="August 2018 - May 2022"
      location="Pune, India"
      gpa="3.29/4.0"
      courses={[
        "Data Analytics with Python",
        "Machine Learning",
        "Project Management",
        "Optimization Techniques",
        "Maths for Artificial Intelligence"
      ]}
    />
  </div>
</Section>

      {/* Education Section */}
      {/* <Section id="education" className="bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="relative pl-8 border-l-2 border-green-600 dark:border-green-400">
        <div className="absolute w-4 h-4 bg-green-600 dark:bg-green-400 rounded-full -left-[9px] top-0" />
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">University of Connecticut</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">M.S in Business Analytics and Project Management • August 2023 - May 2025</p>
          <p className="text-gray-600 dark:text-gray-300 mb-2">GPA: 3.76/4.0</p>
          <h4 className="font-bold mb-2">Relevant Courses:</h4>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>Data Mining and Business Intelligence</li>
            <li>Predictive Modeling</li>
            <li>Project Risk and Cost Management</li>
            <li>Advanced Business Analytics</li>
            <li>Statistics Business Analytics</li>
            <li>Business Decision Modeling</li>
            <li>Data Science using Python</li>
            <li>Big Data Analytics with Cloud</li>
            <li>Generative AI in Business</li>
            <li>Visual Analytics</li>
          </ul>
        </div>
          </div>
          <div className="relative pl-8 border-l-2 border-green-600 dark:border-green-400">
        <div className="absolute w-4 h-4 bg-green-600 dark:bg-green-400 rounded-full -left-[9px] top-0" />
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">Maharashtra Institute of Technology</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">Bachelor’s in Electrical Engineering • August 2018 - May 2022</p>
          <p className="text-gray-600 dark:text-gray-300 mb-2">GPA: 3.29/4.0</p>
          <h4 className="font-bold mb-2">Relevant Courses:</h4>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>Data Analytics with Python</li>
            <li>Machine Learning</li>
            <li>Project Management</li>
            <li>Optimization Techniques</li>
            <li>Maths for Artificial Intelligence</li>
          </ul>
        </div>
          </div>
        </div>
      </Section> */}
      

      {/* Contact Section */}
      <Section id="contact" className="bg-white dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Feel free to reach out to me through the following platforms:
          </p>
          <div className="flex justify-center gap-8 mt-12">
        <a
          href="https://www.linkedin.com/in/kumarpriyanshu09/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <LinkedinIcon className="w-12 h-12" />
        </a>
        <a
          href="https://github.com/kumarpriyanshu09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <Github className="w-12 h-12" />
        </a>
        <a
          href="mailto:kumarpriyanshu09@hmail.com"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <Mail className="w-12 h-12" />
        </a>
          </div>
        </div>
      
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Priyanshu Kumar. All rights reserved.
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