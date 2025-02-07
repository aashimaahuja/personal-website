"use client";
import React from "react";
import Image from "next/image";
import { images } from "@/constants/images";

export default function About() {
  return (
    <div className="min-h-screen bg-[#111111] text-white pt-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">
              <span className="bg-gradient-to-r from-[#FF00FF] via-[#C850C0] to-[#8A2BE2] text-transparent bg-clip-text">
                About Me
              </span>
            </h1>
            <p className="text-[#999999] text-xl max-w-3xl">
              I'm a software engineer and educator passionate about making
              technology accessible to everyone.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Background</h2>
                <p className="text-[#999999] leading-relaxed">
                  With over 5 years of experience in software development, I've
                  worked on various projects ranging from web applications to
                  developer tools. I specialize in frontend development with
                  React and Next.js, creating intuitive and accessible user
                  interfaces.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">What I Do</h2>
                <div className="space-y-4 text-[#999999]">
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
                <h2 className="text-2xl font-semibold">Current Focus</h2>
                <p className="text-[#999999] leading-relaxed">
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
              <div className="relative w-[300px] mx-auto -mt-20 mb-12">
                <div className="aspect-square overflow-hidden rounded-full">
                  <Image
                    src={images.gallery.speaking}
                    alt="Profile picture"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover brightness-90 object-top scale-125"
                    priority
                  />
                </div>
                <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6">
                  <div
                    className="w-full h-full rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                </div>
              </div>

              <div className="bg-[#1A1A1A] rounded-3xl p-8 space-y-6">
                <h2 className="text-2xl font-semibold">
                  Skills & Technologies
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Frontend</h3>
                    <ul className="text-[#999999] space-y-1">
                      <li>React.js</li>
                      <li>Next.js</li>
                      <li>TypeScript</li>
                      <li>TailwindCSS</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Tools</h3>
                    <ul className="text-[#999999] space-y-1">
                      <li>Git</li>
                      <li>VS Code</li>
                      <li>Figma</li>
                      <li>Docker</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] rounded-3xl p-8 space-y-6">
                <h2 className="text-2xl font-semibold">Quick Stats</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-[#C850C0]">5+</div>
                    <div className="text-[#999999]">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#C850C0]">20+</div>
                    <div className="text-[#999999]">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#C850C0]">15+</div>
                    <div className="text-[#999999]">Workshops Conducted</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#C850C0]">10+</div>
                    <div className="text-[#999999]">Tech Talks</div>
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
