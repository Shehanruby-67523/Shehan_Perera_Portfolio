export default function Skills() {
  const skills = ["React", "Node.js", "Python", "Java", "SQL", "Docker", "AWS"];
  
  return (
    <section id="skills" className="p-10 bg-white">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, i) => (
          <span key={i} className="px-4 py-2 bg-blue-100 rounded-lg text-blue-700 font-semibold">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
