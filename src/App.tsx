import profilePhoto from './assets/Priyanshu.jpg'  // replace yourphoto.jpg with your actual filename
import Priyanshu_Kumar_Resume from './assets/Priyanshu_Kumar_Resume.pdf'  
import ExperienceCard from './components/ExperienceCard'
import EducationCard from './components/EducationCard'
import TextRotator from './components/TextRotator'
import Navbar from './components/Navbar'
import memoji from './assets/memoji.png'  // Add this import at the top
import bloodGlucose from './assets/blood glucose.jpg'  // Add blood glucose image import
import stock from './assets/stock.jpg'  // Add stock image import
import yelp from './assets/yelp.jpg'  // Add yelp image import
import social from './assets/social.jpg'  // Add social media image import
import credit from './assets/credit.jpg'  // Add credit image import

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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <ThemeToggle />
      <Navbar />

      {/* Hero Section */}
      <Section id="hero" className="pt-32 md:pt-40 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-200 to-white shadow-[0_0_15px_rgba(0,0,0,0.2)] ring-2 ring-gray-100"></div>
            <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-gray-100 to-white shadow-inner"></div>
            <img
              src={memoji}
              alt="Profile"
              className="relative w-full h-full rounded-full object-cover z-10"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Enter, sans-serif' }}>
            <Typewriter 
              text="Priyanshu Kumar" 
              delay={150}
              className="inline-block"
            />
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 min-h-[2em] flex flex-col items-center justify-center gap-1">
            <span>Hey folks, I'm a</span>
            <TextRotator 
              texts={[
                'Data Analyst 📈',
                'Data Scientist 📊',
                'Data Engineer 🛠️',
                'Data Storyteller 📝',
              ]} 
              interval={2000}
            />
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">  
            Crafting Actionable Intelligence from Complex Data  
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors"
            >
              View My Work
            </a>
            <a
              href={Priyanshu_Kumar_Resume}
              download="Priyanshu Kumar Resume.pdf"
              className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-gray-50 dark:bg-gray-800">
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
      <Section id="projects" className="bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Stock Portfolio Optimization and Rebalancing Analysis"
            description="A financial modeling project combining Modern Portfolio Theory (MPT), integer programming, and Monte Carlo simulation to optimize stock investments and analyze rebalancing strategies."
            technologies={['Python', 'MPT optimization' , 'Monte Carlo simulation', 'Pandas' , 'NumPy', 'Matplotlib' , 'SciPy' , 'Statsmodels' , 'Pyomo']}
            githubLink="https://github.com/kumarpriyanshu09/stock-portfolio-optimization"
            image={stock} // Changed to use stock image
          />
          <ProjectCard
            title="Forecasting Blood Glucose Level"
            description="Time series analysis project focused on forecasting blood glucose levels using ARIMA and SARIMA models."
            technologies={['SAS Studio', 'Time Series Analysis', 'ARIMA', 'SARIMA']}
            demoLink="https://example.com"
            githubLink="https://github.com/kumarpriyanshu09/Forecasting-Blood-Glucose-Level"
            image={bloodGlucose}
          />
          <ProjectCard
            title="Credit Delinquency Prediction"
            description="This project develops a machine learning model to predict credit card payment delinquency, emphasizing transparency and feature importance."
            technologies={['Python', 'pandas', 'numpy', 'matplotlib' , 'seaborn' , 'scikit-learn' , 'statsmodels' , 'imbalanced-learn' , 'xgboost']}
            demoLink="https://example.com"
            githubLink="https://github.com/kumarpriyanshu09/credit-delinquency-prediction"
            image={credit}
          />
          <ProjectCard
            title="Social Media Data Analysis"
            description="Data analysis project using SQL to extract insights from a social media platform, focusing on user behavior, content popularity, and trends."
            technologies={['SQL', 'ETL', 'MariaDB', 'ER Diagrams']}
            demoLink="https://example.com"
            githubLink="https://github.com/kumarpriyanshu09/social-media-data-analysis"
            image={social}
          />
          <ProjectCard
            title="Yelp Restaurant Review Analysis"
            description="Text mining project that analyzes Yelp reviews to understand customer sentiment, identify key themes, and discover business insights."
            technologies={['Python' , 'Pandas' , 'NLTK' , 'TextBlob' , 'Scikit-learn' , 'Matplotlib' , 'Seaborn' , 'statsmodel']}
            demoLink="https://example.com"
            githubLink="https://github.com"
            image={yelp}
          />
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="bg-gray-50 dark:bg-gray-800">
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
      <Section id="experience" className="bg-white dark:bg-gray-900">
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
      <Section id="education" className="bg-gray-50 dark:bg-gray-800">
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

      {/* Contact Section */}
      <Section id="contact" className="bg-white dark:bg-gray-900">
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
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              <LinkedinIcon className="w-12 h-12" />
            </a>
            <a
              href="https://github.com/kumarpriyanshu09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              <Github className="w-12 h-12" />
            </a>
            <a
              href="mailto:kumarpriyanshu09@hmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              <Mail className="w-12 h-12" />
            </a>
          </div>
        </div>
      
      </Section>

      {/* Footer */}
      <footer className="bg-black/100 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">
              © {new Date().getFullYear()} Priyanshu Kumar. All rights reserved.
            </p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#about" className="hover:text-black hover:bg-white px-2.5 py-1.5 rounded-md transition-all duration-200">About</a>
              <a href="#projects" className="hover:text-black hover:bg-white px-2.5 py-1.5 rounded-md transition-all duration-200">Projects</a>
              <a href="#contact" className="hover:text-black hover:bg-white px-2.5 py-1.5 rounded-md transition-all duration-200">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;