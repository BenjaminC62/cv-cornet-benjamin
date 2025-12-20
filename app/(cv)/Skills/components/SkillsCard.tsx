import React from 'react';
import type { SkillGroupProps } from '@/app/types/types';

const SkillsCard: React.FC<SkillGroupProps> = ({ category, items }) => {
  return (
    <div className="flex flex-col gap-3">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider border-l-2 border-blue-500 pl-3">
            {category}
        </h3>
        <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
            <span 
                key={skill} 
                className="px-3 py-1.5 bg-slate-900 text-slate-300 text-sm font-medium rounded-lg border border-slate-800 hover:border-slate-600 hover:text-white transition-colors cursor-default"
            >
                {skill}
            </span>
            ))}
        </div>
    </div>
  );
};

export default SkillsCard;