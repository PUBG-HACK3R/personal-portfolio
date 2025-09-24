'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { ArrowUp } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false);
    setActiveSection(sectionId);
  };

  const navItems = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👨‍💻' },
    { name: 'Projects', href: '#projects', icon: '🚀' },
    { name: 'Contact', href: '#contact', icon: '📧' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const progress = (scrolled / maxScroll) * 100;
          
          setScrollProgress(progress);
          setShowScrollTop(scrolled > 300);
          
          // Update active section based on scroll position (throttled)
          const sections = ['home', 'about', 'skills', 'projects', 'contact'];
          const currentSection = sections.find(section => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
          });
          
          if (currentSection && currentSection !== activeSection) {
            setActiveSection(currentSection);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50 dark:border-gray-700/50' 
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
          >
            <Link href="#home" className="flex items-center space-x-3">
              <motion.div 
                className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden"
                whileHover={{ rotate: 5 }}
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <span className="text-white font-bold text-xl tracking-tight">AK</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Adnan Khan
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium -mt-1">
                  Full Stack Developer
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2.5 rounded-xl transition-all duration-300 group flex items-center space-x-2.5 ${
                      isActive 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href.replace('#', ''));
                    }}
                  >
                    <span className={`text-sm transition-transform duration-300 group-hover:scale-110 ${
                      isActive ? 'opacity-100' : 'opacity-70'
                    }`}>
                      {item.icon}
                    </span>
                    <span className="font-semibold tracking-wide">{item.name}</span>
                    {isActive && (
                      <motion.div 
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        layoutId="activeNav"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
            
            {/* Divider */}
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-300 to-transparent dark:via-gray-600 mx-2"></div>
            
            {/* Theme Toggle */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ y: -2 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.div
              className="relative"
              whileTap={{ scale: 0.9 }}
            >
              <ThemeToggle />
            </motion.div>
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-all duration-300 group"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 h-6 flex flex-col items-center justify-center space-y-1.5">
                <motion.span 
                  className="block h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all"
                  initial={false}
                  animate={isMenuOpen ? { width: '100%', y: 6, rotate: '45deg' } : { width: '100%', y: 0, rotate: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                />
                <motion.span 
                  className="block h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all"
                  initial={false}
                  animate={isMenuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                />
                <motion.span 
                  className="block h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all"
                  initial={false}
                  animate={isMenuOpen ? { width: '100%', y: -6, rotate: '-45deg' } : { width: '80%', y: 0, rotate: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden my-2 border border-gray-100/20 dark:border-gray-700/30"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="px-3 py-2 space-y-1">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.1 + index * 0.05,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                    >
                      <Link
                        href={item.href}
                        className={`block px-5 py-3.5 rounded-xl transition-all duration-300 flex items-center space-x-3 ${
                          isActive
                            ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/20 text-blue-600 dark:text-blue-400 font-semibold'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.href.replace('#', ''));
                        }}
                      >
                        <span className={`text-lg transition-transform ${isActive ? 'scale-110' : ''}`}>
                          {item.icon}
                        </span>
                        <span className="text-base font-medium">{item.name}</span>
                        {isActive && (
                          <motion.span 
                            className="ml-auto w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
                
                <div className="px-5 py-3 text-xs text-gray-500 dark:text-gray-400 text-center">
                  <p>Adnan Khan {new Date().getFullYear()}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
        style={{ width: `${scrollProgress}%` }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.1 }}
      />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 100 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
