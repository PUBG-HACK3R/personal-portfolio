'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function AnimatedHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const floatingVariants = {
    floating: {
      y: [-8, 8, -8],
      rotate: [-2, 2, -2],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const roles = ["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver", "Tech Innovator"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * 0.01,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 30 }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          {/* Profile Image with Glassmorphism */}
          <motion.div className="mb-12" variants={itemVariants}>
            <motion.div
              className="relative w-56 h-56 mx-auto mb-8"
              variants={floatingVariants}
              animate="floating"
            >
              {/* Glassmorphism Frame */}
              <div className="absolute inset-0 bg-white/20 dark:bg-white/10 backdrop-blur-lg rounded-full border border-white/30 dark:border-white/20 shadow-2xl"></div>
              
              {/* Profile Image */}
              <motion.div
                className="relative w-48 h-48 mx-auto mt-4 rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/adnan-photo.jpg"
                  alt="Adnan Khan"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'flex';
                    }
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center hidden">
                  <span className="text-5xl font-bold text-white">AK</span>
                </div>
              </motion.div>

              {/* Status Indicator */}
              <motion.div
                className="absolute bottom-6 right-6 w-6 h-6 bg-green-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
          
          {/* Main Heading */}
          <motion.div className="mb-8" variants={itemVariants}>
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Adnan Khan
            </motion.h1>
            
            {/* Animated Role */}
            <motion.div className="h-16 flex items-center justify-center">
              <motion.p
                key={currentRole}
                className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentRole]}
              </motion.p>
            </motion.div>
          </motion.div>
          
          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Crafting digital experiences that blend{' '}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">innovation</span>,{' '}
            <span className="text-purple-600 dark:text-purple-400 font-semibold">creativity</span>, and{' '}
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">functionality</span>{' '}
            to bring ideas to life.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Explore My Work
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="/cv/Adnan_Khan_CV.pdf"
              download="Adnan_Khan_CV.pdf"
              className="group px-8 py-4 bg-white/30 dark:bg-white/10 backdrop-blur-lg border border-white/40 dark:border-white/20 text-gray-800 dark:text-white font-semibold rounded-2xl shadow-xl hover:bg-white/40 dark:hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </span>
            </motion.a>

            <motion.a
              href="#contact"
              className="px-8 py-4 border-2 border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-semibold rounded-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-gray-500 dark:border-gray-500 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-gray-600 dark:bg-gray-400 rounded-full mt-2"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
