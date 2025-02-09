"use client";
import React from "react";
import Link from "next/link";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  const inputStyles =
    "w-full px-4 py-3 rounded-xl bg-[rgb(var(--color-background-elevated))] border border-[rgb(var(--color-text-secondary))] focus:border-[rgb(var(--color-primary))]/30 text-[rgb(var(--color-text))] placeholder-[rgb(var(--color-text-secondary))] outline-none transition-colors";

  return (
    <div className="min-h-screen pt-16 pb-16">
      <div className="max-w-6xl mx-auto px-4 pt-16">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">
              <span className="text-gradient">Get in Touch</span>
            </h1>
            <p className="text-[rgb(var(--color-text-secondary))] text-xl max-w-3xl">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[rgb(var(--color-text))]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={inputStyles}
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[rgb(var(--color-text))]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={inputStyles}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-4">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[rgb(var(--color-text))]"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className={inputStyles}
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[rgb(var(--color-text))]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className={`${inputStyles} resize-none`}
                    placeholder="Your message..."
                  />
                </div>

                <div className="pb-4">
                  <button
                    type="submit"
                    className="w-full px-8 py-4 rounded-full bg-primary hover:bg-[rgb(var(--color-primary-hover))] text-[rgb(var(--color-text))] font-medium transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-[rgb(var(--color-background-elevated))] rounded-3xl p-8 space-y-6">
                <h2 className="text-2xl font-semibold text-[rgb(var(--color-text))]">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 mt-1 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <div>
                      <h3 className="font-medium text-[rgb(var(--color-text))]">
                        Email
                      </h3>
                      <Link
                        href="mailto:hello@example.com"
                        className="text-[rgb(var(--color-text-secondary))] hover:text-primary transition-colors"
                      >
                        hello@example.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 mt-1 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-medium text-[rgb(var(--color-text))]">
                        Location
                      </h3>
                      <p className="text-[rgb(var(--color-text-secondary))]">
                        New Delhi, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-4 pt-6">
                  <h3 className="font-medium text-[rgb(var(--color-text))]">
                    Follow Me
                  </h3>
                  <div className="flex items-center gap-4">
                    <Link
                      href="https://x.com/aashimaahuja22"
                      target="_blank"
                      className="text-[rgb(var(--color-text-secondary))] hover:text-primary transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </Link>
                    <Link
                      href="https://www.instagram.com/aashi811"
                      target="_blank"
                      className="text-[rgb(var(--color-text-secondary))] hover:text-primary transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {/* Instagram SVG */}
                      </svg>
                    </Link>
                    <Link
                      href="https://github.com/AashimaAhuja"
                      target="_blank"
                      className="text-[rgb(var(--color-text-secondary))] hover:text-primary transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/aashimaahuja/"
                      target="_blank"
                      className="text-[rgb(var(--color-text-secondary))] hover:text-primary transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
