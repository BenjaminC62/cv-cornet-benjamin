import React from 'react';
import type { FormationProps } from '@/app/types/types';

const FormationCard: React.FC<FormationProps> = ({ 
    date, school, diploma, description 
}) => {
  return (
    <article className="p-4 rounded border border-slate-800/50 bg-slate-900/20 mb-4">
        <div className="flex justify-between items-baseline mb-1">
            <h3 className="text-base font-bold text-slate-100">
                {diploma}
            </h3>
            <span className="text-xs font-mono text-slate-500">
                {date}
            </span>
        </div>
        
        <div className="text-blue-400 text-sm mb-2 font-medium">
            {school}
        </div>
        
        <p className="text-slate-400 text-sm leading-relaxed">
            {description}
        </p>
    </article>
  );
};
export default FormationCard;