'use client';

import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';

const salesServices = [
  {
    title: "Cold Calling",
    description: "Professional cold calling services to generate new business opportunities",
    features: ["Lead qualification", "Appointment setting", "Product introduction", "Follow-up calls"],
    icon: "📞"
  },
  {
    title: "Sales Consultation",
    description: "Expert sales consultation to optimize your sales strategy and processes",
    features: ["Sales strategy", "Process optimization", "Team training", "Performance analysis"],
    icon: "💼"
  },
  {
    title: "Deal Closing",
    description: "Professional deal closing services to convert prospects into customers",
    features: ["Negotiation support", "Contract preparation", "Objection handling", "Closing techniques"],
    icon: "🤝"
  }
];

const serviceFeatures = [
  {
    title: "Lead Management",
    description: "Comprehensive lead management and tracking systems",
    features: ["Lead scoring", "Pipeline management", "CRM integration", "Progress tracking"],
    icon: "📊"
  },
  {
    title: "Customer Support",
    description: "Ongoing customer support and after-sales service",
    features: ["Post-sale support", "Customer success", "Issue resolution", "Relationship management"],
    icon: "🎧"
  },
  {
    title: "Sales Analytics",
    description: "Detailed sales analytics and performance reporting",
    features: ["Performance metrics", "Conversion tracking", "ROI analysis", "Sales forecasting"],
    icon: "📈"
  }
];

const salesProcess = [
  {
    step: "01",
    title: "Lead Generation",
    description: "Identify and qualify potential customers",
    details: ["Market research", "Prospect identification", "Lead qualification", "Database building"]
  },
  {
    step: "02",
    title: "Initial Contact",
    description: "Make first contact and establish rapport",
    details: ["Cold calling", "Email outreach", "Social media", "Networking"]
  },
  {
    step: "03",
    title: "Needs Assessment",
    description: "Understand customer requirements and pain points",
    details: ["Discovery calls", "Requirements gathering", "Solution mapping", "Value proposition"]
  },
  {
    step: "04",
    title: "Proposal & Negotiation",
    description: "Present solutions and negotiate terms",
    details: ["Proposal creation", "Price negotiation", "Terms discussion", "Objection handling"]
  },
  {
    step: "05",
    title: "Deal Closure",
    description: "Close the deal and finalize agreements",
    details: ["Contract signing", "Payment processing", "Handoff preparation", "Celebration"]
  },
  {
    step: "06",
    title: "After-Sales Support",
    description: "Provide ongoing support and relationship management",
    details: ["Implementation support", "Customer success", "Renewal management", "Referral generation"]
  }
];

export default function SalesServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary to-accent text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="End-to-End Sales & Service"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">End-to-End Sales & Service</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            From cold calling to closing deals, we handle your entire sales journey with experienced agents
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Sales Lifecycle Management</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our comprehensive sales and service solutions cover every aspect of your sales journey, 
              from initial lead generation to deal closure and ongoing customer support. We help you 
              build lasting customer relationships and drive sustainable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Core Sales Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Sales Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {salesServices.map((service, index) => (
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

      {/* Service Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Service Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => (
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

      {/* Sales Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Sales Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {salesProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-sm">
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

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Our Sales Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Experienced Team</h3>
              <p className="text-gray-600">Skilled sales professionals with proven track records</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">High Conversion</h3>
              <p className="text-gray-600">Proven methods to increase conversion rates</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Detailed Reports</h3>
              <p className="text-gray-600">Comprehensive analytics and performance insights</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">End-to-End Support</h3>
              <p className="text-gray-600">Complete support from lead to customer success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Boost Your Sales?</h2>
          <p className="text-xl text-white mb-10 max-w-3xl mx-auto">
            Contact our sales experts to discuss how we can help drive your business growth and success
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