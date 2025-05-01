import { ProjectType, stackLabels } from '../data/projects.tsx'
import * as SiIcons from 'react-icons/si';  // Import all icons from Si

const Projects = (project: ProjectType) => {
  return (
    <div className="relative inline-block h-full w-56">
      
      {/* Pixel Border */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top and Bottom Lines */}
        <div className="absolute top-0 left-3 right-3 h-1 bg-orange-400"/>
        <div className="absolute bottom-0 left-3 right-3 h-1 bg-orange-400"/>

        {/* Side Lines */}
        <div className="absolute top-3 bottom-3 left-0 w-1 bg-orange-400"/>
        <div className="absolute top-3 bottom-3 right-0 w-1 bg-orange-400"/>

        {/* Corner Squares */}
        {/* Left corner */}
        <div className="absolute top-2 left-1 w-1 h-1 bg-orange-400"/>
        <div className="absolute top-1 left-2 w-1 h-1 bg-orange-400"/>

        {/* Right corner */}
        <div className="absolute top-2 right-1 w-1 h-1 bg-orange-400"/>
        <div className="absolute top-1 right-2 w-1 h-1 bg-orange-400"/>

        {/* Bottom left corner */}
        <div className="absolute bottom-2 left-1 w-1 h-1 bg-orange-400"/>
        <div className="absolute bottom-1 left-2 w-1 h-1 bg-orange-400"/>

        {/* Bottom right corner */}
        <div className="absolute bottom-2 right-1 w-1 h-1 bg-orange-400"/>
        <div className="absolute bottom-1 right-2 w-1 h-1 bg-orange-400"/>
      </div>

      {/* Actual Card Content */}
      <div className="relative h-full w-full p-3 flex flex-col justify-between items-center bg-transparent gap-4">
        <div>
          <img src={project.image} alt={project.name.toString()} className="w-full h-32 rounded-lg"/>
          <p className="font-jersey text-2xl text-center text-white leading-none uppercase">{project.name}</p>
        </div>

        {/* Tech Stack (Icons) */}
        <div className="flex flex-wrap justify-center gap-3 text-sm text-white">
          {project.stack.map((tech, index) => {
            // Dynamically get the icon component from SiIcons object
            const Icon = SiIcons[tech];
            return Icon ? (
              <div 
                key={index} 
                className="relative group"
              >
                <Icon className="text-white w-6 h-6" />
                {/* Tooltip */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                               bg-black/80 px-2 py-1 rounded text-xs text-white
                               opacity-0 group-hover:opacity-100 transition-opacity
                               whitespace-nowrap pointer-events-none">
                  {stackLabels[tech]}
                </div>
              </div>
            ) : null;
          })}
        </div>

        {/* Pixel Button */}
        <button className="pixel-button" onClick={() => window.open(project.gitLink.toString(), '_blank')}>
          <p className="font-jersey text-black text-xl">VIEW PROJECT</p>
        </button>
      </div>

    </div>
  );
};

export default Projects;
