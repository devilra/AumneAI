"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VelocityReliabilitySection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  // Cards-kaana refs
  const cardsRef = useRef([]);

  useEffect(() => {
    // Parallax effect for image
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
      },
    );
  }, []);

  // --- GSAP 3D TILT LOGIC ---
  const handleMouseEnter = (index) => {
    const card = cardsRef.current[index];
    gsap.to(card, {
      scale: 1.02,
      //backgroundColor: "rgba(17, 34, 64, 0.6)", // Slightly brighter on hover
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Tilt intensity (15 is a good balance)
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = (index) => {
    const card = cardsRef.current[index];
    gsap.to(card, {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      //backgroundColor: "rgba(17, 34, 64, 0.4)", // Original color
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-r from-[#02060d] via-[#071827] via-[#0b2a3d] to-[#0e3b4e] text-white overflow-hidden py-20"
    >
      <div className="mx-auto max-w-[1550px] px-6 md:px-14">
        <div className="flex flex-col md:flex-row items-center gap-10 border border-white/10 rounded-xl overflow-hidden">
          {/* LEFT IMAGE BLOCK */}
          <div className="relative flex-1 min-h-[565px]  overflow-hidden group border-r border-white/10">
            <div
              ref={imageRef}
              className="absolute inset-0 bg-cover bg-center scale-125"
              style={{
                backgroundImage: "url('/image/core.jpg')",
                height: "100%",
                top: "-10%",
              }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
          </div>

          {/* RIGHT TEXT BLOCK */}
          <div className="flex-1 flex flex-col py-10 px-5 justify-center  space-y-8 ">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-10">
              The Core Problem
            </h2>
            {/* <div className="h-0.5 w-[53%] bg-linear-to-r from-[#036ffd] to-[#42a5f5] rounded-full" /> */}

            {/* Card 1 */}
            <div
              ref={(el) => (cardsRef.current[0] = el)}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseMove={(e) => handleMouseMove(e, 0)}
              onMouseLeave={() => handleMouseLeave(0)}
              style={{ transformStyle: "preserve-3d" }}
              // className="group p-8 rounded-2xl border border-[#1e3a8a] bg-[#112240]/40 backdrop-blur-sm transition-all hover:border-[#3b82f6]/50 "
              className="group py-3 rounded-2xl  backdrop-blur-sm transition-all  "
            >
              <h3 className="text-[#0D7EB6] text-md md:text-xl font-bold mb-4 leading-tight">
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

            {/* <div className="h-0.5 w-full bg-linear-to-r from-[#036ffd] to-[#42a5f5] rounded-full" /> */}

            {/* Card 2 */}
            <div
              ref={(el) => (cardsRef.current[1] = el)}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseMove={(e) => handleMouseMove(e, 1)}
              onMouseLeave={() => handleMouseLeave(1)}
              style={{ transformStyle: "preserve-3d" }}
              // className="group p-8 rounded-2xl border border-[#1e3a8a] bg-[#112240]/40 backdrop-blur-sm transition-all hover:border-[#ef4444]/30 "
              className="group  rounded-2xl   backdrop-blur-sm transition-all "
            >
              <h3 className="text-[#e11d48] text-md md:text-xl font-bold mb-4">
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
