import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { WordsPullUp } from './WordsPullUp';

interface SkillCategory {
  title: string;
  skills: string[];
}

export const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: [
        "React", "Next.js", "TypeScript", "JavaScript", 
        "Redux", "Redux-Saga", "Redux Thunk", 
        "Framer Motion", "GSAP", 
        "Kendo React", "Material UI", 
        "Tailwind CSS", "Bootstrap", "SCSS",
        "Jest", "@testing-library/react"
      ]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSockets", "Socket.IO"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "Firebase"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["DigitalOcean", "Cloudflare S3", "PM2", "Nginx", "Jenkins", "GitHub", "GitLab", "CI/CD"]
    },
    {
      title: "3D & Creative",
      skills: ["Three.js", "React Three Fiber (R3F)", "Drei", "Blender"]
    }
  ];

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: (idx: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: idx * 0.15,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    })
  };

  return (
    <section id="skills" className="w-full bg-black py-24 px-4 sm:px-6 md:px-8 border-t border-white/[0.02]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Title */}
        <div className="mb-16 text-center">
          <WordsPullUp
            text="Technical Skills"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#E1E0CC]"
          />
          <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-2 font-light">
            Core tech stack, software libraries, and deployment tools
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={idx}
              className="bg-[#101010] border border-white/[0.03] rounded-2xl p-6 sm:p-8 hover:border-primary/20 transition-all duration-300 shadow-xl group flex flex-col justify-start"
            >
              {/* Category Title */}
              <h3 className="text-lg font-medium text-primary mb-6 border-b border-white/[0.03] pb-3 tracking-wide">
                {category.title}
              </h3>

              {/* Skills Tags Container */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => {
                  const isMainHighlight = ["React", "Next.js", "Node.js", "TypeScript", "Three.js", "Framer Motion", "GSAP"].includes(skill);
                  
                  return (
                    <span
                      key={sIdx}
                      className={`text-xs px-3 py-1.5 rounded-full font-light transition-all duration-200 hover:scale-105 ${
                        isMainHighlight 
                          ? "bg-primary/10 text-primary border border-primary/20 font-medium"
                          : "bg-white/[0.02] text-gray-400 border border-white/[0.05]"
                      }`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
