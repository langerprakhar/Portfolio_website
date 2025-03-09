import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              GreenTheme
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Creating beautiful, functional websites with a focus on user experience.
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
                  <a href="#services" className="text-muted-foreground hover:text-primary">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-muted-foreground hover:text-primary">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Mobile Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    SEO Optimization
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:john@example.com" className="text-muted-foreground hover:text-primary">
                    john@example.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                    +1 (234) 567-890
                  </a>
                </li>
                <li>
                  <span className="text-muted-foreground">San Francisco, California</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">© {currentYear} GreenTheme. All rights reserved.</p>

          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

