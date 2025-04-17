import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp, ChevronLeft, ChevronRight, Home } from 'lucide-react';

// Helper function for smooth scrolling (consistent with other project pages)
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80; // Adjust as needed for fixed header height
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

const HealthcareSalesProject: React.FC = () => {
  const [isTocOpen, setIsTocOpen] = useState(true); // Default to open
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle scroll to show/hide scroll-to-top button
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

  // Define sections for the TOC based on the provided content
  const sections = [
    { id: 'overview', label: 'Project Overview' },
    { id: 'why-excel', label: 'Why Excel?' },
    { id: 'challenge', label: 'The Challenge' },
    { id: 'approach', label: 'My Approach' },
    { id: 'discoveries', label: 'Key Discoveries' },
    { id: 'implementation', label: 'Technical Implementation' },
    { id: 'value', label: 'Value Delivered' },
    { id: 'conclusion', label: 'Conclusion' },
  ];

  return (
    // Use semantic page background and primary text color
    <div className="flex min-h-screen bg-page-bg dark:bg-page-bg-dark text-text-primary dark:text-text-primary-dark">
      {/* Collapsible Sidebar TOC */}
      <aside
        className={`sticky top-0 h-screen transition-all duration-300 ease-in-out bg-section-bg dark:bg-section-bg-dark shadow-lg flex flex-col ${
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
              <h3 className="text-lg font-semibold text-center flex-grow">
                Table of Content
              </h3>
              <div className="w-5"></div> {/* Placeholder */}
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
          </>
        )}
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow relative">
        {/* TOC Toggle Button */}
        <button
          onClick={() => setIsTocOpen(!isTocOpen)}
          className={`fixed top-4 z-20 p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out ${
            isTocOpen ? 'left-64 ml-2' : 'left-2'
          }`}
          aria-label={isTocOpen ? 'Collapse Table of Contents' : 'Expand Table of Contents'}
        >
          {isTocOpen ? <ChevronLeft className="h-5 w-5 text-red-400" /> : <ChevronRight className="h-5 w-5 text-red-400" />}
        </button>

        {/* Page Content */}
        <main className="container mx-auto px-6 md:px-10 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-text-primary dark:text-text-primary-dark">
            Healthcare Sales Performance Dashboard
          </h1>

          {/* Sections */}
          <div className="space-y-16 max-w-4xl mx-auto">

            <section id="overview" className="scroll-mt-24 bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold mb-4 border-b pb-2 dark:border-gray-700 text-text-primary dark:text-text-primary-dark">
                Project Overview
              </h2>
              <p className="text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                In this project, I developed an interactive Excel dashboard to analyze a healthcare company's sales performance against yearly targets. The dashboard tracks two key metrics—revenue and covered lives (number of people using our services)—providing a comprehensive view of business performance through an intuitive interface.
              </p>
            </section>

            {/* Embedded Excel Dashboard Section */}
            <section id="dashboard-embed" className="scroll-mt-24 bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-4 md:p-8">
               <h2 className="text-3xl font-semibold mb-6 text-center border-b pb-2 dark:border-gray-700 text-text-primary dark:text-text-primary-dark">
                 Interactive Dashboard
               </h2>
               <div className="my-6 flex justify-center shadow-lg rounded-lg overflow-hidden bg-white dark:bg-gray-700 p-1 max-w-6xl mx-auto">
                 <iframe
                   src="https://1drv.ms/x/c/9b21f72f5ee56f92/IQRkx5vw3kkCT49mHefQ0d28AaPoQn8iMN8idk-I8eZNjqM?wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&resen=false&ed1JS=false" // Added parameters for better embedding
                   frameBorder="0"
                   scrolling="no"
                   title="Healthcare Sales Targets vs Actuals Embed"
                   className="w-full h-[80vh] rounded" // Full width, 80% viewport height
                 ></iframe>
               </div>
             </section>

            <section id="why-excel" className="scroll-mt-24 bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold mb-4 border-b pb-2 dark:border-gray-700 text-text-primary dark:text-text-primary-dark">
                Why Excel?
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                While there are many advanced data visualization tools available, I chose Excel for several strategic reasons:
              </p>
              <ul className="list-disc space-y-3 mb-4 text-lg pl-6 text-text-secondary dark:text-text-secondary-dark">
                <li><strong className="text-text-primary dark:text-text-primary-dark">Accessibility:</strong> Excel is widely used across organizations, making the dashboard immediately accessible to stakeholders without requiring specialized software.</li>
                <li><strong className="text-text-primary dark:text-text-primary-dark">Rapid Development:</strong> The built-in formulas and visualization capabilities allowed for quick implementation of a functional dashboard within tight timeframes.</li>
                <li><strong className="text-text-primary dark:text-text-primary-dark">Interactive Capabilities:</strong> Using data validation and conditional formatting, I created a responsive dashboard that updates dynamically as users filter the data.</li>
                <li><strong className="text-text-primary dark:text-text-primary-dark">Familiarity:</strong> Most business users are comfortable with Excel, reducing the learning curve and increasing adoption rates.</li>
              </ul>
            </section>

            <section id="challenge" className="scroll-mt-24 bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold mb-4 border-b pb-2 dark:border-gray-700 text-text-primary dark:text-text-primary-dark">
                The Challenge
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                The sales team needed to quickly assess how actual performance compared to targets across different booking types (new business vs. renewals). Making data-driven decisions required:
              </p>
              <ol className="list-decimal space-y-3 mb-4 text-lg pl-6 text-text-secondary dark:text-text-secondary-dark">
                <li>Tracking cumulative performance throughout the year</li>
                <li>Identifying variances between actual results and targets</li>
                <li>Visualizing trends to spot patterns and potential issues</li>
                <li>Creating a user-friendly interface for non-technical stakeholders</li>
              </ol>
            </section>

            <section id="approach" className="scroll-mt-24 bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold mb-4 border-b pb-2 dark:border-gray-700 text-text-primary dark:text-text-primary-dark">
                My Approach: Clarity Over Complexity
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                When designing the dashboard, I prioritized user experience by:
              </p>
              <ul className="list-disc space-y-3 mb-4 text-lg pl-6 text-text-secondary dark:text-text-secondary-dark">
                <li>Creating a simple filtering system that allows users to view data by total, new bookings, or renewals with a single dropdown</li>
                <li>Using conditional formatting to provide immediate visual cues (red for negative variances, green for positive)</li>
                <li>Implementing rolling totals to show cumulative performance rather than just monthly figures</li>
                <li>Displaying key metrics prominently with large, easy-to-read KPIs</li>
                <li>Maintaining consistent formatting throughout to improve readability</li>
              </ul>
            </section>

            <section id="discoveries" className="scroll-mt-24 bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold mb-4 border-b pb-2 dark:border-gray-700 text-text-primary dark:text-text-primary-dark">
                Key Discoveries
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                The dashboard revealed several important insights:
              </p>
              <ul className="list-disc space-y-3 mb-4 text-lg pl-6 text-text-secondary dark:text-text-secondary-dark">
                <li>Overall revenue fell short of yearly targets by 5.9%</li>
                <li>New bookings consistently underperformed throughout the year</li>
                <li>Renewal business showed stronger performance relative to targets</li>
                <li>Certain months showed significant variance that warranted further investigation</li>
              </ul>
            </section>

            <section id="implementation" className="scroll-mt-24 bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold mb-4 border-b pb-2 dark:border-gray-700 text-text-primary dark:text-text-primary-dark">
                Technical Implementation
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                The project demonstrates my proficiency in:
              </p>
              <ul className="list-disc space-y-3 mb-4 text-lg pl-6 text-text-secondary dark:text-text-secondary-dark">
                <li><strong className="text-text-primary dark:text-text-primary-dark">Excel formulas:</strong> Advanced functions including SUMIFS and nested IF statements</li>
                <li><strong className="text-text-primary dark:text-text-primary-dark">Data validation:</strong> Creating interactive filtering capabilities</li>
                <li><strong className="text-text-primary dark:text-text-primary-dark">Conditional formatting:</strong> Visual indicators for performance metrics</li>
                <li><strong className="text-text-primary dark:text-text-primary-dark">Dashboard design:</strong> Effective layout and visualization principles</li>
                <li><strong className="text-text-primary dark:text-text-primary-dark">Data analysis:</strong> Converting raw data into actionable business insights</li>
              </ul>
            </section>

            <section id="value" className="scroll-mt-24 bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold mb-4 border-b pb-2 dark:border-gray-700 text-text-primary dark:text-text-primary-dark">
                Value Delivered
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                This dashboard provided stakeholders with an immediate understanding of sales performance without having to manually analyze complex spreadsheets. By highlighting variances and trends, it enabled:
              </p>
              <ul className="list-disc space-y-3 mb-4 text-lg pl-6 text-text-secondary dark:text-text-secondary-dark">
                <li>Quicker identification of performance gaps</li>
                <li>More informed decision-making</li>
                <li>Easier communication of results to leadership</li>
                <li>A foundation for setting more realistic future targets</li>
              </ul>
            </section>

            <section id="conclusion" className="scroll-mt-24 bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold mb-4 border-b pb-2 dark:border-gray-700 text-text-primary dark:text-text-primary-dark">
                Conclusion
              </h2>
              <p className="text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                This project demonstrates my ability to transform raw business data into an intuitive, interactive tool that drives decision-making. By focusing on company metrics that matter and prioritizing clarity over complexity, I delivered a solution that provides immediate value to stakeholders without overwhelming them with unnecessary information.
              </p>
            </section>

          </div>

          {/* Scroll to Top Button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white p-3 rounded-full shadow-lg transition-colors duration-200 z-20"
              aria-label="Scroll to top"
            >
              <ChevronUp size={24} />
            </button>
          )}
        </main>
      </div>
    </div>
  );
};

export default HealthcareSalesProject;
