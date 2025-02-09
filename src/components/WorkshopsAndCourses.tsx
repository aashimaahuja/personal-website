import React from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/constants/images";

export default function WorkshopsAndCourses() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-[#FF00FF] via-[#C850C0] to-[#8A2BE2] text-transparent bg-clip-text">
              Courses
            </span>
          </h2>
          <p className="text-[#999999] text-xl max-w-3xl">
            Learn modern web development through interactive workshops and
            comprehensive courses.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Course Card 1 */}
          <div className="group bg-[#1A1A1A] rounded-3xl p-6 space-y-4 hover:bg-[#222222] transition-colors">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <Image
                src={images.gallery.workspace}
                alt="React the Right Way"
                width={600}
                height={338}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <span className="text-sm text-[#C850C0] font-medium">
                Live Course
              </span>
              <h3 className="text-xl font-semibold">React the Right Way</h3>
              <p className="text-[#999999] text-sm line-clamp-3">
                This course focuses on writing quality code in React. Learn
                about modern tools like pnpm, Vite, and Nx, proper folder
                structure, efficient hooks usage, optimization, and more.
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/workshops/react-the-right-way"
                className="inline-flex items-center text-sm font-medium text-[#C850C0] hover:text-[#FF00FF] transition-colors"
              >
                Learn more
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13.75 6.75L19.25 12L13.75 17.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 12H4.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="group bg-[#1A1A1A] rounded-3xl p-6 space-y-4 hover:bg-[#222222] transition-colors">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <Image
                src={images.gallery.speaking}
                alt="Use Git like a Pro"
                width={600}
                height={338}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <span className="text-sm text-[#C850C0] font-medium">
                Live Course
              </span>
              <h3 className="text-xl font-semibold">Use Git like a Pro</h3>
              <p className="text-[#999999] text-sm line-clamp-3">
                A comprehensive journey through Git and GitHub, covering
                fundamentals and advanced aspects. Learn version control,
                branching, configurations, and advanced techniques.
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/workshops/git-like-pro"
                className="inline-flex items-center text-sm font-medium text-[#C850C0] hover:text-[#FF00FF] transition-colors"
              >
                Learn more
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13.75 6.75L19.25 12L13.75 17.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 12H4.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="group bg-[#1A1A1A] rounded-3xl p-6 space-y-4 hover:bg-[#222222] transition-colors">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <Image
                src={images.gallery.adventure}
                alt="Frontend Interview Prep"
                width={600}
                height={338}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <span className="text-sm text-[#C850C0] font-medium">
                Live Course
              </span>
              <h3 className="text-xl font-semibold">
                Cracking the Frontend Interview
              </h3>
              <p className="text-[#999999] text-sm line-clamp-3">
                Comprehensive preparation for frontend engineer interviews. From
                resume building to interview rounds, get guided through the
                entire process by Meta frontend engineer.
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/workshops/frontend-interview"
                className="inline-flex items-center text-sm font-medium text-[#C850C0] hover:text-[#FF00FF] transition-colors"
              >
                Learn more
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13.75 6.75L19.25 12L13.75 17.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 12H4.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
