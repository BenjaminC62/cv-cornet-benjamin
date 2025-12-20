import React from 'react';
import FormationCard from './components/FormationsCard';
import { formationsData } from './data/formations';

const Formation: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-lg font-bold text-slate-100 mb-4 border-b border-slate-800 pb-1">
        Formation
      </h2>

      <ul className="flex flex-col">
        {formationsData.map((form) => (
            <FormationCard 
                key={form.id}
                id={form.id}
                date={form.date}
                school={form.school}
                diploma={form.diploma}
                description={form.description}
            />
        ))}
      </ul>
    </section>
  )
}

export default Formation;