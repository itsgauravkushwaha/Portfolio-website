import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { AboutScene } from './AboutScene';

export const AboutSection: React.FC = () => {
  const aboutText = "Enthusiastic Full Stack Developer and MCA graduate with hands-on experience designing, developing, and deploying responsive web applications using React.js, JavaScript, Next.js, TypeScript, Python, Django, PostgreSQL, HTML5, CSS3, and SQL. Experienced in building end-to-end web applications, integrating REST APIs, developing backend services, and deploying production-ready solutions. Strong foundation in Object-Oriented Programming, Data Structures & Algorithms, and software development best practices. Passionate about solving real-world problems through scalable and maintainable code.";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Three.js floating shapes replacing static corner images */}
      <AboutScene />

      {/* Main Content Column */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            style={{ fontSize: 'clamp(2.5rem, 10vw, 150px)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight select-none mb-8 sm:mb-12 md:mb-16"
          >
            About me
          </h2>
        </FadeIn>

        {/* Scroll-driven character opacity text */}
        <div className="max-w-[720px] w-full mb-12 sm:mb-16 md:mb-20 px-2 sm:px-4">
          <AnimatedText
            text={aboutText}
            className="text-[#D7E2EA] font-medium leading-relaxed text-sm sm:text-base md:text-xl text-center"
          />
        </div>

        {/* Contact Button */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton onClick={() => window.open('https://github.com/itsgauravkushwaha', '_blank')} />
        </FadeIn>
      </div>
    </section>
  );
};

