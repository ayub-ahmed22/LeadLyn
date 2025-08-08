'use client';

import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';

const loanTypes = [
  {
    title: "Personal Loans",
    description: "Quick and easy personal financing for your immediate needs",
    features: ["Flexible repayment terms", "Competitive interest rates", "Quick approval process", "No collateral required"],
    icon: "💰"
  },
  {
    title: "Home Loans",
    description: "Make your dream home a reality with our comprehensive home financing solutions",
    features: ["Low interest rates", "Long repayment periods", "Tax benefits", "Flexible EMI options"],
    icon: "🏠"
  },
  {
    title: "Business Loans",
    description: "Fuel your business growth with our tailored business financing options",
    features: ["Working capital support", "Equipment financing", "Business expansion", "Competitive rates"],
    icon: "🏢"
  }
];

const insuranceTypes = [
  {
    title: "Life Insurance",
    description: "Secure your family's future with comprehensive life coverage",
    features: ["Term life insurance", "Whole life insurance", "Endowment plans", "Money back policies"],
    icon: "🛡️"
  },
  {
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and your family",
    features: ["Individual health plans", "Family floater plans", "Critical illness coverage", "Cashless hospitalization"],
    icon: "🏥"
  },
  {
    title: "General Insurance",
    description: "Protect your assets with our wide range of general insurance products",
    features: ["Motor insurance", "Home insurance", "Travel insurance", "Commercial insurance"],
    icon: "🚗"
  }
];

export default function LoanInsurancePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary to-accent text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="Loan & Insurance Services"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Loan & Insurance Services</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Comprehensive financial solutions to secure your future and achieve your dreams
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Trusted Financial Partner</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We offer all types of personal, home, and business loans, along with life, health, general, and term insurance plans. 
              Our expert advisors help you choose the right financial products for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Loan Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Loan Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loanTypes.map((loan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{loan.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{loan.title}</h3>
                <p className="text-gray-600 mb-6">{loan.description}</p>
                <ul className="space-y-3">
                  {loan.features.map((feature, idx) => (
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

      {/* Insurance Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Insurance Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insuranceTypes.map((insurance, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{insurance.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{insurance.title}</h3>
                <p className="text-gray-600 mb-6">{insurance.description}</p>
                <ul className="space-y-3">
                  {insurance.features.map((feature, idx) => (
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Processing</h3>
              <p className="text-gray-600">Fast approval and disbursement of loans</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Professional advisors to help you choose right</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Rates</h3>
              <p className="text-gray-600">Best interest rates and premium options</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer service</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white mb-10 max-w-3xl mx-auto">
            Contact our financial experts today to discuss your loan and insurance needs
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