'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Telecalling Services',
    description: 'Professional outbound and inbound customer engagement solutions.',
    url: '/services/telecalling',
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="text-primary">
        <circle cx="24" cy="24" r="20" fill="#e91d62" fillOpacity="0.12"/>
        <circle cx="24" cy="24" r="20" stroke="#e91d62" strokeWidth="2"/>
        <path d="M16 28c2 2 6 2 8 0m0 0c2-2 6-2 8 0" stroke="#e91d62" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="18" cy="20" r="2" fill="#e91d62"/>
        <circle cx="30" cy="20" r="2" fill="#e91d62"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Lead Generation & Outsourcing',
    description: 'Scalable lead generation and business process outsourcing.',
    url: '/services/lead-generation',
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="text-primary">
        <rect x="10" y="10" width="28" height="28" rx="6" fill="#e91d62" fillOpacity="0.12"/>
        <rect x="10" y="10" width="28" height="28" rx="6" stroke="#e91d62" strokeWidth="2"/>
        <path d="M24 18v8l6 4" stroke="#e91d62" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="2" fill="#e91d62"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'End-to-End Sales & Service',
    description: 'Complete sales lifecycle from cold calling to deal closure.',
    url: '/services/sales-service',
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="text-primary">
        <rect x="8" y="20" width="32" height="16" rx="4" fill="#e91d62" fillOpacity="0.12"/>
        <rect x="8" y="20" width="32" height="16" rx="4" stroke="#e91d62" strokeWidth="2"/>
        <path d="M16 28h16M16 34h8" stroke="#e91d62" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 16v4" stroke="#e91d62" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="14" r="2" fill="#e91d62"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Loan & Insurance Services',
    description: 'Personal, home, and business loans with comprehensive insurance coverage.',
    url: '/services/loan-insurance',
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="text-primary">
        <rect x="8" y="20" width="32" height="20" rx="4" fill="#e91d62" fillOpacity="0.12"/>
        <rect x="8" y="20" width="32" height="20" rx="4" stroke="#e91d62" strokeWidth="2"/>
        <path d="M16 28h16M16 34h8" stroke="#e91d62" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="14" r="6" fill="#e91d62" fillOpacity="0.12"/>
        <circle cx="24" cy="14" r="6" stroke="#e91d62" strokeWidth="2"/>
        <path d="M22 16.5l2-2 2 2" stroke="#e91d62" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'CCTV & Cybersecurity',
    description: 'Complete security systems with advanced cybersecurity protection.',
    url: '/services/cctv-cybersecurity',
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="text-primary">
        <rect x="8" y="28" width="32" height="10" rx="3" fill="#e91d62" fillOpacity="0.12"/>
        <rect x="8" y="28" width="32" height="10" rx="3" stroke="#e91d62" strokeWidth="2"/>
        <rect x="14" y="12" width="20" height="10" rx="3" fill="#e91d62" fillOpacity="0.12"/>
        <rect x="14" y="12" width="20" height="10" rx="3" stroke="#e91d62" strokeWidth="2"/>
        <circle cx="24" cy="33" r="2" fill="#e91d62"/>
        <path d="M24 22v9" stroke="#e91d62" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const ServicesSection = () => {
  // Split into rows of 3, last row may have 2
  const rows = [];
  for (let i = 0; i < services.length; i += 3) {
    rows.push(services.slice(i, i + 3));
  }
  return (
    <section className="py-16 px-4 bg-white font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14 text-black tracking-tight">
          Our <span className="text-primary">Services</span>
        </h2>
        <div className="flex flex-col gap-8">
          {rows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className={
                row.length === 2
                  ? 'flex justify-center gap-8'
                  : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
              }
            >
              {row.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: [1, 1.04, 1] }}
                  transition={{ duration: 0.7, delay: (rowIdx * 3 + index) * 0.2, repeat: Infinity, repeatType: 'reverse', repeatDelay: 2 }}
                  whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(233,29,98,0.15)' }}
                  className="flex items-start bg-white rounded-2xl shadow-lg border border-gray-100 p-6 gap-4 transition-all duration-300 hover:shadow-2xl hover:border-primary hover:bg-primary/5 group"
                >
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-black mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-gray-700 text-sm mb-4">{service.description}</p>
                    <a
                      href={service.url}
                      className="inline-block px-4 py-2 rounded-lg bg-primary text-white font-semibold text-sm shadow hover:bg-black transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;