'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AnimatedSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: 'React', level: 90, icon: '⚛️', color: 'from-blue-500 to-cyan-500' },
    { name: 'Next.js', level: 85, icon: '🚀', color: 'from-gray-700 to-gray-900' },
    { name: 'JavaScript', level: 88, icon: '📜', color: 'from-yellow-400 to-orange-500' },
    { name: 'Node.js', level: 82, icon: '🟢', color: 'from-green-500 to-emerald-600' },
    { name: 'PostgreSQL', level: 75, icon: '🐘', color: 'from-blue-600 to-indigo-700' },
    { name: 'AWS', level: 70, icon: '☁️', color: 'from-orange-400 to-red-500' },
    { name: 'Docker', level: 72, icon: '🐳', color: 'from-blue-400 to-blue-600' },
    { name: 'TypeScript', level: 85, icon: '📘', color: 'from-blue-600 to-blue-800' },
  ];

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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of the technologies I work with
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="text-center group"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className={`relative w-28 h-28 mx-auto mb-4 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center shadow-xl overflow-hidden`}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.6 }}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                
                {/* Icon */}
                <div className="absolute top-2 right-2 text-lg opacity-80">
                  {skill.icon}
                </div>
                
                {/* Percentage */}
                <div className="relative z-10 text-center">
                  <span className="text-2xl font-bold text-white drop-shadow-lg">
                    {skill.level}
                  </span>
                  <span className="text-sm text-white/90 block">%</span>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {skill.name}
              </h3>
              
              {/* Enhanced progress bar */}
              <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
                <motion.div
                  className={`bg-gradient-to-r ${skill.color} h-3 rounded-full relative overflow-hidden`}
                  variants={progressVariants}
                  custom={skill.level}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse"></div>
                </motion.div>
                
                {/* Progress indicator */}
                <motion.div
                  className="absolute top-0 right-1 h-3 flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isInView ? 1 : 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <div className="w-1 h-1 bg-white rounded-full shadow-lg"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
