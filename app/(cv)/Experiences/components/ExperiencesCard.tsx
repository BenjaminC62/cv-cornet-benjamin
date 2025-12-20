import React from 'react';
import type { ExperienceProps } from '@/app/types/types';

const ExperienceCard: React.FC<ExperienceProps> = ({ 
    date, company, role, description, skills 
}) => {
  return (
    <li className="flex flex-col py-6 border-b border-slate-800/50 last:border-0 first:pt-0">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
            <h3 className="font-bold text-slate-100 text-lg">
                {role} <span className="text-blue-400 font-normal">@ {company}</span>
            </h3>
            <span className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                {date}
            </span>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-3">
            {description}
        </p>

        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span key={skill} className="text-[10px] uppercase font-bold text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                    {skill}
                </span>
            ))}
        </div>
    </li>
  );
};

export default ExperienceCard;