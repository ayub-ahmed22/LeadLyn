'use client';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { FaUserTie, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 md:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative h-[32vh] md:h-[40vh] mb-12 md:mb-20"
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <Image
              src="https://images.unsplash.com/photo-1461344577544-4e5dc9487184?auto=format&fit=crop&w=1920&q=80"
              alt="About Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
              <h1 className="text-5xl font-bold text-white mb-6">About LeadLyn</h1>
              <p className="text-xl text-white max-w-3xl">
                Your trusted partner in security and technology solutions
              </p>
            </div>
          </motion.section>

          {/* Company Overview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md p-8 mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 mb-6">
                    Founded with a vision to empower businesses, LeadLyn delivers innovative technology and security solutions tailored to modern challenges. Since 2025, we have helped organizations transform, grow, and stay secure in a rapidly evolving digital world.
                  </p>
                  <p className="text-gray-600">
                    Our passionate team combines deep expertise with a customer-first approach, ensuring every client receives solutions that drive real results. At LeadLyn, we believe in building lasting partnerships and making technology work for you.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&h=600&q=80"
                  alt="Company Overview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600&q=80"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To empower businesses and individuals through cutting-edge technology solutions, 
                ensuring efficiency, security, and growth.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=600&q=80"
                  alt="Our Vision"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be a trusted partner for all technology needs, driving digital transformation 
                and excellence in service delivery.
              </p>
            </motion.div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md p-8 mb-12"
          >
            <h2 className="text-2xl font-semibold text-primary mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div whileHover={{ scale: 1.04 }} className="bg-primary/10 p-6 rounded-lg cursor-pointer transition-transform">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80" alt="Telecalling Services" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium text-primary mb-2">Telecalling Services</h3>
                <p className="text-primary">Professional outbound and inbound telecalling, appointment setting, customer surveys, and support.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} className="bg-primary/10 p-6 rounded-lg cursor-pointer transition-transform">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" alt="Lead Generation & Outsourcing" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium text-primary mb-2">Lead Generation & Outsourcing</h3>
                <p className="text-primary">Scalable lead generation, data mining, market research, business process outsourcing, and back office support.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} className="bg-primary/10 p-6 rounded-lg cursor-pointer transition-transform">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" alt="End-to-End Sales & Service" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium text-primary mb-2">End-to-End Sales & Service</h3>
                <p className="text-primary">Complete sales lifecycle management: cold calling, lead qualification, sales consultation, deal closure, and customer success.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} className="bg-primary/10 p-6 rounded-lg cursor-pointer transition-transform">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" alt="Loan & Insurance Services" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium text-primary mb-2">Loan & Insurance Services</h3>
                <p className="text-primary">Comprehensive financial solutions including personal, home, and business loans, as well as life, health, vehicle, and property insurance.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} className="bg-primary/10 p-6 rounded-lg cursor-pointer transition-transform">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80" alt="CCTV & Cybersecurity" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium text-primary mb-2">CCTV & Cybersecurity</h3>
                <p className="text-primary">Advanced security and data protection: CCTV/IP camera installation, DVR/NVR systems, network security, and cybersecurity audits.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h2 className="text-2xl font-semibold text-primary mb-8">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div whileHover={{ scale: 1.04 }} className="bg-primary/10 p-6 rounded-lg cursor-pointer transition-transform">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Industry Expertise" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium text-primary mb-2">Industry Expertise</h3>
                <p className="text-primary">Our team brings years of experience in sales, technology, and customer engagement.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} className="bg-primary/10 p-6 rounded-lg cursor-pointer transition-transform">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1461344577544-4e5dc9487184?auto=format&fit=crop&w=800&q=80" alt="Comprehensive Solutions" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium text-primary mb-2">Comprehensive Solutions</h3>
                <p className="text-primary">We offer end-to-end services, from lead generation to cybersecurity, tailored to your business needs.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} className="bg-primary/10 p-6 rounded-lg cursor-pointer transition-transform">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" alt="Customer-Centric Approach" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium text-primary mb-2">Customer-Centric Approach</h3>
                <p className="text-primary">We focus on building long-term relationships and delivering measurable results.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} className="bg-primary/10 p-6 rounded-lg cursor-pointer transition-transform">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80" alt="Innovation & Security" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium text-primary mb-2">Innovation & Security</h3>
                <p className="text-primary">We leverage the latest technology to ensure your business stays secure and ahead of the curve.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 