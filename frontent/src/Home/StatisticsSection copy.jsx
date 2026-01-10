"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StatisticsSection() {
  const sectionRef = useRef(null);
  const statsContainerRef = useRef(null); // Cards container-ku oru ref
  const statsRef = useRef([]);

  useEffect(() => {
    // 1. REVEAL ANIMATION: Cards left side-la irunthu staggered-ah varum
    gsap.fromTo(
      statsContainerRef.current.children, // Ovvoru card column-aiyum select pannum
      {
        opacity: 0,
        x: -60, // Left side-la irunthu start aagum
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2, // Ovvoru card-kum 0.2s gap irukum
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // Section screen-oda 75%-ku varum pothu start aagum
        },
      }
    );

    // 2. NUMBERS COUNT-UP ANIMATION: Ithuvum staggered-ah start aagum
    statsRef.current.forEach((stat, index) => {
      const targetValue = parseInt(stat.getAttribute("data-target"));

      gsap.fromTo(
        stat,
        { innerText: 0 },
        {
          innerText: targetValue,
          duration: 2,
          delay: index * 0.2, // Reveal animation delay-oda match panna
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          onUpdate: function () {
            const suffix = stat.getAttribute("data-suffix") || "";
            stat.innerHTML = Math.ceil(this.targets()[0].innerText) + suffix;
          },
        }
      );
    });
  }, []);

  const stats = [
    { label: "Years of Experience", value: "15", suffix: "" },
    { label: "Business Partners", value: "10", suffix: "K" },
    { label: "Products Installed", value: "25", suffix: "M" },
    { label: "Countries World Wide", value: "22", suffix: "" },
    { label: "Industry Awards", value: "5", suffix: "" },
  ];

  return (
    <section ref={sectionRef} className=" text-white  px-6 overflow-hidden">
      <div className="max-w-[1550px] px-6 md:px-14 mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-8 tracking-tight">
          Industry Trends
        </h2>
        <p className="mb-20 text-neutral-400 text-lg md:text-xl leading-relaxed w-full md:w-[900px] mx-auto">
          The customer service landscape is rapidly evolving, but many
          organizations struggle with transformation challenges and rising
          customer expectations.
        </p>

        {/* Stats Grid - Intha container-ku ref add pannirukaen */}
        <div
          ref={statsContainerRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8"
        >
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Number */}
              <div className="text-3xl md:text-6xl font-medium text-[#e15656] mb-4">
                <span
                  ref={(el) => (statsRef.current[index] = el)}
                  data-target={item.value}
                  data-suffix={item.suffix}
                >
                  0
                </span>
              </div>

              {/* Label */}
              <p className="text-neutral-500 text-sm md:text-base  mb-8 h-12 flex items-center">
                {item.label}
              </p>

              {/* Bottom Decorative Line */}
              <div className="w-full h-1 bg-gray-800 relative rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-neutral-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
