import Navbar from "./(cv)/Navbar/Navbar";
import Skills from "./(cv)/Skills/Skills";
import Experience from "./(cv)/Experiences/Experience";
import Projects from "./(cv)/Projects/Projects";
import Formation from "./(cv)/Formation/Formation";
import About from "./(cv)/About/About";

export default function Home() {
  const containerClass = "max-w-4xl w-full mx-auto px-6";

  return (
    <>
      <header className="py-10 bg-slate-950 border-b border-slate-900">
        <div className={containerClass}>
          <Navbar />
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className={containerClass}>
          <Skills />
          <Projects />
          <Experience />
          <Formation />
          <About />
        </div>
      </main>

      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center">
        <div className="max-w-4xl w-full mx-auto px-6 flex flex-col gap-2">
            <p className="text-slate-500 text-sm font-medium">
              © 2025 Cornet Benjamin
            </p>
        </div>
      </footer>
    </>
  );
}