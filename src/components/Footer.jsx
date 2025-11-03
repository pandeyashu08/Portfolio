export default function Footer() {
  return (
    <footer className="py-8 text-center text-slate-500">
      <div className="max-w-6xl mx-auto px-4">
        © {new Date().getFullYear()} Ashutosh Pandey · Built with React & Tailwind
      </div>
    </footer>
  );
}
