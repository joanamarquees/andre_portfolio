import { ProjectType } from '../data/projects.tsx'
import { FaGithub } from 'react-icons/fa'

const Projects = (project: ProjectType) => {
  return (
    <div className="h-72 w-56 border-orange-300 border-2 rounded-lg p-3 flex flex-col justify-between">
      <div>
        <img src={project.image} alt="KahootBot" className="w-full h-30 rounded-lg"/>
        <p className="font-jersey text-2xl text-left text-orange-400 leading-none">{project.name}</p>
        <p className="font-martian text-white text-xs text-left">
          {project.description}
        </p>
      </div>
      <div className="flex justify-between items-end">
        <a href={project.gitLink.toString()} 
           className="text-orange-200 hover:text-orange-400 transition-colors"
           target="_blank"
           rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <p className="font-martian text-white text-[9px]">{project.date}</p>
      </div>
    </div>
  )
}

export default Projects