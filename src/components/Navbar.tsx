"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          {/* Navigation Links */}
          <div className="flex-1 flex justify-center">
            <ul className="bg-elevated bg-opacity-80 rounded-full px-4 py-2 flex items-center gap-4">
              <li>
                <Link
                  href="/"
                  className={`relative text-sm px-3 py-2 font-medium transition-colors ${
                    pathname === "/"
                      ? "text-primary"
                      : "text-[#999999] hover:text-primary"
                  }`}
                >
                  {pathname === "/" && (
                    <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-[rgba(var(--color-primary),0)] via-[rgba(var(--color-primary),0.4)] to-[rgba(var(--color-primary),0)]" />
                  )}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`relative text-sm px-3 py-2 font-medium transition-colors ${
                    pathname === "/about"
                      ? "text-primary"
                      : "text-[#999999] hover:text-primary"
                  }`}
                >
                  {pathname === "/about" && (
                    <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-[rgba(var(--color-primary),0)] via-[rgba(var(--color-primary),0.4)] to-[rgba(var(--color-primary),0)]" />
                  )}
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/workshops"
                  className={`relative text-sm px-3 py-2 font-medium transition-colors ${
                    pathname === "/workshops"
                      ? "text-primary"
                      : "text-[#999999] hover:text-primary"
                  }`}
                >
                  {pathname === "/workshops" && (
                    <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-[rgba(var(--color-primary),0)] via-[rgba(var(--color-primary),0.4)] to-[rgba(var(--color-primary),0)]" />
                  )}
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/talks"
                  className={`relative text-sm px-3 py-2 font-medium transition-colors ${
                    pathname === "/talks"
                      ? "text-primary"
                      : "text-[#999999] hover:text-primary"
                  }`}
                >
                  {pathname === "/talks" && (
                    <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-[rgba(var(--color-primary),0)] via-[rgba(var(--color-primary),0.4)] to-[rgba(var(--color-primary),0)]" />
                  )}
                  Talks
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`relative text-sm px-3 py-2 font-medium transition-colors ${
                    pathname === "/contact"
                      ? "text-primary"
                      : "text-[#999999] hover:text-primary"
                  }`}
                >
                  {pathname === "/contact" && (
                    <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-[rgba(var(--color-primary),0)] via-[rgba(var(--color-primary),0.4)] to-[rgba(var(--color-primary),0)]" />
                  )}
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center ml-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-elevated bg-opacity-80 hover:bg-white/5 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg
                  className="w-5 h-5 text-[rgb(var(--color-text-secondary))] hover:text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-[rgb(var(--color-text-secondary))] hover:text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
