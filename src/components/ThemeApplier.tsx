'use client';

import { useEffect } from 'react';

export default function ThemeApplier() {
  useEffect(() => {
    const apply = () => {
      try {
        const theme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDark = theme ? theme === 'dark' : prefersDark;
        document.documentElement.classList.toggle('dark', isDark);
        if (document.body) {
          document.body.classList.toggle('dark', isDark);
        }
      } catch {}
    };

    apply();

    // Listen for system theme changes
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => apply();
    mq.addEventListener?.('change', onChange);

    // Listen for theme changes from other tabs/windows
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'theme') apply();
    };
    window.addEventListener('storage', onStorage);

    return () => {
      mq.removeEventListener?.('change', onChange);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  return null;
}
