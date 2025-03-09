"use client"

import { Briefcase } from "lucide-react"
import { useEffect, useRef } from "react"

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-accent/30 section-animate">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <h3 className="text-xl font-semibold">Research Intern</h3>
                  <span className="text-sm text-muted-foreground">June 2024 – Dec 2024</span>
                </div>
                <p className="text-primary font-medium">National University of Singapore (NUS)</p>
                <p className="text-muted-foreground">Singapore</p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-sm">
                  <li>Analyzed drug formulation data from PubMed to study phospholipids in targeted drug delivery.</li>
                  <li>
                    Applied machine learning and NLP techniques to classify phospholipids based on chemical properties.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <h3 className="text-xl font-semibold">Cloud Computing Operations Intern</h3>
                  <span className="text-sm text-muted-foreground">Apr 2024 – July 2024</span>
                </div>
                <p className="text-primary font-medium">Anunta Tech</p>
                <p className="text-muted-foreground">Mumbai, India</p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-sm">
                  <li>
                    Gained expertise in Microsoft Azure, implementing cloud security policies and optimizing virtual
                    infrastructure.
                  </li>
                  <li>Collaborated with clients to enhance virtual desktop infrastructure solutions.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <h3 className="text-xl font-semibold">Full-Stack Web Development Intern</h3>
                  <span className="text-sm text-muted-foreground">Jan 2025 – Present</span>
                </div>
                <p className="text-primary font-medium">EY & AICTE Internship</p>
                <p className="text-muted-foreground">Remote</p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-sm">
                  <li>Developed a blockchain and AI-powered crowdfunding platform using the MERN stack.</li>
                  <li>Implemented secure smart contracts to ensure transparency in transactions.</li>
                  <li>Integrated AI-based fraud detection mechanisms for verifying funding campaigns.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

