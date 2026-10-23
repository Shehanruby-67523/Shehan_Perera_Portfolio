import { FaGraduationCap, FaCode, FaLightbulb } from "react-icons/fa";
import SmoothReveal from "./motion/SmoothReveal";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[#08090C] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <SmoothReveal delay={0.1}>
            <span className="text-xs font-mono tracking-widest text-[#00F0FF] uppercase mb-2 block">
              01 // Background
            </span>
          </SmoothReveal>

          <SmoothReveal delay={0.2}>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
              About My Craft
            </h2>
          </SmoothReveal>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Story Card (Large) */}
          <div className="md:col-span-8">
            <SmoothReveal delay={0.2} className="h-full">
              <div className="h-full p-8 sm:p-10 rounded-3xl bg-[#12141C] border border-white/10 flex flex-col justify-between relative overflow-hidden group hover:border-[#00F0FF]/30 transition-all duration-300">
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-[#00F0FF] text-2xl mb-4">
                    <FaCode />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    Engineering scalable software with high visual precision.
                  </h3>
                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                    I am currently a Computing & Information Systems undergraduate at Sabaragamuwa University of Sri Lanka. 
                    My focus lies at the intersection of robust backend logic, reactive user interfaces, and automated cloud workflows.
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Whether architecting full-stack applications with React and Node.js, developing Python automation scripts, or configuring containerized environments with Docker, I prioritize performance, maintainable code, and human-centric design.
                  </p>
                </div>

                <div className="relative z-10 pt-6 mt-6 border-t border-white/5 flex flex-wrap gap-3">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/5">
                    Full-Stack Development
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/5">
                    Cloud & DevOps
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/5">
                    API Design
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/5">
                    UI/UX Aesthetics
                  </span>
                </div>
              </div>
            </SmoothReveal>
          </div>

          {/* Education & University Card */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <SmoothReveal delay={0.3} className="h-full">
              <div className="h-full p-8 rounded-3xl bg-[#12141C] border border-white/10 flex flex-col justify-between hover:border-[#00F0FF]/30 transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-purple-400 text-2xl mb-4">
                    <FaGraduationCap />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-purple-400">Education</span>
                  <h4 className="font-display text-xl font-bold text-white mt-1">B.Sc. in Computing & Information Systems</h4>
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                    Sabaragamuwa University of Sri Lanka. Focused on software engineering principles, algorithms, distributed systems, and database management.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-xs font-mono text-gray-500">
                  Status // In Progress
                </div>
              </div>
            </SmoothReveal>
          </div>

          {/* Philosophy / Mindset Card */}
          <div className="md:col-span-12">
            <SmoothReveal delay={0.4}>
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#12141C] via-[#151824] to-[#12141C] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#00F0FF]/30 transition-all duration-300">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 text-2xl shrink-0">
                    <FaLightbulb />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-white">Philosophy</h4>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-1">
                      "Clean architecture is not an afterthought; it is the foundation that enables dynamic, high-speed experiences."
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
                    Continuous Evolution
                  </span>
                </div>
              </div>
            </SmoothReveal>
          </div>

        </div>

      </div>
    </section>
  );
}