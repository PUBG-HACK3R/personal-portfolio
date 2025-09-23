'use client';

import { useState, useEffect } from 'react';

export default function MaintenanceMode() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated maintenance icon */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
            <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
          <div className="absolute inset-0 w-32 h-32 mx-auto bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Under Maintenance
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
          We&apos;re currently updating our portfolio to bring you an even better experience.
        </p>

        {/* Status message */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
          <h2 className="text-lg font-semibold text-white mb-2">What&apos;s happening?</h2>
          <p className="text-blue-100">
            Our team is working hard to implement new features and improvements. 
            We&apos;ll be back online shortly with exciting updates!
          </p>
        </div>

        {/* Current time */}
        <div className="text-sm text-blue-200 mb-8">
          Current time: {currentTime.toLocaleString()}
        </div>

        {/* Contact info */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-3">Need to reach us?</h3>
          <p className="text-blue-100 mb-4">
            If you have any urgent inquiries, feel free to contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:your-email@example.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center"
            >
              📧 Email Us
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center"
            >
              🐙 GitHub
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-sm text-blue-300">
          <p>Expected downtime: Minimal • Status updates on our social media</p>
        </div>
      </div>

      {/* Background animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
