import React from 'react';
import type { ExperienceProps } from '@/app/types/types';

const ExperienceCard: React.FC<ExperienceProps> = ({ 
    id, 
    date, 
    company, 
    role, 
    description, 
    skills, 
    isCurrent 
}) => {
  return (
    <article className={`
        p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1
        ${isCurrent 
            ? 'bg-slate-900 border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.15)]' 
            : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-800'}
    `}>
        <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div>
                <h3 className="font-bold text-slate-100 text-lg tracking-tight">
                    {role}
                </h3>
                <div className="text-blue-400 font-medium text-sm">
                    @ {company}
                </div>
            </div>
            
            <span className={`
                text-xs font-bold px-2.5 py-1 rounded-md border w-fit
                ${isCurrent 
                    ? 'bg-blue-500/10 text-blue-300 border-blue-500/20' 
                    : 'bg-slate-800 text-slate-400 border-slate-700'}
            `}>
                {date}
            </span>
        </header>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 border-l-2 border-slate-800 pl-3">
            {description}
        </p>

        <footer className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span 
                    key={skill} 
                    className="text-[11px] uppercase tracking-wide font-semibold text-slate-300 bg-slate-800 px-2 py-1 rounded border border-slate-700 hover:border-slate-600 transition-colors"
                >
                    {skill}
                </span>
            ))}
        </footer>
    </article>
  );
};

export default ExperienceCard;