import Navbar from "./Navbar/Navbar";

export default function Home() {
  const margeTailwind = "max-w-5xl w-full mx-auto px-6";

  return (
    <>
      <header className="shadow-sm bg-[#323B4C] py-8">
        <div className={margeTailwind}>
          <Navbar />
        </div>
      </header>

      <main className="flex-1 py-10">
        <div className={margeTailwind}>
          <h1 className="text-2xl font-bold">CV</h1>
        </div>
      </main>

      <footer className="bg-white border-t py-4 text-gray-600">
        <div className={margeTailwind}>
          <span>Footer</span>
        </div>
      </footer>
    </>
  );
}