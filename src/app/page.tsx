import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import ServicesSection from './components/ServicesSection';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <LogoMarquee />

      {/* Summarized Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">Our Solutions</h2>
          <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-gray-200">
            {[ // summarized from solutions/page.tsx
              {
                title: 'Telecalling Services',
                description: 'Professional customer engagement and support.',
              },
              {
                title: 'Lead Generation & Outsourcing',
                description: 'Scalable business growth and operational efficiency.',
              },
              {
                title: 'End-to-End Sales & Service',
                description: 'Complete sales lifecycle management.',
              },
              {
                title: 'Loan & Insurance Services',
                description: 'Comprehensive financial solutions for individuals and businesses.',
              },
              {
                title: 'CCTV & Cybersecurity',
                description: 'Advanced security and data protection for modern organizations.',
              },
            ].map((sol, idx) => (
              <div key={idx} className="min-w-[260px] max-w-xs bg-white rounded-xl shadow-md p-6 flex flex-col items-start justify-between">
                <h3 className="text-xl font-semibold text-primary mb-2">{sol.title}</h3>
                <p className="text-gray-700 mb-2">{sol.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summarized Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">Our Services</h2>
          <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-gray-200">
            {[ // summarized from ServicesSection
              {
                title: 'Telecalling Services',
                description: 'Professional outbound and inbound customer engagement solutions.'
              },
              {
                title: 'Lead Generation & Outsourcing',
                description: 'Scalable lead generation and business process outsourcing.'
              },
              {
                title: 'End-to-End Sales & Service',
                description: 'Complete sales lifecycle from cold calling to deal closure.'
              },
              {
                title: 'Loan & Insurance Services',
                description: 'Personal, home, and business loans with comprehensive insurance coverage.'
              },
              {
                title: 'CCTV & Cybersecurity',
                description: 'Complete security systems with advanced cybersecurity protection.'
              },
            ].map((service, idx) => (
              <div key={idx} className="min-w-[260px] max-w-xs bg-gray-50 rounded-xl shadow p-6 flex flex-col items-start justify-between">
                <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Engagement Section: Testimonials */}
      <section className="py-20 bg-gradient-to-b from-accent/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-gray-700 mb-4">“LeadLyn’s team helped us scale our sales pipeline and improve customer engagement. Their telecalling and lead generation services are top-notch!”</p>
              <span className="font-semibold text-primary">— Operations Manager, Tech Solutions</span>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-gray-700 mb-4">“We trust LeadLyn for all our cybersecurity and networking needs. Their expertise and support are unmatched.”</p>
              <span className="font-semibold text-primary">— IT Head, Innovatiview</span>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-gray-700 mb-4">“The team at LeadLyn made our loan and insurance process seamless and stress-free. Highly recommended!”</p>
              <span className="font-semibold text-primary">— CFO, Infotech</span>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Engagement Section: Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-primary">Consultation</h3>
              <p className="text-gray-600 text-center">We listen to your needs and understand your business goals.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-primary">Strategy</h3>
              <p className="text-gray-600 text-center">We design a tailored solution and action plan for your business.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-primary">Execution</h3>
              <p className="text-gray-600 text-center">Our team implements the solution with full transparency and support.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-primary">Growth</h3>
              <p className="text-gray-600 text-center">We monitor results, optimize, and help you scale further.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We accelerate your business growth with expert lead generation, professional telecalling, and end-to-end sales solutions. Our team combines deep industry knowledge with secure technology—including loans & insurance, CCTV, networking, and cybersecurity—to deliver measurable results, exceptional customer engagement, and peace of mind for your organization.
            </p>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our innovative solutions can help you achieve your goals
            </p>
            <a
              href="/contactsales"
              className="inline-flex items-center px-10 py-4 border-2 border-white text-lg font-semibold rounded-lg text-primary bg-white hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
