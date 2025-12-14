import React from 'react';
import type { SkillsProps } from '@/app/types/types';

const SkillCard: React.FC<SkillsProps> = ({ name, icon, color, colorDot }) => {
  return (
    <div className="
      bg-slate-900 p-4 rounded-xl border border-slate-800 
      hover:-translate-y-1 transition-transform duration-300 
      shadow-sm
    ">
      <div className="flex items-start justify-between">
        <div className={`text-3xl p-2 rounded-lg bg-slate-800 ${color}`}>
          {icon}
        </div>
        
        <div className={`h-2 w-2 rounded-full ${colorDot}`} />
      </div>

      <div className="mt-4">
        <h3 className="font-bold text-slate-100 text-lg">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default SkillCard;