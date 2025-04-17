import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const navLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-[90] flex justify-center">
      {/* Use a dark gray background instead of pure black, keep backdrop blur */}
      <nav className="bg-gray-900/90 dark:bg-gray-950/90 backdrop-blur-sm rounded-lg shadow-lg w-[calc(100%-2rem)] max-w-7xl mx-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1">
              {/* Use specific navbar text color */}
              <a href="#hero" className="text-navbar-text font-bold text-xl hover:opacity-80 transition-opacity">
                Priyanshu Kumar
              </a>
            </div>
            <div className="flex-1 flex justify-end items-center">
              <div className="hidden md:flex items-center space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    // Use specific navbar text color and updated hover effect
                    className="text-navbar-text hover:text-text-primary hover:bg-antique-white px-2.5 py-1.5 rounded-md transition-all duration-200 whitespace-nowrap"
                  >
                    {link.name}
                  </a>
                ))}
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
