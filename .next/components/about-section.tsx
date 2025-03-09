import { Leaf, Heart, Zap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="section-divider"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about my background, skills, and what drives me to build robust, scalable, and secure applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              I'm an <span className="text-primary">AI, ML, and Data Analytics Enthusiast</span>, with experience in full-stack development and cloud computing.
            </h3>

            <p className="text-muted-foreground">
              Currently pursuing my B.Tech (Honours) in Computer Science Engineering at Manipal Institute of Technology, I have experience
              in machine learning, cloud computing, and full-stack web development.
            </p>

            <p className="text-muted-foreground">
              My professional journey includes research at the National University of Singapore (NUS), cloud operations at Anunta Tech,
              and developing AI-powered crowdfunding platforms at EY & AICTE. I specialize in scalable backend solutions, API integrations,
              and blockchain development.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                <Leaf className="h-8 w-8 text-primary mb-2" />
                <h4 className="font-medium">Innovative</h4>
              </div>

              <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                <Heart className="h-8 w-8 text-primary mb-2" />
                <h4 className="font-medium">Passionate</h4>
              </div>

              <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                <Zap className="h-8 w-8 text-primary mb-2" />
                <h4 className="font-medium">Scalable</h4>
              </div>
            </div>
          </div>

          <div className="green-gradient-bg rounded-lg p-1">
            <div className="bg-card rounded-lg p-6 h-full">
              <h3 className="text-xl font-semibold mb-4 text-primary">My Skills</h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Web Scraping</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Machine Learning & AI</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Web Development</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Data Analytics</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Cloud Computing (Azure, AWS)</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Backend Development</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
