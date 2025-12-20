import Navbar from "./(cv)/Navbar/Navbar";
import Skills from "./(cv)/Skills/Skills";
import Experience from "./(cv)/Experiences/Experience";
import Projects from "./(cv)/Projects/Projects";
import Formation from "./(cv)/Formation/Formation";
import About from "./(cv)/About/About";

export default function Home() {
  return (
    <>
      <header className="pt-12 pb-8">
          <Navbar />
      </header>

      <main className="space-y-16 pb-16">
          <Skills />
          <Projects />
          <Experience />
          <Formation />
          <About />
      </main>
    </>
  );
}