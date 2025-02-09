"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { upcomingCourses, courses } from "@/data/courses";

export default function Workshops() {
  return (
    <div className="min-h-screen pt-16 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-24">
          {/* Upcoming Courses Section */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold">
                <span className="text-gradient">Upcoming Courses</span>
              </h2>
              <p className="text-[rgb(var(--color-text-secondary))] text-xl max-w-3xl">
                Be the first to know about new courses and early bird offers.
              </p>
            </div>

            {/* Upcoming Courses Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingCourses.map((course, index) => (
                <div
                  key={index}
                  className="bg-[rgb(var(--color-background-elevated))] rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="aspect-[2/1] relative">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-primary font-medium bg-primary-10 px-3 py-1 rounded-full">
                          {course.type}
                        </span>
                        <span className="text-sm text-[rgb(var(--color-text-secondary))]">
                          {course.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-[rgb(var(--color-text))]">
                        {course.title}
                      </h3>
                      <p className="text-sm text-[rgb(var(--color-text-secondary))] leading-relaxed line-clamp-2">
                        {course.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary bg-primary-10 px-3 py-1 rounded-full">
                        {course.status}
                      </span>
                      <button className="inline-flex items-center text-sm font-medium text-primary bg-primary-10 px-3 py-1 rounded-full">
                        Get Notified
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M13.75 6.75L19.25 12L13.75 17.25"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 12H4.75"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Courses Section */}
          <div className="space-y-16">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold">
                <span className="text-gradient">Live Courses</span>
              </h1>
              <p className="text-[rgb(var(--color-text-secondary))] text-xl max-w-3xl">
                Level up your development skills with interactive workshops and
                comprehensive courses.
              </p>
            </div>

            {/* Courses Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-[rgb(var(--color-background-elevated))] rounded-2xl overflow-hidden"
                >
                  <div className="aspect-[2/1] relative">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
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
                      <h3 className="text-xl font-semibold text-[rgb(var(--color-text))]">
                        {course.title}
                      </h3>
                      <p className="text-sm text-[rgb(var(--color-text-secondary))] leading-relaxed line-clamp-3">
                        {course.description}
                      </p>
                    </div>
                    <div>
                      <Link
                        href={course.link}
                        target="_blank"
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-[rgb(var(--color-primary-hover))] transition-colors"
                      >
                        View Details
                        <svg
                          className="w-4 h-4 ml-2"
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
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
