import React from 'react';
import { servicesData } from '../data/servicesData';
import { FadeIn } from './FadeIn';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="font-black uppercase text-center leading-none tracking-tight text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28 select-none"
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="w-full border-t border-[rgba(12,12,12,0.15)]">
          {servicesData.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1} y={30}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] gap-4 sm:gap-10">
                {/* Number */}
                <div
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                  className="font-black leading-none text-[#0C0C0C] tracking-tighter sm:w-1/3 flex-shrink-0 select-none"
                >
                  {service.number}
                </div>

                {/* Name + Description Stack */}
                <div className="flex flex-col gap-2 sm:w-2/3">
                  <h3
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                  >
                    {service.name}
                  </h3>
                  <p
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                    className="font-light leading-relaxed text-[#0C0C0C] opacity-60 max-w-2xl"
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
