import AnimatedBackground from "@/components/AnimatedBackground";
import AnimatedHero from "@/components/AnimatedHero";
import AnimatedSkills from "@/components/AnimatedSkills";
import AnimatedProjects from "@/components/AnimatedProjects";
import AnimatedContact from "@/components/AnimatedContact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <AnimatedHero />

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I&apos;m a passionate developer with 1+ years of experience building web applications
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                I specialize in creating modern, responsive web applications using cutting-edge technologies. 
                With a strong foundation in both frontend and backend development, I bring ideas to life 
                through clean, efficient code and beautiful user interfaces.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium">
                  React
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium">
                  Node.js
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-medium">
                  JavaScript
                </span>
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-full text-sm font-medium">
                  Next.js
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Let&apos;s work together!</h3>
                <p className="mb-6">
                  I&apos;m always interested in new opportunities and exciting projects.
                </p>
                <a
                  href="#contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
                >
                  Get in touch
                </a>
              </div>
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
