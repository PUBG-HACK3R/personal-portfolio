'use client';

import { useState, useEffect } from 'react';

export default function TestPage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      } else {
        setIsDark(false);
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (typeof window !== 'undefined') {
      if (newTheme) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">Dark Mode Test Page</h1>
        
        <div className="mb-8">
          <button
            onClick={toggleTheme}
            className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Toggle Theme (Current: {isDark ? 'Dark' : 'Light'})
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Card 1</h2>
            <p className="text-gray-600 dark:text-gray-300">
              This card should change background and text color in dark mode.
            </p>
          </div>
          
          <div className="bg-blue-100 dark:bg-blue-900 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-200">Card 2</h2>
            <p className="text-blue-600 dark:text-blue-300">
              This card should also change colors in dark mode.
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 border border-gray-300 dark:border-gray-600 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Debug Info</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            HTML Classes: {typeof window !== 'undefined' ? document.documentElement.className : 'Loading...'}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Has &apos;dark&apos; class: {typeof window !== 'undefined' ? document.documentElement.className.includes('dark') ? 'Yes' : 'No' : 'Loading...'}
          </p>
        </div>
      </div>
    </div>
  );
}
