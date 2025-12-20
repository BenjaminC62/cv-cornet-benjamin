import React from 'react';
import ExperienceCard from './components/ExperiencesCard';
import { experiencesData } from './data/experiences';

const Experience: React.FC = () => {
  return (
    <section className="mb-16">
      <div className="mb-8 flex items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
          Expériences
        </h2>
        <div className="h-px bg-slate-800 flex-1 rounded-full"></div>
        <span className="text-xs font-medium text-slate-500 bg-slate-900 px-2 py-1 rounded-full border border-slate-800">
            {experiencesData.length}
        </span>
      </div>

      <div className="flex flex-col gap-4">
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