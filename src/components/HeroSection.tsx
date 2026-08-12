import React from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import { Magnet } from './Magnet';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* 1. Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <nav className="flex justify-between items-center px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-8">
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); scrollTo('about'); }}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-base md:text-lg lg:text-[1.3rem] hover:opacity-70 transition-opacity duration-200"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => { e.preventDefault(); scrollTo('skills'); }}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-base md:text-lg lg:text-[1.3rem] hover:opacity-70 transition-opacity duration-200"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-base md:text-lg lg:text-[1.3rem] hover:opacity-70 transition-opacity duration-200"
          >
            Projects
          </a>
          <a
            href="#education"
            onClick={(e) => { e.preventDefault(); scrollTo('education'); }}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-base md:text-lg lg:text-[1.3rem] hover:opacity-70 transition-opacity duration-200"
          >
            Education
          </a>
        </nav>
      </FadeIn>

      {/* 2. Hero Heading - Perfectly Scaled & Responsive */}
      <div className="w-full overflow-hidden z-0 flex justify-center px-2 sm:px-4">
        <FadeIn delay={0.15} y={40} className="w-full flex justify-center">
          <h1 className="hero-heading font-black uppercase tracking-tighter leading-none whitespace-nowrap text-[11vw] sm:text-[12.5vw] md:text-[13.5vw] lg:text-[14.5vw] mt-2 sm:mt-0 md:-mt-4 text-center select-none">
            Hi, i&apos;m gaurav
          </h1>
        </FadeIn>
      </div>

      {/* 3. Hero Character (Goku Flying Nimbus - Fully Responsive across all devices) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[46%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 pointer-events-auto max-w-full flex justify-center">
        <FadeIn delay={0.6} y={30} className="flex justify-center w-full">
          <Magnet
            padding={150}
            strength={3.5}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src="/assets/hero_goku.png"
              alt="Gaurav Kushwaha Flying Nimbus Hero"
              className="w-[190px] min-[400px]:w-[230px] sm:w-[320px] md:w-[420px] lg:w-[500px] xl:w-[540px] h-auto object-contain pointer-events-none drop-shadow-2xl max-w-[80vw] sm:max-w-none"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* 4. Bottom Bar */}
      <div className="w-full flex justify-between items-end pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-10 z-20 gap-4">
        <FadeIn delay={0.35} y={20}>
          <p
            style={{ fontSize: 'clamp(0.7rem, 1.2vw, 1.35rem)' }}
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[140px] sm:max-w-[200px] md:max-w-[260px]"
          >
            a full-stack & ai creator driven by crafting striking and intelligent applications
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={() => scrollTo('about')} />
        </FadeIn>
      </div>
    </section>
  );
};
