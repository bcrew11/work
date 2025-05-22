'use client';

import React from 'react';
import { motion, useScroll } from 'framer-motion';

interface HeroProps {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

const Hero: React.FC<HeroProps> = ({ scrollYProgress }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(/images/hero-bg.jpg)',
          filter: 'brightness(0.6)'
        }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"
        style={{
          opacity: scrollYProgress
        }}
      />
      
      <div className="container mx-auto px-4 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Not Just Clean. Club Corners Clean.
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Discover the difference in professional care and attention to detail in Alpharetta, GA.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="#services" 
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Explore Services
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a href="#services" className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">Scroll Down</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 animate-bounce" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
