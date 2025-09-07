import { useState, useEffect } from "react";
import My_profile from "../assets/My_profile.jpeg";
import { FaLaptopCode, FaReact, FaPython, FaRocket } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const roles = [
    { text: "Full Stack Developer", icon: <FaLaptopCode /> },
    { text: "React Developer", icon: <FaReact /> },
    { text: "Python Enthusiast", icon: <FaPython /> },
    { text: "DevOps Learner", icon: <FaRocket /> },
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const roleVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  };

  return (
    <section 
      className="h-screen flex flex-col justify-center items-center text-center 
      bg-gradient-to-r from-blue-900 to-indigo-900 text-white 
      dark:from-gray-900 dark:to-gray-800 dark:text-gray-100"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        <motion.img
          src={My_profile}
          alt="Profile"
          variants={itemVariants}
          className="w-60 h-60 rounded-full border-4 border-white shadow-lg mb-6 hover:scale-105 transition-transform duration-300"
        />
        <motion.h1 
          className="text-5xl font-bold flex items-center gap-2"
          variants={itemVariants}
        >
          Hi, I'm Shehan Perera
          <motion.span 
            className="wave"
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            👋
          </motion.span>
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.p 
            key={currentRole}
            className="mt-4 text-xl flex items-center gap-2"
            variants={roleVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            {roles[currentRole].text}
            {roles[currentRole].icon}
          </motion.p>
        </AnimatePresence>

        <motion.a 
          href="#projects" 
          variants={itemVariants}
          className="mt-6 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  )
}