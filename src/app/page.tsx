import AnimatedHero from "@/components/AnimatedHero";
import AnimatedSkills from "@/components/AnimatedSkills";
import AnimatedProjects from "@/components/AnimatedProjects";
import AnimatedContact from "@/components/AnimatedContact";
import { motion } from "framer-motion";
import MaintenanceMode from "@/components/MaintenanceMode";
import { MAINTENANCE_CONFIG } from "@/config/maintenance";

export default function Home() {
  // Check if maintenance mode is enabled using config file
  const isMaintenanceMode = MAINTENANCE_CONFIG.enabled;
  
  // Debug: Log the maintenance config (remove this after testing)
  console.log('MAINTENANCE_CONFIG:', MAINTENANCE_CONFIG);
  console.log('isMaintenanceMode:', isMaintenanceMode);

  // If maintenance mode is enabled, show maintenance page
  if (isMaintenanceMode) {
    return <MaintenanceMode />;
  }
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AnimatedHero />

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate developer crafting digital experiences with modern technologies and creative solutions
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  My Journey
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  I specialize in creating modern, responsive web applications using cutting-edge technologies. 
                  With a strong foundation in both frontend and backend development, I bring ideas to life 
                  through clean, efficient code and beautiful user interfaces.
                </p>
              </div>

              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  Beyond Code
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community. I believe in continuous learning 
                  and staying ahead of industry trends.
                </p>
              </div>
            </div>

            {/* Stats & CTA Card */}
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">1+</div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">Years Experience</div>
                </div>
                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">Projects Built</div>
                </div>
                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">5+</div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">Technologies</div>
                </div>
                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">Learning Mode</div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Ready to collaborate?</h3>
                  <p className="mb-6 text-blue-100">
                    I&apos;m always excited about new opportunities and challenging projects. 
                    Let&apos;s create something amazing together!
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-lg border border-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Start a conversation
                  </a>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'React', color: 'from-blue-500 to-cyan-500', icon: '⚛️' },
                { name: 'Node.js', color: 'from-green-500 to-emerald-500', icon: '🟢' },
                { name: 'JavaScript', color: 'from-yellow-400 to-orange-500', icon: '🟨' },
                { name: 'Next.js', color: 'from-gray-700 to-gray-900', icon: '▲' },
                { name: 'TypeScript', color: 'from-blue-600 to-blue-700', icon: '🔷' },
                { name: 'Tailwind CSS', color: 'from-teal-400 to-blue-500', icon: '🎨' },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className={`bg-gradient-to-r ${tech.color} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2`}
                >
                  <span>{tech.icon}</span>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>

          {/* Professional Timeline */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Professional Timeline</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">My journey in software development</p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
              
              <div className="space-y-12">
                {[
                  {
                    year: '2024',
                    title: 'Full Stack Developer',
                    company: 'Freelance',
                    description: 'Building modern web applications with React, Next.js, and Node.js. Focusing on creating exceptional user experiences and scalable solutions.',
                    icon: '💼',
                    side: 'left'
                  },
                  {
                    year: '2023',
                    title: 'Frontend Developer',
                    company: 'Tech Startup',
                    description: 'Developed responsive web applications and improved user interface designs. Collaborated with cross-functional teams to deliver high-quality products.',
                    icon: '🚀',
                    side: 'right'
                  },
                  {
                    year: '2022',
                    title: 'Web Development Journey',
                    company: 'Self-Learning',
                    description: 'Started my journey in web development, learning HTML, CSS, JavaScript, and modern frameworks. Built several personal projects to practice skills.',
                    icon: '📚',
                    side: 'left'
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className={`flex items-center ${item.side === 'left' ? 'flex-row' : 'flex-row-reverse'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-5/12 ${item.side === 'left' ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                        <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">{item.year}</div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                        <div className="text-purple-600 dark:text-purple-400 font-medium mb-3">{item.company}</div>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="w-2/12 flex justify-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg z-10">
                        {item.icon}
                      </div>
                    </div>
                    
                    <div className="w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What People Say</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">Feedback from colleagues and clients</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Sarah Johnson',
                  role: 'Project Manager',
                  company: 'Tech Solutions Inc.',
                  content: 'Adnan delivered exceptional work on our web application. His attention to detail and technical expertise made the project a huge success.',
                  avatar: '👩‍💼',
                  rating: 5
                },
                {
                  name: 'Mike Chen',
                  role: 'Senior Developer',
                  company: 'Innovation Labs',
                  content: 'Working with Adnan was a pleasure. He brings fresh ideas and solid technical skills to every project. Highly recommended!',
                  avatar: '👨‍💻',
                  rating: 5
                },
                {
                  name: 'Emily Rodriguez',
                  role: 'UI/UX Designer',
                  company: 'Creative Agency',
                  content: 'Adnan perfectly translated our designs into beautiful, functional code. His understanding of both design and development is impressive.',
                  avatar: '👩‍🎨',
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                      <p className="text-xs text-blue-600 dark:text-blue-400">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 italic">&ldquo;{testimonial.content}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <AnimatedSkills />

      {/* Projects Section */}
      <AnimatedProjects />

      {/* Contact Section */}
      <AnimatedContact />
    </div>
  );
}
