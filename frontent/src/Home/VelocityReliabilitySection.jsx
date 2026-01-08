"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VelocityReliabilitySection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Zoom aana image-ai nalla distance move panrom
    gsap.fromTo(
      imageRef.current,
      { y: "15%" }, // Start position (bottom)
      {
        y: "-15%", // End position (top)
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black  text-white overflow-hidden py-20"
    >
      <div className="">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE BLOCK */}
          <div className="relative h-[650px] border border-white/10 overflow-hidden group">
            {/* Image with Zoom (scale) to allow more movement */}
            <div
              ref={imageRef}
              className="absolute inset-0 bg-cover bg-center scale-150" // Zoomed in by 1.5x
              style={{
                backgroundImage: "url('/para3.avif')",
                height: "120%", // Container-ai vida image height athigam
                top: "-10%",
              }}
            />

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />

            {/* Title inside image */}
            <div className="relative z-10 h-full flex items-center justify-center px-8 lg:px-16">
              <h2 className="text-xl md:text-3xl text-center font-semibold leading-tight tracking-tight">
                Unprecedented Velocity. <br />
                <span className="text-center">Impeccable Reliability.</span>
              </h2>
            </div>
          </div>

          {/* RIGHT TEXT BLOCK */}
          <div className="flex flex-col justify-center space-y-8 pr-4">
            <div className="space-y-6">
              <p className="text-neutral-500 text-lg leading-relaxed">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>

              <p className="text-neutral-500 text-lg  leading-relaxed">
                This is a great space to write a long text about your company
                and your services. You can use this space to go into a little
                more detail about your company. Talk about your team and what
                services you provide. Tell your visitors the story of how you
                came up with the idea for your business and what makes you
                different from your competitors. Make your company stand out and
                show your visitors who you are.
              </p>
            </div>

            <div className="pt-4">
              <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-medium overflow-hidden transition-all hover:bg-red-700 active:scale-95">
                <span>Learn More</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
