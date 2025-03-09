import { Code, Layout, Database, Smartphone, Palette, LineChart } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Web Development",
      description:
        "Custom websites built with the latest technologies to ensure fast loading times and optimal performance.",
    },
    {
      icon: <Layout className="h-10 w-10 text-primary" />,
      title: "Responsive Design",
      description: "Websites that look great and function perfectly on all devices, from desktops to smartphones.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Backend Development",
      description: "Robust server-side solutions with secure APIs, database management, and efficient data processing.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that provide seamless user experiences.",
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "UI/UX Design",
      description: "Intuitive and visually appealing interfaces designed with user experience as the top priority.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "SEO Optimization",
      description: "Strategies to improve your website's visibility in search engines and drive organic traffic.",
    },
  ]

  return (
    <section id="services" className="py-20 green-gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <div className="section-divider"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer a wide range of services to help businesses establish a strong online presence and achieve their
            digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-sm border border-border hover:border-primary transition-colors duration-300 hover:green-glow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

