"use client"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-primary/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        {/* Top bar with social media and email */}
        <div className="flex justify-between w-full py-2 border-b border-accent/30">
          <div className="flex space-x-4">
            <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
          <div className="flex items-center text-primary-foreground">
            <Mail size={18} className="mr-2" />
            <span className="text-sm max-sm:hidden">contact@kraftx.com</span>
          </div>
        </div>
        
        {/* Main navigation - now rendered separately below the top bar */}
        <div className="flex justify-between items-center w-full mt-2">
          <div className="text-2xl font-bold text-primary-foreground">KRAFTX</div>
          <ul className="hidden md:flex space-x-8">
            {[
              { name: "Home", id: "home" },
              { name: "About Us", id: "about-us" },
              { name: "Services", id: "how-we-grow" },
              { name: "How We Grow", id: "how-we-grow" },
              { name: "Client Details", id: "client-details" },
              { name: "Contact", id: "contact-us" },
            ].map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-primary-foreground hover:text-accent transition-colors"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <button className="md:hidden text-primary-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

