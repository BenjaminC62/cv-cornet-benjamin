import React from 'react';
import ProjectCard from './components/ProjectCard';
import { projectsData } from './data/projects';

const Projects = () => {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-bold text-slate-100 mb-8 flex items-center gap-3">
        Projets
        <span className="h-px bg-slate-800 flex-1 rounded-full"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id}
            {...project}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects;