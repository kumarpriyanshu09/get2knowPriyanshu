import profilePhoto from './assets/IMG_8636.JPG'  // Update this import
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
import bitbotImage from './assets/BitBot.jpg'
import aiImpactImage from './assets/cover.png' // Added import for the new project image
import healthcareImage from './assets/healthcare.png'; // Updated import path for healthcare image
import jiraCertificate from './assets/Jira Fundamentals Badge.jpg' // adjust the extension if different
// Removed unused theme import

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
import { useEffect, useState } from 'react';
// Re-added useNavigate import
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'; 
import BitBotProject from './pages/BitBotProject';
import AIDashboardProject from './pages/AIDashboardProject'; // Import the new component
import HealthcareSalesProject from './pages/HealthcareSalesProject'; // Import the healthcare sales project page
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import Typewriter from './components/Typewriter';
import EmailModal from './components/EmailModal';

function MainContent() {
  const navigate = useNavigate(); // Re-added navigate
  const [isModalOpen, setIsModalOpen] = useState(false);
  const email = "kumarpriyanshu09@gmail.com";

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

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    window.open(`mailto:${email}`);
  };

  const heroContent = (
    // Removed background class from here
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
      <p className="text-xl text-text-secondary dark:text-text-secondary-dark mb-8">
        Crafting Actionable Intelligence from Complex Data
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href="#projects"
          className="inline-block bg-button-primary-bg text-button-primary-text dark:bg-button-primary-bg-dark dark:text-button-primary-text-dark px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          View My Work
        </a>
      </div>
    </div>
  );

  const aboutContent = (
    <div className="max-w-3xl mx-auto px-4 py-20 h-full overflow-y-auto text-center" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
      {/* Use text-accent for heading */}
      <h2 className="text-3xl font-bold mb-8 text-text-accent dark:text-text-accent-dark">About Me</h2>
      <p className="text-lg text-text-secondary dark:text-text-secondary-dark mb-8 text-center space-y-4" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
        Jay Baer once said, <b><i>"We're surrounded by data but starved for insights."</i></b> As a data professional, I use complex data to help you see what's coming and how to prepare for it.
      </p>
      <p className="text-lg text-text-secondary dark:text-text-secondary-dark mb-8 text-center space-y-4" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
        I've worked as a data analyst for over a year, helping teams deliver on goals. I've been using Python, SQL, Power BI, and Excel for more than four years. I recently added machine learning and AWS Cloud to my skill set.
      </p>
      <p className="text-lg text-text-secondary dark:text-text-secondary-dark mb-8 text-center space-y-4" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
        Not too long ago, I worked on a capstone project where I built a chatbot app to educate users about crypto. It used RAG (retrieval-augmented generation) to explain a platform's offerings. I also led a team to optimize crypto trading strategies so users could reduce risk.
      </p>
      <p className="text-lg text-text-secondary dark:text-text-secondary-dark mb-8 text-center space-y-4" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
        These days, I'm exploring generative AI and trying to make an impact in our changing world. Adaptability is one of my strengths. I've shown it by working across different industries, tackling a wide range of projects, and collaborating with diverse teams.
      </p>
      <p className="text-lg text-text-secondary dark:text-text-secondary-dark mb-8 text-center space-y-4" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
        My curiosity drives me. I often ask "how?" and "why?" because that's how I keep learning and adapting. I thrive on brainstorming scenarios, working with others, and doing my best in every situation. I'm always eager to learn, share, and grow.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="font-bold mb-2 text-text-primary dark:text-text-primary-dark">Education</h3>
          <p className="text-text-secondary dark:text-text-secondary-dark">
            M.S in Business Analytics and Project Management<br />
            University of Connecticut
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-2 text-text-primary dark:text-text-primary-dark">Experience</h3>
          <p className="text-text-secondary dark:text-text-secondary-dark">
            1+ Years<br />
            Data Analyst
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-2 text-text-primary dark:text-text-primary-dark">Projects</h3>
          <p className="text-text-secondary dark:text-text-secondary-dark">
            10+ Completed<br />
            Data Projects
          </p>
        </div>
      </div>
    </div>
  );

  return (
    // Apply primary text colors globally for this component
    <div className="min-h-screen text-text-primary dark:text-text-primary-dark transition-colors"> 
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
          {/* Use semantic section background */}
          <div className="bg-section-bg dark:bg-section-bg-dark rounded-lg"> 
            {aboutContent}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* Use semantic section background */}
      <div className="bg-section-bg dark:bg-section-bg-dark rounded-lg">
        {/* Use text-accent for heading */}
        <h2 className="text-3xl font-bold text-center mb-12 pt-12 text-text-accent dark:text-text-accent-dark">Featured Projects</h2> {/* Added padding top */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-8"> {/* Added padding */}
          {/* New AI Impact Dashboard Project Card - Removed wrapper div */}
          <ProjectCard
            title="AI's Rise and Societal Impact Dashboard"
            description="Developed an interactive Tableau dashboard that explores AI's impact on industries, employment, and society. This visualization presents comprehensive data on global AI investment trends, automation risks across professions, industry adoption patterns, and regulatory responses. Created to provide organizations, professionals, and policymakers with actionable insights for strategic planning, workforce development, and competitive positioning in an AI-driven economy."
                  technologies={["Tableau", "Data Visualization", "Dashboard Design", "Interactive Filtering", "Data Storytelling", "Analytical Reporting"]}
                  image={aiImpactImage}
                  // Added viewDetailsButton prop back, passing button directly
                  viewDetailsButton={
                    <button
                      onClick={() => navigate('/projects/ai-impact-dashboard')} // Navigate on button click
                      className="bg-button-primary-bg text-button-primary-text dark:bg-button-primary-bg-dark dark:text-button-primary-text-dark px-6 py-2 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center text-sm" // Removed mx-auto as parent div handles centering
                    >
                      View Dashboard →
                    </button>
                  }
                />

              {/* Healthcare Sales Project Card */}
              <ProjectCard
                title="Healthcare Sales: Targets vs Actuals"
                description="Developed an interactive Healthcare Sales Analysis dashboard in Excel to track performance against yearly targets. This project involved cleaning and analyzing revenue and covered lives data, calculating rolling totals, and comparing actuals versus targets. The dynamic dashboard features dropdown filters (Total, New Bookings, Renewals), key performance indicators (KPIs) with variance analysis, and charts that automatically update based on user selection. Conditional formatting was applied to KPIs to visually highlight performance (green for positive, red for negative variance)."
                technologies={["Excel", "Data Analysis", "Dashboard", "Healthcare", "KPIs", "Data Visualization", "Conditional Formatting", "Sales Analysis", "Business Intelligence", "SUMIFS", "Data Validation", "Reporting"]}
                image={healthcareImage} // Use the new imported image
                viewDetailsButton={
                  <button
                    onClick={() => navigate('/projects/healthcare-sales')}
                    className="bg-button-primary-bg text-button-primary-text dark:bg-button-primary-bg-dark dark:text-button-primary-text-dark px-6 py-2 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center text-sm"
                  >
                    View Dashboard →
                  </button>
                }
              />

              {/* Existing BitBot Project Card - Removed wrapper div */}
              <ProjectCard
                title="BitBot"
                description="Developed BitBot, an AI-driven crypto assistant using LLMs, RAG, and web scraping to provide real-time market insights and foundational knowledge. Built on Dify, it minimizes hallucinations, enhances user engagement, and reduces support costs. Designed a scalable workflow to help financial firms educate users and automate responses, improving accessibility and decision-making in cryptocurrency markets."
                  technologies={["LLM", "RAG", "Dify", "Docker", "Workflow", "Educational"]}
                  image={bitbotImage}
                   // Added viewDetailsButton prop back, passing button directly
                   viewDetailsButton={
                    <button
                      onClick={() => navigate('/projects/bitbot')} // Navigate on button click
                      className="bg-button-primary-bg text-button-primary-text dark:bg-button-primary-bg-dark dark:text-button-primary-text-dark px-6 py-2 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center text-sm" // Removed mx-auto as parent div handles centering
                    >
                      Read More →
                    </button>
                  }
                />
              {/* The closing div above was removed here */}
              <ProjectCard
                title="Stock Portfolio Optimization and Rebalancing Analysis"
                description="Engineered a data-driven stock portfolio optimization framework using Python, Modern Portfolio Theory (MPT), and Monte Carlo simulations to balance risk-return tradeoffs. Leveraged integer programming (Pyomo) to allocate $100k across 9 S&P 500 stocks (3 per sector) under constraints (min. 2% per stock, sector diversification). Simulated 1,000 market scenarios to quantify risk and compared rebalancing strategies (Buy-and-Hold vs. Daily/Weekly/Monthly), revealing 'Buy and Hold' as optimal for volatility-adjusted returns. Built visualizations (efficient frontier, density plots) to validate MPT allocations and presented findings in a reproducible Jupyter notebook, adhering to academic standards for code quality and concision."
                technologies={['Python', 'MPT optimization', 'Monte Carlo simulation', 'Pandas', 'NumPy', 'Matplotlib', 'SciPy', 'Statsmodels', 'Pyomo']}
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
                technologies={['Python', 'pandas', 'numpy', 'matplotlib', 'seaborn', 'scikit-learn', 'statsmodels', 'imbalanced-learn', 'xgboost']}
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
                technologies={['Python', 'Pandas', 'NLTK', 'TextBlob', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'statsmodel']}
                githubLink="https://github.com"
                image={yelp}
              />
            </div> {/* This closes the grid div */}
            <div className="flex justify-center pb-12 px-8"> {/* Added padding-bottom and horizontal padding */}
              <a
                href="https://github.com/kumarpriyanshu09"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-button-primary-bg text-button-primary-text dark:bg-button-primary-bg-dark dark:text-button-primary-text-dark px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
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
       {/* Use semantic section background */}
      <div className="bg-section-bg dark:bg-section-bg-dark rounded-lg">
        <div className="max-w-5xl mx-auto px-4 py-20">
          {/* Use text-accent for heading */}
          <h2 className="text-3xl font-bold text-center mb-12 text-text-accent dark:text-text-accent-dark">Skills & Expertise</h2>
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
       {/* Use semantic section background */}
      <div className="bg-section-bg dark:bg-section-bg-dark rounded-lg">
        {/* Use text-accent for heading */}
        <h2 className="text-3xl font-bold text-center mb-12 pt-12 text-text-accent dark:text-text-accent-dark">Experience</h2> {/* Added padding top */}
        <div className="max-w-3xl mx-auto space-y-6 p-8"> {/* Added padding */}
          <ExperienceCard
            company="Ananda"
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
                duration="June 2022 - July 2023"
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
       {/* Use semantic section background */}
      <div className="bg-section-bg dark:bg-section-bg-dark rounded-lg">
        <div className="max-w-3xl mx-auto px-4 py-20">
          {/* Use text-accent for heading */}
          <h2 className="text-3xl font-bold text-center mb-12 text-text-accent dark:text-text-accent-dark">Education</h2>
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
       {/* Use semantic section background */}
      <div className="bg-section-bg dark:bg-section-bg-dark rounded-lg">
        {/* Use text-accent for heading */}
        <h2 className="text-3xl font-bold text-center mb-12 pt-12 text-text-accent dark:text-text-accent-dark">Certifications</h2> {/* Added padding top */}
        <div className="max-w-3xl mx-auto p-8"> {/* Added padding */}
          <div className="flex justify-center flex-wrap gap-8 mb-16">
            {/* AWS Credly Badge */}
            {/* Apply consistent card styling */}
            <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <div
                data-iframe-width="200"
                data-iframe-height="200"
                    data-share-badge-id="cddfea78-db52-4b67-b518-d9f98e7f0d25"
                    data-share-badge-host="https://www.credly.com"
                  ></div>
                </div>

                {/* Jira Fundamentals Certificate */}
                {/* Apply consistent card styling */}
                <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <a
                    href="https://university.atlassian.com/student/award/gkWT6UZtv51p5yKWTTt83WeW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={jiraCertificate}
                      alt="Jira Fundamentals Assessment"
                      // Removed direct rounding/shadow from image, kept size and object-contain
                      className="w-[200px] h-[200px] object-contain"
                    />
                  </a>
                  <p className="mt-2 text-sm text-text-accent dark:text-text-accent-dark text-center">
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
       {/* Use semantic section background */}
      <div className="bg-section-bg dark:bg-section-bg-dark rounded-lg">
        <div className="max-w-3xl mx-auto px-4 py-20">
          {/* Use text-accent for heading */}
          <h2 className="text-3xl font-bold text-center mb-12 text-text-accent dark:text-text-accent-dark">Get in Touch</h2>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-lg text-text-secondary dark:text-text-secondary-dark mb-8">
              Feel free to reach out to me through the following platforms:
                </p>
                <div className="flex justify-center gap-8 mt-12">
                  <a
                    href="https://www.linkedin.com/in/kumarpriyanshu09/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary dark:text-text-secondary-dark hover:text-text-primary dark:hover:text-text-primary-dark"
                  >
                    <LinkedinIcon className="w-12 h-12" />
                  </a>
                  <a
                    href="https://github.com/kumarpriyanshu09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary dark:text-text-secondary-dark hover:text-text-primary dark:hover:text-text-primary-dark"
                  >
                    <Github className="w-12 h-12" />
                  </a>
                  <a
                    onClick={handleEmailClick}
                    className="text-text-secondary dark:text-text-secondary-dark hover:text-text-primary dark:hover:text-text-primary-dark cursor-pointer"
                  >
                    <Mail className="w-12 h-12" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Email Modal */}
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} email={email} />

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Priyanshu Kumar. All rights reserved.
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

function App() {
  return (
    // Use semantic page background
    <div className="min-h-screen bg-page-bg dark:bg-page-bg-dark"> 
      <BrowserRouter basename="/get2knowPriyanshu">
        <Routes>
          <Route path="/projects/bitbot" element={<BitBotProject />} />
          <Route path="/projects/ai-impact-dashboard" element={<AIDashboardProject />} /> {/* Add route for AI Dashboard */}
          <Route path="/projects/healthcare-sales" element={<HealthcareSalesProject />} /> {/* Add route for Healthcare Sales */}
          <Route path="/" element={<MainContent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
