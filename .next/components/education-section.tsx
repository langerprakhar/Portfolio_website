"use client"

import { GraduationCap } from "lucide-react"
import { useEffect, useRef } from "react"

export default function EducationSection() {
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
    <section id="education" ref={sectionRef} className="py-20 section-animate">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Manipal Institute of Technology</h3>
                <p className="text-muted-foreground">Bangalore, India</p>
                <p className="mt-2">B.Tech (Honours) in Computer Science Engineering</p>
                <p className="text-sm text-muted-foreground mt-1">Aug. 2022 – Present</p>
                <p className="mt-2 text-primary font-medium">CGPA: 8.5/10, Top 5%</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Class XII (HSC)</h3>
                <p className="text-muted-foreground">Mumbai, India</p>
                <p className="mt-2">87%, Rank 5 in Junior College (Batch: 200)</p>
                <p className="text-sm text-muted-foreground mt-1">2022</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Class X (ICSE)</h3>
                <p className="text-muted-foreground">Mumbai, India</p>
                <p className="mt-2">98.6%, Rank 3 in City, Rank 1 in School (Batch: 300)</p>
                <p className="text-sm text-muted-foreground mt-1">2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

