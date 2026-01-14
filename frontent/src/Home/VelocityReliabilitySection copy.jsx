"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VelocityReliabilitySection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { y: "10%" },
      {
        y: "-10%",
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
      className="relative min-h-screen bg-[#1c1c1c] text-white overflow-hidden py-20"
    >
      {/* Outer Container - No Border here */}
      <div className="mx-auto max-w-[1550px] px-6 md:px-14">
        {/* Inner Flex Container with Border - Ippo intha box-ku mattum thaan border varum */}
        <div className="flex flex-col md:flex-row items-stretch border border-white/10">
          {/* LEFT IMAGE BLOCK - Fixed width with w-1/2 or flex-1 */}
          <div className="relative flex-1 min-h-[500px] md:h-[550px] overflow-hidden group border-r border-white/10">
            <div
              ref={imageRef}
              className="absolute inset-0 bg-cover bg-center scale-125"
              style={{
                backgroundImage: "url('/image/human.jpg')",
                height: "120%",
                top: "-10%",
              }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

            {/* Title inside image */}
            <div className="relative z-10 h-full flex items-center justify-center px-8 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                Human in the Loop <br />
                <span className="">and Co-Pilot Integration.</span>
              </h2>
            </div>
          </div>

          {/* RIGHT TEXT BLOCK - Fixed width with flex-1 */}
          <div className="flex-1 flex flex-col justify-center p-8 md:p-16 space-y-8 bg-[#1c1c1c]">
            <div className="space-y-6">
              <p className="text-neutral-400 text-lg leading-relaxed">
                Human in the loop and Co-Pilot are embedded throughout the
                lifecycle, keeping experts in control while AI accelerates
                delivery. This ensures accuracy, compliance, governance, and
                trust at every step
              </p>
              {/* 
              <p className="text-neutral-400 text-lg leading-relaxed">
                This is a great space to write a long text about your company
                and your services. You can use this space to go into a little
                more detail about your company. Talk about your team and what
                services you provide.
              </p> */}
            </div>

            <div className="pt-4">
              <button className="group relative inline-flex items-center gap-2 px-8 rounded py-4 bg-linear-to-r from-[#036ffd] hover:to-[#5187b4] via-[#1e88e5] to-[#42a5f5] text-white font-medium transition-all hover:bg-red-700 active:scale-95">
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
