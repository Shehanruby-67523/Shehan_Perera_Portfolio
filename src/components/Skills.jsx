import { FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaDocker, FaAws } from "react-icons/fa";

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
  
  return (
    <section id="skills" className="p-10 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <h2 className="text-4xl font-extrabold text-center mb-12">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <span key={i} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg 
                                   transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            {skill.icon}
            <span className="mt-4 text-lg font-bold text-gray-800">{skill.name}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
