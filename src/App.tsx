import React from 'react'
import './index.css'

import SkillCloud from './components/skills-cloud'
import Projects from './components/projects'
import { projects } from './data/projects'

import logo from './assets/arrz_logo.svg'
import icon from './assets/arrz_icon.svg'
import rw_interactive from './assets/rw_interactive.svg'
import sky from './assets/sky.svg'
import alma from './assets/alma.svg'

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
      <div id="home" className="flex flex-col-reverse md:flex-row h-screen w-full items-center text-center md:text-left justify-center md:justify-between px-8 md:px-32 pt-[10%]">
        <div className="flex flex-col w-full md:w-[80%] items-center md:items-start text-center md:text-left justify-center font-martian text-xl md:text-2xl lg:text-5xl text-white gap-4">
          <p>Hi there 👋!</p>
          {/* This awkward aproach is the correct way of having two different
            stylizations and keep the correct text responsiveness */}
          <p className="flex flex-wrap items-center text-center md:text-left justify-center md:justify-start gap-1">
            <span>I'm arrz</span>
            <span className="text-orange-400">{'{ aka Arroz }'}</span>
          </p>
          <p className="pl-0 md:pl-24">a backend developer</p>
        </div>

        <div className="transform -scale-x-100 items-center justify-center">          
          <img src={icon} alt="Bunny icon" className="h-40 md:h-[50rem] w-40 md:w-70"/>
        </div>
      </div>

      {/* Skills & tools and companies/works */}
      <div id="about" className="flex flex-col md:flex-row h-screen w-full pt-[10%]">
        {/* ABOUT text */}
        <div className="flex flex-col w-full md:w-[50%] items-center md:items-start text-center md:text-left justify-center font-martian text-sm md:text-lg lg:text-xl text-white gap-4 px-6 leading-relaxed">
          <div className="sm:pl-10 lg:pl-20">
            <p>
              I’m André
              <span className="text-orange-400 font-semibold"> {"{ a backend-loving, full-stack-capable }"} </span>
              who’d rather scale servers than drink coffee.
            </p>
            <p>
              I enjoy turning complex logic into clean, efficient code — whether it's APIs,
              containers, or DevOps pipelines. 
            </p>
            <p>
              <span className="text-orange-300 font-medium">Off the clock?</span>
              I’m usually gaming, cruising in my car 🚗, hanging out with my two bunnies 🐇🐇,
              or pretending to be productive while actually optimizing my PC setup.
            </p>
            <p className="text-orange-300 font-medium">
              Let’s build cool stuff (and maybe grill something too)!
            </p>
          </div>

          {/* Companies */}
          <div className="flex w-full pt-5 md:pt-10 gap-4 md:gap-8 text-white justify-center items-end">
            <div className="h-12 md:h-15 w-fit p-1 bg-zinc-900 rounded-md">
              <img src={rw_interactive} alt="rw interactive" className="h-10 md:h-12" />
            </div>

            <div className="h-12 md:h-15 w-fit p-2 bg-zinc-900 rounded-md">
              <img src={sky} alt="sky portugal" className="h-10 md:h-12"/>
            </div>

            <div className="flex h-12 md:h-15 w-fit  p-2 bg-zinc-900 rounded-md items-center gap-1 md:gap-2">
              <img src={alma} alt="sky portugal" className="h-10 md:h-12"/>
              <p className="text-zinc-400 text-xs md:text-base"> ALMA </p>
            </div>
          </div>
        </div>
        
        {/* Skills & tools */}
        <div className="h-[50%] md:h-full w-full md:w-[50%] px-4 md:p-10">
          <SkillCloud />
        </div>
      </div>
          
      {/* Projects */}
      <div id="projects" className="h-screen w-full pt-[10%] md:pt-[5%]">
        <p className="font-jersey text-orange-400 text-3xl md:text-5xl p-5 md:p-10">PERSONAL PROJECTS</p>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hidden px-[calc(50%-112px)] sm:px-10 no-scrollbar">
          {projects.map(project =>
            <div className="snap-center shrink-0">
              <Projects {...project} />
            </div>
          )}
        </div>
        <p className="font-jersey text-orange-400 text-3xl md:text-5xl p-5 md:p-10">FREELANCING PROJECTS</p>
        {/* TODO: complete with services made for companies or privates */}
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
                className="relative px-5 text-orange-400 transition-all duration-150 bg-gradient-to-r from-orange-400 to-orange-400 bg-[length:0%_100%] bg-no-repeat hover:bg-[length:100%_100%] hover:text-orange-200"
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
        Made with <span className="text-orange-400">{"<3"}</span> in Portugal.
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default App
