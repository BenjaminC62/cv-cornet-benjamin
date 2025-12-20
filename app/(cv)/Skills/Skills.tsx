import React from 'react';
import SkillsCard from './components/SkillsCard';
import { skillsData } from './data/Skills';

const Skills = () => {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-bold text-slate-100 mb-8 flex items-center gap-3">
        Compétences
        <span className="h-px bg-slate-800 flex-1 rounded-full"></span>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {skillsData.map((group) => (
          <SkillsCard 
            key={group.category}
            category={group.category}
            items={group.items}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;