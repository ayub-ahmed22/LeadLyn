'use client';

import { motion } from 'framer-motion';
import ServicesSection from '../components/ServicesSection';
import Image from 'next/image';

const services = [
  {
    title: "Telecalling Services",
    description: "Professional outbound and inbound customer engagement solutions.",
    icon: "📞",
    items: [
      "Outbound Telecalling",
      "Inbound Customer Support",
      "Lead Qualification",
      "Appointment Setting",
      "Customer Surveys",
      "Follow-up Calls",
      "Sales Support",
      "Customer Retention"
    ],
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Lead Generation & Outsourcing",
    description: "Scalable lead generation and business process outsourcing.",
    icon: "🎯",
    items: [
      "Lead Generation",
      "Data Mining",
      "Market Research",
      "Business Process Outsourcing",
      "Customer Service Outsourcing",
      "Back Office Support",
      "Data Entry Services",
      "Administrative Support"
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "End-to-End Sales & Service",
    description: "Complete sales lifecycle from cold calling to deal closure.",
    icon: "🤝",
    items: [
      "Cold Calling",
      "Lead Qualification",
      "Sales Consultation",
      "Deal Negotiation",
      "Contract Preparation",
      "Deal Closure",
      "Post-Sale Support",
      "Customer Success Management"
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Loan & Insurance Services",
    description: "Personal, home, and business loans with comprehensive insurance coverage.",
    icon: "💰",
    items: [
      "Personal Loans",
      "Home Loans",
      "Business Loans",
      "Life Insurance",
      "Health Insurance",
      "Vehicle Insurance",
      "Property Insurance",
      "Business Insurance"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "CCTV & Cybersecurity",
    description: "Complete security systems with advanced cybersecurity protection.",
    icon: "🔒",
    items: [
      "CCTV Camera Installation",
      "IP Camera Systems",
      "DVR & NVR Setup",
      "Access Control Systems",
      "Biometric Security",
      "Network Security",
      "Firewall Protection",
      "Cybersecurity Audits"
    ],
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80"
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

      <ServicesSection />

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
                    <ul className="space-y-4">
                      {service.items.map((item, itemIndex) => (
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