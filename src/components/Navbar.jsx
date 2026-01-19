import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for cleaner hamburger

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper for Active Link Styles
  const getLinkClasses = (path) => {
    const isActive = location.pathname === path;
    return `text-sm font-medium transition-all duration-300 hover:text-sky-400 ${
      isActive 
        ? 'text-sky-400 border-b-2 border-sky-400 pb-1' 
        : 'text-white/70'
    }`;
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full h-[70px] z-[1000] transition-all duration-300 flex items-center border-b ${
          scrolled || mobileMenuOpen 
            ? 'bg-[#050a14]/95 backdrop-blur-md border-white/10 shadow-lg' 
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="layout-container flex justify-between items-center h-full">
          
          {/* 1. LOGO */}
          <Link 
            to="/" 
            className="flex items-center gap-3 z-[1002]" 
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-black font-extrabold text-lg shadow-[0_0_15px_rgba(0,114,255,0.4)]">
              A
            </div>
            <span className="text-white font-bold text-lg uppercase font-['Orbitron']">
              Auribus Tech
            </span>
          </Link>

          {/* 2. DESKTOP NAV (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex gap-8">
              <Link to="/" className={getLinkClasses('/')}>Home</Link>
              <Link to="/services" className={getLinkClasses('/services')}>Services</Link>
              <Link to="/about" className={getLinkClasses('/about')}>About Us</Link>
            </nav>

            <Link 
              to="/contact" 
              className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-sky-400 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,114,255,0.3)] flex items-center"
            >
              Contact Us
            </Link>
          </div>

          {/* 3. MOBILE TOGGLE */}
          <button 
            className="lg:hidden text-white text-2xl z-[1002] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </header>

      {/* 4. MOBILE DRAWER */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-[#050a14] z-[1001] flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <Link to="/" className="text-2xl font-bold text-white hover:text-sky-400" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link to="/services" className="text-2xl font-bold text-white hover:text-sky-400" onClick={() => setMobileMenuOpen(false)}>Services</Link>
        <Link to="/about" className="text-2xl font-bold text-white hover:text-sky-400" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
        
        <div className="mt-4">
           <Link 
             to="/contact" 
             className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-lg"
             onClick={() => setMobileMenuOpen(false)}
           >
             Contact Us
           </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;