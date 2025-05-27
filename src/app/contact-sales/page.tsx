'use client';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactSales() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-800 text-white mb-12"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Contact Sales</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Reach out to our sales team for business inquiries, partnerships, and custom solutions.
          </p>
        </div>
      </motion.section>

      {/* Contact Information & Form */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="py-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details Card */}
          <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Sales Contact</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl text-blue-600"><FaMapMarkerAlt /></span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Office Address</h3>
                  <p className="text-gray-600">
                    Plot No. 220, 2RV Grand,<br />
                    39th Street, Shankar Nagar,<br />
                    Pammal, Chennai – 600075
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl text-blue-600"><FaPhoneAlt /></span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Sales Hotline</h3>
                  <a href="tel:8610803533" className="text-blue-700 hover:underline text-lg font-semibold">
                    8610803533
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl text-blue-600"><FaEnvelope /></span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Sales Email</h3>
                  <a href="mailto:info@ruvan.co.in" className="text-blue-700 hover:underline text-lg font-semibold">
                    info@ruvan.co.in
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Sales Inquiry Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Request a Sales Consultation</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg"
                >
                  Request Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.section>
    </main>
  );
} 