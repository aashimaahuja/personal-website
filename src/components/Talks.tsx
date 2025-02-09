"use client";
import React, { useState } from "react";
import { talks } from "@/data/talks";

export default function Talks() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handleVideoClick = (videoId: string) => {
    setPlayingVideo(videoId);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">
            <span className="text-gradient">Talks</span>
          </h2>
          <p className="text-[rgb(var(--color-text-secondary))] text-xl max-w-3xl">
            Sharing knowledge and experiences at various tech conferences and
            meetups.
          </p>
        </div>

        {/* Talks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {talks.map((talk, index) => (
            <div
              key={index}
              className="group bg-elevated rounded-3xl p-6 space-y-6 bg-elevated-hover transition-all duration-300 hover:shadow-2xl hover:shadow-[rgb(var(--color-primary))]/10"
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
                  <span className="text-sm text-primary font-medium bg-primary-10 px-3 py-1 rounded-full">
                    {talk.event}
                  </span>
                  <span className="text-xs text-[rgb(var(--color-text-secondary))]">
                    {talk.duration}
                  </span>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                  {talk.title}
                </h3>
                <div className="pt-2">
                  <a
                    href={`https://www.youtube.com/watch?v=${talk.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-[rgb(var(--color-text-secondary))] hover:text-primary transition-colors"
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
  );
}
