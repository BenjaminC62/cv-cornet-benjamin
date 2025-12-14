import React from 'react';
import type { SkillsProps } from '@/app/types/types';

const SkillsCard: React.FC<SkillsProps> = ({ name, level, icon, color, colorDot }) => {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-default">
    <div className="flex items-start justify-between">
      <div className={`text-3xl p-2 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors ${color}`}>
        {icon}
      </div>
      <div className={`h-2 w-2 rounded-full ${colorDot} group-hover:animate-pulse`} />
    </div>

      <div className="mt-4">
        <h3 className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
          {name}
        </h3>
        <p className="text-sm text-gray-500 font-medium mt-1">
          {level}
        </p>
      </div>
    </div>
  );
};

export default SkillsCard;