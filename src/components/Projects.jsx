export default function Projects() {
  const projects = [
    { title: "Password Generator", link: "https://github.com/Shehanruby-67523/python-password-generator", desc: "App developed using Python. Can create strong passwords." },
    { title: "Big Cats Website", link: "https://github.com/Shehanruby-67523/Big-Cats", desc: "ALL the wild big cats in the world." }
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
