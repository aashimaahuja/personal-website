"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-center items-center">
          <div className="bg-[#1A1A1A] rounded-full px-6 py-2.5 flex items-center gap-8">
            <Link
              href="/projects"
              className="text-[#999999] hover:text-[#C850C0] transition-colors duration-300 px-2 py-1 text-sm font-medium"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="text-[#999999] hover:text-[#C850C0] transition-colors duration-300 px-2 py-1 text-sm font-medium"
            >
              Blog
            </Link>
            <Link
              href="/talks"
              className="text-[#999999] hover:text-[#C850C0] transition-colors duration-300 px-2 py-1 text-sm font-medium"
            >
              Talks
            </Link>
            <Link
              href="/store"
              className="text-[#999999] hover:text-[#C850C0] transition-colors duration-300 px-2 py-1 text-sm font-medium"
            >
              Store
            </Link>
            <Link
              href="/contact"
              className="text-[#999999] hover:text-[#C850C0] transition-colors duration-300 px-2 py-1 text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
