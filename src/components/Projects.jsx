const projects = [
  {
    title: "Password Manager & Security Suite",
    tech: "React · Node.js · PostgreSQL · AES encryption",
    desc: "Secure password manager with strength analysis, breach detection and encrypted storage."
  },
  {
    title: "AI Meeting Scheduler with NLP",
    tech: "Next.js · TypeScript · TensorFlow.js",
    desc: "NLP-powered scheduler that parses natural language meeting requests and handles conflicts/timezones."
  },
  {
    title: "Finance Management System",
    tech: "React · Recharts · PostgreSQL",
    desc: "Personal finance tracker with visualizations, categorization and multi-user support."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-[var(--primary)]">Projects</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map(p => (
            <article key={p.title} className="card hover:shadow-lg transition transform hover:-translate-y-1">
              <h3 className="text-lg font-bold text-slate-800">{p.title}</h3>
              <p className="text-sm text-slate-500 mt-2">{p.tech}</p>
              <p className="mt-3 text-slate-700 text-sm">{p.desc}</p>
              <div className="mt-4 flex gap-2">
                <button className="btn border border-slate-200 text-[var(--primary)]">Details</button>
                <a href="#" className="btn btn-primary">Live</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
