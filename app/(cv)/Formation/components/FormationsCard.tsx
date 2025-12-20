import React from 'react';
import type { FormationProps } from '@/app/types/types';

const FormationCard: React.FC<FormationProps> = ({ 
    id, date, school, diploma, description 
}) => {
  return (
    <div className="py-4 border-l-2 border-slate-800 pl-4 hover:border-blue-500 transition-colors">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
            <h3 className="font-bold text-slate-100 text-lg">
                {diploma}
            </h3>
            <span className="text-xs font-bold text-slate-500">
                {date}
            </span>
        </div>
        
        <div className="text-blue-400 text-sm font-medium mb-1">
            {school}
        </div>
        
        <p className="text-slate-400 text-sm">
            {description}
        </p>
    </div>
  );
};

export default FormationCard;