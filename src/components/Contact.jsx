import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="p-10 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Contact Me</h2>
        <p className="text-lg text-gray-700 text-center mb-10 max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations. Feel free to reach out to me through any of these platforms.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a 
            href="mailto:kurugamaperera2003@gmail.com" 
            className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg 
                       transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <FaEnvelope className="text-blue-500 text-3xl" />
            <span className="text-lg font-semibold">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/shehan-perera-2642ba316/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg 
                       transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <FaLinkedin className="text-blue-600 text-3xl" />
            <span className="text-lg font-semibold">LinkedIn</span>
          </a>
          <a
            href="https://github.com/Shehanruby-67523"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg 
                       transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <FaGithub className="text-gray-800 text-3xl" />
            <span className="text-lg font-semibold">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
