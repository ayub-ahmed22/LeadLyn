'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ruvan Tech</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner in security and technology solutions
            </p>
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <span className="text-xl">📍</span>
                <span className="text-gray-300">
                  Plot No. 220, 2RV Grand,<br />
                  39th Street, Shankar Nagar,<br />
                  Pammal, Chennai – 600075
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-xl">📞</span>
                <a href="tel:8610803533" className="text-gray-300 hover:text-white transition-colors">
                  8610803533
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#customer-management" className="text-gray-400 hover:text-white transition-colors">
                  Customer Management
                </Link>
              </li>
              <li>
                <Link href="/services#building-management" className="text-gray-400 hover:text-white transition-colors">
                  Building Management
                </Link>
              </li>
              <li>
                <Link href="/services#networking" className="text-gray-400 hover:text-white transition-colors">
                  Networking & Cybersecurity
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ruvan Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 