import React from 'react';
import type { FormationProps } from '@/app/types/types';

const FormationCard: React.FC<FormationProps> = ({ 
    id, date, school, diploma, description 
}) => {
  return (
    <li className="flex flex-col py-4 border-b border-slate-800/50 last:border-0 first:pt-0">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
            <h3 className="font-bold text-slate-100 text-lg">
                {diploma}
            </h3>
            <span className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                {date}
            </span>
        </div>
        
        <div className="text-blue-400 text-sm font-medium mb-2">
            {school}
        </div>
        
        <p className="text-slate-400 text-sm leading-relaxed">
            {description}
        </p>
    </li>
  );
};

export default FormationCard;