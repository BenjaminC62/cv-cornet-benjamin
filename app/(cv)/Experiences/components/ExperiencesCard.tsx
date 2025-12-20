import React from 'react';
import type { ExperienceProps } from '@/app/types/types';

const ExperienceCard: React.FC<ExperienceProps> = ({ 
    role, company, date, description, skills 
}) => {
  return (
    <div className="flex flex-col p-5 rounded-lg border border-transparent hover:bg-slate-900/30 transition-colors">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
            <h3 className="text-lg font-bold text-slate-100">
                {role} <span className="text-blue-400 font-normal">@ {company}</span>
            </h3>
            <span className="text-xs font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                {date}
            </span>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-3xl">
            {description}
        </p>

        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span key={skill} className="text-[11px] font-medium text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800/60">
                    {skill}
                </span>
            ))}
        </div>
    </div>
  );
};

export default ExperienceCard;