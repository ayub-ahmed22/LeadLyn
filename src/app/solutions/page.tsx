'use client';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';

const serviceSolutions = [
  {
    title: 'Telecalling Services',
    description: 'Professional customer engagement and support.',
    image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80',
    challenges: [
      'Lead qualification',
      'Customer retention',
      'Efficient communication',
    ],
    solutions: [
      'Outbound and inbound telecalling',
      'Appointment setting and follow-ups',
      'Customer surveys and support',
    ],
  },
  {
    title: 'Lead Generation & Outsourcing',
    description: 'Scalable business growth and operational efficiency.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    challenges: [
      'Consistent lead flow',
      'Data management',
      'Cost-effective operations',
    ],
    solutions: [
      'Lead generation campaigns',
      'Data mining and market research',
      'Business process outsourcing',
      'Back office and administrative support',
    ],
  },
  {
    title: 'End-to-End Sales & Service',
    description: 'Complete sales lifecycle management.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    challenges: [
      'Converting leads to customers',
      'Managing sales pipeline',
      'Post-sale support',
    ],
    solutions: [
      'Cold calling and lead qualification',
      'Sales consultation and negotiation',
      'Deal closure and customer success management',
    ],
  },
  {
    title: 'Loan & Insurance Services',
    description: 'Comprehensive financial solutions for individuals and businesses.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    challenges: [
      'Access to credit and funding',
      'Insurance coverage for assets and life',
      'Financial planning',
    ],
    solutions: [
      'Personal, home, and business loans',
      'Life, health, vehicle, and property insurance',
      'Expert financial consultation',
    ],
  },
  {
    title: 'CCTV & Cybersecurity',
    description: 'Advanced security and data protection for modern organizations.',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80',
    challenges: [
      'Physical security threats',
      'Cybersecurity risks',
      'Real-time monitoring',
    ],
    solutions: [
      'CCTV and IP camera installation',
      'DVR/NVR systems',
      'Network security and firewall setup',
      'Cybersecurity audits and monitoring',
    ],
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-primary to-accent text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1920&q=80"
          alt="Solutions Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-6">Our Solutions</h1>
          <p className="text-xl text-white max-w-3xl">
            Business growth, security, and customer engagement—powered by our expert services.
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceSolutions.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Key Challenges:</h3>
                    <ul className="space-y-2">
                      {service.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gray-50">
                <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Solutions</h3>
                  <ul className="space-y-2">
                    {service.solutions.map((sol, solIdx) => (
                      <li key={solIdx} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {sol}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="CTA Background"
          fill
          className="object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Let us help you find the perfect business, security, or technology solution for your needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-primary transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
} 