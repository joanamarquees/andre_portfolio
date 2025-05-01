import React from 'react'
import './index.css'
import { motion } from 'framer-motion'

import SkillCloud from './components/skills-cloud'
import Projects from './components/projects'
import { projects, freelancingProjects } from './data/projects'

import logo from './assets/arrz_logo.svg'
import { companies } from './data/companies'
import FeaturedProject from './components/featured-project'

function App() {

  {/* Scroll effect for the header buttons */}
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string, scrollBlock='start' as ScrollLogicalPosition) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: scrollBlock
      });
    }
  };

  return (
    <div className="bg-black h-full w-screen text-martian overflow-x-hidden">
      {/* Header */}
      <div className="fixed w-full flex h-[10%] items-center justify-between text-orange-400 font-jersey text-center text-lg sm:text-3xl px-5 md:px-10 bg-black/70 z-50 backdrop-blur-[2px] select-none">
        <a href="#home">
          <img src={logo} alt="Logo" className="sm:h-20 md:h-30 w-14 sm:w-20 md:w-30" />
        </a>

        {/* Desktop Menu - hidden on small screens, visible on md and up */}
        <div className="flex gap-3 md:gap-6">
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')}> ABOUT </a>
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}> PROJECTS </a>
          <a href="#contacts" onClick={(e) => scrollToSection(e, 'contacts')}> CONTACT ME </a>
        </div>
      </div>

      {/* Landing page */}
      <div id="home" className="flex min-h-screen max-w-full pt-[5%] text-white items-center justify-center">
        <div className="h-full w-full flex flex-col justify-between items-center font-jersey leading-none select-none py-48 md:py-36 lg:py-14">
          <motion.p 
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full text-center sm:text-left px-5 text-[20vw] whitespace-nowrap"
          >
            FULL-STACK
          </motion.p>
          
          <p className="text-[6vw] whitespace-nowrap text-center">
            HI THERE ! I'M ARRZ <span className="text-orange-400">( AKA ARROZ )</span>
          </p>
          
          <motion.div 
            initial={{ x: 1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full flex justify-center sm:justify-end"
          >
            <p className="bg-orange-400 rounded-md md:rounded-l-md text-center sm:text-right px-5 text-[20vw] whitespace-nowrap">
              DEVELOPER
            </p>
          </motion.div>
        </div>
      </div>

      {/* About section - skills/tools & companies/works */}
      <div id="about" className="grid grid-cols-1 md:grid-cols-2 min-h-screen w-full pt-[10%] px-5 md:px-10">
        {/* ABOUT text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center font-martian text-sm md:text-lg lg:text-xl text-white gap-4 px-6 leading-relaxed">
          <div className="flex flex-col gap-3">
            <p>
              I'm André
              <span className="text-orange-400 font-semibold"> {"{ a backend-loving, full-stack-capable }"} </span>
              who'd rather scale servers than drink coffee.
            </p>
            <p>
              I enjoy turning complex logic into clean, efficient code — whether it's APIs,
              containers, or DevOps pipelines. 
            </p>
            <p>
              <span className="text-orange-300 font-bold uppercase">Off the clock? </span>
              I'm usually gaming, cruising in my car 🚗, hanging out with my two bunnies 🐇🐇,
              or pretending to be productive while actually optimizing my PC setup.
            </p>
            <p className="text-orange-300 font-medium">
              Let's build cool stuff (and maybe grill something too)!
            </p>
          </div>

          {/* Companies */}
          <div className="w-full pt-5 text-white 
                          [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent_100%)]">
            <div className="flex whitespace-nowrap gap-4 md:gap-8 scroll-animation">
              {[...companies, ...companies].map((company, index) => (
                <div 
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 h-12 md:h-15 w-fit p-2 bg-zinc-900 rounded-md items-center gap-1 md:gap-2 flex"
                >
                  <img 
                    src={company.icon} 
                    alt={company.name} 
                    className="h-[5vh]"
                  />
                  {company.showName && (
                    <p className="text-zinc-400 text-xs md:text-base whitespace-nowrap">
                      {company.name}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
        
        {/* Skills & tools */}
        <div className="h-[50vh] md:h-full md:p-10">
          <SkillCloud />
        </div>
      </div>
          
      {/* Projects */}
      <div id="projects" className="min-h-screen h-full w-full pt-[10%] md:pt-[5%]">
        <p className="font-jersey text-orange-400 text-3xl md:text-5xl px-5 md:px-10 py-[2vh]">FEATURED PROJECTS</p>
        {/* Featured projects */}
        <div className="flex justify-center items-center w-full">
            <div className="w-[95vw] h-[80vh] bg-zinc-800 border-[3px] border-t-zinc-600 border-l-zinc-600 border-r-zinc-900 border-b-zinc-900 shadow-md font-martian">
              {/* Window Header */}
              <div className="h-6 bg-orange-400 flex items-center justify-between px-2">
                <span className="text-zinc-800 text-xs">{freelancingProjects[0].id}</span>
                <div className="flex gap-1">
                  <div className="w-5 h-5 bg-zinc-800 border border-t-zinc-600 border-l-zinc-600 border-r-zinc-900 border-b-zinc-900 hover:border-t-zinc-900 hover:border-l-zinc-900 hover:border-r-zinc-600 hover:border-b-zinc-600 text-xs flex items-center justify-center text-white pb-2 select-none">_</div>
                  <div className="w-5 h-5 bg-zinc-800 border border-t-zinc-600 border-l-zinc-600 border-r-zinc-900 border-b-zinc-900 hover:border-t-zinc-900 hover:border-l-zinc-900 hover:border-r-zinc-600 hover:border-b-zinc-600 text-xs flex items-center justify-center text-white pb-0.5 select-none">□</div>
                  <div className="w-5 h-5 bg-zinc-800 border border-t-zinc-600 border-l-zinc-600 border-r-zinc-900 border-b-zinc-900 hover:border-t-zinc-900 hover:border-l-zinc-900 hover:border-r-zinc-600 hover:border-b-zinc-600 text-xs flex items-center justify-center text-white p-0.5 select-none">×</div>
                </div>
              </div>

              {/* Window Content */}
              <div className="h-[calc(100%-1.5rem)] p-4 bg-black border-[2px] border-t-zinc-700 border-l-zinc-700 border-r-zinc-600 border-b-zinc-600 m-1">
                <FeaturedProject {...freelancingProjects[0]}/>
              </div>
            </div>
        </div>
        <p className="font-jersey text-orange-400 text-3xl md:text-5xl p-5 md:p-10">SMALL PROJECTS</p>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hidden px-5 sm:px-10 no-scrollbar py-[1vh]">
          {projects.map(project =>
            <div className="snap-center shrink-0">
              <Projects {...project} />
            </div>
          )}
        </div>
      </div>

      {/* Contact */}
      <div id="contacts" className="flex flex-col h-screen w-full pt-[10%] px-5">
        <div className="h-[93%] flex flex-col justify-end md:justify-baseline md:grid md:grid-cols-4">
          {/* Text Section */}
            <div className="flex items-center justify-start md:justify-center md:col-span-1">
            <div className="font-jersey text-white text-left select-none md:rotate-[-90deg] md:whitespace-nowrap">
              <p className="md:hidden text-7xl px-5">
              ANY COOL IDEAS? OR JUST WANT TO TALK?
              </p>
              <div className="hidden md:block">
              <p className="text-7xl lg:text-[7rem] leading-[0.6]">
                ANY COOL IDEAS?
              </p>
              <p className="text-7xl lg:text-[8.5rem] leading-[0.6]">
                OR JUST WANT
              </p>
              <p className="text-9xl lg:text-[14rem] leading-[0.6]">
                TO TALK?
              </p>
              </div>
            </div>
            </div>

          {/* Contact Links */}
          <div className="flex flex-col justify-center md:col-span-3">
            <p className="font-jersey text-8xl md:text-[10rem] lg:text-[15rem] leading-[0.8] text-left select-none">
              {["LINKEDIN", "GITHUB", "EMAIL"].map((label, i) => {
                const links = [
              "https://www.linkedin.com/in/andrefssantos/",
              "https://github.com/arrzdev",
              "mailto:andrefssantos@tecnico.ulisboa.pt",
                ];
                return (
              <a
                key={label}
                className="relative px-5 text-orange-400 transition-all duration-200 bg-gradient-to-r from-orange-400 to-orange-400 bg-[length:0%_100%] bg-no-repeat hover:bg-[length:100%_100%] hover:text-orange-200"
                href={links[i]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
                <br />
              </a>
                );
              })}
            </p>
          </div>
        </div>
        {/* Footer */}
        <div className="h-[5%] lg:h-[7%] p-1 lg:p-3">
            <p className="text-white font-martian text-xs uppercase text-center">
            © 2024 arrz. 
            Made with <span className="text-orange-400">{"<3"}</span> in Portugal by{' '}
            <a 
              href="https://juma-portfolio.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-300 hover:text-orange-200"
            >
              Joana M.
            </a>
            </p>
        </div>
      </div>
      
    </div>
  )
}

export default App
