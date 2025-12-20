import React from 'react';
import SkillsCard from './components/SkillsCard';
import { skillsData } from './data/Skills';

const Skills = () => {
  return (
    <section>
      <h2 className="text-xl font-bold text-slate-100 mb-6 border-b border-slate-800 pb-2">
        Compétences
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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