import React, { useRef, useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

interface VideoSectionProps {
  videoSrc?: string;
  posterSrc?: string;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  videoSrc = "/assets/video.mp4",
  posterSrc = "/assets/modelvault/modelvault_hero.jpg"
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Attempt muted autoplay on mount
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Autoplay prevented:", err);
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(console.error);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="showreel" className="bg-[#0C0C0C] py-20 sm:py-24 md:py-32 px-4 sm:px-8 md:px-10 w-full relative z-10">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            style={{ fontSize: 'clamp(2.5rem, 9vw, 140px)' }}
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-8 sm:mb-14 select-none"
          >
            Featured Reel
          </h2>
        </FadeIn>

        {/* Video Browser Frame Container */}
        <FadeIn delay={0.15} y={30} className="w-full">
          <div className="w-full rounded-[24px] sm:rounded-[36px] md:rounded-[48px] border-2 border-[#D7E2EA]/30 bg-[#121212] p-3 sm:p-5 md:p-6 shadow-2xl overflow-hidden flex flex-col gap-3 group">
            {/* Top Frame Bar */}
            <div className="flex items-center justify-between px-3 py-2 bg-[#1A1A1A] rounded-2xl border border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>

              <span className="text-xs font-mono text-[#D7E2EA]/60 uppercase tracking-widest">
                Gaurav Kushwaha — Interactive Demo
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="p-1.5 rounded-lg bg-[#222222] text-[#D7E2EA] hover:bg-[#333333] transition-colors"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="p-1.5 rounded-lg bg-[#222222] text-[#D7E2EA] hover:bg-[#333333] transition-colors"
                  title="Fullscreen"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Video Screen Container - Clickable */}
            <div
              onClick={togglePlay}
              className="relative w-full h-[260px] sm:h-[400px] md:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#000000] flex items-center justify-center border border-white/10 cursor-pointer"
            >
              <video
                ref={videoRef}
                poster={posterSrc}
                loop
                muted={isMuted}
                playsInline
                autoPlay
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover object-center pointer-events-none"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play / Pause Overlay Button */}
              <div
                className={`absolute p-5 sm:p-6 rounded-full bg-[#D7E2EA] text-[#0C0C0C] shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 z-20 flex items-center justify-center pointer-events-none ${
                  isPlaying ? 'opacity-0 group-hover:opacity-90' : 'opacity-100'
                }`}
              >
                {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
