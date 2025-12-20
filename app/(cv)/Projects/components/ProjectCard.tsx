import React from 'react';
import type { ProjectProps } from '@/app/types/types';

const ProjectCard: React.FC<ProjectProps> = ({ 
    title, description, tech, status, url 
}) => {
  return (
    <article className="flex flex-col bg-slate-900 border border-slate-800 p-5 rounded-lg h-full">
        <div className="flex justify-between items-baseline mb-3">
            <h3 className="font-bold text-slate-100 text-lg">
                {title}
            </h3>
            <span className="text-xs font-medium text-slate-400 border border-slate-700 px-2 py-0.5 rounded bg-slate-950">
                {status}
            </span>
        </div>

        <p className="text-slate-400 text-sm mb-4 flex-1">
            {description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-800">
            <div className="text-xs text-slate-500">
                {tech.slice(0, 3).join(' / ')}
            </div>
            
            {url && (
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-blue-400 hover:text-blue-300 hover:underline">
                Voir le code &rsaquo;
            </a>
            )}
        </div>
    </article>
  );
};

export default ProjectCard;