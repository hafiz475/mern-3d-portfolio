import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';

export const Features: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isGridInView = useInView(gridRef, { once: true, margin: "-100px" });

  const line1Segments = [
    { text: "Production-grade engineering for scalable SaaS applications.", className: "text-[#E1E0CC] font-normal text-center" }
  ];

  const line2Segments = [
    { text: "Built for performance. Powered by code.", className: "text-gray-500 font-normal text-center" }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const card2Items = [
    "TypeScript & Redux Thunk core",
    "Drag-and-drop workflow builders",
    "Real-time Socket.IO interfaces",
    "Automated testing (Jest & React)",
  ];

  const card3Items = [
    "Real-time sensor monitoring",
    "Redux-Saga async dashboards",
    "Razorpay checkout integration",
  ];

  const card4Items = [
    "Three.js interactive 3D worlds",
    "OpenAI / Gemini AI matching",
    "Production cloud (PM2, Nginx, N-tier)",
  ];

  return (
    <section id="experience" className="relative min-h-screen bg-black py-24 px-4 sm:px-6 md:px-8 flex flex-col justify-center overflow-hidden">
      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none z-0" />

      {/* Subtle background gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />

      {/* Header text container */}
      <div className="flex flex-col gap-3 items-center justify-center mb-16 sm:mb-20 z-10">
        <WordsPullUpMultiStyle
          segments={line1Segments}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight max-w-2xl"
        />
        <WordsPullUpMultiStyle
          segments={line2Segments}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight max-w-2xl"
        />
      </div>

      {/* Cards Grid */}
      <motion.div
        ref={gridRef}
        variants={containerVariants}
        initial="hidden"
        animate={isGridInView ? "visible" : "hidden"}
        className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-[480px] gap-4 sm:gap-3 md:gap-2 z-10"
      >
        
        {/* Card 1 - Video Card */}
        <motion.div
          variants={cardVariants}
          className="relative rounded-2xl overflow-hidden h-[380px] lg:h-full flex flex-col justify-end p-6 md:p-8 border border-white/[0.03] shadow-xl group/card"
        >
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 transition-transform duration-700 group-hover/card:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 pointer-events-none z-10" />
          <h3 className="text-lg sm:text-xl font-medium text-[#E1E0CC] text-left relative z-20 tracking-wide">
            Immersive 3D experiences.
          </h3>
        </motion.div>

        {/* Card 2 - Storyboard Card */}
        <motion.div
          variants={cardVariants}
          className="bg-[#212121] rounded-2xl overflow-hidden h-[380px] lg:h-full flex flex-col justify-between p-6 md:p-8 border border-white/[0.03] shadow-xl"
        >
          {/* Top Row: Icon and Number */}
          <div className="flex justify-between items-start w-full">
            <img
              src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
              alt="Project Storyboard Icon"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover border border-white/[0.05]"
            />
            <span className="text-sm font-mono text-primary/30 font-bold">01</span>
          </div>

          {/* Middle: Title and Checklist */}
          <div className="flex flex-col gap-4 w-full">
            <h3 className="text-lg sm:text-xl font-medium text-[#E1E0CC] text-left tracking-wide">
              Core SaaS Platform.
            </h3>
            <div className="flex flex-col gap-3">
              {card2Items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-left">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-xs sm:text-sm font-light tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: Learn More */}
          <a
            href="#saas"
            className="group/link flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-widest text-primary/80 hover:text-primary transition-colors font-medium self-start"
          >
            <span>Learn more</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 transform -rotate-45 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Card 3 - Smart Critiques Card */}
        <motion.div
          variants={cardVariants}
          className="bg-[#212121] rounded-2xl overflow-hidden h-[380px] lg:h-full flex flex-col justify-between p-6 md:p-8 border border-white/[0.03] shadow-xl"
        >
          {/* Top Row: Icon and Number */}
          <div className="flex justify-between items-start w-full">
            <img
              src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
              alt="Enterprise E-commerce Icon"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover border border-white/[0.05]"
            />
            <span className="text-sm font-mono text-primary/30 font-bold">02</span>
          </div>

          {/* Middle: Title and Checklist */}
          <div className="flex flex-col gap-4 w-full">
            <h3 className="text-lg sm:text-xl font-medium text-[#E1E0CC] text-left tracking-wide">
              Enterprise E-commerce.
            </h3>
            <div className="flex flex-col gap-3">
              {card3Items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-left">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-xs sm:text-sm font-light tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: Learn More */}
          <a
            href="#ecommerce"
            className="group/link flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-widest text-primary/80 hover:text-primary transition-colors font-medium self-start"
          >
            <span>Learn more</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 transform -rotate-45 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Card 4 - Immersion Capsule Card */}
        <motion.div
          variants={cardVariants}
          className="bg-[#212121] rounded-2xl overflow-hidden h-[380px] lg:h-full flex flex-col justify-between p-6 md:p-8 border border-white/[0.03] shadow-xl"
        >
          {/* Top Row: Icon and Number */}
          <div className="flex justify-between items-start w-full">
            <img
              src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
              alt="Founders Lab Icon"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover border border-white/[0.05]"
            />
            <span className="text-sm font-mono text-primary/30 font-bold">03</span>
          </div>

          {/* Middle: Title and Checklist */}
          <div className="flex flex-col gap-4 w-full">
            <h3 className="text-lg sm:text-xl font-medium text-[#E1E0CC] text-left tracking-wide">
              Founders Lab.
            </h3>
            <div className="flex flex-col gap-3">
              {card4Items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-left">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-xs sm:text-sm font-light tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: Learn More */}
          <a
            href="#founders-lab"
            className="group/link flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-widest text-primary/80 hover:text-primary transition-colors font-medium self-start"
          >
            <span>Learn more</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 transform -rotate-45 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
};
