"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      content:
        "Working with John was an absolute pleasure. He understood our vision from the start and delivered a website that exceeded our expectations. His attention to detail and technical expertise are truly impressive.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, GrowthLabs",
      content:
        "John transformed our outdated website into a modern, user-friendly platform that has significantly increased our conversion rates. His communication throughout the project was excellent, and he was always receptive to feedback.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, EcoWear",
      content:
        "We hired John to develop our e-commerce platform, and the results have been phenomenal. The site is not only beautiful but also performs exceptionally well. Our sales have increased by 40% since launch.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 green-gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <div className="section-divider"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-lg p-8 shadow-sm border border-border">
            <div className="absolute -top-5 left-10 bg-primary rounded-full p-2">
              <Quote className="h-6 w-6 text-white" />
            </div>

            <div className="mb-6 text-lg italic text-muted-foreground">"{testimonials[currentIndex].content}"</div>

            <div className="flex items-center">
              <img
                src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-primary text-primary hover:bg-primary/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant={index === currentIndex ? "default" : "outline"}
                size="icon"
                className={`w-3 h-3 rounded-full p-0 ${
                  index === currentIndex ? "bg-primary" : "border-primary text-primary hover:bg-primary/10"
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <span className="sr-only">Go to testimonial {index + 1}</span>
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-primary text-primary hover:bg-primary/10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

