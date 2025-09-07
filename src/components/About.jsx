import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section 
      id="about" 
      className="p-10 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100"
    >
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 
            variants={textVariants}
            className="text-4xl font-extrabold text-center text-gray-800 mb-6 dark:text-gray-100"
          >
            About Me 
          </motion.h2>
          <motion.p 
            variants={textVariants}
            className="text-lg text-gray-700 leading-relaxed dark:text-gray-300"
          >
            I'm a Computing & Information Systems undergraduate at Sabaragamuwa University of Sri Lanka. 
            I'm passionate about building scalable solutions with React, Node.js, Python, and cloud technologies. 
            I'm enjoying solving real-world problems and continuously learning new tools. 
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}