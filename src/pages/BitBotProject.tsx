import { useState, useEffect } from 'react'; // Removed React import
import { ChevronUp, ChevronLeft, ChevronRight, Home } from 'lucide-react'; // Removed ArrowLeft, Added Home icon
import { Link } from 'react-router-dom'; // Use Link for Back button
import bitbotImage from '../assets/BitBot.jpg';
import ragResponse from '../assets/BitBot/RAG Response.png';
import latestNews from '../assets/BitBot/Lates crypto news .png';
import preview from '../assets/BitBot/Preview.png';
import workflow from '../assets/BitBot/Workflow.png';
// Removed theme import

// Helper function for smooth scrolling (same as in AIDashboardProject)
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80; // Adjust as needed
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export default function BitBotProject() {
  const [isTocOpen, setIsTocOpen] = useState(true); // State for sidebar
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Define sections for the TOC
  const sections = [
    { id: 'overview', label: 'Project Overview' },
    { id: 'business-problem', label: 'Business Problem' },
    { id: 'solution', label: 'Solution Approach' },
    { id: 'technology', label: 'Technology Stack' },
    { id: 'business-value', label: 'Business Value' },
    { id: 'future', label: 'Future Enhancements' },
    { id: 'conclusion', label: 'Conclusion' },
  ];

  // Define tech stack with colors (adjust colors as needed or remove if not used)
  const techStack = [
    { name: 'LLM', color: 'blue' },
    { name: 'RAG', color: 'green' },
    { name: 'Dify', color: 'purple' },
    { name: 'Docker', color: 'indigo' },
    { name: 'Workflow', color: 'pink' },
    { name: 'Educational', color: 'yellow' }
  ];


  return (
    // Use semantic page background
    <div className="flex min-h-screen bg-page-bg dark:bg-page-bg-dark text-text-primary dark:text-text-primary-dark">
      {/* Collapsible Sidebar TOC (similar to AIDashboardProject) */}
      <aside
        className={`sticky top-0 h-screen transition-all duration-300 ease-in-out bg-section-bg dark:bg-section-bg-dark shadow-lg flex flex-col ${ // Applied papaya theme
          isTocOpen ? 'w-64 p-4' : 'w-0 p-0 overflow-hidden'
        }`}
      >
        {isTocOpen && (
          <>
            {/* Back to Home Link at the top */}
            <div className="mb-4 pb-4 border-b dark:border-gray-600 flex justify-between items-center">
              <Link to="/" className="text-text-primary dark:text-text-primary-dark hover:text-red-400 dark:hover:text-red-400" title="Back to Home">
                <Home className="h-5 w-5" />
              </Link>
              <h3 className="text-lg font-semibold text-center flex-grow"> {/* Adjusted title positioning */}
                Table of Content
              </h3>
              {/* Placeholder for potential future icons or actions on the right */}
              <div className="w-5"></div>
            </div>
            <nav className="flex-grow overflow-y-auto">
              <ul className="space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className="w-full text-left px-3 py-1.5 rounded text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-150"
                    >
                      {section.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Removed the old Back to Home Link from the bottom */}
          </>
        )}
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow relative">
        {/* TOC Toggle Button (similar to AIDashboardProject) */}
        <button
          onClick={() => setIsTocOpen(!isTocOpen)}
          className={`fixed top-4 z-20 p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out ${
            isTocOpen ? 'left-64 ml-2' : 'left-2' // Adjust position based on sidebar state
          }`}
          aria-label={isTocOpen ? 'Collapse Navigation' : 'Expand Navigation'}
        >
          {isTocOpen ? <ChevronLeft className="h-5 w-5 text-red-400" /> : <ChevronRight className="h-5 w-5 text-red-400" />}
        </button>

        {/* Page Content */}
        <main className="container mx-auto px-6 md:px-10 py-16"> {/* Added padding */}

          {/* Project Header */}
           {/* Use semantic section background and text colors */}
          <div className="bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8 mb-12"> 
            <h1 className="text-4xl font-bold text-text-primary dark:text-text-primary-dark mb-4 text-center"> 
              BitBot - Smart Crypto Assistant
            </h1>
            <div className="relative group cursor-pointer mb-6 max-w-3xl mx-auto"> {/* Centered image */}
              <img
                src={bitbotImage}
                alt="BitBot Project"
                className="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]" // Adjusted height and object-fit
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-semibold">BitBot Interface Preview</span>
              </div>
            </div>
             {/* Tech Stack - Centered */}
             <div className="flex flex-wrap gap-2 justify-center mb-4">
               {techStack.map((tech) => (
                 <span
                   key={tech.name}
                   // Use semantic tag colors
                   className="px-3 py-1 bg-tag-bg dark:bg-tag-bg-dark text-tag-text dark:text-tag-text-dark rounded-full text-sm transition-transform hover:scale-105 cursor-default"
                 >
                   {tech.name}
                 </span>
               ))}
             </div>
          </div>

          {/* Project Content Sections */}
          <div className="space-y-16 max-w-4xl mx-auto"> {/* Added spacing and max-width */}
             {/* Use semantic section background and text colors */}
            <section id="overview" className="bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark mb-4 border-b pb-2 dark:border-gray-700">
                Project Overview
              </h2>
              <p className="text-text-secondary dark:text-text-secondary-dark leading-relaxed">
                BitBot is a chatbot designed to help users understand cryptocurrency in simple terms. The crypto market is complex and constantly evolving, making it difficult for new users to access reliable and easy-to-understand information. BitBot solves this problem by leveraging Large Language Models (LLMs) to provide structured responses while minimizing misinformation through controlled query handling.
              </p>
              <div className="flex justify-center mt-6">
                <img src={workflow} alt="BitBot Workflow" className="rounded-lg shadow-md w-full max-w-2xl transition-transform duration-300 hover:scale-[1.02]" />
              </div>
            </section>

             {/* Use semantic section background and text colors */}
            <section id="business-problem" className="bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark mb-4 border-b pb-2 dark:border-gray-700">
                Business Problem
              </h2>
              <p className="text-text-secondary dark:text-text-secondary-dark mb-4 leading-relaxed">Many users struggle to grasp cryptocurrency concepts due to the following reasons:</p>
              <ol className="list-decimal text-text-secondary dark:text-text-secondary-dark space-y-2 pl-6 leading-relaxed">
                <li>Lack of accessible and reliable platforms for foundational crypto knowledge.</li>
                <li>Limited tools that provide real-time updates in an intuitive conversational format.</li>
                <li>High risk of misinformation due to AI hallucinations in non-specialized models.</li>
              </ol>
            </section>

             {/* Use semantic section background and text colors */}
            <section id="solution" className="bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark mb-6 border-b pb-2 dark:border-gray-700">
                Solution Approach
              </h2>

              <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary-dark mb-3">Step 1: Identifying User Needs</h3>
              <p className="text-text-secondary dark:text-text-secondary-dark mb-4 leading-relaxed">
                We started by brainstorming common pain points for users trying to understand the crypto market. Users need a reliable assistant that can:
              </p>
              <ul className="list-disc text-text-secondary dark:text-text-secondary-dark space-y-2 pl-6 mb-6 leading-relaxed"> {/* Use pl-6 */}
                <li>Explain fundamental crypto concepts.</li>
                <li>Provide real-time market updates.</li>
                <li>Restrict responses to financial topics to prevent AI hallucinations.</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary-dark mb-3">Step 2: Workflow Design & Implementation</h3>
              <p className="text-text-secondary dark:text-text-secondary-dark mb-4 leading-relaxed">
                BitBot's approach includes multiple LLMs and an orchestrated workflow using Dify, an open-source LLM app development platform.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-text-primary dark:text-text-primary-dark mb-3">Chatbot Process:</h4>
                <ol className="list-decimal text-text-secondary dark:text-text-secondary-dark space-y-2 pl-6 leading-relaxed"> {/* Use pl-6 */}
                  <li><span className="font-medium">User Query Input</span> - The user asks a question.</li>
                  <li><span className="font-medium">Question Classification</span> - Query categorization into three classes.</li>
                  <li><span className="font-medium">Knowledge Retrieval or Web Scraping</span> - Data gathering based on query type.</li>
                  <li><span className="font-medium">Response Generation Using LLMs</span> - Processing and structuring the data.</li>
                  <li><span className="font-medium">Final Answer Display</span> - Delivering clear and informative response.</li>
                </ol>
              </div>
              <div className="relative group cursor-pointer mb-6 overflow-hidden">
                <img
                  src={ragResponse}
                  alt="BitBot RAG Response"
                  className="rounded-lg shadow-md w-full max-w-2xl mx-auto transition-transform duration-300 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">RAG Response Example</span>
                </div>
              </div>
            </section>

             {/* Use semantic section background and text colors */}
            <section id="technology" className="bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark mb-4 border-b pb-2 dark:border-gray-700">Technology Stack</h2>
              <ul className="list-disc text-text-secondary dark:text-text-secondary-dark space-y-2 pl-6 leading-relaxed"> {/* Use pl-6 */}
                <li><span className="font-medium">Dify</span> for workflow orchestration and deployment</li>
                <li><span className="font-medium">Multiple LLM APIs</span> (Gemini 1.5 Pro and OpenAI) for response generation</li>
                <li><span className="font-medium">Web Scraping Module</span> for real-time market updates</li>
                <li><span className="font-medium">RAG</span> for knowledge-based responses</li>
              </ul>
              <div className="relative group cursor-pointer mt-6 overflow-hidden">
                <img
                  src={latestNews}
                  alt="Real Time Response"
                  className="rounded-lg shadow-md w-full max-w-2xl mx-auto transition-transform duration-300 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Real-time Crypto News Updates</span>
                </div>
              </div>
            </section>

             {/* Use semantic section background and text colors */}
            <section id="business-value" className="bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark mb-4 border-b pb-2 dark:border-gray-700">Business Value</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Education & User Engagement', desc: 'Financial companies can use BitBot to educate their users about cryptocurrency and investment opportunities.' },
                  { title: '24/7 Availability', desc: 'Unlike human advisors, BitBot is always available, ensuring users get instant responses at any time.' },
                  { title: 'Reduced Operational Costs', desc: 'By automating customer education, financial institutions can reduce the workload on customer support teams.' },
                  { title: 'Minimized AI Hallucinations', desc: 'The chatbot is restricted to financial topics, ensuring accurate and relevant information is provided.' },
                  { title: 'Easy Deployment & Maintenance', desc: 'BitBot can be quickly deployed with minimal upkeep, allowing companies to focus on product innovation.' },
                  { title: 'Scalability', desc: 'The system is designed to be easily upgraded, allowing new financial data or services to be integrated seamlessly.' }
                ].map((item, index) => (
                  <div key={index} className="bg-card-bg dark:bg-card-bg-dark p-4 rounded-lg shadow"> {/* Use semantic card background */}
                    <h3 className="text-lg font-semibold text-text-primary dark:text-text-primary-dark mb-2">{item.title}</h3>
                    <p className="text-text-secondary dark:text-text-secondary-dark leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

             {/* Use semantic section background and text colors */}
            <section id="future" className="bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark mb-4 border-b pb-2 dark:border-gray-700">Future Enhancements</h2>
              <ul className="list-disc text-text-secondary dark:text-text-secondary-dark space-y-2 pl-6 mb-6 leading-relaxed"> {/* Use pl-6 */}
                <li>Expand its knowledge base with specialized materials for enhanced accuracy</li>
                <li>Integrate a 7-day graphical trend visualization for crypto market analysis</li>
                <li>Enhance response personalization based on user behavior and preferences</li>
                <li>Implement Dify-powered evaluation for continuous improvement</li>
              </ul>
              <div className="flex justify-center">
                <img src={preview} alt="BitBot Use Cases" className="rounded-lg shadow-md w-full max-w-md" /> {/* Adjusted size */}
              </div>
            </section>

             {/* Use semantic section background and text colors */}
            <section id="conclusion" className="bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark mb-4 border-b pb-2 dark:border-gray-700">Conclusion</h2>
              <p className="text-text-secondary dark:text-text-secondary-dark leading-relaxed">
                BitBot is a powerful AI-driven assistant tailored for cryptocurrency education and real-time market updates. With a structured workflow, multi-LLM integration, and strict domain restrictions, it ensures accurate, reliable, and user-friendly financial guidance. Whether for individuals learning about crypto or financial firms enhancing their user engagement, BitBot delivers value efficiently and effectively.
              </p>
            </section>
          </div>

          {/* Scroll to Top Button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
               // Use standard button styling for now, can be themed later if needed
              className="fixed bottom-8 right-8 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white p-3 rounded-full shadow-lg transition-colors duration-200 z-20"
            >
              <ChevronUp size={24} />
            </button>
          )}
        </main>
      </div>
    </div>
  );
}
