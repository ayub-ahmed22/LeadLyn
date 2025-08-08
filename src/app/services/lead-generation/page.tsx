'use client';

import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';

const leadGenerationServices = [
  {
    title: "B2B Lead Generation",
    description: "Targeted business-to-business lead generation for enterprise clients",
    features: ["Industry research", "Decision maker identification", "Qualified lead lists", "Contact verification"],
    icon: "🏢"
  },
  {
    title: "B2C Lead Generation",
    description: "Consumer-focused lead generation for retail and service businesses",
    features: ["Market segmentation", "Customer profiling", "Lead scoring", "Conversion optimization"],
    icon: "👥"
  },
  {
    title: "Digital Lead Generation",
    description: "Online lead generation through digital marketing channels",
    features: ["Social media campaigns", "Email marketing", "Content marketing", "SEO optimization"],
    icon: "🌐"
  }
];

const outsourcingServices = [
  {
    title: "Process Outsourcing",
    description: "Complete business process outsourcing solutions",
    features: ["Data entry", "Document processing", "Back-office operations", "Administrative tasks"],
    icon: "📋"
  },
  {
    title: "Customer Support Outsourcing",
    description: "Professional customer service and support outsourcing",
    features: ["24/7 support", "Multi-channel support", "Technical assistance", "Issue resolution"],
    icon: "🎧"
  },
  {
    title: "IT Outsourcing",
    description: "Information technology and technical support outsourcing",
    features: ["Software development", "Technical support", "System maintenance", "IT consulting"],
    icon: "💻"
  }
];

const leadGenerationProcess = [
  {
    step: "01",
    title: "Research & Analysis",
    description: "Comprehensive market research and target audience analysis",
    details: ["Industry analysis", "Competitor research", "Target profiling", "Market trends"]
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Customized lead generation strategies for your business",
    details: ["Campaign planning", "Channel selection", "Message development", "Timeline creation"]
  },
  {
    step: "03",
    title: "Implementation",
    description: "Execution of lead generation campaigns across multiple channels",
    details: ["Multi-channel execution", "Real-time monitoring", "Performance tracking", "Optimization"]
  },
  {
    step: "04",
    title: "Lead Qualification",
    description: "Thorough qualification and scoring of generated leads",
    details: ["Lead scoring", "Quality assessment", "Contact verification", "Handoff preparation"]
  }
];

export default function LeadGenerationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary to-accent text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="Lead Generation & Outsourcing"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Lead Generation & Outsourcing</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Scalable lead generation and outsourcing services to grow your customer base with expert support
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Grow Your Business with Expert Support</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our comprehensive lead generation and outsourcing services help businesses scale efficiently 
              while maintaining quality and reducing operational costs. We provide expert support to drive 
              your business growth and success.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Generation Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Lead Generation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadGenerationServices.map((service, index) => (
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

      {/* Outsourcing Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Outsourcing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {outsourcingServices.map((service, index) => (
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

      {/* Process Flow */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Lead Generation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadGenerationProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Benefits of Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cost Effective</h3>
              <p className="text-gray-600">Reduce operational costs while maintaining quality</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Time Saving</h3>
              <p className="text-gray-600">Focus on core business while we handle the rest</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Skilled professionals with industry expertise</p>
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Scale Your Business?</h2>
          <p className="text-xl text-white mb-10 max-w-3xl mx-auto">
            Contact our experts to discuss how our lead generation and outsourcing services can help grow your business
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