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
          <div className="relative flex-1 min-h-[500px] md:h-[650px] overflow-hidden group border-r border-white/10">
            <div
              ref={imageRef}
              className="absolute inset-0 bg-cover bg-center scale-125"
              style={{
                backgroundImage: "url('/image/core.jpg')",
                height: "120%",
                top: "-10%",
              }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

            {/* Title inside image */}
            {/* <div className="relative z-10 h-full flex items-center justify-center px-8 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                Human in the Loop <br />
                <span className="">and Co-Pilot Integration.</span>
              </h2>
            </div> */}
          </div>

          {/* RIGHT TEXT BLOCK - Fixed width with flex-1 */}
          <div className="flex-1 flex flex-col justify-center p-8 md:p-12 space-y-8 ">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              The Core Problem
            </h2>

            {/* Card 1: Service Lifecycle */}
            <div className="group p-8 rounded-2xl border border-[#1e3a8a] bg-[#112240]/40 backdrop-blur-sm transition-all hover:border-[#3b82f6]/50">
              <h3 className="text-[#3b82f6] text-lg font-bold mb-4 leading-tight">
                No Proactive, End to End Service Lifecycle Management
              </h3>
              <p className="text-gray-300 text-md leading-relaxed">
                Service today runs on{" "}
                <span className="text-white font-bold">
                  outdated IVRs, disconnected chatbots, siloed workflows.
                </span>{" "}
                Unlike products,{" "}
                <span className="text-white font-bold">
                  services don't evolve continuously
                </span>
                , leaving enterprises with{" "}
                <span className="text-white font-bold">
                  slow, manual, and costly
                </span>{" "}
                transformations and no visibility or learning from usage.
              </p>
            </div>

            {/* Card 2: Customer Impact */}
            <div className="group p-8 rounded-2xl border border-[#1e3a8a] bg-[#112240]/40 backdrop-blur-sm transition-all hover:border-[#ef4444]/30">
              <h3 className="text-[#e11d48] text-lg font-bold mb-4">
                Customer Impact
              </h3>
              <p className="text-gray-300 text-md leading-relaxed">
                Customers feel the impact too with{" "}
                <span className="text-white font-bold">
                  broken journeys, repeated frustrations
                </span>
                , and <span className="text-white font-bold">poor</span>{" "}
                omnichannel experiences that erode trust and loyalty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
