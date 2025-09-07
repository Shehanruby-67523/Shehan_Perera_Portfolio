import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import passwordGeneratorImage from "../assets/password_generator.png";
import bigCatsImage from "../assets/big_cats.jpg";

export default function Projects() {
  const projects = [
    { 
      title: "Password Generator", 
      link: "https://github.com/Shehanruby-67523/python-password-generator", 
      desc: "App developed using Python. Can create strong passwords." ,
      image: passwordGeneratorImage,
    },
    { 
      title: "Big Cats Website", 
      link: "https://github.com/Shehanruby-67523/Big-Cats", 
      desc: "All about the wild big cats in the world.",
      image: bigCatsImage,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section 
      id="projects" 
      className="p-10 bg-gray-50 text-gray-800"
    >
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl font-extrabold text-center text-gray-800 mb-12"
        >
          Projects 💻
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="p-8 bg-white shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img 
                src={proj.image} 
                alt={`${proj.title} project screenshot`} 
                className="rounded-lg mb-4 object-cover w-full h-48"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-600 mb-4">{proj.desc}</p>
              <a 
                href={proj.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
              >
                <FaGithub className="text-lg" />
                View on GitHub
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
