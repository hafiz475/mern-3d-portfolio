import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';

interface AnimatedLetterProps {
  char: string;
  index: number;
  totalChars: number;
  progress: MotionValue<number>;
}

const AnimatedLetter: React.FC<AnimatedLetterProps> = ({ char, index, totalChars, progress }) => {
  const charProgress = index / totalChars;
  const start = charProgress - 0.1;
  const end = charProgress + 0.05;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="inline">
      {char}
    </motion.span>
  );
};

export const About: React.FC = () => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const headingSegments = [
    { text: "I am J Md Hafizur Rahman,", className: "font-normal text-[#E1E0CC]" },
    { text: "a Senior Product Engineer.", className: "font-serif italic text-primary" },
    { text: "I have skills in React, Next.js, Node.js, and Three.js.", className: "font-normal text-[#E1E0CC]" }
  ];

  const bodyText = "Over the last four years, I have worked with BizMagnets, Ideassion, and founded Direction7. Together, we have built SaaS platforms, real-time communication systems, and interactive 3D dashboards that scale to thousands of users.";
  const characters = bodyText.split("");

  return (
    <section id="about" className="w-full bg-black py-20 px-4 sm:px-6 md:px-8 flex items-center justify-center">
      {/* Inner Card */}
      <div className="bg-[#101010] rounded-2xl md:rounded-[2.5rem] w-full max-w-6xl p-8 sm:p-16 md:p-24 text-center border border-white/[0.02] shadow-2xl relative overflow-hidden">
        
        {/* Subtle decorative glow */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Small Label */}
        <span className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium block mb-6 sm:mb-8">
          Visual arts
        </span>

        {/* Main Heading */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-14">
          <WordsPullUpMultiStyle
            segments={headingSegments}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] sm:leading-[0.95] tracking-tight font-medium"
          />
        </div>

        {/* Body Paragraph with scroll reveal */}
        <div className="max-w-2xl mx-auto">
          <p
            ref={paragraphRef}
            className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed font-light tracking-wide text-center"
          >
            {characters.map((char, idx) => (
              <AnimatedLetter
                key={idx}
                char={char}
                index={idx}
                totalChars={characters.length}
                progress={scrollYProgress}
              />
            ))}
          </p>
        </div>

      </div>
    </section>
  );
};
