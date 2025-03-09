"use client"

import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Code, Github } from "lucide-react"
import Link from "next/link"

interface Project {
  title: string
  period: string
  description: string[]
  technologies: string[]
  githubLink: string
}

export default function ProjectSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  const projects: Project[] = [
    {
      title: "Amphibian Adventure: Frog Identification",
      period: "July 2024 – Sept 2024",
      description: [
        "Developed a model identifying 400+ Indian frog species with 90%+ accuracy using EfficientNetV2.",
        "Implemented fuzzy matching for enhanced identification based on partial input features.",
      ],
      technologies: ["Python", "OpenCV", "EfficientNetV2"],
      githubLink: "https://github.com/langerprakhar/frog-identification",
    },
    {
      title: "Email Automation System",
      period: "Sept 2024 – Jan 2025",
      description: [
        "Automated email outreach, integrating Google APIs for scheduling.",
        "Used Concrete ML for analyzing email response rates and optimizing engagement.",
      ],
      technologies: ["Python", "Selenium", "SMTP"],
      githubLink: "https://github.com/langerprakhar/email-automation",
    },
    {
      title: "Invisible Watermarking using FHE",
      period: "Nov 2024 – Jan 2025",
      description: [
        "Participated in Zama's Bounty Program S7",
        "Implemented secure watermarking using Zama.ai's Concrete-ML library for data privacy.",
        "Benchmarked computational efficiency of encryption-based watermarking methods.",
      ],
      technologies: ["Python", "Concrete-ML", "Numpy", "Gradio", "PIL"],
      githubLink: "https://github.com/langerprakhar/invisible-watermarking",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const checkScroll = () => {
      if (!sliderRef.current) return

      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }

    const slider = sliderRef.current
    if (slider) {
      slider.addEventListener("scroll", checkScroll)
      // Initial check
      checkScroll()
    }

    return () => {
      if (slider) {
        slider.removeEventListener("scroll", checkScroll)
      }
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return

    const { clientWidth } = sliderRef.current
    const scrollAmount = direction === "left" ? -clientWidth : clientWidth

    sliderRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <section id="projects" ref={sectionRef} className="py-20 section-animate">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous project"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next project"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Project Slider */}
          <div ref={sliderRef} className="overflow-x-auto project-slider flex gap-6 pb-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-sm border border-border min-w-[300px] md:min-w-[400px] flex-shrink-0 h-full flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex flex-wrap justify-between items-start gap-2 w-full">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <span className="text-sm text-muted-foreground">{project.period}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <ul className="mt-2 space-y-2 list-disc list-inside text-sm flex-grow">
                  {project.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>

                <div className="flex gap-3 mt-6">
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href={project.githubLink} target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      View on GitHub
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

