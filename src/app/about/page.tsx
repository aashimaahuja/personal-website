import React from "react";
import AboutProfile from "@/components/AboutProfile";

export default function About() {
  return (
    <div className="min-h-screen pt-16 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">
              <span className="text-gradient">About Me</span>
            </h1>
            <p className="text-[rgb(var(--color-text-secondary))] text-xl max-w-3xl">
              I'm a software engineer and educator passionate about making
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
                  With over 5 years of experience in software development, I've
                  worked on various projects ranging from web applications to
                  developer tools. I specialize in frontend development with
                  React and Next.js, creating intuitive and accessible user
                  interfaces.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-[rgb(var(--color-text))]">
                  What I Do
                </h2>
                <div className="space-y-4 text-[rgb(var(--color-text-secondary))]">
                  <p className="leading-relaxed">
                    🎯 Develop modern web applications using React and Next.js
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
                  Currently, I'm focused on building developer tools that
                  improve workflow efficiency and teaching web development
                  through workshops and online content. I'm also exploring new
                  ways to make web development more accessible to beginners.
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
                      <li>Next.js</li>
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
                      <li>Docker</li>
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
                    <div className="text-3xl font-bold text-primary">5+</div>
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
