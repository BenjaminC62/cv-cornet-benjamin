import React from 'react';
import FormationCard from './components/FormationsCard';
import { formationsData } from './data/formations';

const Formations: React.FC = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-slate-100 mb-6 border-b border-slate-800 pb-2">
        Formation
      </h2>

      <div className="flex flex-col gap-2">
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
      </div>
    </section>
  )
}

export default Formations;