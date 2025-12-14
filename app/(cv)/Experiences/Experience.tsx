import React from 'react';
import ExperienceCard from './components/ExperiencesCard';
import { experiencesData } from './data/experiences';

const Experience: React.FC = () => {
  return (
    <section className="mb-16">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="text-3xl font-bold text-slate-100 tracking-tight">
          Expériences
        </h2>
        <div className="h-[1px] bg-slate-800 flex-1 ml-4 mr-4 rounded-full"></div>
        <span className="text-sm text-gray-500">
            {experiencesData.length} missions
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {experiencesData.map((exp) => (
          <ExperienceCard 
            key={exp.id}
            id={exp.id}
            date={exp.date}
            company={exp.company}
            role={exp.role}
            description={exp.description}
            skills={exp.skills}
            isCurrent={exp.isCurrent}
          />
        ))}
      </div>
    </section>
  )
}

export default Experience;