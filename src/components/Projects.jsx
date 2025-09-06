import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    { 
      title: "Password Generator", 
      link: "https://github.com/Shehanruby-67523/python-password-generator", 
      desc: "App developed using Python. Can create strong passwords." 
    },
    { 
      title: "Big Cats Website", 
      link: "https://github.com/Shehanruby-67523/Big-Cats", 
      desc: "All about the wild big cats in the world." 
    }
  ];

  return (
    <section id="projects" className="p-10 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <div 
              key={i} 
              className="p-8 bg-white shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{proj.title}</h3>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}