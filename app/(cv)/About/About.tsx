import React from 'react';

const About: React.FC = () => {
  return (
    <section className="mb-16 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-slate-900 pt-8">
      
      <div>
        <h3 className="text-slate-100 font-bold text-lg mb-3 flex items-center gap-2">
          Langues
        </h3>
        <div className="flex flex-col gap-2">
           <div className="flex justify-between items-center bg-slate-900/50 p-2 rounded border border-slate-800/50">
              <span className="text-slate-300 text-sm">Français</span>
              <span className="text-xs font-bold text-slate-500 uppercase">Langue maternelle</span>
           </div>
           <div className="flex justify-between items-center bg-slate-900/50 p-2 rounded border border-slate-800/50">
              <span className="text-slate-300 text-sm">Anglais</span>
              <span className="text-xs font-bold text-slate-500 uppercase">Niveau B1</span>
           </div>
        </div>
      </div>

      <div>
        <h3 className="text-slate-100 font-bold text-lg mb-3 flex items-center gap-2">
          Loisirs
        </h3>
        <div className="flex flex-wrap gap-2">
           <span className="px-3 py-1.5 bg-slate-900 text-slate-400 text-sm rounded border border-slate-800 hover:border-blue-500/50 transition-colors">
             🏸 Badminton
           </span>
           <span className="px-3 py-1.5 bg-slate-900 text-slate-400 text-sm rounded border border-slate-800 hover:border-blue-500/50 transition-colors">
             🎮 Chineur de jeux vidéo
           </span>
           <span className="px-3 py-1.5 bg-slate-900 text-slate-400 text-sm rounded border border-slate-800 hover:border-blue-500/50 transition-colors">
             💻 Programmation
           </span>
        </div>
      </div>

    </section>
  )
}

export default About;