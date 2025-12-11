import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-deep-black/90 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="font-display font-bold text-2xl tracking-tighter cursor-pointer group" onClick={() => scrollToSection('hero')}>
          EUREKA<span className="text-acid-lime group-hover:animate-pulse">.</span>
        </div>
        
        <div className="hidden md:flex gap-10 items-center">
          {['Work', 'Services', 'AI-Strategy', 'Contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="relative text-xs font-bold uppercase tracking-[0.2em] hover:text-acid-lime transition-colors group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-acid-lime transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <button 
          onClick={() => scrollToSection('contact')}
          className="md:hidden text-acid-lime font-bold uppercase tracking-widest text-sm"
        >
          Menu
        </button>
      </div>
    </nav>
  );
};

export default Navbar;