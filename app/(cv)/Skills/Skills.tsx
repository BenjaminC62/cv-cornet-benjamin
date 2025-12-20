import React from 'react';
import { skillsData } from './data/Skills';

const Skills = () => {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-slate-100 mb-6 border-b border-slate-800 pb-2">
        Compétences Techniques
      </h2>
      
      <div className="flex flex-col gap-6">
        {skillsData.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-slate-900 text-slate-300 text-sm rounded border border-slate-800 hover:border-slate-600 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;