import { FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaDocker, FaAws, FaJs, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiC, SiTailwindcss, SiExpress, SiPostman } from "react-icons/si";
import SmoothReveal from "./motion/SmoothReveal";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Engineering",
      description: "Crafting reactive, high-speed, and accessible interfaces.",
      skills: [
        { name: "React", icon: <FaReact className="text-[#00F0FF]" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      ],
    },
    {
      category: "Backend & Systems",
      description: "Developing resilient APIs, business logic, and services.",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
        { name: "Python", icon: <FaPython className="text-yellow-400" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "C", icon: <SiC className="text-blue-400" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      ],
    },
    {
      category: "Cloud, Database & DevOps",
      description: "Managing deployments, data layers, and automated workflows.",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
        { name: "SQL Databases", icon: <FaDatabase className="text-indigo-400" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
        { name: "AWS", icon: <FaAws className="text-amber-500" /> },
        { name: "Git & GitHub", icon: <FaGithub className="text-white" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-28 px-6 bg-[#08090C] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <SmoothReveal delay={0.1}>
            <span className="text-xs font-mono tracking-widest text-[#00F0FF] uppercase mb-2 block">
              02 // Technical Arsenal
            </span>
          </SmoothReveal>

          <SmoothReveal delay={0.2}>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
              Skills & Technologies
            </h2>
          </SmoothReveal>

          <SmoothReveal delay={0.3}>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mt-4">
              Modern full-stack technologies and industry-standard workflows utilized across my projects.
            </p>
          </SmoothReveal>
        </div>

        {/* Categorized Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((group, idx) => (
            <SmoothReveal key={group.category} delay={0.15 * (idx + 1)}>
              <div className="h-full p-8 rounded-3xl bg-[#12141C] border border-white/10 hover:border-[#00F0FF]/30 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                    {group.category}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 mb-6">
                    {group.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        data-cursor="pointer"
                        className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 hover:bg-white/[0.07] transition-all duration-200"
                      >
                        <span className="text-2xl shrink-0">{skill.icon}</span>
                        <span className="text-xs sm:text-sm font-medium text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>Stack Group 0{idx + 1}</span>
                  <span className="text-[#00F0FF]">Ready</span>
                </div>
              </div>
            </SmoothReveal>
          ))}
        </div>

      </div>
    </section>
  );
}