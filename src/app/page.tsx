import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <LogoMarquee />
      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We deliver cutting-edge technology solutions with unmatched expertise and dedication to excellence
            </p>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-black mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-black mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our innovative solutions can help you achieve your goals
            </p>
            <a
              href="/contact-sales"
              className="inline-flex items-center px-10 py-4 border-2 border-black text-lg font-semibold rounded-lg text-accent bg-white hover:bg-black hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
