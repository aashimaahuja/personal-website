import React from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/constants/images";

export default function UpcomingCourse() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <div className="bg-[#1A1A1A] rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <span className="text-sm text-[#C850C0] font-medium bg-[#C850C0]/10 px-3 py-1 rounded-full">
                Coming Soon
              </span>
            </div>
            <h2 className="text-4xl font-bold leading-tight">
              Advanced React Patterns & Performance
            </h2>
            <p className="text-[#999999] text-lg leading-relaxed">
              Master advanced React patterns, optimization techniques, and
              performance strategies. Learn to build scalable and efficient
              applications with React.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/workshops/advanced-react"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#C850C0] hover:bg-[#FF00FF] text-white font-medium transition-colors"
              >
                Join Waitlist
              </Link>
              <Link
                href="/workshops/advanced-react"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#333333] hover:border-[#C850C0] text-[#999999] hover:text-[#C850C0] font-medium transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div>
                <div className="text-2xl font-bold text-[#C850C0]">8+</div>
                <div className="text-[#999999] text-sm">Live Sessions</div>
              </div>
              <div className="w-px h-12 bg-[#333333]" />
              <div>
                <div className="text-2xl font-bold text-[#C850C0]">20+</div>
                <div className="text-[#999999] text-sm">Projects</div>
              </div>
              <div className="w-px h-12 bg-[#333333]" />
              <div>
                <div className="text-2xl font-bold text-[#C850C0]">∞</div>
                <div className="text-[#999999] text-sm">Lifetime Access</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src={images.gallery.workspace}
                alt="Advanced React Course"
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
    </div>
  );
}
