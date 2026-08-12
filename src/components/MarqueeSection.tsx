import React, { useRef, useState, useEffect } from 'react';
import { row1Images, row2Images } from '../data/marqueeImages';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Triple rows for continuous horizontal scroll coverage
  const row1Tripled = [...row1Images, ...row1Images, ...row1Images];
  const row2Tripled = [...row2Images, ...row2Images, ...row2Images];

  const row1Transform = `translateX(${scrollOffset - 200}px)`;
  const row2Transform = `translateX(${-(scrollOffset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1 - Moves RIGHT on scroll */}
        <div
          className="flex gap-3 whitespace-nowrap"
          style={{
            transform: row1Transform,
            willChange: 'transform',
          }}
        >
          {row1Tripled.map((url, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl overflow-hidden bg-neutral-900"
            >
              <img
                src={url}
                alt={`3D Work Marquee ${idx}`}
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>

        {/* Row 2 - Moves LEFT on scroll */}
        <div
          className="flex gap-3 whitespace-nowrap"
          style={{
            transform: row2Transform,
            willChange: 'transform',
          }}
        >
          {row2Tripled.map((url, idx) => (
            <div
              key={`row2-${idx}`}
              className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl overflow-hidden bg-neutral-900"
            >
              <img
                src={url}
                alt={`3D Work Marquee Row2 ${idx}`}
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
