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
      <nav className="bg-black/90 backdrop-blur-sm rounded-lg shadow-lg w-[calc(100%-2rem)] max-w-7xl mx-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1">
              <a href="#hero" className="text-white font-bold text-xl hover:text-gray-300 transition-colors">
                Priyanshu Kumar
              </a>
            </div>
            <div className="flex-1 flex justify-end items-center">
              <div className="hidden md:flex items-center space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white hover:text-black hover:bg-white px-2.5 py-1.5 rounded-md transition-all duration-200 whitespace-nowrap"
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