'use client';

import { motion, useInView, useAnimation, Variants, Transition } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

type Skill = {
  name: string;
  level: number;
  icon: string;
  color: string;
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Database' | 'Other';
};

export default function AnimatedSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [activeCategory, setActiveCategory] = useState('All');

  const skills: Skill[] = [
    { name: 'React', level: 90, icon: '⚛️', color: 'from-blue-500 to-cyan-500', category: 'Frontend' },
    { name: 'Next.js', level: 85, icon: '🚀', color: 'from-gray-700 to-gray-900', category: 'Frontend' },
    { name: 'TypeScript', level: 88, icon: '📘', color: 'from-blue-600 to-blue-800', category: 'Frontend' },
    { name: 'JavaScript', level: 90, icon: '📜', color: 'from-yellow-400 to-orange-500', category: 'Frontend' },
    { name: 'Node.js', level: 85, icon: '🟢', color: 'from-green-500 to-emerald-600', category: 'Backend' },
    { name: 'Express', level: 80, icon: '🚪', color: 'from-gray-400 to-gray-600', category: 'Backend' },
    { name: 'PostgreSQL', level: 78, icon: '🐘', color: 'from-blue-600 to-indigo-700', category: 'Database' },
    { name: 'MongoDB', level: 75, icon: '🍃', color: 'from-green-600 to-green-800', category: 'Database' },
    { name: 'AWS', level: 75, icon: '☁️', color: 'from-orange-400 to-red-500', category: 'DevOps' },
    { name: 'Docker', level: 78, icon: '🐳', color: 'from-blue-400 to-blue-600', category: 'DevOps' },
    { name: 'Git', level: 85, icon: '🔀', color: 'from-orange-600 to-red-700', category: 'Other' },
    { name: 'GraphQL', level: 75, icon: '📊', color: 'from-pink-500 to-purple-600', category: 'Backend' },
  ];

  const categories = ['All', ...new Set(skills.map(skill => skill.category))];
  
  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      } as Transition,
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: 'spring',
        stiffness: 300,
      } as Transition,
    },
  };

  const progressVariants: Variants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        ease: [0.6, 0.05, 0.1, 0.9] as const,
        delay: 0.3,
      },
    }),
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-5">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I&apos;m passionate about staying current with the latest technologies and best practices in web development.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <motion.div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              className="group relative h-full"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700/50 transition-all duration-300 group-hover:shadow-xl group-hover:border-transparent">
                <div className="relative">
                  {/* Skill icon with gradient background */}
                  <motion.div 
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <span className="drop-shadow-md">{skill.icon}</span>
                  </motion.div>
                  
                  {/* Skill name and level */}
                  <h3 className="text-center font-semibold text-gray-900 dark:text-white mb-2">
                    {skill.name}
                  </h3>
                  <div className="text-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {skill.category}
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-1">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      variants={progressVariants}
                      custom={skill.level}
                      initial="hidden"
                      animate="visible"
                    />
                  </div>
                  <div className="text-right text-xs font-medium text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </div>
                </div>
              </div>
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Legend */}
        <motion.div 
          className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>Hover over cards to see interactive effects • Click to view projects using these technologies</p>
        </motion.div>
      </div>
    </section>
  );
}
