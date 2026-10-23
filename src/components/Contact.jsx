import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Magnetic from "./motion/Magnetic";
import SmoothReveal from "./motion/SmoothReveal";

export default function Contact() {
  const contactLinks = [
    {
      title: "Direct Email",
      value: "kurugamaperera2003@gmail.com",
      href: "mailto:kurugamaperera2003@gmail.com",
      icon: <FaEnvelope className="text-[#00F0FF] text-2xl" />,
    },
    {
      title: "LinkedIn Profile",
      value: "shehan-perera",
      href: "https://www.linkedin.com/in/shehan-perera-2642ba316/",
      icon: <FaLinkedin className="text-[#00F0FF] text-2xl" />,
    },
    {
      title: "GitHub Profile",
      value: "Shehanruby-67523",
      href: "https://github.com/Shehanruby-67523",
      icon: <FaGithub className="text-[#00F0FF] text-2xl" />,
    },
  ];

  return (
    <section id="contact" className="py-28 px-6 bg-[#08090C] relative">
      {/* Subtle ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00F0FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <SmoothReveal delay={0.1}>
            <span className="text-xs font-mono tracking-widest text-[#00F0FF] uppercase mb-2 block">
              04 // Get Connected
            </span>
          </SmoothReveal>

          <SmoothReveal delay={0.2}>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
              Let's Build Together
            </h2>
          </SmoothReveal>

          <SmoothReveal delay={0.3}>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mt-4">
              Have an idea, project, or opportunity? Drop me a message or connect through any of my direct channels.
            </p>
          </SmoothReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <SmoothReveal delay={0.2}>
              <div className="p-6 rounded-3xl bg-[#12141C] border border-white/10 mb-2">
                <h3 className="font-display text-xl font-bold text-white mb-2">Let's start a conversation</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Currently open for software engineering roles, internships, and collaborative open-source projects.
                </p>
              </div>
            </SmoothReveal>

            {contactLinks.map((item, idx) => (
              <SmoothReveal key={item.title} delay={0.25 * (idx + 1)}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  data-cursor="pointer"
                  className="p-5 rounded-2xl bg-[#12141C] border border-white/10 hover:border-[#00F0FF]/40 transition-all duration-300 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-mono">{item.title}</p>
                      <p className="text-sm sm:text-base font-semibold text-white group-hover:text-[#00F0FF] transition-colors truncate max-w-[220px] sm:max-w-xs">
                        {item.value}
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-500 group-hover:text-white transition-colors">
                    <FiArrowUpRight className="text-xl group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              </SmoothReveal>
            ))}
          </div>

          {/* Right Column: High-End Contact Form */}
          <div className="lg:col-span-7">
            <SmoothReveal delay={0.3}>
              <div className="p-8 sm:p-10 rounded-3xl bg-[#12141C] border border-white/10 shadow-2xl relative overflow-hidden">
                <form action="https://formspree.io/f/xyzdlpwl" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="e.g. Alex Morgan"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-[#08090C] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="_replyto"
                      id="email"
                      placeholder="alex@domain.com"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-[#08090C] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      placeholder="Tell me about your project, timeline, or inquiry..."
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-[#08090C] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all text-sm resize-none"
                    ></textarea>
                  </div>

                  <Magnetic strength={0.25} className="w-full">
                    <button
                      type="submit"
                      data-cursor="pointer"
                      className="w-full py-4 rounded-xl bg-[#00F0FF] hover:bg-[#66f6ff] text-[#08090C] font-bold text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                    >
                      <span>Send Dispatch</span>
                      <FaPaperPlane className="text-xs" />
                    </button>
                  </Magnetic>
                </form>
              </div>
            </SmoothReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
