import React from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';

export const App: React.FC = () => {
  return (
    <main className="w-full bg-[#0C0C0C] min-h-screen overflow-x-clip text-[#D7E2EA] font-kanit">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
};

export default App;
