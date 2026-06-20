import React, { useRef, useEffect, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import img1 from '../assets/project_human.png';
import img2 from '../assets/project_brand.png';
import img3 from '../assets/project_automotive.png';
import img4 from '../assets/project_architecture.png';
import img5 from '../assets/explore_asteroids.png';
import img6 from '../assets/explore_blue_fire.png';
import img7 from '../assets/explore_green_planet.png';
import img8 from '../assets/playground_abstract.png';
import img9 from '../assets/playground_cyber.png';
import img10 from '../assets/work_crowd_portrait.png';

interface Project {
  title: string;
  subtitle: string;
  image: string;
  tech: string;
  description: string;
  liveLink?: string;
  githubLink?: string;
}

const PROJECTS: Project[] = [
  { title: "Direction7", subtitle: "Founder Project", image: img1, tech: "MERN, Three.js, Firebase", description: "Scalable B2B/B2C platform with 3D customization.", liveLink: "https://www.direction7.com", githubLink: "https://github.com/hafiz475/crazMotors" },
  { title: "AI Job Engine", subtitle: "AI Full Stack", image: img2, tech: "React, FastAPI, OpenAI", description: "AI-powered resume-to-role recommendation engine.", liveLink: "https://ai-job-recommendation-system-omega.vercel.app/", githubLink: "https://github.com/hafiz475/AI-Job-Recommendation-System" },
  { title: "Founders Lab", subtitle: "Frontend Sandbox", image: img3, tech: "React, GSAP, Canvas", description: "Physics-based UI components and spring animations.", githubLink: "https://github.com/hafiz475" },
  { title: "Cloud Deploy", subtitle: "DevOps Pipeline", image: img4, tech: "Docker, Nginx, PM2", description: "Production cloud infrastructure with CI/CD.", githubLink: "https://github.com/hafiz475" },
  { title: "Neural Viz", subtitle: "Data Visualization", image: img5, tech: "D3.js, WebGL, Python", description: "Interactive neural network topology visualizer.", githubLink: "https://github.com/hafiz475" },
  { title: "Quantum UI", subtitle: "Design System", image: img6, tech: "React, Storybook, Figma", description: "Comprehensive component library with 60+ primitives.", githubLink: "https://github.com/hafiz475" },
  { title: "EcoTrack", subtitle: "IoT Dashboard", image: img7, tech: "React, Socket.IO, MQTT", description: "Real-time environmental sensor monitoring platform.", githubLink: "https://github.com/hafiz475" },
  { title: "Pixel Engine", subtitle: "Creative Tool", image: img8, tech: "Canvas, WebAssembly", description: "Browser-based pixel art editor with layer support.", githubLink: "https://github.com/hafiz475" },
  { title: "CyberVault", subtitle: "Security Suite", image: img9, tech: "Node.js, Crypto, Redis", description: "End-to-end encrypted file sharing platform.", githubLink: "https://github.com/hafiz475" },
  { title: "SocialPulse", subtitle: "Analytics Engine", image: img10, tech: "Next.js, PostgreSQL, ML", description: "Social media sentiment analysis dashboard.", githubLink: "https://github.com/hafiz475" },
];

const TOTAL = PROJECTS.length;
const ANGLE_STEP = (2 * Math.PI) / TOTAL;
const AUTO_SPEED = 0.0015;

export const Projects: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const targetAngle = useRef(0);
  const currentAngle = useRef(0);
  const pausedRef = useRef(false);
  const rafRef = useRef(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const loop = () => {
      if (!pausedRef.current) {
        targetAngle.current -= AUTO_SPEED;
      }
      currentAngle.current += (targetAngle.current - currentAngle.current) * 0.06;

      const R = isMobile ? 320 : 550;

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const raw = currentAngle.current + i * ANGLE_STEP;
        let norm = ((raw % (2 * Math.PI)) + 3 * Math.PI) % (2 * Math.PI) - Math.PI;

        const x = R * Math.sin(norm);
        const y = R * (1 - Math.cos(norm));
        const rot = norm * (180 / Math.PI);
        const absNorm = Math.abs(norm);
        const maxVisible = Math.PI * 0.52;

        const opacity = absNorm > maxVisible ? 0 : 1 - (absNorm / maxVisible) * 0.7;
        const scale = absNorm > maxVisible ? 0.75 : 1 - (absNorm / maxVisible) * 0.12;
        const zi = Math.round((1 - absNorm / Math.PI) * 20);

        card.style.transform = `translate(-50%, 0) translate(${x}px, ${y}px) rotate(${rot}deg) scale(${scale})`;
        card.style.opacity = String(Math.max(0, opacity));
        card.style.zIndex = String(zi);
      });

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isMobile]);

  const jumpBy = useCallback((dir: number) => {
    targetAngle.current += dir * ANGLE_STEP;
  }, []);

  return (
    <section id="projects" className="w-full bg-[#050505] py-24 px-4 sm:px-6 md:px-8 border-t border-white/[0.02] relative overflow-hidden select-none">
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#E1E0CC]">Selected Projects</h2>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-2 font-light">Independently built applications from architecture to deployment</p>
        </div>

        {/* Arc Container */}
        <div
          className="relative w-full overflow-hidden"
          style={{ height: isMobile ? 320 : 420 }}
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
        >
          <div className="absolute left-1/2 top-0" style={{ width: 0, height: 0 }}>
            {PROJECTS.map((project, i) => (
              <div
                key={i}
                ref={(el) => { cardsRef.current[i] = el; }}
                onClick={() => setSelectedProject(project)}
                className="absolute cursor-pointer group/card"
                style={{ width: isMobile ? 180 : 240, height: isMobile ? 260 : 340, top: 0, left: 0, willChange: 'transform, opacity', transformOrigin: 'center top' }}
              >
                <div className="w-full h-full rounded-2xl md:rounded-[1.4rem] overflow-hidden border border-white/[0.06] shadow-xl bg-black relative">
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105" draggable={false} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <h3 className="text-sm md:text-base font-semibold text-white leading-tight">{project.title}</h3>
                    <p className="text-[10px] md:text-xs text-white/60 italic mt-0.5">{project.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-6 mt-6">
          <button onClick={() => jumpBy(1)} className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] hover:bg-[#E1E0CC] text-[#E1E0CC] hover:text-black flex items-center justify-center transition-all duration-300 cursor-pointer" aria-label="Previous">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => jumpBy(-1)} className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] hover:bg-[#E1E0CC] text-[#E1E0CC] hover:text-black flex items-center justify-center transition-all duration-300 cursor-pointer" aria-label="Next">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-zoom-out">
            <motion.div initial={{ scale: 0.92, y: 30, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.92, y: 30, opacity: 0 }} transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }} onClick={(e) => e.stopPropagation()} className="w-full max-w-[520px] bg-[#0c0c0c] border border-white/10 rounded-[1.8rem] overflow-hidden shadow-2xl cursor-default">
              <div className="w-full aspect-video border-b border-white/10 overflow-hidden relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 border border-white/10 flex items-center justify-center text-[#E1E0CC] text-lg cursor-pointer">✕</button>
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-4 text-left">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#E1E0CC]/60 block font-mono">{selectedProject.subtitle}</span>
                  <h3 className="text-xl sm:text-2xl font-medium text-[#E1E0CC] mt-1">{selectedProject.title}</h3>
                </div>
                <div className="text-[10px] text-[#E1E0CC]/70 font-mono py-1.5 px-3 rounded-lg bg-black border border-white/5 self-start">{selectedProject.tech}</div>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{selectedProject.description}</p>
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/5">
                  {selectedProject.githubLink && <a href={selectedProject.githubLink} target="_blank" rel="noreferrer" className="bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 text-[#E1E0CC] text-xs font-medium px-5 py-3 rounded-xl transition-colors">GitHub Repo</a>}
                  {selectedProject.liveLink && <a href={selectedProject.liveLink} target="_blank" rel="noreferrer" className="bg-[#E1E0CC] hover:bg-[#c2c1ad] text-black text-xs font-semibold px-5 py-3 rounded-xl transition-colors">Live Demo ↗</a>}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
