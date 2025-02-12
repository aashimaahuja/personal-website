"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[rgb(var(--color-background-elevated))] bg-opacity-30 border-t border-[rgb(var(--color-background-elevated-hover))]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-sm text-[rgb(var(--color-text-secondary))]">
            © 2025 — present Aashima Ahuja.
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap items-center gap-6">
              <li>
                <Link
                  href="/"
                  className="text-sm text-[rgb(var(--color-text-secondary))] hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-[rgb(var(--color-text-secondary))] hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-sm text-[rgb(var(--color-text-secondary))] hover:text-primary transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/talks"
                  className="text-sm text-[rgb(var(--color-text-secondary))] hover:text-primary transition-colors"
                >
                  Talks
                </Link>
              </li>
              <li>
                <Link
                  href="/slides"
                  className="text-sm text-[rgb(var(--color-text-secondary))] hover:text-primary transition-colors"
                >
                  Slides
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/contact"
                  className="text-sm text-[rgb(var(--color-text-secondary))] hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
