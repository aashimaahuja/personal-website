import React from "react";
import AboutProfile from "@/components/AboutProfile";

export default function About() {
  return (
    <div className="min-h-screen pt-16 pb-16">
      <div className="max-w-6xl mx-auto px-4 pt-16">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">
              <span className="text-gradient">About Me</span>
            </h1>
            <p className="text-[rgb(var(--color-text-secondary))] text-xl max-w-3xl">
              I&apos;m a software engineer and educator passionate about making
              technology accessible to everyone.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-[rgb(var(--color-text))]">
                  Background
                </h2>
                <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed">
                  {`I am a Senior Frontend Engineer at Fareharbor, with over 8
                  years of experience in the software industry. I have Bachelors
                  in computer science.I have experience working in fast-paced
                  startups like Miro to large organizations such as Booking.com
                  and Meta. I specialize in frontend development with React and
                  Next.js, creating intuitive and accessible user interfaces.
                  I&apos;m also passionate about sharing what I&apos;ve learned.
                  I&apos;ve had the opportunity to speak at conferences and lead
                  workshops around the world, helping others grow their frontend
                  skills. As an online instructor, I have created courses like
                  "Use Git Like a Pro", "React the Right Way", and "Cracking the
                  Frontend Interview"`}
                  .
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-[rgb(var(--color-text))]">
                  What I Do
                </h2>
                <div className="space-y-4 text-[rgb(var(--color-text-secondary))]">
                  <p className="leading-relaxed">
                    🎯 Develop modern web applications using React and Vue.js
                  </p>
                  <p className="leading-relaxed">
                    📚 Conduct workshops and training sessions on web
                    development
                  </p>
                  <p className="leading-relaxed">
                    🎤 Speak at tech conferences about frontend development
                  </p>
                  <p className="leading-relaxed">
                    ✍️ Write technical articles and tutorials
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-[rgb(var(--color-text))]">
                  Current Focus
                </h2>
                <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed">
                  Currently, I&apos;m continuing to expand my content creation
                  efforts, offering workshops and online courses to help
                  developers enhance their skills. Additionally, I&apos;m
                  exploring new technologies and keeping up with the latest
                  trends in frontend development to ensure my work stays at the
                  cutting edge.
                </p>
              </section>
            </div>

            {/* Right Column - Stats, Skills & Image */}
            <div className="space-y-8">
              {/* Profile Image */}
              <AboutProfile />

              <div className="bg-[rgb(var(--color-background-elevated))] rounded-3xl p-8 space-y-6">
                <h2 className="text-2xl font-semibold text-[rgb(var(--color-text))]">
                  Skills & Technologies
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="font-medium text-[rgb(var(--color-text))]">
                      Frontend
                    </h3>
                    <ul className="text-[rgb(var(--color-text-secondary))] space-y-1">
                      <li>React.js</li>
                      <li>Vue.js</li>
                      <li>TypeScript</li>
                      <li>TailwindCSS</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-[rgb(var(--color-text))]">
                      Tools
                    </h3>
                    <ul className="text-[rgb(var(--color-text-secondary))] space-y-1">
                      <li>Git</li>
                      <li>VS Code</li>
                      <li>Figma</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[rgb(var(--color-background-elevated))] rounded-3xl p-8 space-y-6">
                <h2 className="text-2xl font-semibold text-[rgb(var(--color-text))]">
                  Quick Stats
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-primary">8+</div>
                    <div className="text-[rgb(var(--color-text-secondary))]">
                      Years Experience
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">20+</div>
                    <div className="text-[rgb(var(--color-text-secondary))]">
                      Projects Completed
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-[rgb(var(--color-text-secondary))]">
                      Workshops Conducted
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">10+</div>
                    <div className="text-[rgb(var(--color-text-secondary))]">
                      Tech Talks
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
