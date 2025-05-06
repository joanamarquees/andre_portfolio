import { motion } from 'framer-motion';
import { FeaturedProjectType, stackLabels } from '@/data/projects';
import * as SiIcons from 'react-icons/si';

// add outer div  <div className="h-screen overflow-y-auto">

const FeaturedProject = (project: FeaturedProjectType) => {
  return (
    <motion.div 
      className="h-[80vh] bg-zinc-800 border-[3px] border-t-zinc-600 border-l-zinc-600 border-r-zinc-900 border-b-zinc-900 shadow-md font-martian"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ 
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
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
      <div id="teste" className="h-[calc(100%-1.5rem)] p-4 bg-black border-[2px] border-t-zinc-700 border-l-zinc-700 border-r-zinc-600 border-b-zinc-600 m-1">
        <div className="flex flex-col items-center justify-between w-full rounded-sm bg-zinc-900 h-full p-9 gap-y-5">
          {/* Changed grid to be responsive */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5">
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
              <div className="flex flex-col items-start justify-start gap-2">
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
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-5 md:gap-x-10 text-white text-sm font-martian items-start uppercase">
            {/* stack */}
            <div className="text-orange-400 col-span-1 lg:col-span-2">
              <p className="font-jersey text-2xl md:text-3xl pb-3"> STACK </p>
              <div className="flex flex-row gap-2 text-sm text-white">
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
      </div>
    </motion.div>
  )
};

export default FeaturedProject
