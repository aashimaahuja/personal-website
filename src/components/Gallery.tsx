import React from "react";
import Image from "next/image";
import { images } from "@/constants/images";

export default function Gallery() {
  return (
    <div className="w-full px-4 py-12">
      <div className="flex gap-6 overflow-x-auto pb-8 px-4 scrollbar-hide">
        <div className="h-[400px] w-[300px] flex-shrink-0 rounded-3xl overflow-hidden transform hover:-rotate-6 transition-all duration-300 hover:scale-105 shadow-xl">
          <Image
            src={images.gallery.pilot}
            alt="Pilot cockpit view"
            width={300}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[400px] w-[300px] flex-shrink-0 rounded-3xl overflow-hidden transform hover:rotate-6 transition-all duration-300 hover:scale-105 shadow-xl">
          <Image
            src={images.gallery.speaking}
            alt="Speaking at a conference"
            width={300}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[400px] w-[300px] flex-shrink-0 rounded-3xl overflow-hidden transform hover:-rotate-6 transition-all duration-300 hover:scale-105 shadow-xl">
          <Image
            src={images.gallery.workspace}
            alt="Modern workspace setup"
            width={300}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[400px] w-[300px] flex-shrink-0 rounded-3xl overflow-hidden transform hover:rotate-6 transition-all duration-300 hover:scale-105 shadow-xl">
          <Image
            src={images.gallery.adventure}
            alt="Mountain adventure"
            width={300}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[400px] w-[300px] flex-shrink-0 rounded-3xl overflow-hidden transform hover:-rotate-6 transition-all duration-300 hover:scale-105 shadow-xl">
          <Image
            src={images.gallery.astronaut}
            alt="Astronaut on Mars"
            width={300}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
