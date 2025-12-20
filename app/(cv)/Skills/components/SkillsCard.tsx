import React from 'react';
import type { SkillsProps } from '@/app/types/types';

const SkillCard: React.FC<SkillsProps> = ({ name, icon, color, colorDot }) => {
  return (
    <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 shadow-sm group">
      <div className="flex items-start justify-between mb-3">
        <div className={`text-2xl p-2 rounded-lg bg-slate-800/50 ${color}`}>
          {icon}
        </div>
        <div className={`h-1.5 w-1.5 rounded-full opacity-50 group-hover:opacity-100 transition-opacity ${colorDot}`} />
      </div>
      <h3 className="font-bold text-slate-200 text-sm sm:text-base tracking-wide">
        {name}
      </h3>
    </div>
  );
};

export default SkillCard;