import React from 'react';
import type { ExperienceProps } from '@/app/types/types';

const ExperienceCard: React.FC<ExperienceProps> = ({ 
    date, company, role, description, skills, isCurrent 
}) => {
  return (
    <article className={`
        p-5 rounded-xl border transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/5
        ${isCurrent 
            ? 'bg-slate-900 border-blue-500/30' 
            : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'}
    `}>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3 gap-2">
            <div>
                <h3 className="font-bold text-slate-100 text-lg">{role}</h3>
                <span className="text-blue-400 text-sm font-medium">@ {company}</span>
            </div>
            <span className={`
                text-xs font-bold px-2 py-1 rounded border
                ${isCurrent 
                    ? 'bg-blue-500/10 text-blue-300 border-blue-500/20' 
                    : 'bg-slate-800 text-slate-500 border-slate-700'}
            `}>
                {date}
            </span>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4">
            {description}
        </p>

        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span key={skill} className="text-[10px] uppercase font-semibold text-slate-400 bg-slate-800/50 px-2 py-1 rounded border border-slate-700/50">
                    {skill}
                </span>
            ))}
        </div>
    </article>
  );
};

export default ExperienceCard;