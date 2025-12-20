import React from 'react';
import type { ProjectProps } from '@/app/types/types';

const ProjectCard: React.FC<ProjectProps> = ({ 
    title, description, tech, status, url 
}) => {
  return (
    <div className="flex flex-col bg-slate-900/30 border border-slate-800 p-6 rounded-xl hover:border-blue-500/30 transition-all duration-300 h-full group">
        <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-slate-100 text-lg group-hover:text-blue-400 transition-colors">
                {title}
            </h3>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-slate-800 px-2 py-1 rounded-full bg-slate-950">
                {status}
            </span>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
            {description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800/50">
            <div className="flex gap-2 text-xs font-mono text-slate-500">
                {tech.slice(0, 3).join(' • ')}
            </div>
            
            {url && (
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors">
                Voir le code <span className="text-lg leading-none">›</span>
            </a>
            )}
        </div>
    </div>
  );
};

export default ProjectCard;