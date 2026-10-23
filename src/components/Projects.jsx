import { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import passwordGeneratorImage from "../assets/password_generator.png";
import bigCatsImage from "../assets/big_cats.jpg";
import Magnetic from "./motion/Magnetic";
import SmoothReveal from "./motion/SmoothReveal";

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      data-cursor="view"
      data-cursor-text="EXPLORE"
      className="relative rounded-3xl bg-[#12141C] border border-white/10 overflow-hidden group p-6 sm:p-8 transition-all duration-300 hover:border-[#00F0FF]/40 flex flex-col justify-between"
    >
      {/* Interactive Cursor Spotlight Glow Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.12), transparent 40%)`,
        }}
      />

      <div>
        {/* Project Image Frame with Mask and Zoom */}
        <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-[#08090C] border border-white/5">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12141C] via-[#12141C]/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-300" />
          
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-[#08090C]/80 backdrop-blur-md text-[#00F0FF] border border-white/10">
              0{index + 1} // Project
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-white/[0.04] text-gray-300 border border-white/5 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title & Description */}
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-[#00F0FF] transition-colors mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
          {project.desc}
        </p>
      </div>

      {/* Card Action Footer */}
      <div className="pt-6 border-t border-white/5 flex items-center justify-between relative z-10">
        <Magnetic strength={0.25}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00F0FF] hover:text-[#66f6ff] transition-colors"
          >
            <FaGithub className="text-lg" />
            <span>GitHub Repository</span>
          </a>
        </Magnetic>

        <Magnetic strength={0.3}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#00F0FF] group-hover:text-[#08090C] transition-all duration-300"
            aria-label="View project link"
          >
            <FiArrowUpRight className="text-xl group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </Magnetic>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Password Generator",
      link: "https://github.com/Shehanruby-67523/python-password-generator",
      desc: "Robust security utility developed in Python to generate cryptographically safe, randomized passwords with customizable complexity parameters.",
      image: passwordGeneratorImage,
      tags: ["Python", "Cryptography", "Security", "Desktop / CLI"],
    },
    {
      title: "Big Cats Wildlife Platform",
      link: "https://github.com/Shehanruby-67523/Big-Cats",
      desc: "An educational web platform spotlighting wild big cat species, featuring responsive design, high-fidelity imagery, and rich semantic content.",
      image: bigCatsImage,
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
    },
  ];

  return (
    <section id="projects" className="py-28 px-6 bg-[#08090C] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <SmoothReveal delay={0.1}>
            <span className="text-xs font-mono tracking-widest text-[#00F0FF] uppercase mb-2 block">
              03 // Featured Works
            </span>
          </SmoothReveal>

          <SmoothReveal delay={0.2}>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
              Selected Projects
            </h2>
          </SmoothReveal>

          <SmoothReveal delay={0.3}>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mt-4">
              Explore highlighted open-source initiatives and interactive applications engineered with attention to detail.
            </p>
          </SmoothReveal>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <SmoothReveal key={proj.title} delay={0.2 * (i + 1)}>
              <ProjectCard project={proj} index={i} />
            </SmoothReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
