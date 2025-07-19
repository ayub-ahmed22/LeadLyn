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
        className="relative py-32 bg-gradient-to-r from-primary to-accent text-white mb-12"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Contact Sales</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
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
            <h2 className="text-3xl font-bold text-primary mb-8">Sales Contact</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl text-primary"><FaMapMarkerAlt /></span>
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
                <span className="text-3xl text-primary"><FaPhoneAlt /></span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Sales Hotline</h3>
                  <a href="tel:8610803533" className="text-primary hover:underline text-lg font-semibold">
                    8610803533
                  </a>
                </div>
              </div>
              {/* WhatsApp Contact */}
              <div className="flex items-start gap-4">
                <span className="text-3xl text-green-500">
                  {/* WhatsApp SVG icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.298-.018-.458.13-.606.134-.133.298-.347.447-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 0 11.533C0 5.17 5.17 0 11.533 0c2.637 0 5.112 1.027 6.988 2.896a9.825 9.825 0 0 1 2.879 6.936c.017 5.411-4.393 9.983-9.949 10.067m8.413-17.408A11.815 11.815 0 0 0 11.533-1.5C4.916-1.5-.5 3.916-.5 10.533c0 2.086.547 4.106 1.588 5.889l-1.687 6.162a1.5 1.5 0 0 0 1.84 1.84l6.162-1.687A11.82 11.82 0 0 0 11.533 22.5c6.617 0 12.033-5.416 12.033-12.033 0-3.208-1.25-6.222-3.531-8.476z"/></svg>
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">WhatsApp</h3>
                  <a href="https://wa.me/918610803533" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline text-lg font-semibold">
                    +91 8610803533
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl text-primary"><FaEnvelope /></span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Sales Email</h3>
                  <a href="mailto:info@ruvan.co.in" className="text-primary hover:underline text-lg font-semibold">
                    info@ruvan.co.in
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Sales Inquiry Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Request a Sales Consultation</h2>
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-all duration-300 shadow-lg"
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