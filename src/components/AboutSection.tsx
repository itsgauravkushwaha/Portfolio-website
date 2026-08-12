import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

export const AboutSection: React.FC = () => {
  const aboutText = "Enthusiastic Full Stack Developer and MCA graduate with hands-on experience designing, developing, and deploying responsive web applications using React.js, JavaScript, Next.js, TypeScript, Python, Django, PostgreSQL, HTML5, CSS3, and SQL. Experienced in building end-to-end web applications, integrating REST APIs, developing backend services, and deploying production-ready solutions. Strong foundation in Object-Oriented Programming, Data Structures & Algorithms, and software development best practices. Passionate about solving real-world problems through scalable and maintainable code.";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Decorative 3D Assets positioned in corners */}

      {/* Top-Left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Moon 3D Asset"
            className="w-[100px] sm:w-[150px] md:w-[200px] h-auto object-contain opacity-90"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Sphere Asset"
            className="w-[90px] sm:w-[130px] md:w-[170px] h-auto object-contain opacity-90"
          />
        </FadeIn>
      </div>

      {/* Top-Right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Lego 3D Asset"
            className="w-[100px] sm:w-[150px] md:w-[200px] h-auto object-contain opacity-90"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="Group 134 3D Asset"
            className="w-[110px] sm:w-[160px] md:w-[210px] h-auto object-contain opacity-90"
          />
        </FadeIn>
      </div>

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
