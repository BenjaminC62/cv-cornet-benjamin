import React from 'react';
import type { SkillsProps } from '@/app/types/types';

const SkillCard: React.FC<SkillsProps> = ({ name, icon, color }) => {
  return (
    <li className="flex items-center gap-3 p-3 rounded-lg border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition-colors">
      <span className={`text-xl ${color} filter drop-shadow-sm`}>
        {icon}
      </span>
      <span className="text-slate-200 font-medium text-sm">
        {name}
      </span>
    </li>
  );
};

export default SkillCard;