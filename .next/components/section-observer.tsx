"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface SectionObserverProps {
  children: ReactNode
  id?: string
  className?: string
}

export default function SectionObserver({ children, id, className = "" }: SectionObserverProps) {
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
    <section id={id} ref={sectionRef} className={`section-animate ${className}`}>
      {children}
    </section>
  )
}

