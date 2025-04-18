import './index.css'
import logo from './assets/arrz_logo.svg'
import icon from './assets/arrz_icon.svg'
import SkillCloud from './components/skills-cloud'
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
      <div className="fixed w-full flex h-[10%] items-center justify-between text-orange-400 font-jersey text-center text-lg sm:text-3xl px-5 md:px-10 bg-black/70 z-50">
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

      {/* Mobile Drawer Menu */}
      {isDrawerOpen && (
        <div className="md:hidden fixed h-12 w-full text-xl font-jersey bg-black/90 text-orange-400 p-4">
          <div className="flex gap-6 text-right justify-end">
            <p>ABOUT</p>
            <p>PROJECTS</p>
            <p>CONTACT ME</p>
          </div>
        </div>
      )}

      {/* Landing page */}
      <div id="home" className="flex flex-col-reverse md:flex-row h-screen w-full items-center text-center md:text-left justify-center md:justify-between px-8 md:px-32 pt-[10%]">
        <div className="border-1 border-red-500 flex flex-col w-full md:w-[80%] items-center md:items-start text-center md:text-left justify-center font-martian text-xl md:text-2xl lg:text-5xl text-white gap-4">
          <p>Hi there 👋!</p>
          {/* This awkward aproach is the correct way of having two different
            stylizations and keep the correct text responsiveness */}
          <p className="flex flex-wrap items-center text-center md:text-left justify-center md:justify-start gap-1">
            <span>I'm arrz</span>
            <span className="text-orange-400">{'{ aka Arroz }'}</span>
          </p>
          <p className="pl-0 md:pl-24">a backend developer</p>
        </div>

        <div className="border-blue-500 border-2 transform -scale-x-100 items-center justify-center">          
          <img src={icon} alt="Bunny icon" className="h-40 md:h-[50rem] w-40 md:w-70"/>
        </div>
      </div>

      {/* Skills & tools and companies/works */}
      <div className="h-screen w-full">
        <SkillCloud />
      </div>

      
    </div>
  )
}

export default App
