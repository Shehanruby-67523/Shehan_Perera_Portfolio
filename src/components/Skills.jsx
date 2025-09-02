import { FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaDocker, FaAws } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-500 text-2xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500 text-2xl" /> },
    { name: "Java", icon: <FaJava className="text-red-500 text-2xl" /> },
    { name: "SQL", icon: <FaDatabase className="text-indigo-500 text-2xl" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400 text-2xl" /> },
    { name: "AWS", icon: <FaAws className="text-orange-500 text-2xl" /> },
  ];
  
  return (
    <section id="skills" className="p-10 bg-white">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, i) => (
          <span key={i} className="px-4 py-2 bg-blue-100 rounded-lg text-blue-700 font-semibold">
            {skill.icon}
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
