import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronUp } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import bitbotImage from '../assets/BitBot.jpg';
import ragResponse from '../assets/BitBot/RAG Response.png';
import latestNews from '../assets/BitBot/Lates crypto news .png';
import preview from '../assets/BitBot/Preview.png';
import workflow from '../assets/BitBot/Workflow.png';

export default function BitBotProject() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 relative">
      {/* Site Index - Fixed Sidebar */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 hidden lg:block z-10">
        <nav className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-48">
          <h4 className="text-sm font-bold mb-4 text-gray-900 dark:text-white">Page Navigation</h4>
          <ul className="space-y-2 text-sm">
            {[
              { id: 'overview', label: 'Project Overview' },
              { id: 'business-problem', label: 'Business Problem' },
              { id: 'solution', label: 'Solution Approach' },
              { id: 'technology', label: 'Technology Stack' },
              { id: 'business-value', label: 'Business Value' },
              { id: 'future', label: 'Future Enhancements' },
              { id: 'conclusion', label: 'Conclusion' },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white w-full text-left"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 dark:bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-all z-20"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}

      <div className="container mx-auto px-4 py-8 lg:pl-64">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </button>

        {/* Project Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">BitBot - Smart Crypto Assistant</h1>
          <div className="relative group cursor-pointer mb-6">
            <img
              src={bitbotImage}
              alt="BitBot Project"
              className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-semibold">BitBot Interface Preview</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {['LLM', 'RAG', 'Dify', 'Docker', 'Workflow', 'Educational'].map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 bg-${tech.color}-100 dark:bg-${tech.color}-900 text-${tech.color}-800 dark:text-${tech.color}-100 rounded-full text-sm transition-transform hover:scale-105 cursor-default`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Project Content */}
        <div className="space-y-8 max-w-4xl mx-auto">
          <section id="overview" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h2>
            <p className="text-gray-700 dark:text-gray-300">
              BitBot is a chatbot designed to help users understand cryptocurrency in simple terms. The crypto market is complex and constantly evolving, making it difficult for new users to access reliable and easy-to-understand information. BitBot solves this problem by leveraging Large Language Models (LLMs) to provide structured responses while minimizing misinformation through controlled query handling.
            </p>
            <div className="flex justify-center mt-6">
              <img src={workflow} alt="BitBot Workflow" className="rounded-lg shadow-lg w-full transition-transform duration-300 group-hover:scale-[1.02]" />
            </div>
          </section>

          <section id="business-problem" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Business Problem</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Many users struggle to grasp cryptocurrency concepts due to the following reasons:</p>
            <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
              <li>Lack of accessible and reliable platforms for foundational crypto knowledge.</li>
              <li>Limited tools that provide real-time updates in an intuitive conversational format.</li>
              <li>High risk of misinformation due to AI hallucinations in non-specialized models.</li>
            </ol>
          </section>

          <section id="solution" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Solution Approach</h2>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Step 1: Identifying User Needs</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We started by brainstorming common pain points for users trying to understand the crypto market. Users need a reliable assistant that can:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4 mb-6">
              <li>Explain fundamental crypto concepts.</li>
              <li>Provide real-time market updates.</li>
              <li>Restrict responses to financial topics to prevent AI hallucinations.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Step 2: Workflow Design & Implementation</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              BitBot's approach includes multiple LLMs and an orchestrated workflow using Dify, an open-source LLM app development platform.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Chatbot Process:</h4>
              <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
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
                className="rounded-lg shadow-lg w-full transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-semibold">RAG Response Example</span>
              </div>
            </div>
          </section>

          <section id="technology" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technology Stack</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
              <li><span className="font-medium">Dify</span> for workflow orchestration and deployment</li>
              <li><span className="font-medium">Multiple LLM APIs</span> (Gemini 1.5 Pro and OpenAI) for response generation</li>
              <li><span className="font-medium">Web Scraping Module</span> for real-time market updates</li>
              <li><span className="font-medium">RAG</span> for knowledge-based responses</li>
            </ul>
            <div className="relative group cursor-pointer mt-6 overflow-hidden">
              <img
                src={latestNews}
                alt="Real Time Response"
                className="rounded-lg shadow-lg w-full transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Real-time Crypto News Updates</span>
              </div>
            </div>
          </section>

          <section id="business-value" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Business Value</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Education & User Engagement', desc: 'Financial companies can use BitBot to educate their users about cryptocurrency and investment opportunities.' },
                { title: '24/7 Availability', desc: 'Unlike human advisors, BitBot is always available, ensuring users get instant responses at any time.' },
                { title: 'Reduced Operational Costs', desc: 'By automating customer education, financial institutions can reduce the workload on customer support teams.' },
                { title: 'Minimized AI Hallucinations', desc: 'The chatbot is restricted to financial topics, ensuring accurate and relevant information is provided.' },
                { title: 'Easy Deployment & Maintenance', desc: 'BitBot can be quickly deployed with minimal upkeep, allowing companies to focus on product innovation.' },
                { title: 'Scalability', desc: 'The system is designed to be easily upgraded, allowing new financial data or services to be integrated seamlessly.' }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{item.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="future" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Future Enhancements</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4 mb-6">
              <li>Expand its knowledge base with specialized materials for enhanced accuracy</li>
              <li>Integrate a 7-day graphical trend visualization for crypto market analysis</li>
              <li>Enhance response personalization based on user behavior and preferences</li>
              <li>Implement Dify-powered evaluation for continuous improvement</li>
            </ul>
            <div className="flex justify-center">
              <img src={preview} alt="BitBot Use Cases" className="rounded-lg shadow-lg w-1/2" />
            </div>
          </section>

          <section id="conclusion" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
            <p className="text-gray-700 dark:text-gray-300">
              BitBot is a powerful AI-driven assistant tailored for cryptocurrency education and real-time market updates. With a structured workflow, multi-LLM integration, and strict domain restrictions, it ensures accurate, reliable, and user-friendly financial guidance. Whether for individuals learning about crypto or financial firms enhancing their user engagement, BitBot delivers value efficiently and effectively.
            </p>
          </section>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gray-900 dark:bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <ChevronUp size={24} />
          </button>
        )}
      </div>
    </div>
  );
}
