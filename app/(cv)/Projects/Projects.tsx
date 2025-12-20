import React from 'react';
import ProjectCard from './components/ProjectCard';
import { projectsData } from './data/projects';

const Projects: React.FC = () => {
  return (
    <section className="mb-16">
      <div className="mb-8 flex items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
          Projets Récents
        </h2>
        <div className="h-px bg-slate-800 flex-1 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            status={project.status}
            icon={project.icon}
            url={project.url}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects;