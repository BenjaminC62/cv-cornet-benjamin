import React from 'react';
import SkillCard from "./components/SkillsCard";
import { skills } from "./data/Skills";

const Skills = () => {
  return (
    <section className="mb-16">
      <div className="mb-10 flex items-center gap-4">
        <h2 className="text-3xl font-bold text-slate-100 tracking-tight">
          Compétences
        </h2>
        <div className="h-[1px] bg-slate-800 flex-1 ml-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <SkillCard 
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            color={skill.color} 
            colorDot={skill.colorDot}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;