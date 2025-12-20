import React from 'react';
import ExperienceCard from './components/ExperiencesCard';
import { experiencesData } from './data/experiences';

const Experience: React.FC = () => {
  return (
    <section>
      <h2 className="text-xl font-bold text-slate-100 mb-6 border-b border-slate-800 pb-2">
        Expériences
      </h2>
      <div className="space-y-4">
        {experiencesData.map((exp) => (
          <ExperienceCard key={exp.id} {...exp} />
        ))}
      </div>
    </section>
  )
}
export default Experience;