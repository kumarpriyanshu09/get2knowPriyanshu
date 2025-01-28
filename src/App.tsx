import profilePhoto from './assets/IMG_8636.JPG'  // Update this import
import Priyanshu_Kumar_Resume from './assets/Priyanshu_Kumar_Resume.pdf'  
import ExperienceCard from './components/ExperienceCard'
import EducationCard from './components/EducationCard'
import TextRotator from './components/TextRotator'
import Navbar from './components/Navbar'
import Section from './components/Section';
import bloodGlucose from './assets/blood glucose.jpg'
import stock from './assets/stock.jpg'
import yelp from './assets/yelp.jpg'
import social from './assets/social.jpg'
import credit from './assets/credit.jpg'
import memoji from './assets/memoji.png'  // Make sure this import exists
import ScrollingSections from './components/ScrollingSections'
import jiraCertificate from './assets/Jira Fundamentals Badge.jpg' // adjust the extension if different

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
import SkillCard from './components/SkillCard';
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

  useEffect(() => {
    // Remove any existing Credly scripts first
    const existingScript = document.querySelector('script[src*="credly"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add the script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = "https://cdn.credly.com/assets/utilities/embed.js";
    
    // Append the script to the document
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.querySelector('script[src*="credly"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  const heroContent = (
    <div className="max-w-3xl mx-auto px-4">
      <div className="relative w-32 h-32 mx-auto mb-8">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-200 to-white shadow-[0_0_15px_rgba(0,0,0,0.2)] ring-2 ring-gray-100"></div>
        <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-gray-100 to-white shadow-inner"></div>
        <img
          src={profilePhoto}
          alt="Profile"
          className="relative w-full h-full rounded-full object-cover z-10"
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Enter, sans-serif' }}>
        <Typewriter text="Priyanshu Kumar" delay={150} className="inline-block" />
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-8 min-h-[2em] flex flex-col items-center justify-center gap-1">
        <span>Hey folks, I'm a</span>
        <TextRotator 
          texts={[
        'Data Analyst 📈',
        'Data Scientist 📊',
        'Data Engineer 🛠️',
        'Data Storyteller 📚'
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
      </div>
    </div>
  );

  const aboutContent = (
    <div className="max-w-3xl mx-auto px-4 py-20 h-full overflow-y-auto text-center" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center space-y-4" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
        Jay Baer once said, "We're surrounded by data but starved for insights." As a data professional, I use complex data to help you see what's coming and how to prepare for it.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center space-y-4" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
        I've worked as a data analyst for over a year, helping teams deliver on goals. I've been using Python, SQL, power bi, and Excel for more than four years. I recently added machine learning and AWS Cloud to my skill set.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center space-y-4" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
        Not too long ago, I worked on a capstone project where I built a chatbot app to educate users about crypto. It used RAG (retrieval-augmented generation) to explain a platform's offerings. I also led a team to optimize crypto trading strategies so users could reduce risk.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center space-y-4" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
        These days, I'm exploring generative AI and trying to make an impact in our changing world. Adaptability is one of my strengths. I've shown it by working across different industries, tackling a wide range of projects, and collaborating with diverse teams.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center space-y-4" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
        My curiosity drives me. I often ask "how?" and "why?" because that's how I keep learning and adapting. I thrive on brainstorming scenarios, working with others, and doing my best in every situation. I'm always eager to learn, share, and grow.
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
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Navbar />

      {/* Hero Section */}
      <Section id="hero" className="pt-32 md:pt-40 text-center">
        <div className="max-w-3xl mx-auto">
          {heroContent}
        </div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg">
            {aboutContent}
          </div>
        </div>
      </Section>

      {/* Story Section */}
      <Section id="story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900">
            <div className="max-w-3xl mx-auto px-4 py-20">
              <h2 className="text-3xl font-bold mb-12 text-center">The Story So Far</h2>
              
              <div className="space-y-12 text-lg text-gray-600 dark:text-gray-300 text-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    The Indomitable Spirit of Reason in Data
                  </h3>
                  <p className="mb-6">
                    In the crucible of lockdown, when the world stood still, Priyanshu discovered a realm where the mind could flourish undistracted: the world of data. It was not mere chance that led him here, but an unyielding curiosity and a reverence for the power of reason. In a society obsessed with the ephemeral, he found substance in statistics, in the raw, unadorned truth that numbers could reveal. There, amidst percentages and trends, he encountered a philosophy of clarity—a demonstration of how data not only informs decisions but shapes the destiny of enterprises, delivering tangible value to clients and collaborators.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    From Intellectual Pursuit to Mastery
                  </h3>
                  <p className="mb-6">
                    Priyanshu embarked on a rigorous intellectual journey, pursuing studies in statistics, Python, machine learning, and the mathematics of artificial intelligence. His approach was one of deliberate focus, seeking truth through disciplined inquiry and relentless questioning. Gathering wisdom from data professionals, he absorbed knowledge like a sponge, driven by conviction that the individual mind, equipped with reason, could unravel complexities. This mastery translates directly to clients through precise, data-driven strategies, insightful analysis, and innovative solutions that drive growth and efficiency.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Application in the Service of Purpose
                  </h3>
                  <p className="mb-6">
                    In the practical arena, Priyanshu applied his learning with the precision and clarity of one who understands that purpose is shaped by action. As a data analyst intern and later at Reno Prefab Ltd., he confronted challenges head-on, transforming confusion into clarity. He restructured SQL systems—saving countless hours and optimizing workflow—and collaborated with leaders to implement data-driven strategies that enhanced decision-making. His work elevates projects, delivering measurable improvements and insights that benefit teams, stakeholders, and end-users alike.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    A Bold Odyssey to New Horizons
                  </h3>
                  <p className="mb-6">
                    Unwilling to remain confined by circumstance, Priyanshu ventured to the United States, a land where the highest ideals of education and innovation converge. At the University of Connecticut School of Business, his pursuit of a Master's in Business Analytics and Project Management was not merely academic—it was an assertion of his belief in the power of the individual to forge new paths. Surrounded by diverse intellects and cutting-edge technology, he honed his mastery of tools and concepts, each new challenge met with the quiet confidence of someone who trusts his reasoning. This expertise becomes an asset to collaborators, offering fresh perspectives and strategic insights that lead to successful outcomes.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    The Future—A Canvas of Infinite Possibilities
                  </h3>
                  <p className="mb-6">
                    In a world increasingly shaped by artificial intelligence and uncharted data frontiers, Priyanshu stands as a beacon of rational inquiry and fearless innovation. His recent endeavors at Ananda, guiding teams in training custom language models and devising strategies for volatile crypto assets, are not merely projects but manifestations of a relentless spirit—one that sees obstacles as opportunities to exercise intellect and will. By transforming data into actionable insights, he provides clients with strategies that mitigate risks and optimize performance.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Driven by Curiosity and Collaboration
                  </h3>
                  <p className="mb-6">
                    Priyanshu isn't just passionate about data—he's passionate about people and the impact his work can have. He believes that the best breakthroughs come from collaboration, shared experiences, and the relentless pursuit of knowledge. For clients and collaborators, his unique blend of philosophical rigor and practical expertise means receiving insights that not only inform but also empower informed decisions and sustainable growth. If his journey and vision resonate with you, reach out through the contact section. For Priyanshu, the greatest reward lies in the shared journey of discovery and success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Stock Portfolio Optimization and Rebalancing Analysis"
                description="Engineered a data-driven stock portfolio optimization framework using Python, Modern Portfolio Theory (MPT), and Monte Carlo simulations to balance risk-return tradeoffs. Leveraged integer programming (Pyomo) to allocate $100k across 9 S&P 500 stocks (3 per sector) under constraints (min. 2% per stock, sector diversification). Simulated 1,000 market scenarios to quantify risk and compared rebalancing strategies (Buy-and-Hold vs. Daily/Weekly/Monthly), revealing 'Buy and Hold' as optimal for volatility-adjusted returns. Built visualizations (efficient frontier, density plots) to validate MPT allocations and presented findings in a reproducible Jupyter notebook, adhering to academic standards for code quality and concision."
                technologies={['Python', 'MPT optimization' , 'Monte Carlo simulation', 'Pandas' , 'NumPy', 'Matplotlib' , 'SciPy' , 'Statsmodels' , 'Pyomo']}
                githubLink="https://github.com/kumarpriyanshu09/stock-portfolio-optimization"
                image={stock}
              />
              <ProjectCard
                title="Forecasting Blood Glucose Level"
                description="Time series analysis project focused on forecasting blood glucose levels using ARIMA and SARIMA models."
                technologies={['SAS Studio', 'Time Series Analysis', 'ARIMA', 'SARIMA']}
                githubLink="https://github.com/kumarpriyanshu09/Forecasting-Blood-Glucose-Level"
                image={bloodGlucose}
              />
              <ProjectCard
                title="Credit Delinquency Prediction"
                description="This project develops a machine learning model to predict credit card payment delinquency, emphasizing transparency and feature importance."
                technologies={['Python', 'pandas', 'numpy', 'matplotlib' , 'seaborn' , 'scikit-learn' , 'statsmodels' , 'imbalanced-learn' , 'xgboost']}
                githubLink="https://github.com/kumarpriyanshu09/credit-delinquency-prediction"
                image={credit}
              />
              <ProjectCard
                title="Social Media Data Analysis"
                description="Data analysis project using SQL to extract insights from a social media platform, focusing on user behavior, content popularity, and trends."
                technologies={['SQL', 'ETL', 'MariaDB', 'ER Diagrams']}
                githubLink="https://github.com/kumarpriyanshu09/social-media-data-analysis"
                image={social}
              />
              <ProjectCard
                title="Yelp Restaurant Review Analysis"
                description="Text mining project that analyzes Yelp reviews to understand customer sentiment, identify key themes, and discover business insights."
                technologies={['Python' , 'Pandas' , 'NLTK' , 'TextBlob' , 'Scikit-learn' , 'Matplotlib' , 'Seaborn' , 'statsmodel']}
                githubLink="https://github.com"
                image={yelp}
              />
            </div>
            <div className="flex justify-center mt-12">
              <a
                href="https://github.com/kumarpriyanshu09"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                See More Projects on GitHub
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section - Centered */}
      <Section id="skills">
        <div className="w-[calc(100%-2rem)] max-w-7xl mx-auto px-4">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="max-w-5xl mx-auto px-4 py-20">
              <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
              <div className="grid md:grid-cols-2 gap-8">
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
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900">
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
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="max-w-3xl mx-auto px-4 py-20">
              <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <EducationCard
                  institution="University of Connecticut"
                  degree="M.S in Business Analytics and Project Management"
                  duration="August 2023 - May 2025"
                  location="Hartford, CT"
                  gpa={<span className="font-bold">3.76/4.0</span>}
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
                  gpa={<span className="font-bold">3.29/4.0</span>}
                  courses={[
                    "Data Analytics with Python",
                    "Machine Learning",
                    "Project Management",
                    "Optimization Techniques",
                    "Maths for Artificial Intelligence"
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Certifications Section */}
      <Section id="certifications">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center flex-wrap gap-8 mb-16">
                {/* AWS Credly Badge */}
                <div className="flex flex-col items-center min-h-[300px]">
                  <div 
                    data-iframe-width="200" 
                    data-iframe-height="200" 
                    data-share-badge-id="cddfea78-db52-4b67-b518-d9f98e7f0d25" 
                    data-share-badge-host="https://www.credly.com"
                  ></div>
                </div>

                {/* Jira Fundamentals Certificate */}
                <div className="flex flex-col items-center min-h-[300px]">
                  <a 
                    href="https://university.atlassian.com/student/award/gkWT6UZtv51p5yKWTTt83WeW" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:opacity-80 transition-opacity"
                  >
                    <img 
                      src={jiraCertificate} 
                      alt="Jira Fundamentals Assessment" 
                      className="w-[200px] h-[200px] object-contain rounded-lg shadow-md"
                    />
                  </a>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
                    Jira Fundamentals Assessment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="max-w-3xl mx-auto px-4 py-20">
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
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  >
                    <LinkedinIcon className="w-12 h-12" />
                  </a>
                  <a
                    href="https://github.com/kumarpriyanshu09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  >
                    <Github className="w-12 h-12" />
                  </a>
                  <a
                    href="mailto:kumarpriyanshu09@hmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  >
                    <Mail className="w-12 h-12" />
                  </a>
                </div>
              </div>
            </div>
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
              <a href="#about" className="hover:text-gray-400">About</a>
              <a href="#projects" className="hover:text-gray-400">Projects</a>
              <a href="#contact" className="hover:text-gray-400">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;