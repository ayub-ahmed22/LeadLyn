'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function TollFreeNumber() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <div className="relative">
        <a
          href="tel:8610803533"
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          <span className="text-2xl">📞</span>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Toll-Free Support</span>
            <span className="text-lg font-bold">8610803533</span>
          </div>
        </a>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full p-1 hover:bg-gray-900 transition-colors duration-300"
          aria-label="Close toll-free number"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
} 