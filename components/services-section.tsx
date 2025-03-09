import { Code, Database, Cloud, BrainCircuit, FlaskConical, Layers3, ShieldCheck } from "lucide-react"

export default function SkillsSection() {
  const skills = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Programming Languages",
      description: "Proficient in Python, Java, C, SQL, and PostgreSQL.",
    },
    {
      icon: <BrainCircuit className="h-10 w-10 text-primary" />,
      title: "Machine Learning & AI",
      description: "Experience with TensorFlow, Keras, Concrete-ML, and NLP techniques.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Data Science & Web Scraping",
      description: "Skilled in OpenCV, Pandas, Numpy, Seaborn, Selenium, and BeautifulSoup.",
    },
    {
      icon: <Cloud className="h-10 w-10 text-primary" />,
      title: "Cloud Computing",
      description: "Hands-on experience with Microsoft Azure, AWS, and cloud security policies.",
    },
    {
      icon: <FlaskConical className="h-10 w-10 text-primary" />,
      title: "Web Development",
      description: "Worked with MERN stack, Flask, and blockchain-powered applications.",
    },
    {
      icon: <Layers3 className="h-10 w-10 text-primary" />,
      title: "Version Control & Dev Tools",
      description: "Proficient in Git, VS Code, Jupyter Notebook, and Linux environments.",
    },
  ]

  

  return (
    <section id="skills" className="py-20 green-gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Skills & Certifications</span>
          </h2>
          <div className="section-divider"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A combination of technical expertise and certifications that validate my skills in AI, cloud computing, and software development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-sm border border-border hover:border-primary transition-colors duration-300 hover:green-glow"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
