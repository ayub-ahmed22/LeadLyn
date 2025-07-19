'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: "Customer Management",
    description: "We offer a full range of financial services designed to simplify and support your personal and business goals",
    icon: "💰",
    items: [
      "CRM - Based Telecalling (for sales & services)",
      "Insurance (All Types)",
      "Credit Cards (All Banks)",
      "Loans (All Types)",
      "Fixed Deposits",
      "Mutual Funds"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&h=800&q=80"
  },
  {
    title: "Building Management",
    description: "Enhance your building's security and automation with our advanced systems",
    icon: "🏢",
    items: [
      "Parking Management",
      "CCTV Camera",
      "IP Camera",
      "DVR, NVR",
      "Access Control",
      "Time Attendance",
      "RFID Magnetic Control",
      "GSM Home Security",
      "Flap Barrier",
      "Biometric Systems",
      "Turnstile",
      "Boom Barrier"
    ],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&h=800&q=80"
  },
  {
    title: "Networking & Cybersecurity",
    description: "Robust infrastructure and data protection solutions tailored for modern businesses",
    icon: "🌐",
    items: [
      "LAN (UTP)",
      "WAN (Optical Fibre)",
      "Server & NAS/SAN Installation",
      "Firewall Installation"
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=800&q=80"
  }
];

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary to-accent text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="Services Background"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Our Services</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Comprehensive solutions for your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl">{service.icon}</span>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                    {service.title === 'Customer Management' && (
                      <div className="mb-6 p-4 bg-primary/10 border-l-4 border-primary rounded-lg">
                        <span className="block text-lg font-bold text-primary">CRM - Based Telecalling (for sales & services)</span>
                      </div>
                    )}
                    <ul className="space-y-4">
                      {service.items
                        .filter(item => item !== 'CRM - Based Telecalling (for sales & services)')
                        .map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="CTA Background"
          fill
          className="object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white mb-10 max-w-3xl mx-auto">
            Contact us today to discuss how we can help transform your business
          </p>
          <a
            href="/contact-sales"
            className="inline-flex items-center px-10 py-4 border-2 border-white text-lg font-semibold rounded-lg text-white bg-primary hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
} 