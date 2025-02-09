"use client";
import React, { useState } from "react";
import Image from "next/image";
import { talks } from "@/data/talks";

export default function TalksPage() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handleVideoClick = (videoId: string) => {
    setPlayingVideo(videoId);
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white pt-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">
              <span className="bg-gradient-to-r from-[#FF00FF] via-[#C850C0] to-[#8A2BE2] text-transparent bg-clip-text">
                Conference Talks
              </span>
            </h1>
            <p className="text-[#999999] text-xl max-w-3xl">
              Sharing knowledge and experiences at various tech conferences and
              meetups.
            </p>
          </div>

          {/* Talks Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {talks.map((talk, index) => (
              <div
                key={index}
                className="group bg-[#1A1A1A] rounded-3xl p-6 space-y-6 hover:bg-[#222222] transition-all duration-300 hover:shadow-2xl hover:shadow-[#C850C0]/10"
              >
                <div
                  className="relative aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 cursor-pointer"
                  onClick={() => handleVideoClick(talk.videoId)}
                >
                  {playingVideo === talk.videoId ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${talk.videoId}?autoplay=1`}
                      title={talk.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                      <img
                        src={`https://img.youtube.com/vi/${talk.videoId}/maxresdefault.jpg`}
                        alt={talk.title}
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-[68px] h-[48px] flex items-center justify-center bg-[#FF0000] hover:bg-[#FF0000]/90 rounded-lg transition-colors">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#C850C0] font-medium bg-[#C850C0]/10 px-3 py-1 rounded-full">
                      {talk.event}
                    </span>
                    <span className="text-xs text-[#999999]">
                      {talk.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-[#C850C0] transition-colors line-clamp-2">
                    {talk.title}
                  </h3>
                  <div className="pt-2">
                    <a
                      href={`https://www.youtube.com/watch?v=${talk.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-[#999999] hover:text-[#C850C0] transition-colors"
                    >
                      Watch on YouTube
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
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
