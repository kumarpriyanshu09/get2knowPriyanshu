import React from 'react';

const Navbar = () => {
  const navLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-[90] flex justify-center">
      <nav className="bg-black/100 backdrop-blur-sm rounded-lg shadow-lg w-[calc(100%-2rem)] max-w-7xl mx-4 border-2 border-gray-600/50 shadow-[0_0_15px_rgba(0,0,0,0.3)] ring-2 ring-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1">
              <a href="#hero" className="text-white font-bold text-xl hover:text-gray-300 transition-colors">
                Priyanshu Kumar
              </a>
            </div>
            <div className="flex-1 flex justify-end">
              <div className="hidden md:flex space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white hover:text-black hover:bg-white px-2.5 py-1.5 rounded-md transition-all duration-200 whitespace-nowrap hover:shadow-lg"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;