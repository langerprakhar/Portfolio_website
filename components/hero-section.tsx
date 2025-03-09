"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error(`Section with ID '${sectionId}' not found.`);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center pt-16 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="animate-in">
          <span className="inline-block text-primary font-medium mb-4">
            Welcome to my portfolio!
          </span>
        </div>

        {/* Typing Effect for "Hi, I'm Prakhar" */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-in stagger-1">
          Hi, I'm{" "}
          <span className="green-gradient-text">
            <Typewriter
              words={["Prakhar"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in stagger-2">
          I'm passionate about coding, cloud computing, and AI.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-in stagger-3">
          <Button
            size="lg"
            className="green-glow"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>
        </div>

        {/* Scroll Down to About Section */}
        <div className="animate-in stagger-4">
          <div
            className="inline-block p-2 rounded-full bg-secondary cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <ArrowDown className="h-6 w-6 text-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
