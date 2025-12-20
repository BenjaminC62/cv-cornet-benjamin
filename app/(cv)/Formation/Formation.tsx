import React from 'react';
import FormationCard from './components/FormationsCard';
import { formationsData } from './data/formations';

const Formation: React.FC = () => {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-bold text-slate-100 mb-8 flex items-center gap-3">
        Formation
        <span className="h-px bg-slate-800 flex-1 rounded-full"></span>
      </h2>

      <div className="flex flex-col">
        {formationsData.map((form) => (
            <FormationCard 
                key={form.id}
                {...form}
            />
        ))}
      </div>
    </section>
  )
}

export default Formation;