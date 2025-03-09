import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              Prakhar Langer
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Passionate about AI, cloud computing, and full-stack development.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-4 md:mb-0">
            <div>
              <h4 className="font-semibold mb-3">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-primary">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-muted-foreground hover:text-primary">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-primary">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Expertise</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a className="text-muted-foreground hover:text-primary">
                    AI & Machine Learning
                  </a>
                </li>
                <li>
                  <a className="text-muted-foreground hover:text-primary">
                    Full-Stack Development
                  </a>
                </li>
                <li>
                  <a className="text-muted-foreground hover:text-primary">
                    Cloud Computing
                  </a>
                </li>
                <li>
                  <a className="text-muted-foreground hover:text-primary">
                    Data Science & NLP
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:prakhar.langer@gmail.com" className="text-muted-foreground hover:text-primary">
                    prakhar.langer@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+919619981506" className="text-muted-foreground hover:text-primary">
                    +91 9619981506
                  </a>
                </li>
                <li>
                  <span className="text-muted-foreground">Mumbai, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © {currentYear} Prakhar Langer. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <a href="https://linkedin.com/in/prakhar-langer" className="text-muted-foreground hover:text-primary">
              LinkedIn
            </a>
            <a href="https://github.com/langerprakhar" className="text-muted-foreground hover:text-primary">
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
