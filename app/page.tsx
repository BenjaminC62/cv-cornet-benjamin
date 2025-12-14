import Navbar from "./(cv)/Navbar/Navbar";
import Skills from "./(cv)/Skills/Skills";
import Experience from "./(cv)/Experiences/Experience";

export default function Home() {
  const margeTailwind = "max-w-5xl w-full mx-auto px-6";

  return (
    <>
      <header className="py-8 bg-slate-950 border-b border-slate-800/50">
        <div className={margeTailwind}>
          <Navbar />
        </div>
      </header>

      <main className="flex-1 py-10">
        <div className={margeTailwind}>
          <Skills />
        </div>
        <div className={margeTailwind}>
          <Experience />
        </div>
      </main>

      <footer className="bg-slate-950 border-t border-slate-800 py-6 text-slate-500 text-sm">
        <div className={`${margeTailwind} flex justify-center`}>
          <span>© 2025 Cornet Benjamin - CV Écologique</span>
        </div>
      </footer>
    </>
  );
}