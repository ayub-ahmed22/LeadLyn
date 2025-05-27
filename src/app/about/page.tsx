'use client';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { FaUserTie, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative h-[40vh] mb-20"
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&h=1080&q=80"
              alt="About Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
              <h1 className="text-5xl font-bold text-white mb-6">About RUVAN INTELLECT</h1>
              <p className="text-xl text-blue-100 max-w-3xl">
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
                    RUVAN INTELLECT is a leading provider of comprehensive technology solutions. 
                    Established in 2023, we have been dedicated to delivering innovative and reliable services.
                  </p>
                  <p className="text-gray-600">
                    Our commitment to excellence and customer satisfaction has made us a trusted name in the industry.
                    We combine cutting-edge technology with expert knowledge to provide solutions that meet and exceed
                    our clients' expectations.
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div whileHover={{ scale: 1.04 }} className="bg-blue-50 p-6 rounded-lg cursor-pointer transition-transform">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&h=600&q=80" alt="Online and Onsite Support" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Online and Onsite Support</h3>
                <p className="text-gray-600">Round-the-clock assistance to address technical issues remotely or through onsite visits.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} className="bg-blue-50 p-6 rounded-lg cursor-pointer transition-transform">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=600&q=80" alt="AMC Support" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">AMC Support</h3>
                <p className="text-gray-600">Annual Maintenance Contracts tailored to client needs.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} className="bg-blue-50 p-6 rounded-lg cursor-pointer transition-transform">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=600&q=80" alt="Network Implementation" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Network Implementation</h3>
                <p className="text-gray-600">Design, deployment, and optimization of robust network solutions.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} className="bg-blue-50 p-6 rounded-lg cursor-pointer transition-transform">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=600&q=80" alt="CCTV Installation" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">CCTV Installation</h3>
                <p className="text-gray-600">Professional installation and maintenance of CCTV systems.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} className="bg-blue-50 p-6 rounded-lg cursor-pointer transition-transform">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&h=600&q=80" alt="Network Connectivity" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Network Connectivity</h3>
                <p className="text-gray-600">Implementation of fibre optic and LAN technologies.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} className="bg-blue-50 p-6 rounded-lg cursor-pointer transition-transform">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&h=600&q=80" alt="ITES Services" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">ITES Services</h3>
                <p className="text-gray-600">Technical and non-technical process solutions.</p>
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div whileHover={{ scale: 1.04 }} className="bg-blue-50 p-6 rounded-lg cursor-pointer transition-transform">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600&q=80" alt="Experienced Professionals" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Experienced Professionals</h3>
                <p className="text-gray-600">Dedicated team committed to delivering exceptional service.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} className="bg-blue-50 p-6 rounded-lg cursor-pointer transition-transform">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=600&q=80" alt="Tailor-Made Solutions" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Tailor-Made Solutions</h3>
                <p className="text-gray-600">Customized offerings for unique client needs.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} className="bg-blue-50 p-6 rounded-lg cursor-pointer transition-transform">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&h=600&q=80" alt="Reliable Support" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Reliable Support</h3>
                <p className="text-gray-600">Round-the-clock support and proactive maintenance.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} className="bg-blue-50 p-6 rounded-lg cursor-pointer transition-transform">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=600&q=80" alt="Cutting-Edge Technology" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Cutting-Edge Technology</h3>
                <p className="text-gray-600">Latest tech and industry best practices.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Leadership Profile Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
            className="py-20 bg-gray-50"
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-2xl shadow-xl p-10">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Leadership Profile</h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 flex flex-col items-center md:items-start w-full md:w-1/3">
                  <div className="bg-blue-100 rounded-full p-4 mb-4">
                    <FaUserTie className="text-4xl text-blue-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Vijay Anand R</h3>
                  <p className="text-blue-700 font-semibold mb-2">Managing Director</p>
                  <p className="text-gray-600 mb-4">RUVAN INTELLECT PRIVATE LIMITED</p>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-blue-600" /> Chennai, Tamil Nadu</p>
                    <p className="flex items-center gap-2"><FaPhoneAlt className="text-blue-600" /> <a href="tel:+917530041168" className="hover:underline">+91 75300 41168</a></p>
                    <p className="flex items-center gap-2"><FaEnvelope className="text-blue-600" /> <a href="mailto:info@ruvan.co.in" className="hover:underline">info@ruvan.co.in</a></p>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">About Vijay Anand</h4>
                  <p className="text-gray-700 mb-6">
                    Vijay Anand is a visionary entrepreneur and the driving force behind multiple successful ventures. He began his business journey in 2019 with Shri VJ Corporation, specializing in networking, IT infrastructure, and security solutions, catering to major clients like NLC and Siemens.
                    <br /><br />
                    In 2023, he launched RUVAN Intellect Pvt. Ltd., focused on advanced cybersecurity and networking. Under his solo leadership, the company partnered with global tech giants like CISCO and Palo Alto Networks, rapidly scaling to serve top-tier organizations including TCS iON, NTA, and CSIR.
                    <br /><br />
                    In 2024, he co-founded Austra Finserv Pvt. Ltd., offering integrated insurance and banking services, covering Health, Life, and General Insurance. The firm quickly established a strong market presence under his strategic leadership.
                    <br /><br />
                    Vijay Anand commenced his entrepreneurial journey by founding Shri VJ Corporation, specializing in networking, IT infrastructure, and security solutions. The company swiftly established a strong reputation by delivering high-quality networking and CCTV support to key clients such as NLC and Siemens through competitive tender projects.
                    <br /><br />
                    Building on this foundation, Vijay Anand launched RUVAN Intellect Pvt. Ltd., focusing on advanced cybersecurity and enterprise networking. By partnering with global leaders like CISCO and Palo Alto Networks, RUVAN Intellect successfully deployed cutting-edge firewall and cybersecurity solutions. The company expanded rapidly, executing projects for prominent organizations including Innovatiview, SKS Infotech, TCS iON, CSIR, and NTA, while scaling its technical workforce to meet growing demand.
                    <br /><br />
                    In addition to its core IT and cybersecurity services, RUVAN Intellect provides specialized CRM telecalling services to its affiliate, Austra Finserv Pvt. Ltd., enhancing customer engagement and operational support.
                  </p>
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-800 mb-2">Expertise</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Strategic Business Planning & Execution</li>
                      <li>Startup Development & Entrepreneurship</li>
                      <li>Financial Management & Market Expansion</li>
                      <li>Product Innovation & Go-to-Market Strategies</li>
                      <li>Negotiation & Partnership Development</li>
                      <li>Team Building & Leadership</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Education</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Master of Technology in Computer Science Engineering, Hindustan University</li>
                      <li>Master of Science in Software Engineering, Periyar Maniammai Institute of Science & Technology</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
} 