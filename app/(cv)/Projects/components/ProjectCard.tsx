import React from 'react';
import type { ProjectProps } from '@/app/types/types';

const ProjectCard: React.FC<ProjectProps> = ({ 
    id, title, description, tech, status, icon, url 
}) => {
  return (
    <div className="
        flex flex-col h-full
        bg-slate-900 border border-slate-800 rounded-xl p-5
        hover:border-slate-700 hover:-translate-y-1 hover:shadow-lg
        transition-all duration-300
    ">
        <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
                <div className="text-2xl bg-slate-800 p-2 rounded-lg">
                    {icon}
                </div>
                <div>
                    <h3 className="font-bold text-slate-100 text-lg leading-tight">
                        {title}
                    </h3>
                    <span className="text-xs text-slate-500 font-medium border border-slate-800 px-1.5 py-0.5 rounded bg-slate-950">
                        {status}
                    </span>
                </div>
            </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
            {description}
        </p>

        <div className="pt-4 border-t border-slate-800/50 flex items-end justify-between gap-4 mt-auto">
            <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase font-bold text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                        {t}
                    </span>
                ))}
            </div>

            {url && (
                <a 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="
                        flex items-center gap-1.5 
                        text-xs font-bold text-slate-400 
                        bg-slate-800 hover:bg-blue-600 hover:text-white 
                        px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap
                    "
                >
                    <span>Code</span>
                </a>
            )}
        </div>
    </div>
  );
};

export default ProjectCard;