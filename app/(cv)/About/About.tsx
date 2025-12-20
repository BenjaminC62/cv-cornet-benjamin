const About = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-slate-800">
      
      <div>
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
          Langues
        </h3>
        <ul className="text-sm space-y-2 text-slate-400">
           <li className="flex justify-between">
              <span>Français</span>
              <span className="text-slate-500">Natif</span>
           </li>
           <li className="flex justify-between">
              <span>Anglais</span>
              <span className="text-slate-500">Niveau B1</span>
           </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
          Loisirs
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
            Badminton, Jeux Vidéo, Programmation
        </p>
      </div>

    </section>
  )
}

export default About;