import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { WordsPullUp } from './WordsPullUp';

interface Project {
  title: string;
  role: string;
  tech: string;
  description: string[];
  liveLink?: string;
  githubLink?: string;
}

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const projects: Project[] = [
    {
      title: "Direction7",
      role: "Founder Project",
      tech: "MERN Stack, Firebase, DigitalOcean, Cloudflare S3, PM2, Nginx, Three.js",
      description: [
        "Designed and deployed a scalable B2B/B2C platform with secure authentication and production cloud infrastructure.",
        "Built real-time customization workflows and interactive 3D user experiences using Three.js."
      ],
      liveLink: "https://www.direction7.com",
      githubLink: "https://github.com/hafiz475/crazMotors"
    },
    {
      title: "AI Job Recommendation Platform",
      role: "AI Full Stack Project",
      tech: "React, TypeScript, FastAPI, PostgreSQL, OpenAI, Gemini AI",
      description: [
        "Built a full-stack AI-powered resume-to-role recommendation engine.",
        "Designed intelligent matching logic for explainable role relevance and optimized vector queries."
      ],
      liveLink: "https://ai-job-recommendation-system-omega.vercel.app/",
      githubLink: "https://github.com/hafiz475/AI-Job-Recommendation-System"
    }
  ];

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (idx: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: idx * 0.2,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    })
  };

  return (
    <section id="projects" className="w-full bg-[#050505] py-24 px-4 sm:px-6 md:px-8 border-t border-white/[0.02]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Title */}
        <div className="mb-16 text-center">
          <WordsPullUp
            text="Selected Projects"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#E1E0CC]"
          />
          <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-2 font-light">
            Independently built applications from architecture to deployment
          </p>
        </div>

        {/* Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={idx}
              className="bg-[#101010] border border-white/[0.03] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-primary/20 transition-colors duration-300 relative group overflow-hidden shadow-2xl"
            >
              {/* Card Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/[0.02] rounded-full blur-[40px] group-hover:bg-primary/[0.05] transition-colors duration-500 pointer-events-none" />

              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-primary/60 font-medium font-mono">
                      {project.role}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-medium text-[#E1E0CC] mt-1">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Action Links */}
                  <div className="flex items-center gap-3">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 hover:text-[#E1E0CC] transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 hover:text-primary transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-xs text-primary/50 font-mono mb-6 pb-2 border-b border-white/[0.03]">
                  {project.tech}
                </p>

                <ul className="flex flex-col gap-3 text-left">
                  {project.description.map((bullet, i) => (
                    <li key={i} className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed flex items-start gap-2">
                      <span className="text-primary mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
