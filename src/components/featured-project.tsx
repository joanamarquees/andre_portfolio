import { FeaturedProjectType, stackLabels } from '@/data/projects';
import * as SiIcons from 'react-icons/si';
import { useState } from 'react';

// add outer div  <div className="h-screen overflow-y-auto">

const FeaturedProject = (project: FeaturedProjectType) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full h-[80vh] bg-zinc-800 border-[3px] border-t-zinc-600 border-l-zinc-600 border-r-zinc-900 border-b-zinc-900 shadow-md font-martian">

      {/* Window Header */}
      <div className="h-6 bg-orange-400 flex items-center justify-between px-2">
        <span className="text-zinc-800 text-xs">{project.id}</span>
        <div className="flex gap-1">
          <button className="w-5 h-5 bg-zinc-800 border border-t-zinc-600 border-l-zinc-600 border-r-zinc-900 border-b-zinc-900 hover:border-t-zinc-900 hover:border-l-zinc-900 hover:border-r-zinc-600 hover:border-b-zinc-600 text-xs flex items-center justify-center text-white">_</button>
          <button className="w-5 h-5 bg-zinc-800 border border-t-zinc-600 border-l-zinc-600 border-r-zinc-900 border-b-zinc-900 hover:border-t-zinc-900 hover:border-l-zinc-900 hover:border-r-zinc-600 hover:border-b-zinc-600 text-xs flex items-center justify-center text-white">□</button>
          <button className="w-5 h-5 bg-zinc-800 border border-t-zinc-600 border-l-zinc-600 border-r-zinc-900 border-b-zinc-900 hover:border-t-zinc-900 hover:border-l-zinc-900 hover:border-r-zinc-600 hover:border-b-zinc-600 text-xs flex items-center justify-center text-white">×</button>
        </div>
      </div>

      {/* Window Content */}
      <div id="teste" className="h-[calc(100%-1.5rem)] p-2 md:p-4 bg-black border-[2px] border-t-zinc-700 border-l-zinc-700 border-r-zinc-600 border-b-zinc-600 m-1">
        <div className="flex flex-col items-center justify-between w-full rounded-sm bg-zinc-900 h-full p-2 md:p-9 gap-y-5 scroll-inner pb-20">
          {/* Changed grid to be responsive */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-2 md:gap-y-5">
            <div className="flex col-span-1 items-center">
              <video
                src={project.preview}
                autoPlay
                muted
                loop
                playsInline
                width="100%"
              />
            </div>
            <div className="col-span-1">
              <div className="flex flex-col items-start justify-start gap-0 md:gap-2">
                <p className="text-orange-400 font-jersey text-2xl md:text-4xl uppercase">
                  {project.name}
                </p>
                <div className="text-white text-[10px] md:text-sm font-martian leading-7">
                  {/* Mobile: Toggle between truncated/full */}
                  <p className="block md:hidden">
                    {expanded 
                      ? project.description 
                      : `${project.description.slice(0, 140)}...`
                    }
                  </p>

                  {/* Desktop: Always full */}
                  <p className="hidden md:block">
                    {project.description}
                  </p>

                  {/* Toggle Button for Mobile */}
                  <button 
                    onClick={() => setExpanded(!expanded)} 
                    className="mt-2 text-orange-400 hover:text-orange-300 block md:hidden"
                  >
                    {expanded ? 'READ LESS' : 'READ MORE'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION - Made responsive */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-5 md:gap-x-10 text-white text-sm font-martian items-start uppercase">
            {/* stack */}
            <div className="text-orange-400 col-span-1 lg:col-span-2">
              <p className="font-jersey text-2xl md:text-3xl md:pb-3"> STACK </p>
              <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 text-sm text-white">
                {project.stack.map((tech, index) => {
                  const Icon = SiIcons[tech];
                  return Icon ? (
                    <div 
                      key={index} 
                      className="flex flex-col items-center justify-center h-fit sm:h-14 md:h-[68px] w-12 sm:w-14 md:w-[68px] p-2 gap-1 md:gap-2 rounded-md border-2 border-zinc-700"
                    >
                      <Icon className="text-orange-400 w-8 md:w-9 h-8 md:h-9" />
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
              <p className="text-orange-400 font-jersey text-2xl md:text-3xl md:pb-3">MY ROLE</p>
              <p className="text-xs md:text-sm">{project.role}</p>
            </div>

            {/* date */}
            <div>
              <p className="text-orange-400 font-jersey text-2xl md:text-3xl md:pb-3">TIME SPAN</p>
              <p className="text-xs md:text-sm">{project.date}</p>
            </div>

            {/* company */}
            <div>
              <p className="text-orange-400 font-jersey text-2xl md:text-3xl md:pb-3">ENTERPRISE</p>
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
      </div>
    </div>
  )
};

export default FeaturedProject
