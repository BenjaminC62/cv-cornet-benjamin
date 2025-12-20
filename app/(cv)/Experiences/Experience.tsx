import React from 'react';
import ExperienceCard from './components/ExperiencesCard';
import { experiencesData } from './data/experiences';

const Experience: React.FC = () => {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-bold text-slate-100 mb-8 flex items-center gap-3">
        Expériences
        <span className="h-px bg-slate-800 flex-1 rounded-full"></span>
      </h2>
      
      <div className="flex flex-col">
        {experiencesData.map((exp) => (
          <ExperienceCard 
            key={exp.id}
            {...exp}
          />
        ))}
      </div>
    </section>
  )
}

export default Experience;