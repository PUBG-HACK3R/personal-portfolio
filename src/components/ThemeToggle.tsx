'use client';

import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="w-12 h-6 bg-gray-200 rounded-full p-1">
        <div className="w-4 h-4 bg-white rounded-full shadow"></div>
      </div>
    );
  }

  const handleClick = () => {
    // Use the enhanced toggleTheme function that includes gradient backgrounds
    toggleTheme();
  };

  return (
    <button
      onClick={handleClick}
      className="relative w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Toggle theme"
    >
      <div
        className={`w-4 h-4 bg-white dark:bg-gray-900 rounded-full shadow transition-transform duration-200 flex items-center justify-center ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {theme === 'dark' ? (
          <span className="text-xs">🌙</span>
        ) : (
          <span className="text-xs">☀️</span>
        )}
      </div>
    </button>
  );
}
