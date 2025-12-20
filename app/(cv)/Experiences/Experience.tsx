import React from 'react';
import ExperienceCard from './components/ExperiencesCard'; // Vérifie le chemin
import { experiencesData } from './data/experiences';

const Experience: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-slate-100 mb-6 border-b border-slate-800 pb-2">
        Expériences
      </h2>
      <ul className="list-none flex flex-col gap-6">
        {experiencesData.map((exp) => (
          <ExperienceCard 
            key={exp.id}
            {...exp}
          />
        ))}
      </ul>
    </section>
  )
}

export default Experience;