'use client';

import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';

const telecallingServices = [
  {
    title: "Outbound Telecalling",
    description: "Proactive customer engagement and lead generation through outbound calls",
    features: ["Lead generation", "Appointment scheduling", "Customer surveys", "Product promotions"],
    icon: "📞"
  },
  {
    title: "Inbound Telecalling",
    description: "Professional customer support and inquiry handling services",
    features: ["Customer support", "Order processing", "Technical assistance", "Complaint resolution"],
    icon: "📥"
  },
  {
    title: "CRM-Based Telecalling",
    description: "Integrated customer relationship management with telecalling operations",
    features: ["Lead tracking", "Customer database", "Call analytics", "Performance reports"],
    icon: "💼"
  }
];

const telecallingFeatures = [
  {
    title: "24/7 Availability",
    description: "Round-the-clock telecalling services for global customer support",
    features: ["Multi-timezone support", "Holiday coverage", "Emergency response", "Flexible scheduling"],
    icon: "⏰"
  },
  {
    title: "Multi-language Support",
    description: "Professional telecalling in multiple languages for diverse customer base",
    features: ["English", "Hindi", "Tamil", "Regional languages"],
    icon: "🌍"
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality monitoring and training for consistent service delivery",
    features: ["Call monitoring", "Performance metrics", "Regular training", "Quality audits"],
    icon: "✅"
  }
];

const industries = [
  {
    title: "Financial Services",
    description: "Telecalling support for banks, insurance, and financial institutions",
    services: ["Loan processing", "Insurance sales", "Credit card services", "Investment advisory"],
    icon: "💰"
  },
  {
    title: "E-commerce",
    description: "Customer support and sales for online retail businesses",
    services: ["Order tracking", "Product inquiries", "Returns processing", "Customer feedback"],
    icon: "🛒"
  },
  {
    title: "Healthcare",
    description: "Appointment scheduling and patient support services",
    services: ["Appointment booking", "Reminder calls", "Patient follow-up", "Medical inquiries"],
    icon: "🏥"
  }
];

export default function TelecallingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary to-accent text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="Telecalling Services"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Telecalling Services</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Outbound and inbound telecalling to engage customers and drive business growth
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Telecalling Solutions</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our experienced telecalling teams provide 24/7 customer engagement services, helping businesses 
              connect with their customers effectively and drive sales growth through personalized communication.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Telecalling Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {telecallingServices.map((service, index) => (
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

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Our Telecalling?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {telecallingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Industry Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                <ul className="space-y-3">
                  {industry.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {service}
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
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Our Telecalling Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Experienced Team</h3>
              <p className="text-gray-600">Skilled professionals with industry expertise</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">High Conversion</h3>
              <p className="text-gray-600">Proven track record of successful conversions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Detailed Reports</h3>
              <p className="text-gray-600">Comprehensive analytics and performance reports</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">Flexible services that grow with your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Boost Your Customer Engagement?</h2>
          <p className="text-xl text-white mb-10 max-w-3xl mx-auto">
            Contact our telecalling experts to discuss how we can help drive your business growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-sales"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-lg text-primary bg-white hover:bg-gray-100 transition-all duration-300"
            >
              Get Free Consultation
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