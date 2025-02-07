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
              Workshops & Courses
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
                alt="React Fundamentals"
                width={600}
                height={338}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <span className="text-sm text-[#C850C0] font-medium">Course</span>
              <h3 className="text-xl font-semibold">React Fundamentals</h3>
              <p className="text-[#999999] text-sm">
                Master the basics of React including hooks, state management,
                and component patterns.
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/workshops/react-fundamentals"
                className="inline-flex items-center text-sm font-medium text-[#C850C0] hover:text-[#FF00FF] transition-colors"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
                alt="Next.js Advanced"
                width={600}
                height={338}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <span className="text-sm text-[#C850C0] font-medium">
                Workshop
              </span>
              <h3 className="text-xl font-semibold">Next.js Advanced</h3>
              <p className="text-[#999999] text-sm">
                Deep dive into Next.js features, server components, and
                deployment strategies.
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/workshops/nextjs-advanced"
                className="inline-flex items-center text-sm font-medium text-[#C850C0] hover:text-[#FF00FF] transition-colors"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
                alt="TypeScript Mastery"
                width={600}
                height={338}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <span className="text-sm text-[#C850C0] font-medium">Course</span>
              <h3 className="text-xl font-semibold">TypeScript Mastery</h3>
              <p className="text-[#999999] text-sm">
                Learn advanced TypeScript patterns and best practices for large
                applications.
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/workshops/typescript-mastery"
                className="inline-flex items-center text-sm font-medium text-[#C850C0] hover:text-[#FF00FF] transition-colors"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
