const About = () => {
  return (
    <section className="mb-12 pt-8 border-t border-slate-800/50 grid grid-cols-1 md:grid-cols-2 gap-12">
      
      <div>
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
          Langues
        </h3>
        <ul className="space-y-3">
           <li className="flex items-center justify-between p-3 bg-slate-900/30 rounded border border-slate-800/50">
              <span className="text-slate-300 font-medium">Français</span>
              <span className="text-xs font-bold text-slate-500 bg-slate-900 px-2 py-1 rounded">NATIF</span>
           </li>
           <li className="flex items-center justify-between p-3 bg-slate-900/30 rounded border border-slate-800/50">
              <span className="text-slate-300 font-medium">Anglais</span>
              <span className="text-xs font-bold text-slate-500 bg-slate-900 px-2 py-1 rounded">NIVEAU B1</span>
           </li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
          Loisirs
        </h3>
        <div className="flex flex-wrap gap-3">
           {["Badminton 🏸", "Jeux Vidéo 🎮", "Programmation 💻"].map(hobby => (
             <span key={hobby} className="px-3 py-2 bg-slate-900/30 text-slate-400 text-sm rounded border border-slate-800/50 hover:border-slate-700 transition-colors">
               {hobby}
             </span>
           ))}
        </div>
      </div>

    </section>
  )
}

export default About;