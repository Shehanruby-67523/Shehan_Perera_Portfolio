import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Magnetic from "./motion/Magnetic";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true); // Auto-hide on scroll down
    } else {
      setHidden(false); // Reveal on scroll up
    }
  });

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-6 left-0 right-0 z-40 flex justify-center px-4"
      >
        <nav className="flex items-center justify-between gap-6 px-6 py-3 rounded-full bg-[#12141C]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/60 max-w-4xl w-full md:w-auto">
          {/* Brand Logo */}
          <a
            href="#"
            className="font-display font-extrabold text-lg tracking-wider text-white hover:text-[#00F0FF] transition-colors flex items-center gap-1"
            data-cursor="pointer"
          >
            SHEHAN<span className="text-[#00F0FF] text-xl leading-none">.</span>
          </a>

          <div className="hidden md:block h-4 w-px bg-white/10" />

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Magnetic strength={0.2}>
                  <a
                    href={link.href}
                    data-cursor="pointer"
                    className="px-3.5 py-1.5 text-sm font-medium text-gray-300 hover:text-white rounded-full transition-all duration-300 hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                </Magnetic>
              </li>
            ))}
          </ul>

          <div className="hidden md:block h-4 w-px bg-white/10" />

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Magnetic strength={0.3}>
              <a
                href="#contact"
                data-cursor="pointer"
                className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#08090C] bg-[#00F0FF] hover:bg-[#66f6ff] rounded-full transition-all shadow-md shadow-cyan-500/20"
              >
                Let's Talk
              </a>
            </Magnetic>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-2xl text-gray-200 hover:text-[#00F0FF] focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-24 z-40 p-6 rounded-3xl bg-[#12141C]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col items-center gap-5 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-200 hover:text-[#00F0FF] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-sm font-bold uppercase tracking-wider text-[#08090C] bg-[#00F0FF] rounded-full shadow-md shadow-cyan-500/20"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}