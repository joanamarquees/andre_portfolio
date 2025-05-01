import { FeaturedProjectType, stackLabels } from '../data/projects';
import * as SiIcons from 'react-icons/si';

const FeaturedProject = ( project: FeaturedProjectType ) => {
  return (
    <div className="flex flex-col items-center justify-between w-full p-4 rounded-sm bg-zinc-900 h-full overflow-y-scroll">
      {/* Changed grid to be responsive */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <img 
            src={project.image} 
            alt={project.name.toString()} 
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="col-span-1">
          <div className="flex flex-col items-start justify-start gap-2 p-3 md:p-5">
            <p className="text-orange-400 font-jersey text-2xl md:text-4xl uppercase">
              {project.name}
            </p>
            <p className="text-white text-xs md:text-sm font-martian leading-7">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION - Made responsive */}
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 text-white text-sm font-martian items-start p-3 md:p-5 uppercase mt-4">
        {/* stack */}
        <div className="text-orange-400">
          <p className="font-jersey text-2xl md:text-3xl pb-3"> STACK </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 gap-y-2 text-sm text-white">
            {project.stack.map((tech, index) => {
              const Icon = SiIcons[tech];
              return Icon ? (
          <div 
            key={index} 
            className="flex flex-col h-fit sm:h-14 md:h-[68px] w-12 sm:w-14 md:w-[68px] p-2 gap-1 md:gap-2 items-center rounded-md border-2 border-zinc-700"
          >
            <Icon className="text-orange-400 w-8 md:9 h-8 md:h-9" />
            <div className="text-orange-400 text-[0.8vh] md:text-[1vh] truncate">
              {stackLabels[tech]}
            </div>
          </div>
              ) : null;
            })}
          </div>
        </div>

        {/* role/position */}
        <div>
          <p className="text-orange-400 font-jersey text-2xl md:text-3xl pb-3">MY ROLE</p>
          <p className="text-xs md:text-sm">{project.role}</p>
        </div>

        {/* date */}
        <div>
          <p className="text-orange-400 font-jersey text-2xl md:text-3xl pb-3">TIME SPAN</p>
          <p className="text-xs md:text-sm">{project.date}</p>
        </div>

        {/* company */}
        <div>
          <p className="text-orange-400 font-jersey text-2xl md:text-3xl pb-3">ENTERPRISE</p>
          <div 
            key={project.client.toString()}
            className="flex-shrink-0 h-10 md:h-12 w-fit p-2 bg-zinc-900 rounded-md items-center gap-1 md:gap-2 flex border-2 border-zinc-700"
          >
            <img 
              src={project.clientLogo} 
              alt={project.client.toString()} 
              className="h-[4vh] md:h-[5vh]"
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default FeaturedProject;