import React from 'react';
import ProjectCard from './components/ProjectCard';
import { projectsData } from './data/projects';

const Projects: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-slate-100 mb-6 border-b border-slate-800 pb-2">
        Projets
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id}
            {...project}
          />
        ))}
      </ul>
    </section>
  )
}

export default Projects;