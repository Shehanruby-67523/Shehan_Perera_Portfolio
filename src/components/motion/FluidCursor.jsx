import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function FluidCursor() {
  const [cursorState, setCursorState] = useState("default");
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Physics-tuned spring follower for fluid lag
  const springConfig = { damping: 25, stiffness: 280, mass: 0.2 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on touch screens (coarse pointer)
    if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        const type = target.getAttribute("data-cursor") || "pointer";
        setCursorState(type);
        setCursorText(target.getAttribute("data-cursor-text") || "");
      } else {
        setCursorState("default");
        setCursorText("");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const variants = {
    default: {
      width: 14,
      height: 14,
      backgroundColor: "#00F0FF",
      border: "0px solid transparent",
      mixBlendMode: "difference",
    },
    pointer: {
      width: 48,
      height: 48,
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      border: "1.5px solid rgba(0, 240, 255, 0.8)",
      backdropFilter: "blur(4px)",
      mixBlendMode: "normal",
    },
    view: {
      width: 80,
      height: 80,
      backgroundColor: "#00F0FF",
      border: "0px solid transparent",
      color: "#08090C",
      mixBlendMode: "normal",
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={cursorState}
      transition={{ type: "spring", damping: 22, stiffness: 220 }}
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 flex items-center justify-center font-bold text-xs uppercase tracking-wider select-none shadow-lg shadow-cyan-500/20"
    >
      {cursorState === "view" && (
        <span className="text-[11px] font-black tracking-widest text-[#08090C]">
          {cursorText || "VIEW"}
        </span>
      )}
    </motion.div>
  );
}
