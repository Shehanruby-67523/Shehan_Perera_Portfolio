import { useState, useEffect } from "react";
import My_profile from "../assets/My_profile.jpeg";
import { FaLaptopCode, FaReact, FaPython, FaRocket, FaJava, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaDocker, FaAws, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiC, SiTailwindcss, SiExpress, SiPostman } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const roles = [
    { text: "Full Stack Developer", icon: <FaLaptopCode /> },
    { text: "React Developer", icon: <FaReact /> },
    { text: "Python Enthusiast", icon: <FaPython /> },
    { text: "DevOps Learner", icon: <FaRocket /> },
  ];

  const animatedIcons = [
    <FaPython className="text-yellow-400 text-9xl opacity-20" />,
    <FaJava className="text-red-500 text-9xl opacity-20" />,
    <SiMongodb className="text-green-500 text-9xl opacity-20" />,
    <FaReact className="text-blue-500 text-9xl opacity-20" />,
    <FaNodeJs className="text-green-600 text-9xl opacity-20" />,
    <FaHtml5 className="text-orange-600 text-9xl opacity-20" />,
    <FaCss3Alt className="text-blue-600 text-9xl opacity-20" />,
    <SiExpress className="text-gray-800 text-9xl opacity-20" />,
    <FaJs className="text-yellow-400 text-9xl opacity-20" />,
    <SiC className="text-blue-600 text-9xl opacity-20" />,
    <SiPostman className="text-orange-500 text-9xl opacity-20" />,
    <FaDatabase className="text-indigo-500 text-9xl opacity-20" />,
    <FaDocker className="text-blue-400 text-9xl opacity-20" />,
    <FaAws className="text-orange-500 text-9xl opacity-20" />,
    <FaGithub className="text-gray-800 text-9xl opacity-20" />,
    <SiTailwindcss className="text-cyan-400 text-9xl opacity-20" />,
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
      bg-gradient-to-r from-blue-900 to-indigo-900 text-white relative overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center z-10"
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

      {/* Animated Icons */}
      {animatedIcons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0"
          style={{ left: `${Math.random() * 100}vw` }}
          animate={{
            y: [0, -1000],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          {icon}
        </motion.div>
      ))}
    </section>
  );
}
