"use client"

import { Code, Database, Server, Cpu, Terminal, Globe } from "lucide-react"
import { useEffect, useRef } from "react"

export default function SkillsSection() {
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

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: ["Python", "Java", "C", "SQL", "PostgreSQL"],
    },
    {
      title: "Technologies",
      icon: <Cpu className="h-6 w-6 text-primary" />,
      skills: ["Machine Learning", "Deep Learning", "Azure", "AWS", "NLP", "OpenCV", "Pandas", "Numpy", "Seaborn"],
    },
    {
      title: "Tools",
      icon: <Terminal className="h-6 w-6 text-primary" />,
      skills: ["Git", "VS Code", "Jupyter Notebook", "Supabase", "Linux"],
    },
    {
      title: "Web Scraping",
      icon: <Globe className="h-6 w-6 text-primary" />,
      skills: ["Selenium", "BeautifulSoup"],
    },
    {
      title: "Frameworks",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: ["TensorFlow", "Keras", "Flask", "MERN Stack"],
    },
    {
      title: "Certifications",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: [
        "Microsoft Azure Fundamentals (AZ-900)",
        "Microsoft Azure AI Fundamentals (AI-900)",
        "Python for Data Science, AI and Development (IBM)",
      ],
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-accent/30 section-animate">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

