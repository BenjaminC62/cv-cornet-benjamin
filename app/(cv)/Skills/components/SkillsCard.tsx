import React from 'react';
import type { SkillGroupProps } from '@/app/types/types';

const SkillsCard: React.FC<SkillGroupProps> = ({ category, items }) => {
  return (
    <div>
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
            {category}
        </h3>
        <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
            <span 
                key={skill} 
                className="px-2.5 py-1 bg-slate-900 text-slate-300 text-xs font-medium rounded border border-slate-800"
            >
                {skill}
            </span>
            ))}
        </div>
    </div>
  );
};
export default SkillsCard;