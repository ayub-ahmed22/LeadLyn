'use client';

import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';

const cctvServices = [
  {
    title: "CCTV Installation",
    description: "Professional installation of high-quality surveillance systems",
    features: ["HD & 4K cameras", "Night vision capability", "Remote monitoring", "Mobile app access"],
    icon: "📹"
  },
  {
    title: "IP Camera Systems",
    description: "Advanced IP-based surveillance solutions for modern businesses",
    features: ["Network cameras", "Cloud storage", "AI detection", "Smart analytics"],
    icon: "🌐"
  },
  {
    title: "DVR & NVR Systems",
    description: "Digital and Network Video Recorders for reliable recording",
    features: ["High capacity storage", "Multiple channel support", "Backup systems", "Easy retrieval"],
    icon: "💾"
  }
];

const securitySystems = [
  {
    title: "Access Control",
    description: "Advanced access management systems for enhanced security",
    features: ["Biometric authentication", "Card-based access", "Time-based restrictions", "Audit trails"],
    icon: "🔐"
  },
  {
    title: "Time Attendance",
    description: "Automated employee attendance tracking systems",
    features: ["Fingerprint recognition", "Face recognition", "Report generation", "Integration ready"],
    icon: "⏰"
  },
  {
    title: "RFID Systems",
    description: "Radio Frequency Identification for secure access control",
    features: ["Contactless access", "Long-range detection", "Multiple user support", "Easy management"],
    icon: "🏷️"
  }
];

const cybersecurityServices = [
  {
    title: "Firewall Installation",
    description: "Advanced firewall solutions to protect your network",
    features: ["Next-gen firewalls", "Intrusion prevention", "VPN support", "24/7 monitoring"],
    icon: "🛡️"
  },
  {
    title: "Network Security",
    description: "Comprehensive network protection and monitoring",
    features: ["Network segmentation", "Traffic analysis", "Threat detection", "Incident response"],
    icon: "🔒"
  },
  {
    title: "Security Audits",
    description: "Regular security assessments and vulnerability testing",
    features: ["Penetration testing", "Risk assessment", "Compliance checks", "Security reports"],
    icon: "🔍"
  }
];

export default function CCTVCybersecurityPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary to-accent text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="CCTV & Cybersecurity Services"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">CCTV, Networking & Cyber Security</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            End-to-end security systems: CCTV installation, enterprise networking, and advanced cybersecurity solutions
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Security Solutions</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We provide installation, supply, and configuration of CCTV systems, network setups, and advanced cybersecurity solutions. 
              Our comprehensive approach ensures your business is protected from all angles.
            </p>
          </div>
        </div>
      </section>

      {/* CCTV Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">CCTV & Surveillance Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cctvServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Systems */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Access Control & Security Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securitySystems.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{system.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{system.title}</h3>
                <p className="text-gray-600 mb-6">{system.description}</p>
                <ul className="space-y-3">
                  {system.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cybersecurity Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Cybersecurity Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cybersecurityServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Our Security Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Installation</h3>
              <p className="text-gray-600">Professional setup by certified technicians</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Monitoring</h3>
              <p className="text-gray-600">Round-the-clock security surveillance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Technology</h3>
              <p className="text-gray-600">Latest security and surveillance tech</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Remote Access</h3>
              <p className="text-gray-600">Monitor your security from anywhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Secure Your Business Today</h2>
          <p className="text-xl text-white mb-10 max-w-3xl mx-auto">
            Contact our security experts to discuss your CCTV and cybersecurity requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-sales"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-lg text-primary bg-white hover:bg-gray-100 transition-all duration-300"
            >
              Get Security Assessment
            </a>
            <a
              href="tel:8610803533"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-lg text-white hover:bg-white hover:text-primary transition-all duration-300"
            >
              Call Now: 8610803533
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 