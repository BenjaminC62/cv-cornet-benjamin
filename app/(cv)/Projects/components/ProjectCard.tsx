import React from 'react';
import type { ProjectProps } from '@/app/types/types';

const ProjectCard: React.FC<Omit<ProjectProps, 'id'>> = ({ 
    title, description, tech, status, url 
}) => {
  return (
    <li className="flex flex-col bg-slate-900/30 border border-slate-800 p-4 rounded-lg hover:border-slate-600 transition-colors">
        <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-slate-100">
                {title}
            </h3>
            <span className="text-[10px] text-slate-500 border border-slate-800 px-1.5 rounded">
                {status}
            </span>
        </div>

        <p className="text-slate-400 text-sm mb-4 flex-1">
            {description}
        </p>

        <div className="flex items-end justify-between mt-auto">
            <div className="flex gap-2 text-xs text-slate-500 font-mono">
                {tech.slice(0, 3).join(' • ')}
            </div>
            
            {url && (
                <a 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 hover:text-blue-300 underline underline-offset-4"
                >
                    Code source
                </a>
            )}
        </div>
    </li>
  );
};

export default ProjectCard;