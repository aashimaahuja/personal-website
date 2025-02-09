import React from "react";
import Image from "next/image";
import Link from "next/link";
import { courses } from "@/data/courses";

export default function Courses() {
  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold">
          <span className="text-gradient">All Courses</span>
        </h1>
        <p className="text-[rgb(var(--color-text-secondary))] text-xl max-w-3xl">
          Level up your development skills with interactive workshops and
          comprehensive courses.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <Link
            key={index}
            href={course.link}
            target="_blank"
            className="group bg-[rgb(var(--color-background-elevated))] hover:bg-[rgb(var(--color-primary))/5] rounded-2xl overflow-hidden transition-all duration-300"
          >
            <div className="aspect-[2/1] relative">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover transition-all duration-300 group-hover:opacity-90 group-hover:blur-[0.5px]"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary font-medium bg-primary-10 px-3 py-1 rounded-full">
                    {course.type}
                  </span>
                  {course.level && (
                    <span className="text-xs text-[rgb(var(--color-text-secondary))]">
                      {course.level}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-[rgb(var(--color-text))] group-hover:text-primary transition-all duration-300">
                  {course.title}
                </h3>
                <p className="text-sm text-[rgb(var(--color-text-secondary))] leading-relaxed line-clamp-3 transition-all duration-300 group-hover:text-[rgb(var(--color-text-secondary))/90]">
                  {course.description}
                </p>
              </div>
              <div>
                <span className="inline-flex items-center text-sm font-medium text-primary transition-all duration-300 group-hover:text-[rgb(var(--color-primary-hover))]">
                  View Details
                  <svg
                    className="w-4 h-4 ml-2 transition-all duration-300 group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M13.75 6.75L19.25 12L13.75 17.25"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 12H4.75"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
