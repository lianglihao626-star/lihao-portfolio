"use client"

import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const navHeight = 100 // Approximate height of the fixed nav
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navHeight
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 container mx-auto px-4 pt-4 md:pt-8 pb-4 pointer-events-none">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] pointer-events-auto">
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Home
          </a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            About
          </a>
          <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Skills
          </a>
          <a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Portfolio
          </a>
          <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Experience
          </a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Contact
          </a>
        </div>

        <Button onClick={(e) => {
          // @ts-ignore
          scrollToSection(e, 'contact')
        }} className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0">
          <Mail className="w-10 h-10" strokeWidth={2.5} />
        </Button>
      </nav>
    </div>
  )
}
