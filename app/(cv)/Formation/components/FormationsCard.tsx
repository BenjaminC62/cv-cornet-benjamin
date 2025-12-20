import React from 'react';
import type { FormationProps } from '@/app/types/types';

const FormationCard: React.FC<FormationProps> = ({ 
    date, school, diploma, description 
}) => {
  return (
    <div className="flex flex-col p-5 rounded-lg border border-transparent hover:bg-slate-900/30 transition-colors">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
            <h3 className="text-lg font-bold text-slate-100">
                {diploma}
            </h3>
            <span className="text-sm font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                {date}
            </span>
        </div>
        
        <div className="text-blue-400 font-medium text-sm mb-3">
            {school}
        </div>
        
        <p className="text-slate-400 text-sm leading-relaxed">
            {description}
        </p>
    </div>
  );
};

export default FormationCard;