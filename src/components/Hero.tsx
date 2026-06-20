import React, { useState } from 'react';
import { WordsPullUp } from './WordsPullUp';

export const Hero: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = ["About", "Experience", "Projects", "Skills", "Contact"];

  return (
    <section className="relative h-screen w-full p-4 md:p-6 bg-black flex flex-col justify-between">
      {/* Inset Container */}
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-zinc-950 flex flex-col justify-between">
        
        {/* Background Video (60% width on desktop, aligned to right) */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 right-0 w-full md:w-[60%] h-full object-cover pointer-events-none z-0"
        />

        {/* Noise Overlay */}
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none z-10" />

        {/* Horizontal Gradient Overlay (left to right blend) */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent pointer-events-none z-10 hidden md:block" />

        {/* Vertical Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none z-10" />

        {/* Navbar */}
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <ul className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2.5 md:px-8 md:py-3.5 flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 shadow-2xl border-x border-b border-white/[0.03]">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="font-medium text-[10px] sm:text-xs md:text-sm uppercase tracking-wider transition-colors duration-200"
                  style={{
                    color: hoveredIndex === idx ? '#E1E0CC' : 'rgba(225, 224, 204, 0.8)',
                  }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hero Content (bottom-aligned, heading only) */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 md:p-12 lg:p-16 z-20 w-full">
          <div className="flex justify-start items-end">
            <WordsPullUp
              text="Hafiz"
              showAsterisk={true}
              className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em]"
              style={{ color: '#E1E0CC' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

