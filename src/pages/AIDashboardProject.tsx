import React, { useState, useEffect } from 'react'; // Added useEffect to imports
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react'; // Removed ArrowLeft, Added Home icon
// Removed theme import

// Helper function for smooth scrolling
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    // Adjust offset based on potential fixed headers if any (navbar height etc.)
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

const AIDashboardProject: React.FC = () => {
  const [isTocOpen, setIsTocOpen] = useState(true); // Default to open

  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Note: Using useEffect hook for safer script handling in React
  React.useEffect(() => {
    const divElement = document.getElementById('viz1743903136103');
    if (divElement) {
      const vizElement = divElement.querySelector('object.tableauViz') as HTMLObjectElement | null;
      const scriptAlreadyAdded = divElement.querySelector('script[src*="viz_v1.js"]');

      if (vizElement && !scriptAlreadyAdded) {
         const setVizSize = () => {
            if (divElement && vizElement) {
                 const containerWidth = divElement.offsetWidth;
                 const effectiveWidth = Math.max(containerWidth, 300);
                 vizElement.style.width = '100%';
                 vizElement.style.height = (effectiveWidth * 0.75) + 'px';
                 vizElement.style.display = 'block';
            }
         };
         setVizSize();
         const scriptElement = document.createElement('script');
         scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
         scriptElement.async = true;
         scriptElement.onload = () => {
             console.log("Tableau JS API script loaded.");
             window.addEventListener('resize', setVizSize);
         };
         vizElement.parentNode?.insertBefore(scriptElement, vizElement);
         return () => {
             window.removeEventListener('resize', setVizSize);
         };
      } else if (vizElement && scriptAlreadyAdded) {
        const setVizSize = () => {
            if (divElement && vizElement) {
                 const containerWidth = divElement.offsetWidth;
                 const effectiveWidth = Math.max(containerWidth, 300);
                 vizElement.style.width = '100%';
                 vizElement.style.height = (effectiveWidth * 0.75) + 'px';
                 vizElement.style.display = 'block';
            }
         };
         setVizSize();
         window.addEventListener('resize', setVizSize);
         return () => window.removeEventListener('resize', setVizSize);
      }
    }
  }, []);

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'dashboard', title: 'Dashboard' },
    { id: 'business-value', title: 'Business Value' },
    { id: 'tools-methodology', title: 'Tools & Methodology' },
    { id: 'development-process', title: 'Development Process' },
    { id: 'features-functionality', title: 'Features & Functionality' },
    { id: 'key-insights', title: 'Key Insights' },
    { id: 'skills-demonstrated', title: 'Skills Demonstrated' },
    { id: 'conclusion', title: 'Conclusion & Next Steps' },
  ];

  return (
    // Use semantic page background and primary text color
    <div className="flex min-h-screen bg-page-bg dark:bg-page-bg-dark text-text-primary dark:text-text-primary-dark">
      {/* Collapsible Sidebar TOC */}
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
                      {section.title}
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
        {/* TOC Toggle Button */}
        <button
          onClick={() => setIsTocOpen(!isTocOpen)}
          className={`fixed top-4 z-20 p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out ${
            isTocOpen ? 'left-64 ml-2' : 'left-2' // Adjust position based on sidebar state
          }`}
          aria-label={isTocOpen ? 'Collapse Table of Contents' : 'Expand Table of Contents'}
        >
          {isTocOpen ? <ChevronLeft className="h-5 w-5 text-red-400" /> : <ChevronRight className="h-5 w-5 text-red-400" />}
        </button>

        {/* Page Content */}
        <main className="container mx-auto px-6 md:px-10 py-16">
           {/* Use semantic text color */}
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-text-primary dark:text-text-primary-dark">
            AI's Rise and Societal Impact: Interactive Data Visualization
          </h1>

          {/* Sections */}
          <div className="space-y-16"> {/* Add spacing between sections */}
             {/* Use semantic section background and text colors */}
            <section id="introduction" className="max-w-4xl mx-auto scroll-mt-24 bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold mb-4 border-b pb-2 dark:border-gray-700 text-text-primary dark:text-text-primary-dark">
                Project Introduction
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                This interactive Tableau dashboard explores the multifaceted impact of artificial intelligence on industries, employment patterns, and broader society. By visualizing comprehensive data on AI adoption trends, automation risks, and the evolving job market, this project presents a data-driven narrative of one of the most transformative technological shifts of our time.
              </p>
              <p className="text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                As a data analyst with a keen interest in emerging technologies, I created this visualization to help organizations, professionals, and policymakers understand the complex implications of AI proliferation. The dashboard transforms raw data into actionable insights, enabling users to make informed decisions about workforce planning, skill development, and strategic investments in an AI-driven economy.
              </p>
            </section>

            <section id="dashboard" className="scroll-mt-24">
               {/* Use semantic text color */}
              <h2 className="text-3xl font-semibold mb-6 text-center border-b pb-2 dark:border-gray-700 max-w-4xl mx-auto text-text-primary dark:text-text-primary-dark">
                Interactive Dashboard
              </h2>
              <div className="my-6 flex justify-center shadow-lg rounded-lg overflow-hidden bg-white dark:bg-gray-700 p-1 max-w-6xl mx-auto">
                <div className='tableauPlaceholder' id='viz1743903136103' style={{ position: 'relative', width: '100%' }}> {/* Let height be dynamic */}
                  <noscript>
                    <a href='#'><img alt='AI Societal Impact Dashboard - Story 1' src='https://public.tableau.com/static/images/FS/FSF3FG5JF/1_rss.png' style={{ border: 'none' }} /></a>
                  </noscript>
                  <object className='tableauViz' style={{ display: 'none' }}>
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='path' value='shared/FSF3FG5JF' />
                    <param name='toolbar' value='yes' />
                    <param name='static_image' value='https://public.tableau.com/static/images/FS/FSF3FG5JF/1.png' />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='tabs' value='no' />
                    <param name='showVizHome' value='no' />
                    <param name='device' value='desktop' />
                  </object>
                </div>
              </div>
            </section>

             {/* Use semantic section background and text colors */}
            <section id="business-value" className="max-w-4xl mx-auto scroll-mt-24 bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold mb-4 border-b pb-2 dark:border-gray-700 text-text-primary dark:text-text-primary-dark">
                Business Value
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                This dashboard delivers significant business value by providing decision-makers with critical intelligence on AI's impact across various domains:
              </p>
              {/* List of business values with theme classes */}
              <ul className="list-disc space-y-3 mb-4 text-lg pl-6 text-text-secondary dark:text-text-secondary-dark">
                <li><strong>Strategic Planning</strong>: Organizations can identify which sectors are experiencing the most rapid AI adoption, allowing for more informed competitive positioning and investment decisions.</li>
                <li><strong>Workforce Development</strong>: HR departments can anticipate automation risks across different roles, enabling proactive reskilling initiatives and talent acquisition strategies.</li>
                <li><strong>Market Intelligence</strong>: Investors and business leaders can track global investment patterns in AI technologies, identifying emerging opportunities and potential market disruptions.</li>
                <li><strong>Risk Management</strong>: The visualization of regulatory trends helps organizations anticipate compliance requirements and adjust their AI implementation strategies accordingly.</li>
                <li><strong>Public Perception Tracking</strong>: Marketing teams can better understand shifting consumer sentiment toward AI, informing product development and communication strategies.</li>
              </ul>
              <p className="text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                By consolidating these insights into an interactive interface, the dashboard empowers stakeholders to extract actionable intelligence that could drive millions in strategic value through optimized workforce planning, targeted investments, and risk mitigation.
              </p>
            </section>

             {/* Use semantic section background and text colors */}
            <section id="tools-methodology" className="max-w-4xl mx-auto scroll-mt-24 bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold mb-6 border-b pb-2 dark:border-gray-700 text-text-primary dark:text-text-primary-dark">
                Tools & Methodology
              </h2>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6"> {/* Adjusted gap */}
                <div>
                  <h3 className="text-2xl font-medium mb-3 text-text-primary dark:text-text-primary-dark">Technical Approach</h3>
                  {/* Final Check: list-disc (outside) and pl-6 */}
                  <ul className="list-disc space-y-2 text-lg pl-6 text-text-secondary dark:text-text-secondary-dark">
                    <li><strong>Tableau Desktop</strong>: Leveraged for its robust visualization capabilities and interactive filtering options</li>
                    <li><strong>Interactive Elements</strong>: Created dynamic parameters, filters, and drill-down capabilities to enable exploratory analysis</li>
                    <li><strong>Design Principles</strong>: Applied strategic color theory, information hierarchy, and accessibility considerations throughout</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-3 text-text-primary dark:text-text-primary-dark">Data Sources</h3>
                   <p className="mb-3 text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark"> {/* Adjusted mb */}
                     This project draws on authoritative data from multiple sources, including:
                   </p>
                   {/* Final Check: list-disc (outside) and pl-6 */}
                  <ul className="list-disc space-y-2 text-lg pl-6 text-text-secondary dark:text-text-secondary-dark">
                    <li>Data on AI job market trends from Kaggle datasets (Edwardan, 2024)</li>
                    <li>AI adoption metrics from Stanford's AI Index Report 2024</li>
                    <li>Tech industry workforce shifts documented by Ulrike Herold (2024)</li>
                    <li>Labor market projections from the World Economic Forum's Future of Jobs Report 2023</li>
                    <li>Economic impact analysis from leading research by Acemoglu & Restrepo (2019)</li>
                    <li>Workforce transition data from McKinsey Global Institute (2017)</li>
                    <li>Employment outlook projections from OECD (2019)</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                The data underwent rigorous cleaning, normalization, and validation before visualization to ensure accuracy and relevance.
              </p>
            </section>

             {/* Use semantic section background and text colors */}
            <section id="development-process" className="max-w-4xl mx-auto scroll-mt-24 bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold mb-4 border-b pb-2 dark:border-gray-700 text-text-primary dark:text-text-primary-dark">Development Process</h2>
              <h3 className="text-2xl font-medium mb-3 text-text-primary dark:text-text-primary-dark">Planning Phase</h3>
              <p className="mb-4 text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                The project began with extensive research to identify the most relevant aspects of AI's impact that would provide value to users. I created initial wireframes to map out the information architecture and user flow through the dashboard.
              </p>
              <h3 className="text-2xl font-medium mb-3 text-text-primary dark:text-text-primary-dark">Data Collection Challenges</h3>
              <p className="mb-4 text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                Collecting consistent data across regions proved challenging, particularly for AI adoption metrics. I addressed this by normalizing datasets and creating composite indices where appropriate, ensuring meaningful cross-regional comparisons.
              </p>
              <h3 className="text-2xl font-medium mb-3 text-text-primary dark:text-text-primary-dark">Iterative Design</h3>
              <p className="text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                The dashboard underwent multiple iterations based on user feedback. Early versions prioritized comprehensive data display, while later iterations focused on storytelling and user experience. I continuously refined filters and interactive elements to balance analytical depth with usability.
              </p>
            </section>

             {/* Use semantic section background and text colors */}
            <section id="features-functionality" className="max-w-4xl mx-auto scroll-mt-24 bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold mb-6 border-b pb-2 dark:border-gray-700 text-text-primary dark:text-text-primary-dark">Features & Functionality</h2> {/* Increased mb */}
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6"> {/* Adjusted gap */}
                <div>
                  <h3 className="text-2xl font-medium mb-3 text-text-primary dark:text-text-primary-dark">Interactive Capabilities</h3>
                   {/* Corrected: Removed list-inside, ensured list-disc and pl-6 */}
                  <ul className="list-disc space-y-2 text-lg pl-6 text-text-secondary dark:text-text-secondary-dark">
                    <li><strong>Global Filter Panel</strong>: Allows filtering by region, industry, time period, and technology type</li>
                    <li><strong>Drill-Down Architecture</strong>: Users can navigate from high-level trends to granular details about specific roles, regions, or technologies</li>
                    <li><strong>Custom Parameters</strong>: Dynamic adjustments for time horizons, risk thresholds, and investment categories</li>
                    <li><strong>Comparative Analysis</strong>: Side-by-side visualization of different regions, industries, or time periods</li>
                    <li><strong>Responsive Design</strong>: Optimized for both desktop analysis and tablet presentation scenarios</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-3 text-text-primary dark:text-text-primary-dark">Visual Components</h3>
                   {/* Corrected: Removed list-inside, ensured list-disc and pl-6 */}
                  <ul className="list-disc space-y-2 text-lg pl-6 text-text-secondary dark:text-text-secondary-dark">
                    <li>Heat maps displaying automation risk across job categories</li>
                    <li>Time-series visualizations of AI investment trends</li>
                    <li>Geographic distribution of AI job opportunities</li>
                    <li>Regulatory response timeline with policy impact assessment</li>
                    <li>Public sentiment tracking with demographic breakdown</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                Each component was designed to work both independently and as part of an integrated analytical narrative.
              </p>
            </section>

             {/* Use semantic section background and text colors */}
            <section id="key-insights" className="max-w-4xl mx-auto scroll-mt-24 bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold mb-4 border-b pb-2 dark:border-gray-700 text-text-primary dark:text-text-primary-dark">Key Insights</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-medium mb-2 text-text-primary dark:text-text-primary-dark">Global AI Investment Landscape</h3>
                  <p className="text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                    The United States maintains a commanding lead with $67.2 billion in private AI investments in 2023, representing nearly triple the investment of its closest competitor. This concentration of capital has significant implications for global AI innovation distribution and potential technology transfer barriers.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-2 text-text-primary dark:text-text-primary-dark">Automation Risk Distribution</h3>
                  <p className="text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                    Contrary to common assumptions, high-salary positions aren't immune to automation risk. The dashboard reveals that roles like Marketing Specialists (average salary: $106K) face significant disruption potential due to advancements in natural language processing and predictive analytics. This challenges conventional wisdom about which career paths offer long-term stability.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-2 text-text-primary dark:text-text-primary-dark">Industry Adoption Patterns</h3>
                  <p className="text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                    While the technology sector leads with 36% AI adoption, the financial services industry follows closely at 31%, demonstrating faster-than-expected integration. Healthcare shows the steepest adoption curve, suggesting potential market opportunities for specialized AI solutions in clinical and operational contexts.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-2 text-text-primary dark:text-text-primary-dark">Job Market Transformation</h3>
                  <p className="text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                    The dashboard visualizes how AI job postings have evolved beyond traditional computer science roles. By 2022, machine learning skills appeared in 5.7% of all job postings across diverse fields including marketing, finance, and healthcare, indicating the mainstreaming of AI competencies.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-2 text-text-primary dark:text-text-primary-dark">Geographic Distribution of Opportunity</h3>
                  <p className="text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                    The United States dominates the global AI job market with 55.1% of all job postings, followed by India at 14.96%. However, the visualization reveals emerging hubs in unexpected regions, with Southeast Asia showing the fastest growth rate in new AI positions (37% year-over-year).
                  </p>
                </div>
              </div>
            </section>

             {/* Use semantic section background and text colors */}
            <section id="skills-demonstrated" className="max-w-4xl mx-auto scroll-mt-24 bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold mb-6 border-b pb-2 dark:border-gray-700 text-text-primary dark:text-text-primary-dark">Skills Demonstrated</h2> {/* Increased mb */}
              {/* Final Check: list-disc (outside) and pl-6 */}
              <ul className="list-disc space-y-3 text-lg pl-6 text-text-secondary dark:text-text-secondary-dark">
                <li><strong>Advanced Tableau Techniques</strong>: Custom calculations, parameters, sets, and level-of-detail expressions</li>
                <li><strong>Data Transformation</strong>: Handling complex, multi-source datasets with varying granularity and structure</li>
                <li><strong>Visual Design</strong>: Strategic use of color, shape, and space to maximize information density without compromising clarity</li>
                <li><strong>Narrative Construction</strong>: Creating a cohesive analytical story that guides users through complex information</li>
                <li><strong>User Experience Design</strong>: Balancing sophisticated analytical capabilities with intuitive navigation and interaction</li>
              </ul>
            </section>

             {/* Use semantic section background and text colors */}
            <section id="conclusion" className="max-w-4xl mx-auto pb-12 scroll-mt-24 bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold mb-4 border-b pb-2 dark:border-gray-700 text-text-primary dark:text-text-primary-dark">Conclusion and Next Steps</h2>
              <p className="mb-4 text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                This interactive dashboard provides a comprehensive view of AI's impact across industries and geographies, serving as both an analytical tool and a strategic resource. The insights generated can help organizations navigate the rapidly evolving AI landscape with data-driven confidence.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                I invite you to explore this dashboard to uncover insights relevant to your organization or career path. The interactive elements allow you to filter and focus on the aspects most relevant to your context.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                I welcome discussions about the methodology, findings, or potential applications of this analysis. If you're interested in exploring how similar visualizations could provide value for your specific needs, please reach out through the contact information provided on my portfolio.
              </p>
              <p className="text-lg leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                This project demonstrates not only technical proficiency in data visualization but also my ability to transform complex datasets into strategic insights that drive business value.
              </p>
            </section>

            {/* New References Section */}
             {/* Use semantic section background and text colors */}
            <section id="references" className="max-w-4xl mx-auto pb-12 scroll-mt-24 bg-section-bg dark:bg-section-bg-dark rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold mb-6 border-b pb-2 dark:border-gray-700 text-text-primary dark:text-text-primary-dark">References</h2> {/* Increased mb */}
              {/* Final Check: list-disc (outside) and pl-6 */}
              <ul className="list-disc space-y-4 text-sm md:text-base text-text-secondary dark:text-text-secondary-dark pl-6">
                <li>
                  Edwardan, K. (2024). <i>AI-Powered Job Market Insights</i> [Dataset]. Kaggle. <a href="https://www.kaggle.com/datasets/edwardan/ai-powered-job-market-insights" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-words">https://www.kaggle.com/datasets/edwardan/ai-powered-job-market-insights</a>
                </li>
                <li>
                  Stanford Institute for Human-Centered Artificial Intelligence. (2024). <i>AI Index Report 2024</i>. <a href="https://hai.stanford.edu/ai-index/2024-ai-index-report" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-words">https://hai.stanford.edu/ai-index/2024-ai-index-report</a>
                </li>
                <li>
                  Ulrike Herold. (2024). <i>Tech Layoffs 2020–2024</i> [Dataset]. Kaggle. <a href="https://www.kaggle.com/datasets/ulrikeherold/tech-layoffs-2020-2024" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-words">https://www.kaggle.com/datasets/ulrikeherold/tech-layoffs-2020-2024</a>
                </li>
                <li>
                  World Economic Forum. (2023). <i>The Future of Jobs Report 2023</i>. <a href="https://www.weforum.org/reports/the-future-of-jobs-report-2023" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-words">https://www.weforum.org/reports/the-future-of-jobs-report-2023</a>
                </li>
                <li>
                  Acemoglu, D., & Restrepo, P. (2019). Artificial Intelligence, Automation, and Work. <i>NBER Working Paper No. 24196</i>. <a href="https://www.nber.org/papers/w24196" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-words">https://www.nber.org/papers/w24196</a>
                </li>
                <li>
                  McKinsey Global Institute. (2017). <i>Jobs Lost, Jobs Gained: Workforce Transitions in a Time of Automation</i>. <a href="https://www.mckinsey.com/featured-insights/future-of-work/jobs-lost-jobs-gained-what-the-future-of-work-will-mean-for-jobs-skills-and-wages" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-words">https://www.mckinsey.com/...</a>
                </li>
                <li>
                  OECD. (2019). <i>The Future of Work: OECD Employment Outlook 2019</i>. <a href="https://www.oecd.org/employment/Employment-Outlook-2019-Highlight-EN.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-words">https://www.oecd.org/...pdf</a>
                </li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AIDashboardProject;
