import React from "react";
import Image from "next/image";
import { upcomingCourses } from "@/data/courses";

export default function UpcomingCourse() {
  return (
    <div className="bg-[rgb(var(--color-background-elevated))] bg-opacity-30">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="space-y-12">
          {/* Title Section */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">
              <span className="text-gradient">Upcoming Courses</span>
            </h2>
            <p className="text-[rgb(var(--color-text-secondary))] text-xl max-w-3xl">
              Be the first to know about new courses and early bird offers.
            </p>
          </div>

          {/* Course Cards */}
          <div className="space-y-8">
            {upcomingCourses.map((course, index) => (
              <div
                key={index}
                className="bg-[rgb(var(--color-background-elevated-hover))] rounded-3xl p-8 md:p-12 transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary font-medium bg-primary-10 px-3 py-1 rounded-full">
                        {course.type}
                      </span>
                      {course.date && (
                        <span className="text-sm text-[rgb(var(--color-text-secondary))]">
                          {course.date}
                        </span>
                      )}
                    </div>
                    <h2 className="text-4xl font-bold leading-tight">
                      {course.title}
                    </h2>
                    <p className="text-[rgb(var(--color-text-secondary))] text-lg leading-relaxed line-clamp-3">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary font-medium bg-primary-10 px-3 py-1 rounded-full">
                        {course.status}
                      </span>
                      {/* Commented out buttons
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          href="/workshops"
                          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#C850C0] hover:bg-[#FF00FF] text-white font-medium transition-colors"
                        >
                          Join Waitlist
                        </Link>
                        <Link
                          href="/workshops"
                          className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#333333] hover:border-[#C850C0] text-[#999999] hover:text-[#C850C0] font-medium transition-colors"
                        >
                          Learn More
                        </Link>
                      </div>
                      */}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        width={600}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6">
                      <div
                        className="w-full h-full rounded-3xl"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                          backgroundSize: "16px 16px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
