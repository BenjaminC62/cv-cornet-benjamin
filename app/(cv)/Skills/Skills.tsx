import React from 'react';
import SkillCard from "./components/SkillsCard";
import { skills } from "./data/Skills";

const Skills = () => {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-slate-100 mb-6 border-b border-slate-800 pb-2">
        Compétences
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {skills.map((skill) => (
          <SkillCard 
            key={skill.name}
            {...skill}
          />
        ))}
      </ul>
    </section>
  );
}

export default Skills;