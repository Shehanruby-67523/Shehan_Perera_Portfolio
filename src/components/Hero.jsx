import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { FaLaptopCode, FaReact, FaPython, FaRocket, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import My_profile from "../assets/My_profile.jpeg";
import Magnetic from "./motion/Magnetic";
import SmoothReveal from "./motion/SmoothReveal";

export default function Hero() {
  const cardRef = useRef(null);

  const roles = [
    { text: "Full Stack Developer", icon: <FaLaptopCode className="text-[#00F0FF]" /> },
    { text: "React & Frontend Architect", icon: <FaReact className="text-cyan-400" /> },
    { text: "Python & Backend Enthusiast", icon: <FaPython className="text-yellow-400" /> },
    { text: "DevOps & Cloud Explorer", icon: <FaRocket className="text-orange-400" /> },
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles.length]);

  // 3D Parallax & Tilt physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { damping: 20, stiffness: 200 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-[#08090C]">
      {/* Ambient background volumetric lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#00F0FF]/10 via-[#7928CA]/10 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Bold Editorial Typography & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          
          {/* Availability Status Badge */}
          <SmoothReveal delay={0.1}>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Opportunities</span>
            </div>
          </SmoothReveal>

          {/* Large Bold Editorial Headline */}
          <SmoothReveal delay={0.2}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
              Architecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-teal-300 to-indigo-400">
                Resilient Web
              </span> <br />
              Experiences.
            </h1>
          </SmoothReveal>

          {/* Dynamic Role Switcher */}
          <SmoothReveal delay={0.3} className="h-10 flex items-center">
            <div className="flex items-center gap-3 text-lg md:text-xl text-gray-300 font-medium">
              <span className="text-gray-500 font-mono text-sm">Role //</span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex items-center gap-2 text-white font-semibold"
                >
                  {roles[currentRole].icon}
                  <span>{roles[currentRole].text}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </SmoothReveal>

          {/* Narrative Intro */}
          <SmoothReveal delay={0.35}>
            <p className="text-base sm:text-lg text-gray-400 max-w-xl font-sans leading-relaxed">
              Hi, I'm <strong className="text-white font-semibold">Shehan Perera</strong>. 
              Undergraduate at Sabaragamuwa University of Sri Lanka, building performant full-stack architectures, interactive frontend systems, and scalable APIs.
            </p>
          </SmoothReveal>

          {/* Actions & Social Links */}
          <SmoothReveal delay={0.4} className="flex flex-wrap items-center gap-4 pt-3">
            <Magnetic strength={0.3}>
              <a
                href="#projects"
                data-cursor="pointer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#00F0FF] text-[#08090C] font-bold text-sm tracking-wide hover:bg-[#66f6ff] transition-all shadow-xl shadow-cyan-500/20"
              >
                <span>View Selected Works</span>
                <HiArrowDown className="text-base" />
              </a>
            </Magnetic>

            <Magnetic strength={0.3}>
              <a
                href="#contact"
                data-cursor="pointer"
                className="px-8 py-4 rounded-full bg-[#12141C] text-gray-200 border border-white/10 font-semibold text-sm hover:bg-white/5 hover:text-white transition-all shadow-lg"
              >
                Get in Touch
              </a>
            </Magnetic>

            <div className="flex items-center gap-2 pl-2">
              <Magnetic strength={0.4}>
                <a
                  href="https://github.com/Shehanruby-67523"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="pointer"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-[#12141C] text-gray-300 border border-white/10 hover:text-[#00F0FF] hover:border-[#00F0FF]/30 transition-all text-lg shrink-0"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              </Magnetic>

              <Magnetic strength={0.4}>
                <a
                  href="https://www.linkedin.com/in/shehan-perera-2642ba316/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="pointer"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-[#12141C] text-gray-300 border border-white/10 hover:text-[#00F0FF] hover:border-[#00F0FF]/30 transition-all text-lg shrink-0"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </Magnetic>
            </div>
          </SmoothReveal>

        </div>

        {/* Right Column: 3D Tilt Card with Headshot */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <SmoothReveal delay={0.35} className="perspective-1000">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-72 sm:w-80 md:w-96 aspect-[4/5] rounded-3xl p-3 bg-gradient-to-b from-white/10 via-white/5 to-transparent border border-white/10 shadow-2xl backdrop-blur-xl group transition-all duration-300"
            >
              {/* Inner Image Frame */}
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-[#12141C]">
                <img
                  src={My_profile}
                  alt="Shehan Perera"
                  className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090C]/90 via-[#08090C]/20 to-transparent pointer-events-none" />

                {/* Card Tag Overlay */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#12141C]/80 backdrop-blur-xl border border-white/10 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-mono tracking-widest text-[#00F0FF] uppercase">Location</p>
                      <p className="text-sm font-bold text-white">Sri Lanka</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">Degree</p>
                      <p className="text-xs font-semibold text-gray-200">CIS Undergrad @ SUSL</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-[#00F0FF] rounded-tr-xl pointer-events-none" />
              <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-[#00F0FF] rounded-bl-xl pointer-events-none" />
            </motion.div>
          </SmoothReveal>
        </div>

      </div>
    </section>
  );
}
