import React from 'react';
import SkillCard from "./components/SkillsCard";
import { skills } from "./data/Skills";

const Skills: React.FC = () => {
  return (
    <section className="mb-16">
      <div className="mb-8 flex items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
          Compétences
        </h2>
        <div className="h-px bg-slate-800 flex-1 rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <SkillCard 
            key={skill.name}
            {...skill}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;