import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import Magnetic from "./motion/Magnetic";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#08090C] py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand & Rights */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <a
            href="#"
            className="font-display font-extrabold text-xl text-white tracking-wider flex items-center gap-1"
            data-cursor="pointer"
          >
            SHEHAN<span className="text-[#00F0FF]">.</span>
          </a>
          <p className="text-xs text-gray-400 font-mono">
            © {new Date().getFullYear()} Shehan Perera.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <Magnetic strength={0.3}>
            <a
              href="https://github.com/Shehanruby-67523"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="pointer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#12141C] border border-white/15 text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF]/40 hover:bg-white/5 transition-all text-lg shrink-0"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </Magnetic>

          <Magnetic strength={0.3}>
            <a
              href="https://www.linkedin.com/in/shehan-perera-2642ba316/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="pointer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#12141C] border border-white/15 text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF]/40 hover:bg-white/5 transition-all text-lg shrink-0"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </Magnetic>

          <Magnetic strength={0.3}>
            <a
              href="mailto:kurugamaperera2003@gmail.com"
              data-cursor="pointer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#12141C] border border-white/15 text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF]/40 hover:bg-white/5 transition-all text-lg shrink-0"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </Magnetic>

          <div className="h-5 w-px bg-white/15 mx-1" />

          {/* Back to top button */}
          <Magnetic strength={0.3}>
            <button
              onClick={scrollToTop}
              data-cursor="pointer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#12141C] border border-white/15 text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF]/40 hover:bg-white/5 transition-all text-base shrink-0"
              aria-label="Back to top"
            >
              <FaArrowUp />
            </button>
          </Magnetic>
        </div>

      </div>
    </footer>
  );
}
