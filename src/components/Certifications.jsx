const certs = [
  { title: "CCNAv7: Switching, Routing, Wireless Essentials", issuer: "Cisco Networking Academy", date: "Dec 2024" },
  { title: "Linux Fundamentals", issuer: "LearnQuest (Coursera)", date: "Apr 2025" },
  { title: "IBM AI/ML Fundamentals", issuer: "IBM / Coursera", date: "2024" }
];

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-[var(--primary)]">Certifications</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {certs.map(c => (
            <div key={c.title} className="card text-left">
              <div className="font-semibold text-slate-800">{c.title}</div>
              <div className="text-sm text-slate-500 mt-1">{c.issuer} · {c.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
