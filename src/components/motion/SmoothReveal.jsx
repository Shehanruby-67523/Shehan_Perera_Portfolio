import { motion } from "framer-motion";

export default function SmoothReveal({ 
  children, 
  delay = 0, 
  duration = 0.8,
  yOffset = 30,
  className = "" 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1], // Natural ease-out cubic
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
