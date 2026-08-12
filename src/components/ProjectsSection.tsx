import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projectsData, ProjectItem } from '../data/projectsData';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
}

const ImageMockupFrame: React.FC<{ src: string; alt: string; className?: string; heightClass?: string }> = ({
  src,
  alt,
  className = "",
  heightClass = "h-[160px] sm:h-[200px] md:h-[240px]"
}) => {
  return (
    <div className={`w-full rounded-2xl border border-white/10 bg-[#141414] overflow-hidden flex flex-col shadow-xl group ${className}`}>
      {/* Browser Bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#1C1C1C] border-b border-white/10 flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-[10px] text-[#D7E2EA]/40 font-mono tracking-wider truncate max-w-[150px] sm:max-w-[220px]">
          preview
        </div>
        <div className="w-6" />
      </div>

      {/* Image Container with Top-Aligned Fit */}
      <div className={`w-full relative overflow-hidden bg-[#0C0C0C] ${heightClass}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.025;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center sticky top-16 sm:top-24 md:top-28 w-full my-2 sm:my-4"
      style={{ top: `calc(4.5rem + ${index * 20}px)` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[28px] sm:rounded-[44px] md:rounded-[56px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between gap-4 sm:gap-6 shadow-2xl overflow-hidden max-h-[88vh] overflow-y-auto no-scrollbar"
      >
        {/* Card Top Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-b border-[#D7E2EA]/20 pb-3 sm:pb-4">
          <div className="flex items-center gap-3 sm:gap-5">
            <span
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3.25rem)' }}
              className="font-black text-[#D7E2EA] leading-none select-none flex-shrink-0"
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase text-[11px] sm:text-xs font-semibold tracking-widest">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] uppercase font-bold text-base sm:text-xl md:text-2xl tracking-wide">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton onClick={() => window.open(project.liveUrl, '_blank')} />
        </div>

        {/* Tech Stack Badge Row */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span className="text-[11px] sm:text-xs font-semibold uppercase text-[#D7E2EA]/50 tracking-wider mr-1">Tech:</span>
          {project.techStack.split(',').map((tech) => (
            <span
              key={tech.trim()}
              className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-medium bg-[#181818] text-[#D7E2EA] border border-[#D7E2EA]/15"
            >
              {tech.trim()}
            </span>
          ))}
        </div>

        {/* Project Description Bullets */}
        {project.descriptionBullets && (
          <ul className="list-disc list-inside text-xs sm:text-sm text-[#D7E2EA]/80 font-light space-y-1 my-0.5">
            {project.descriptionBullets.map((bullet, i) => (
              <li key={i} className="leading-relaxed">
                {bullet}
              </li>
            ))}
          </ul>
        )}

        {/* Card Bottom Row: 2-Column Image Grid with Sleek Browser Mockup Frames */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full items-stretch mt-1">
          {/* Left Column (40% width on md+): 2 stacked browser mockups */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <ImageMockupFrame
              src={project.col1Image1}
              alt={`${project.name} preview 1`}
              heightClass="h-[120px] sm:h-[150px] md:h-[160px]"
            />
            <ImageMockupFrame
              src={project.col1Image2}
              alt={`${project.name} preview 2`}
              heightClass="h-[120px] sm:h-[150px] md:h-[160px]"
            />
          </div>

          {/* Right Column (60% width on md+): 1 tall main browser mockup */}
          <div className="md:col-span-7 h-full flex flex-col">
            <ImageMockupFrame
              src={project.col2Image}
              alt={`${project.name} preview main`}
              heightClass="h-[250px] sm:h-[310px] md:h-[340px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-16 sm:pt-20 pb-32 px-3 sm:px-6 md:px-10 relative z-10 w-full"
    >
      {/* Section Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          style={{ fontSize: 'clamp(2.5rem, 10vw, 150px)' }}
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-10 sm:mb-16 select-none"
        >
          Projects
        </h2>
      </FadeIn>

      {/* Sticky Stacking Cards Container */}
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10 sm:gap-12 relative pb-20">
        {projectsData.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx}
            totalCards={projectsData.length}
          />
        ))}
      </div>
    </section>
  );
};
