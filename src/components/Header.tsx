'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  scrollY: number;
}

const Header: React.FC<HeaderProps> = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Calculate header opacity based on scroll position
  const headerOpacity = scrollY > 50 ? 0.9 : 1;
  const headerBackground = scrollY > 50 ? 'rgba(0, 0, 0, 0.8)' : 'transparent';
  const headerBorder = scrollY > 50 ? 'border-b border-gray-800' : '';
  const headerBlur = scrollY > 50 ? 'backdrop-blur-md' : '';
  
  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 ${headerBorder} ${headerBlur}`}
      style={{ 
        backgroundColor: headerBackground,
        opacity: headerOpacity,
        transition: 'background-color 0.3s, opacity 0.3s'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-white text-2xl font-bold">
              Club Corners
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-white hover:text-blue-400 transition-colors">
              Washes
            </a>
            <a href="#memberships" className="text-white hover:text-blue-400 transition-colors">
              Memberships
            </a>
            <a href="#detailing" className="text-white hover:text-blue-400 transition-colors">
              Detailing
            </a>
            <a href="#location" className="text-white hover:text-blue-400 transition-colors">
              Location
            </a>
          </nav>
          
          <div className="hidden md:flex items-center">
            <a href="tel:7707517111" className="text-white hover:text-blue-400 transition-colors">
              (770) 751-7111
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4"
          >
            <nav className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#memberships" 
                className="text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Memberships
              </a>
              <a 
                href="#detailing" 
                className="text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Detailing
              </a>
              <a 
                href="#location" 
                className="text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Location
              </a>
              <a 
                href="tel:7707517111" 
                className="text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                (770) 751-7111
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
