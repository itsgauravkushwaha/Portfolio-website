import React from 'react';
import { FadeIn } from './FadeIn';
import { GraduationCap, Award, Calendar, School } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  score: string;
  year: string;
}

interface CertificationItem {
  title: string;
  issuer: string;
}

export const EducationSection: React.FC = () => {
  const educationList: EducationItem[] = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Chhatrapati Shivaji Maharaj University",
      score: "CGPA: 8.0 / 10",
      year: "2025"
    },
    {
      degree: "Bachelor of Science (Computer Science)",
      institution: "Mumbai University",
      score: "CGPA: 9.0 / 10",
      year: "2023"
    },
    {
      degree: "Higher Secondary Certificate (HSC - PCM)",
      institution: "RPKS Intermediate College",
      score: "75%",
      year: "2020"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Shishu Mandir, Khopoli",
      score: "55%",
      year: "2017"
    }
  ];

  const certificationsList: CertificationItem[] = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google"
    },
    {
      title: "Edureka Generative AI",
      issuer: "Edureka"
    }
  ];

  return (
    <section
      id="education"
      className="bg-[#0C0C0C] py-20 sm:py-24 md:py-32 px-4 sm:px-8 md:px-10 w-full relative z-10 border-t border-[#D7E2EA]/10"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            style={{ fontSize: 'clamp(2.2rem, 8vw, 130px)' }}
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 select-none"
          >
            Education &amp; Credentials
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Education Timeline (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="w-7 h-7 text-[#BBCCD7]" />
              <h3 className="text-2xl sm:text-3xl font-bold uppercase text-[#D7E2EA] tracking-wide">
                Education
              </h3>
            </div>

            <div className="flex flex-col gap-4 border-l-2 border-[#D7E2EA]/20 pl-4 sm:pl-6 ml-2">
              {educationList.map((edu, idx) => (
                <FadeIn key={edu.degree} delay={idx * 0.1} y={20}>
                  <div className="bg-[#121212] border border-[#D7E2EA]/15 rounded-[20px] sm:rounded-[28px] p-5 sm:p-7 relative hover:border-[#D7E2EA]/40 transition-all duration-300 shadow-lg">
                    {/* Bullet marker */}
                    <div className="absolute -left-[27px] sm:-left-[35px] top-7 w-4 h-4 rounded-full bg-[#BBCCD7] border-4 border-[#0C0C0C]" />

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h4 className="text-lg sm:text-xl font-bold text-[#D7E2EA]">
                        {edu.degree}
                      </h4>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#D7E2EA]/15 text-[#D7E2EA] w-fit">
                        {edu.score}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#D7E2EA]/60 font-light">
                      <div className="flex items-center gap-1.5">
                        <School className="w-4 h-4" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.year}</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right Side: Certifications (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-7 h-7 text-[#BBCCD7]" />
              <h3 className="text-2xl sm:text-3xl font-bold uppercase text-[#D7E2EA] tracking-wide">
                Certifications
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              {certificationsList.map((cert, idx) => (
                <FadeIn key={cert.title} delay={0.2 + idx * 0.1} y={20}>
                  <div className="bg-[#121212] border border-[#D7E2EA]/15 rounded-[20px] sm:rounded-[28px] p-6 flex items-start gap-4 hover:border-[#D7E2EA]/40 transition-all duration-300 shadow-lg">
                    <div className="p-3 rounded-2xl bg-[#1A1A1A] text-[#BBCCD7] flex-shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#D7E2EA] mb-1">
                        {cert.title}
                      </h4>
                      <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-medium">
                        Verified by {cert.issuer}
                      </span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
