'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const logos = [
  { name: 'TCS iON', image: '/logo/tcs.png' },
  { name: 'NTA', image: '/logo/nta.png' },
  { name: 'CSIR', image: '/logo/csir.png' },
  { name: 'NLC', image: '/logo/nlc.png' },
  { name: 'Siemens', image: '/logo/siemens.png' },
  { name: 'Innovatiview', image: '/logo/inno.png' },
  { name: 'SKS Infotech', image: '/logo/sks.png' },
  { name: 'Austra Finserv', image: '/logo/af.jpg' },
];

export default function LogoMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += 1;
      if (scrollPos >= scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
    };

    const interval = setInterval(scroll, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-primary/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          Trusted by Industry Leaders
        </h2>
        <div
          ref={scrollRef}
          className="flex space-x-12 items-center overflow-x-hidden whitespace-nowrap"
        >
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-48 h-24 relative transition-all duration-300"
            >
              <Image
                src={logo.image}
                alt={logo.name}
                fill
                className="object-contain"
                sizes="(max-width: 128px) 100vw, 128px"
              />
            </div>
          ))}
          {/* Duplicate set of logos for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-48 h-24 relative transition-all duration-300"
            >
              <Image
                src={logo.image}
                alt={logo.name}
                fill
                className="object-contain"
                sizes="(max-width: 128px) 100vw, 128px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 