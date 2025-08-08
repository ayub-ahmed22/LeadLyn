'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

export default function TollFreeNumber() {
  const [isVisible, setIsVisible] = useState(true);
  const [isEmailVisible, setIsEmailVisible] = useState(true);
  const [isWhatsappVisible, setIsWhatsappVisible] = useState(true);

  return (
    <>
      {isWhatsappVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-40 right-4 z-50"
        >
          <div className="relative">
            <a
              href="https://wa.me/919500696146"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full shadow-lg hover:from-accent hover:to-primary transition-colors duration-300"
              title="Chat on WhatsApp"
            >
              <span className="text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 inline-block align-middle" fill="white">
                  <path d="M16 3C9.373 3 4 8.373 4 15c0 2.646.865 5.093 2.338 7.09L4 29l7.184-2.312A12.93 12.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.917c-2.13 0-4.19-.624-5.94-1.803l-.425-.267-4.263 1.373 1.39-4.146-.277-.438A9.93 9.93 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.463-7.14c-.299-.149-1.77-.871-2.044-.97-.274-.099-.474-.149-.673.15-.198.298-.773.97-.948 1.169-.174.199-.349.224-.648.075-.299-.149-1.263-.465-2.406-1.482-.89-.792-1.492-1.77-1.667-2.069-.174-.298-.018-.459.131-.608.135-.134.299-.349.448-.523.149-.174.199-.299.299-.498.099-.199.05-.374-.025-.523-.075-.149-.673-1.624-.922-2.225-.243-.583-.489-.504-.673-.513l-.573-.01c-.199 0-.523.075-.797.373s-1.047 1.023-1.047 2.498c0 1.475 1.073 2.899 1.223 3.099.149.199 2.112 3.225 5.12 4.396.716.309 1.274.494 1.71.632.719.229 1.374.197 1.89.12.577-.086 1.77-.724 2.021-1.425.249-.7.249-1.299.174-1.425-.075-.124-.273-.198-.573-.347z"/>
                </svg>
              </span>
              <span className="hidden sm:block font-semibold">WhatsApp</span>
            </a>
            <button
              onClick={() => setIsWhatsappVisible(false)}
              className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full p-1 hover:bg-gray-900 transition-colors duration-300"
              aria-label="Close WhatsApp button"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
      {isEmailVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-24 right-4 z-50"
        >
          <div className="relative">
            <a
              href="mailto:operations@leadlyn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary transition-colors duration-300"
              title="Email operations@leadlyn.com"
            >
              <span className="text-2xl"><FaEnvelope /></span>
              <span className="hidden sm:block font-semibold">operations@leadlyn.com</span>
            </a>
            <button
              onClick={() => setIsEmailVisible(false)}
              className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full p-1 hover:bg-gray-900 transition-colors duration-300"
              aria-label="Close email button"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <div className="relative">
            <a
              href="tel:9500696146"
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-accent transition-colors duration-300"
            >
              <span className="text-2xl">📞</span>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Toll-Free Support</span>
                <span className="text-lg font-bold">9500696146</span>
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
      )}
    </>
  );
} 
