'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Filter, Calendar, Users, Award } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'Web App' | 'Mobile App' | 'API' | 'Tool' | 'Game';
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  completedDate: string;
  teamSize: number;
  status: 'Completed' | 'In Progress' | 'Planned';
}

export default function AnimatedProjects() {
  const [activeFilter, setActiveFilter] = useState('All');
  // const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern payment integration and inventory management.',
      longDescription: 'Built a comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and admin dashboard. Implemented responsive design and optimized for performance.',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS', 'Prisma'],
      category: 'Web App',
      image: '/api/placeholder/600/400',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      featured: true,
      completedDate: '2024-01',
      teamSize: 1,
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates and team collaboration features.',
      longDescription: 'Developed a comprehensive task management system with real-time collaboration, drag-and-drop kanban boards, team chat, file sharing, and progress tracking. Features include role-based permissions and detailed analytics.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'JWT'],
      category: 'Web App',
      image: '/api/placeholder/600/400',
      liveUrl: 'https://taskmanager-demo.com',
      githubUrl: 'https://github.com/yourusername/task-manager',
      featured: true,
      completedDate: '2023-11',
      teamSize: 2,
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Weather Analytics Dashboard',
      description: 'Beautiful weather dashboard with advanced analytics and location-based forecasts.',
      longDescription: 'Created an interactive weather dashboard featuring current conditions, 7-day forecasts, historical data analysis, weather maps, and personalized alerts. Integrated multiple weather APIs for comprehensive data.',
      technologies: ['React', 'D3.js', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
      category: 'Web App',
      image: '/api/placeholder/600/400',
      liveUrl: 'https://weather-dashboard-demo.com',
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      featured: false,
      completedDate: '2023-09',
      teamSize: 1,
      status: 'Completed'
    },
    {
      id: 4,
      title: 'RESTful API Gateway',
      description: 'Scalable API gateway with authentication, rate limiting, and comprehensive documentation.',
      longDescription: 'Built a robust API gateway handling authentication, authorization, rate limiting, request/response transformation, and comprehensive logging. Includes automated API documentation and monitoring dashboard.',
      technologies: ['Node.js', 'Express', 'Redis', 'JWT', 'Swagger', 'Docker'],
      category: 'API',
      image: '/api/placeholder/600/400',
      githubUrl: 'https://github.com/yourusername/api-gateway',
      featured: false,
      completedDate: '2023-08',
      teamSize: 1,
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Mobile Fitness Tracker',
      description: 'Cross-platform mobile app for fitness tracking with social features and gamification.',
      longDescription: 'Developed a comprehensive fitness tracking app with workout logging, progress visualization, social challenges, achievement system, and integration with wearable devices. Features offline functionality and data synchronization.',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript', 'Expo'],
      category: 'Mobile App',
      image: '/api/placeholder/600/400',
      liveUrl: 'https://play.google.com/store/apps/fitness-tracker',
      githubUrl: 'https://github.com/yourusername/fitness-tracker',
      featured: true,
      completedDate: '2024-02',
      teamSize: 3,
      status: 'Completed'
    },
    {
      id: 6,
      title: 'AI-Powered Code Analyzer',
      description: 'Developer tool that analyzes code quality, suggests improvements, and detects potential issues.',
      longDescription: 'Created an intelligent code analysis tool using machine learning to identify code smells, security vulnerabilities, performance issues, and suggest optimizations. Supports multiple programming languages and integrates with popular IDEs.',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker', 'PostgreSQL', 'React'],
      category: 'Tool',
      image: '/api/placeholder/600/400',
      githubUrl: 'https://github.com/yourusername/code-analyzer',
      featured: false,
      completedDate: '2024-03',
      teamSize: 1,
      status: 'In Progress'
    }
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing my latest work in web development, mobile apps, and innovative tools
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
              onClick={() => setActiveFilter(category)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              <Filter className="w-4 h-4" />
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.category}</p>
                  </div>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.completedDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {project.teamSize} {project.teamSize === 1 ? 'person' : 'people'}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold text-sm transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 font-semibold text-sm transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Want to see more of my work? Check out my GitHub for additional projects and contributions.
          </p>
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-5 h-5" />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
