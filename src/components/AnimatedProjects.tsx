'use client';

import { motion } from 'framer-motion';

export default function AnimatedProjects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent projects
          </p>
        </motion.div>
        
        {/* Blurred Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 blur-sm opacity-50 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: 'E-Commerce Platform',
              description: 'A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL.',
              tech: ['Next.js', 'JavaScript', 'Stripe', 'PostgreSQL'],
              image: '/api/placeholder/400/300'
            },
            {
              title: 'Task Management App',
              description: 'A collaborative task management application with real-time updates.',
              tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
              image: '/api/placeholder/400/300'
            },
            {
              title: 'Weather Dashboard',
              description: 'A beautiful weather dashboard with location-based forecasts.',
              tech: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
              image: '/api/placeholder/400/300'
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white text-lg font-semibold">Project {index + 1}</span>
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <motion.a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold text-sm"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Live Demo →
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 font-semibold text-sm"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    GitHub →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Coming Soon Overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white/90 dark:bg-black/90 backdrop-blur-xl rounded-2xl p-12 text-center shadow-2xl border border-gray-200/50 dark:border-gray-800/50 max-w-md mx-4"
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <span className="text-3xl">🚀</span>
            </motion.div>
            <motion.h3
              className="text-2xl font-bold text-black mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Coming Soon
            </motion.h3>
            <motion.p
              className="text-black mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Amazing projects are being crafted with passion. Stay tuned for some incredible work!
            </motion.p>
            <motion.div
              className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div
                className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              />
              <motion.div
                className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
