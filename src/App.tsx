import { useRef } from 'react'
import './index.css'
import { motion } from 'framer-motion'
import logo from '@/assets/arrz_logo.svg'
import { useScroll_ } from '@/hooks'

import { StackGrid, Project, FeaturedProject } from '@/components'
import { companies } from '@/data/companies'
import { projects, freelancingProjects } from '@/data/projects'
import { scrollToSection } from './utils'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const createDynamicGradient = (gradientType: "start" | "end" | "middle" | "full") => {
  if (gradientType == "start") return "[mask-image:linear-gradient(to_right,transparent,black_0%,black_90%,transparent_100%)]"
  if (gradientType == "middle") return "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent_100%)]"
  if (gradientType == "end") return "[mask-image:linear-gradient(to_right,transparent,black_10%,black_100%,transparent_100%)]"
  if (gradientType == "full") return ""
}

function App() {
  const projectsScrollRef = useRef(null)
  const projectsScrollState = useScroll_(projectsScrollRef)
  const dynamicGradient = createDynamicGradient(projectsScrollState)

  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.card');
      const lastCardIndex = cards.length - 1;
      const lastCard = cards[lastCardIndex];
      
      // Pin the title
      if (titleRef.current && lastCard) {
        
        ScrollTrigger.create({
          trigger: titleRef.current,
          start: "top 10%",
          endTrigger: lastCard,
          end: `top ${4 * 37}px`, 
          pin: true,
          pinSpacing: false,
        });
      }

      let offset = 0;
      cards.forEach((card, index) => {
        const innerScroll = card.querySelector('.scroll-inner') as HTMLElement;
        if (!innerScroll) return;
      
        // Inner scroll height
        const maxScroll = 2000;
        const scrollLength = 5000;

        console.log("maxScroll", maxScroll);
        console.log("scrollLength", scrollLength);

        if (maxScroll <= 0) return; // skip if there's nothing to scroll

        // Disable native scrolling
        innerScroll.style.overflow = "hidden";

        // Pin the card while inner scroll happens
        ScrollTrigger.create({
          trigger: card,
          start: `top ${(index + 4) * 37}px`, //Adjust based on when you want the animation to start
          pin: true,
          pinSpacing: false,
          endTrigger: lastCard,
          end: `top ${4 * 37}px`,         
          scrub: true,
          markers: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const scrollTop = maxScroll * progress;
            innerScroll.scrollTop = scrollTop;
          },
          onEnter: () => {
            innerScroll.scrollTop = 0;
          },
          onLeave: () => {
            innerScroll.scrollTop = maxScroll;
          },
          pinnedContainer: containerRef.current!,
        });

        offset += scrollLength;
      });
    });

  return (
    <div className="bg-black h-full w-screen text-martian overflow-x-clip">
      
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
      <div id="about" className="flex min-h-screen w-full pt-[10%] px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full gap-5 lg:gap-10 p-5">
          <div className="h-full flex flex-col items-center md:items-center text-center md:text-left justify-between font-martian text-sm md:text-lg lg:text-xl text-white gap-y-5 leading-relaxe">
            {/* ABOUT text */}
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
            <div className="w-full text-white [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent_100%)]">
              <div className="flex whitespace-nowrap gap-4 md:gap-8 scroll-animation">
                {[...companies, ...companies].map((company, index) => (
                  <div 
                    key={`${company.name}-${index}`}
                    className="flex-shrink-0 h-12 md:h-16 w-fit p-2 bg-zinc-900 rounded-md items-center gap-1 md:gap-2 flex"
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
          <div className="flex items-start justify-center">
            <StackGrid />
          </div>
        </div>
      </div>
          

      {/* Projects */}
      <div id="projects" className="relative min-h-screen w-full pt-[10%] md:pt-[5%] space-y-5">
        {/* Featured Projects */}
        <div className="flex flex-col justify-between h-fit px-5 space-y-5">
          <p ref={titleRef} className="font-jersey text-orange-400 text-3xl md:text-5xl py-2">
            FEATURED PROJECTS
          </p>
          <div ref={containerRef} className="flex flex-col gap-[150vh] font-martian mb-24">
            {freelancingProjects.map((project, index) => (
              <div key={index} className="card">
                <FeaturedProject {...project} />
              </div>
            ))}
          </div>
        </div>

        {/* Small Projects section */}
        <div className="space-y-5">
          <p className="font-jersey text-orange-400 text-3xl md:text-5xl px-5">
            SMALL PROJECTS
          </p>
          <div ref={projectsScrollRef} className={`flex px-5 gap-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hidden no-scrollbar ${dynamicGradient}`}>
            {projects.map((project, index) =>
              <div key={index} className="snap-center shrink-0">
                <Project {...project} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contacts" className="flex flex-col justify-between h-screen w-full pt-[10%] px-5">
        <div className="h-[93%] flex flex-col justify-center md:justify-baseline md:grid md:grid-cols-4">
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
        <div className="pb-6">
            <p className="text-white font-martian text-[1.4vh] md:text-xs uppercase text-center">
            © arrz. 
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
