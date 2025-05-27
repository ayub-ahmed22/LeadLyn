'use client';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';

const solutions = [
  {
    industry: "Commercial",
    description: "Comprehensive security and technology solutions for businesses",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=800&q=80",
    challenges: [
      "Security management",
      "Network infrastructure",
      "Access control"
    ],
    solutions: [
      {
        name: "Smart Access Control",
        description: "Advanced access management systems for enhanced security",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&h=600&q=80",
        benefits: [
          "Biometric authentication",
          "Mobile access",
          "Audit trails"
        ]
      },
      {
        name: "Integrated Security",
        description: "Comprehensive security systems with centralized management",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=600&q=80",
        benefits: [
          "CCTV monitoring",
          "Alarm systems",
          "Remote access"
        ]
      }
    ]
  },
  {
    industry: "Manufacturing",
    description: "Industrial automation and security solutions",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&h=800&q=80",
    challenges: [
      "Production monitoring",
      "Equipment security",
      "Process automation"
    ],
    solutions: [
      {
        name: "Production Monitoring",
        description: "Real-time monitoring and control of manufacturing processes",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=600&q=80",
        benefits: [
          "Real-time data",
          "Process optimization",
          "Quality control"
        ]
      },
      {
        name: "Network Infrastructure",
        description: "Robust industrial networking solutions",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=600&q=80",
        benefits: [
          "High reliability",
          "Scalability",
          "Remote access"
        ]
      }
    ]
  },
  {
    industry: "Residential",
    description: "Complete home security and automation solutions",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&h=800&q=80",
    challenges: [
      "Home security",
      "Remote monitoring",
      "Smart home integration"
    ],
    solutions: [
      {
        name: "Smart Home Security",
        description: "Integrated security system with mobile app control",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&h=600&q=80",
        benefits: [
          "Remote monitoring",
          "Smart alerts",
          "Easy control"
        ]
      },
      {
        name: "Home Network Setup",
        description: "High-speed home networking with complete coverage",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&h=600&q=80",
        benefits: [
          "Full coverage",
          "Parental controls",
          "Guest access"
        ]
      }
    ]
  }
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="Solutions Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-6">RUVAN INTELLECT</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Tailored security and technology solutions for your specific industry needs
          </p>
        </div>
      </section>

      {/* Key Partnerships & Business Impact Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Journey & Impact</h2>
          <p className="text-gray-700 text-lg">
            Vijay Anand commenced his entrepreneurial journey by founding Shri VJ Corporation, specializing in networking, IT infrastructure, and security solutions. The company swiftly established a strong reputation by delivering high-quality networking and CCTV support to key clients such as NLC and Siemens through competitive tender projects.<br /><br />
            Building on this foundation, Vijay Anand launched RUVAN Intellect Pvt. Ltd., focusing on advanced cybersecurity and enterprise networking. By partnering with global leaders like CISCO and Palo Alto Networks, RUVAN Intellect successfully deployed cutting-edge firewall and cybersecurity solutions. The company expanded rapidly, executing projects for prominent organizations including Innovatiview, SKS Infotech, TCS iON, CSIR, and NTA, while scaling its technical workforce to meet growing demand.<br /><br />
            In addition to its core IT and cybersecurity services, RUVAN Intellect provides specialized CRM telecalling services to its affiliate, Austra Finserv Pvt. Ltd., enhancing customer engagement and operational support.
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.industry}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{solution.industry}</h2>
                  <p className="text-xl text-gray-600 mb-6">{solution.description}</p>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Key Challenges:</h3>
                    <ul className="space-y-2">
                      {solution.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gray-50">
                {solution.solutions.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.name}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="space-y-2">
                        {item.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="CTA Background"
          fill
          className="object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let us help you find the perfect security and technology solution for your specific needs
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
} 