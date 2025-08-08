'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white font-sans uppercase">LEADLYN</h3>
            <p className="text-white mb-4">
              Your trusted partner in security and technology solutions
            </p>
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <span className="text-xl text-white">📍</span>
                <span className="text-white">
                  26,Cunningham Road, Vasanth Nagar,<br />
                  Bengaluru, Karnataka 560052
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-xl text-white">📞</span>
                <a href="tel:9500696146" className="text-white hover:text-accent transition-colors">
                  9500696146
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-xl text-white">✉️</span>
                <a href="mailto:operations@leadlyn.com" className="text-white hover:text-accent transition-colors">
                  operation@leadlyn.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-white hover:text-accent transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#telecalling" className="text-white hover:text-accent transition-colors">
                  Telecalling Services
                </Link>
              </li>
              <li>
                <Link href="/services#lead-generation" className="text-white hover:text-accent transition-colors">
                  Lead Generation & Outsourcing
                </Link>
              </li>
              <li>
                <Link href="/services#sales-service" className="text-white hover:text-accent transition-colors">
                  End-to-End Sales & Service
                </Link>
              </li>
              <li>
                <Link href="/services#loan-insurance" className="text-white hover:text-accent transition-colors">
                  Loan & Insurance Services
                </Link>
              </li>
              <li>
                <Link href="/services#cctv-cybersecurity" className="text-white hover:text-accent transition-colors">
                  CCTV & Cybersecurity
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent mt-12 pt-8 text-center text-white">
          <p>© 2025 <span className="font-sans uppercase">LEADLYN</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 
