"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-center items-center">
          <ul className="bg-[#1A1A1A] rounded-full px-4 py-2 flex items-center gap-4">
            <li>
              <Link
                href="/"
                className={`relative text-sm px-3 py-2 font-medium transition-colors ${
                  pathname === "/"
                    ? "text-[#C850C0]"
                    : "text-[#999999] hover:text-[#C850C0]"
                }`}
              >
                {pathname === "/" && (
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-[#C850C0]/0 via-[#C850C0]/40 to-[#C850C0]/0" />
                )}
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`relative text-sm px-3 py-3 font-medium transition-colors ${
                  pathname === "/about"
                    ? "text-[#C850C0]"
                    : "text-[#999999] hover:text-[#C850C0]"
                }`}
              >
                {pathname === "/about" && (
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-[#C850C0]/0 via-[#C850C0]/40 to-[#C850C0]/0" />
                )}
                About
              </Link>
            </li>
            <li>
              <Link
                href="/workshops"
                className={`relative text-sm px-3 py-3 font-medium transition-colors ${
                  pathname === "/workshops"
                    ? "text-[#C850C0]"
                    : "text-[#999999] hover:text-[#C850C0]"
                }`}
              >
                {pathname === "/workshops" && (
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-[#C850C0]/0 via-[#C850C0]/40 to-[#C850C0]/0" />
                )}
                Workshops
              </Link>
            </li>
            <li>
              <Link
                href="/talks"
                className={`relative text-sm px-3 py-3 font-medium transition-colors ${
                  pathname === "/talks"
                    ? "text-[#C850C0]"
                    : "text-[#999999] hover:text-[#C850C0]"
                }`}
              >
                {pathname === "/talks" && (
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-[#C850C0]/0 via-[#C850C0]/40 to-[#C850C0]/0" />
                )}
                Talks
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`relative text-sm px-3 py-3 font-medium transition-colors ${
                  pathname === "/contact"
                    ? "text-[#C850C0]"
                    : "text-[#999999] hover:text-[#C850C0]"
                }`}
              >
                {pathname === "/contact" && (
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-[#C850C0]/0 via-[#C850C0]/40 to-[#C850C0]/0" />
                )}
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
