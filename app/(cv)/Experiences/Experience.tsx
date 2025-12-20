import React from 'react';
import ExperienceCard from './components/ExperiencesCard';
import { experiencesData } from './data/experiences';

const Experience: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-lg font-bold text-slate-100 mb-6 border-b border-slate-800 pb-1">
        Expériences
      </h2>
      
      <ul className="flex flex-col">
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