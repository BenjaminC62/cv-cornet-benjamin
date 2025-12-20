import React from 'react';
import type { ExperienceProps } from '@/app/types/types';

const ExperienceCard: React.FC<ExperienceProps> = ({ 
    role, company, date, description, skills 
}) => {
  return (
    <article className="p-4 rounded border border-slate-800/50 bg-slate-900/20">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-1">
            <h3 className="text-base font-bold text-slate-100">
                {role} <span className="text-slate-500 font-normal">@ {company}</span>
            </h3>
            <span className="text-xs font-mono text-slate-500">
                {date}
            </span>
        </div>

        <p className="text-slate-400 text-sm mb-3 leading-relaxed">
            {description}
        </p>

        {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span key={skill} className="text-[10px] text-blue-400 bg-blue-950/30 px-1.5 py-0.5 rounded">
                        #{skill}
                    </span>
                ))}
            </div>
        )}
    </article>
  );
};
export default ExperienceCard;