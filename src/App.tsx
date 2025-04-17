import './index.css'
import logo from './assets/arrz_logo.svg'
import icon from './assets/arrz_icon.svg'
import SkillCloud from './components/skills-cloud'
import { useState } from 'react'

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <div className="bg-black h-full w-screen text-martian">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full flex h-[10%] text-center items-center justify-between text-orange-400 font-jersey text-3xl px-5 md:px-10 bg-black/70 z-50">
        <div>
          <img src={logo} alt="Logo" className="h-20 md:h-30 w-20 md:w-30" />
        </div>
        
        {/* Mobile Menu Button - visible only on small screens */}
        <button 
          className="md:hidden transition-transform duration-300"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          style={{ transform: isDrawerOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
        >
          {isDrawerOpen ? '✕' : '☰'}
        </button>

        {/* Desktop Menu - hidden on small screens, visible on md and up */}
        <div className="hidden md:flex gap-6">
          <p> ABOUT </p>
          <p> PROJECTS </p>
          <p> CONTACT ME </p>
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
      <div className="flex h-screen w-full items-center justify-between px-32">
        <div className="flex flex-col h-screen items-start justify-center font-martian text-5xl text-white gap-4">
          <p>Hi there 👋!</p>
          <div className="flex flex-row gap-3">
            <p>I'm arrz</p>
            <p className="text-orange-400"> {"{ aka Arroz }"} </p>
          </div>
          <p className="pl-24">a backend developer</p>
        </div>

        <div className="transform -scale-x-100">          
          <img src={icon} alt="Bunny icon" className="h-60 md:h-[50rem] w-60 md:w-70"/>
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
