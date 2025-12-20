import { projectsData } from './data/projects';

const Projects = () => {
  return (
    <section className="mb-12">
      <h2 className="text-lg font-bold text-slate-100 mb-4 border-b border-slate-800 pb-1">
        Projets
      </h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <li key={project.id} className="flex flex-col">
            <div className="flex justify-between mb-2">
              <h3 className="font-bold text-slate-100">
                {project.title} <span className="text-xs font-normal text-slate-500 border border-slate-800 px-1 rounded ml-2">{project.status}</span>
              </h3>
              {project.url && (
                <a href={project.url} target="_blank" className="text-xs text-blue-400 hover:underline">
                  Code source ↗
                </a>
              )}
            </div>

            <p className="text-slate-400 text-sm mb-2 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 text-xs text-slate-600 font-mono">
               {project.tech.map((t) => (
                 <span key={t}>{t}</span>
               ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects;