"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          Prakhar Langer
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("home")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("services")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Services
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("portfolio")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Portfolio
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("testimonials")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Testimonials
          </Button>
          <Button
            variant="default"
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-white hover:bg-primary/90"
          >
            Contact
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors justify-start"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors justify-start"
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors justify-start"
            >
              Services
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground hover:text-primary transition-colors justify-start"
            >
              Portfolio
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-primary transition-colors justify-start"
            >
              Testimonials
            </Button>
            <Button
              variant="default"
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-white hover:bg-primary/90"
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

