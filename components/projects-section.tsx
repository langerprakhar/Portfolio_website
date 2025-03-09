import { Code, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Amphibian Adventure: Frog Identification",
      period: "July 2024 – Sept 2024",
      description: [
        "Developed a machine learning model capable of identifying over 400 species of Indian frogs using image classification.",
        "Integrated EfficientNetV2 architecture, achieving 90%+ accuracy across validation datasets.",
        "Implemented fuzzy matching for enhanced identification when partial input features were provided.",
      ],
      technologies: ["Python", "OpenCV", "EfficientNetV2"],
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "Email Automation System",
      period: "Sept 2024 – Jan 2025",
      description: [
        "Automated personalized email workflows for professional and academic outreach, including cold emailing professors from top universities globally.",
        "Integrated Google Calendar APIs to align email scheduling with user availability and time zones.",
        "Implemented advanced error-handling mechanisms and detailed logs to monitor and optimize email performance.",
        "Developed support for dynamic email templates with placeholders for recipient-specific details and attachments.",
        "Enhanced system to analyze email response rates, improving the effectiveness of outreach campaigns.",
      ],
      technologies: ["Python", "Selenium", "SMTP", "Google APIs"],
      githubLink: "#",
      demoLink: "#",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm border border-border h-full flex flex-col">
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
                      <span key={techIndex} className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full">
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
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.githubLink} target="_blank">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.demoLink} target="_blank">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

