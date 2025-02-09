"use client";
import React from "react";
import Image from "next/image";
import { images } from "@/constants/images";

export default function AboutProfile() {
  return (
    <div className="relative w-[300px] mx-auto -mt-20 mb-12">
      <div className="aspect-square overflow-hidden rounded-full">
        <Image
          src={images.gallery.speaking}
          alt="Profile picture"
          width={300}
          height={300}
          className="w-full h-full object-cover brightness-90 object-top scale-125"
          priority
        />
      </div>
      <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6">
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(var(--color-text-secondary), 0.1) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
      </div>
    </div>
  );
}
