import { FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaDocker, FaAws } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-500 text-5xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500 text-5xl" /> },
    { name: "Java", icon: <FaJava className="text-red-500 text-5xl" /> },
    { name: "SQL", icon: <FaDatabase className="text-indigo-500 text-5xl" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400 text-5xl" /> },
    { name: "AWS", icon: <FaAws className="text-orange-500 text-5xl" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section id="skills" className="p-10 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-4xl font-extrabold text-center mb-12"
      >
        My Skills 🛠️
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill, i) => (
          <motion.span 
            key={i} 
            variants={itemVariants}
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg 
                       transform transition-transform duration-300 hover:scale-105 hover:shadow-xl
                       dark:bg-gray-800"
          >
            {skill.icon}
            <span className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-100">{skill.name}</span>
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}