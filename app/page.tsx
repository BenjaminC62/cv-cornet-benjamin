import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <header className="shadow-sm bg-white">
        <Navbar />
      </header>

      <main className="flex-1 px-6 py-10">
        <h1>CV </h1>
      </main>

      <footer className="bg-white border-t py-4 text-center text-gray-600">
        <span> Footer </span>
      </footer>
    </>
  );
}
