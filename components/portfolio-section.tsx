import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Amphibian Adventure: Frog Identification",
      category: "Machine Learning",
      image: "/frog1.png",
      description:
        "Developed a model identifying 400+ Indian frog species with 90%+ accuracy using EfficientNetV2.",
      technologies: ["Python", "OpenCV", "EfficientNetV2"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Email Automation System",
      category: "Automation & AI",
      image: "/Email.png",
      description:
        "Automated email outreach to professors of different universities, integrating Google APIs for scheduling.",
      technologies: ["Python", "Selenium", "SMTP"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Invisible Watermarking using FHE",
      category: "Data Security",
      image: "/FHE.png",
      description:
        "Implemented secure watermarking using Zama.ai’s Concrete-ML library for data privacy.",
      technologies: ["Python", "Concrete-ML", "Numpy", "Gradio", "PIL"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Internshala Automation Project",
      category: "Automation",
      image: "/Internshala.png",
      description:
        "Automated application processes on Internshala, reducing manual effort through scripting.",
      technologies: ["Python", "Selenium", "Automation"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Linktree Backend Development",
      category: "Web Development",
      image: "/Backend.png",
      description:
        "Developed a scalable backend for a Linktree-like platform with authentication and referral tracking.",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Old Age Home Management System",
      category: "Software Development",
      image: "/Old.png",
      description:
        "Building a management system for old age homes, streamlining operations and resident records.",
      technologies: ["React", "Node.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="section-divider"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out some of my recent projects and see how I've applied my skills in AI, automation, and web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-colors duration-300"
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubLink} target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <Link href={project.liveLink} target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/langerprakhar?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
      View All Projects
    </Button>
  </a>
</div>

        </div>
    </section>
  );
}