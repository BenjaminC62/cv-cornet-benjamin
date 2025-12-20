const About = () => {
  return (
    <section className="mb-12 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-slate-900">
      
      <div>
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
          Langues
        </h3>
        <ul className="space-y-2">
           <li className="flex justify-between text-sm">
              <span className="text-slate-300">Français</span>
              <span className="text-slate-500">Langue maternelle</span>
           </li>
           <li className="flex justify-between text-sm">
              <span className="text-slate-300">Anglais</span>
              <span className="text-slate-500">Niveau B1 (Intermédiaire)</span>
           </li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
          Loisirs
        </h3>
        <ul className="flex flex-wrap gap-2">
           {["Badminton", "Jeux Vidéo", "Programmation"].map(hobby => (
             <li key={hobby} className="text-sm text-slate-400 bg-slate-900 px-2 py-1 rounded border border-slate-800">
               {hobby}
             </li>
           ))}
        </ul>
      </div>

    </section>
  )
}

export default About;