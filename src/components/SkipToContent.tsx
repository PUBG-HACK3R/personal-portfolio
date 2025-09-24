'use client';

import { motion } from 'framer-motion';

export default function SkipToContent() {
  return (
    <motion.a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      whileFocus={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      Skip to main content
    </motion.a>
  );
}
