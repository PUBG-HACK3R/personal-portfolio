'use client';

import { useState, useEffect } from 'react';
import { MAINTENANCE_CONFIG } from '@/config/maintenance';

export default function MaintenanceMode() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      setCurrentTime(new Date());
      
      // Calculate countdown
      const endTime = MAINTENANCE_CONFIG.startTime + (MAINTENANCE_CONFIG.countdownHours * 60 * 60 * 1000);
      const timeDiff = endTime - now;
      
      if (timeDiff > 0) {
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
        setTimeRemaining({ hours, minutes, seconds });
      } else {
        setTimeRemaining({ hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated Next.js logo */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto flex items-center justify-center">
            <div className="relative w-24 h-24">
              <svg
                className="w-full h-full animate-spin-slow"
                viewBox="0 0 180 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_408_134"
                  style={{ maskType: 'alpha' }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="180"
                  height="180"
                >
                  <circle cx="90" cy="90" r="90" fill="#000" />
                </mask>
                <g mask="url(#mask0_408_134)">
                  <circle cx="90" cy="90" r="90" fill="#000" />
                  <path
                    d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 161.614 146.509 158.14 149.508 154.442V157.52Z"
                    fill="url(#paint0_linear_408_134)"
                  />
                  <rect
                    x="115"
                    y="54"
                    width="12"
                    height="72"
                    fill="url(#paint1_linear_408_134)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_408_134"
                    x1="109"
                    y1="116.5"
                    x2="144.5"
                    y2="160.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#fff" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_408_134"
                    x1="121"
                    y1="54"
                    x2="120.799"
                    y2="106.875"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#fff" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="absolute inset-0 w-32 h-32 mx-auto bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse blur-xl"></div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Under Maintenance
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
          We&apos;re currently updating our portfolio to bring you an even better experience.
        </p>

        {/* Countdown Timer */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Estimated Time Remaining</h2>
          <div className="flex justify-center space-x-4 md:space-x-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 min-w-[80px]">
              <div className="text-3xl md:text-4xl font-bold text-white">{timeRemaining.hours.toString().padStart(2, '0')}</div>
              <div className="text-sm text-blue-200 uppercase tracking-wide">Hours</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 min-w-[80px]">
              <div className="text-3xl md:text-4xl font-bold text-white">{timeRemaining.minutes.toString().padStart(2, '0')}</div>
              <div className="text-sm text-blue-200 uppercase tracking-wide">Minutes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 min-w-[80px]">
              <div className="text-3xl md:text-4xl font-bold text-white">{timeRemaining.seconds.toString().padStart(2, '0')}</div>
              <div className="text-sm text-blue-200 uppercase tracking-wide">Seconds</div>
            </div>
          </div>
        </div>

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
