import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { Code2, Server, Database as DbIcon, Cpu, Wrench, BrainCircuit } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  description?: string;
}

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: <Code2 className="w-6 h-6 text-[#BBCCD7]" />,
      skills: ["Next.js", "React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "Responsive Web Design"]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 text-[#BBCCD7]" />,
      skills: ["Python", "Django", "REST APIs", "Supabase"]
    },
    {
      title: "Database",
      icon: <DbIcon className="w-6 h-6 text-[#BBCCD7]" />,
      skills: ["PostgreSQL", "SQL", "Supabase"]
    },
    {
      title: "State & Validation",
      icon: <BrainCircuit className="w-6 h-6 text-[#BBCCD7]" />,
      skills: ["Zustand", "Zod"]
    },
    {
      title: "AI & Agentic Workflows",
      icon: <Cpu className="w-6 h-6 text-[#BBCCD7]" />,
      skills: ["OpenAI GPT", "Claude", "Gemini", "Llama", "DeepSeek", "Mistral", "Perplexity AI"],
      description: "Leveraged for AI-assisted coding, agentic workflows, and SaaS product development."
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6 text-[#BBCCD7]" />,
      skills: ["Git", "GitHub", "Vercel", "Render", "Resend API", "Cloudflare Workers"]
    },
    {
      title: "Core Concepts",
      icon: <BrainCircuit className="w-6 h-6 text-[#BBCCD7]" />,
      skills: ["Object-Oriented Programming (OOP)", "Data Structures & Algorithms", "API Integration", "SDLC", "Version Control", "Debugging"]
    }
  ];

  const filteredCategories = activeTab === 'All'
    ? categories
    : categories.filter(c => c.title.toLowerCase().includes(activeTab.toLowerCase()));

  const tabList = ['All', 'Frontend', 'Backend', 'Database', 'AI & Agentic', 'Tools'];

  return (
    <section
      id="skills"
      className="bg-[#0C0C0C] py-20 sm:py-24 md:py-32 px-4 sm:px-8 md:px-10 w-full relative z-10"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            style={{ fontSize: 'clamp(2.5rem, 9vw, 140px)' }}
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-8 sm:mb-12 select-none"
          >
            Technical Skills
          </h2>
        </FadeIn>

        {/* Filter Tabs */}
        <FadeIn delay={0.1} y={20} className="w-full mb-12 flex justify-center">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 bg-[#141414] p-2 rounded-full border border-[#D7E2EA]/15 max-w-full overflow-x-auto">
            {tabList.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-[#D7E2EA] text-[#0C0C0C] font-semibold shadow-lg'
                    : 'text-[#D7E2EA]/70 hover:text-[#D7E2EA] hover:bg-[#D7E2EA]/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filteredCategories.map((cat, idx) => (
            <FadeIn key={cat.title} delay={idx * 0.08} y={30} className="h-full">
              <div className="bg-[#121212] border border-[#D7E2EA]/15 rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 h-full flex flex-col justify-between hover:border-[#D7E2EA]/40 transition-all duration-300 group hover:-translate-y-1 shadow-xl">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-2xl bg-[#1A1A1A] group-hover:bg-[#222222] transition-colors">
                      {cat.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#D7E2EA] tracking-wide">
                      {cat.title}
                    </h3>
                  </div>

                  {cat.description && (
                    <p className="text-xs sm:text-sm text-[#D7E2EA]/60 font-light mb-4 italic">
                      {cat.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mt-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-[#1A1A1A] text-[#D7E2EA] border border-[#D7E2EA]/10 group-hover:border-[#D7E2EA]/25 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
