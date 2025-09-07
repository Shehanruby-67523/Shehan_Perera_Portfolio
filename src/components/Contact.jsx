import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section 
      id="contact" 
      className="p-10 bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100"
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-extrabold text-center mb-6"
        >
          Contact Me
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="text-lg text-center mb-10 max-w-2xl mx-auto"
        >
          I'm always open to new opportunities and collaborations. Feel free to reach out to me through any of these platforms or fill out the form below.
        </motion.p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
          <motion.a
            variants={itemVariants}
            href="mailto:kurugamaperera2003@gmail.com"
            className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl dark:bg-gray-800"
          >
            <FaEnvelope className="text-blue-500 text-3xl" />
            <span className="text-lg font-semibold">Email</span>
          </motion.a>
          <motion.a
            variants={itemVariants}
            href="https://www.linkedin.com/in/shehan-perera-2642ba316/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl dark:bg-gray-800"
          >
            <FaLinkedin className="text-blue-600 text-3xl" />
            <span className="text-lg font-semibold">LinkedIn</span>
          </motion.a>
          <motion.a
            variants={itemVariants}
            href="https://github.com/Shehanruby-67523"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl dark:bg-gray-800"
          >
            <FaGithub className="text-gray-800 text-3xl" />
            <span className="text-lg font-semibold">GitHub</span>
          </motion.a>
        </div>

        <motion.div 
          variants={itemVariants}
          className="w-full max-w-lg mx-auto p-8 bg-white rounded-xl shadow-lg dark:bg-gray-800"
        >
          <form action="https://formspree.io/f/xyzdlpwl" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Email</label>
              <input
                type="email"
                name="_replyto"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Send Message <FaPaperPlane />
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}