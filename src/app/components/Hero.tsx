'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[90vh] bg-gradient-to-r from-primary to-accent text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90 z-10" />
      <Image
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&h=1080&q=80"
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/50 z-10" />
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Transforming Businesses Through
            <span className="text-primary"> Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mb-12 leading-relaxed">
            Empowering organizations with cutting-edge security and technology solutions
            that drive growth and success
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-lg font-semibold rounded-lg text-white bg-transparent hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Solutions
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-accent text-lg font-semibold rounded-lg text-white bg-primary hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
} 