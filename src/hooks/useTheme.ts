'use client';

import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  const applyThemeClass = (t: 'light' | 'dark') => {
    const root = document.documentElement;
    const body = document.body;
    const isDark = t === 'dark';
    
    // Apply to both html and body
    root.classList.toggle('dark', isDark);
    if (body) body.classList.toggle('dark', isDark);
    
    // Also set data attribute for additional compatibility
    root.setAttribute('data-theme', t);
    
    // Apply beautiful gradient backgrounds
    if (isDark) {
      body.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)';
      body.style.color = '#ffffff';
    } else {
      body.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)';
      body.style.color = '#000000';
    }
    
    // Update all sections with beautiful backgrounds
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      if (isDark) {
        (section as HTMLElement).style.background = 'rgba(15, 23, 42, 0.95)';
        (section as HTMLElement).style.color = '#ffffff';
      } else {
        (section as HTMLElement).style.background = 'rgba(255, 255, 255, 0.95)';
        (section as HTMLElement).style.color = '#000000';
      }
    });
    
    // Update main div
    const mainDiv = document.querySelector('main');
    if (mainDiv) {
      (mainDiv as HTMLElement).style.background = 'transparent';
      (mainDiv as HTMLElement).style.color = isDark ? '#ffffff' : '#000000';
    }
  };

  useEffect(() => {
    // Determine initial theme from localStorage > DOM > system preference
    try {
      const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
      const domIsDark = document.documentElement.classList.contains('dark');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial: 'light' | 'dark' = saved ?? (domIsDark ? 'dark' : prefersDark ? 'dark' : 'light');
      setTheme(initial);
      applyThemeClass(initial);
    } catch {
      // Fallback
      setTheme('light');
    }

    setMounted(true);

    // Listen for system preference changes
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onMqChange = () => {
      try {
        const saved = localStorage.getItem('theme');
        // Only auto-apply system changes if user hasn't explicitly chosen a theme
        if (!saved) {
          const newTheme: 'light' | 'dark' = mq.matches ? 'dark' : 'light';
          setTheme(newTheme);
          applyThemeClass(newTheme);
        }
      } catch {}
    };
    mq.addEventListener?.('change', onMqChange);

    // Listen for storage changes from other tabs/windows
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'theme' && e.newValue) {
        const newTheme = e.newValue as 'light' | 'dark';
        setTheme(newTheme);
        applyThemeClass(newTheme);
      }
    };
    window.addEventListener('storage', onStorage);

    return () => {
      mq.removeEventListener?.('change', onMqChange);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch {}
    applyThemeClass(newTheme);
  };

  return { theme, toggleTheme, mounted };
}
