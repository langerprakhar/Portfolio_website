"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react"

export default function CertificationsSection() {
  const certifications = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-green-500" />,
      title: "Microsoft Azure Fundamentals (AZ-900)",
      description: "Certified expertise in Azure cloud services and virtual infrastructure.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-green-500" />,
      title: "Microsoft Azure AI Fundamentals (AI-900)",
      description: "Understanding of AI concepts and implementation in Microsoft Azure.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-green-500" />,
      title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
      description: "Microsoft certification on fundamental Azure data concepts and services.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-green-500" />,
      title: "Python for Data Science, AI and Development",
      description: "IBM certification covering Python-based AI and data science applications.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-green-500" />,
      title: "Goldman Sachs - Software Engineering Job Simulation",
      description: "Forage virtual experience program covering software engineering tasks.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-green-500" />,
      title: "Introduction to Software Engineering (with Honors)",
      description: "IBM certification covering foundational software engineering concepts.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-green-500" />,
      title: "Introduction to Microsoft Azure Cloud Services",
      description: "Microsoft certification covering basic Azure cloud computing services.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-green-500" />,
      title: "Algorithmic Toolbox",
      description: "UC San Diego certification covering algorithmic techniques and problem-solving.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-green-500" />,
      title: "Database Structures and Management with MySQL",
      description: "Meta certification on database design, normalization, and MySQL operations.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-green-500" />,
      title: "Crash Course on Python",
      description: "Google certification covering Python programming fundamentals.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-green-500" />,
      title: "Introduction to Databases for Back-End Development",
      description: "Meta certification on database management for backend applications.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-green-500" />,
      title: "Assets, Threats, and Vulnerabilities",
      description: "Google certification on cybersecurity risk management and assessment.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-green-500" />,
      title: "Cyber Threat Intelligence",
      description: "IBM certification covering vulnerability management and malware analysis.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-green-500" />,
      title: "Cyber Threat Management",
      description: "Cisco certification on penetration testing, ethical hacking, and incident response.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-green-500" />,
      title: "Networking Basics",
      description: "Cisco certification on networking fundamentals and malware analysis.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-green-500" />,
      title: "Enterprise Application Development",
      description: "IEEE MIT Bengaluru workshop on frontend and backend development practices.",
    },
];
const [currentIndex, setCurrentIndex] = useState(0)

// Auto-change certification every 3 seconds
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
  }, 3000); // Change every 3 seconds

  return () => clearInterval(interval); // Cleanup on unmount
}, []);

// Manual navigation resets the timer
const nextCertification = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length)
}

const prevCertification = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 + certifications.length) % certifications.length)
}

return (
  <section id="certifications" className="py-20 green-gradient-bg">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          My <span className="text-primary">Certifications</span>
        </h2>
        <div className="section-divider"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A showcase of my professional certifications that validate my expertise.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative bg-card rounded-lg p-8 shadow-sm border border-border">
          {/* Smooth transition animation */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="mb-4 flex justify-center">
              {certifications[currentIndex].icon}
            </div>
            <h3 className="text-2xl font-semibold">{certifications[currentIndex].title}</h3>
            <p className="text-muted-foreground">{certifications[currentIndex].description}</p>
          </motion.div>
        </div>

        <div className="flex justify-center mt-8 gap-4">
          <Button variant="outline" size="icon" onClick={prevCertification} className="rounded-full border-primary text-primary hover:bg-primary/10">
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {certifications.map((_, index) => (
            <Button
              key={index}
              variant={index === currentIndex ? "default" : "outline"}
              size="icon"
              className={`w-3 h-3 rounded-full p-0 ${
                index === currentIndex ? "bg-primary" : "border-primary text-primary hover:bg-primary/10"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <span className="sr-only">Go to certification {index + 1}</span>
            </Button>
          ))}

          <Button variant="outline" size="icon" onClick={nextCertification} className="rounded-full border-primary text-primary hover:bg-primary/10">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  </section>
)
}