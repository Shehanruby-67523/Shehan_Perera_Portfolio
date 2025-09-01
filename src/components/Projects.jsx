export default function Projects() {
  const projects = [
    { title: "E-Commerce Website", link: "#", desc: "MERN stack online shop." },
    { title: "Portfolio Website", link: "#", desc: "This personal portfolio." },
    { title: "DevOps Pipeline", link: "#", desc: "CI/CD setup with GitHub Actions." }
  ];

  return (
    <section id="projects" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <div key={i} className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">{proj.title}</h3>
            <p className="text-gray-600">{proj.desc}</p>
            <a href={proj.link} className="text-blue-500 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
