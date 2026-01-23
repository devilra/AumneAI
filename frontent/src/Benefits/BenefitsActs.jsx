"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiTrendingUp, FiDollarSign, FiUsers, FiClock } from "react-icons/fi";
import { SlRefresh } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeviceHub } from "react-icons/md";
import { PiGlobeSimpleLight } from "react-icons/pi";
import { RiRobot2Line } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

export default function BenefitsActs() {
  const sectionRef = useRef(null);
  const statsContainerRef = useRef(null);
  const statsRef = useRef([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    // 1. REVEAL ANIMATION
    gsap.fromTo(
      statsContainerRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );

    // 2. NUMBERS COUNT-UP
    statsRef.current.forEach((stat, index) => {
      if (!stat) return;
      const targetValue = parseFloat(stat.getAttribute("data-target"));
      const prefix = stat.getAttribute("data-prefix") || "";
      const suffix = stat.getAttribute("data-suffix") || "";

      gsap.fromTo(
        stat,
        { innerHTML: 0 },
        {
          innerHTML: targetValue,
          duration: 2,
          delay: 0.3 + index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          onUpdate: function () {
            const value = this.targets()[0].innerHTML;
            stat.innerHTML = prefix + Math.floor(value) + suffix;
          },
        },
      );
    });
  }, []);

  // 3. GSAP HOVER EFFECTS (3D Tilt Logic)
  const handleMouseEnter = (e, index) => {
    const card = cardsRef.current[index];
    const icon = card.querySelector(".icon-box");

    gsap.to(card, {
      scale: 1.02,
      borderColor: "rgba(3, 111, 253, 0.4)",
      backgroundColor: "#141414",
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(icon, {
      y: -10,
      scale: 1.1,
      backgroundColor: "rgba(3, 111, 253, 0.2)",
      duration: 0.3,
    });
  };

  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Mouse irukkura idathuku thaguntha maari tilt calculation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

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
    const icon = card.querySelector(".icon-box");

    gsap.to(card, {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      borderColor: "rgba(255, 255, 255, 0.05)",
      backgroundColor: "#0f0f0f",
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });

    gsap.to(icon, {
      y: 0,
      scale: 1,
      backgroundColor: "rgba(3, 111, 253, 0.1)",
      duration: 0.4,
    });
  };

  const BenefitsActs = [
    {
      icon: <SlRefresh />,
      label: "Transform Legacy to AI",
      value:
        "Move from outdated IVRs and fragmented workflows to Agentic conversational services without starting from scratch.",
      source: "", // Image-il source illai
    },
    {
      icon: <IoEyeOutline />,
      label: "Visibility & Control",
      value:
        "Track deployed flows, measure performance, and gain actionable insights across the lifecycle.",
      source: "",
    },
    {
      icon: <MdDeviceHub />,
      label: "Agility Across Platforms",
      value:
        "Design once and deploy everywhere across voice, chat, and digital channels, simplifying operations.",
      source: "",
    },
    {
      icon: <PiGlobeSimpleLight />,
      label: "Omnichannel Experience",
      value:
        "Ensure customers get consistent, connected journeys across every touchpoint.",
      source: "",
    },
    {
      icon: <FiUsers />,
      label: "Human in the Loop",
      value:
        "Experts stay in control. They review, refine, and release AI generated flows to ensure accuracy, compliance, governance, and trust.",
      source: "",
    },
    {
      icon: <RiRobot2Line />,
      label: "Agentic Orchestration and Co-Pilot",
      value:
        "Intelligent orchestration across ACT, with a co-pilot that empowers teams to guide and collaborate with AI seamlessly.",
      source: "",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="pt-10 text-white px-6 bg-gradient-to-r from-[#02060d] via-[#071827] via-[#0b2a3d] to-[#0e3b4e] overflow-hidden"
    >
      <div className="max-w-[1550px] mx-auto text-center">
        <h2 className="text-4xl md:text-6xl text-[#0D7EB6] font-semibold mb-6 tracking-tight">
          Benefits of ACT
        </h2>
        <p className="mb-5 text-white text-[20px]  max-w-4xl mx-auto leading-relaxed">
          ACT bridges speed, savings, and customer delight with enterprise-grade
          control.
        </p>
        <p className="mb-20 text-neutral-400  text-base max-w-2xl mx-auto leading-relaxed">
          With ACT, enterprises gain the ability to modernize faster, reduce
          costs, and deliver seamless experiences — while staying in control of
          how services are built and evolved.
        </p>

        <div
          ref={statsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10"
        >
          {BenefitsActs.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              onMouseEnter={(e) => handleMouseEnter(e, index)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="relative bg-[#0f0f0f] border border-white/5 rounded-2xl p-10 flex flex-col items-center text-center transition-colors duration-500 cursor-default overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Background Glow Effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />

              {/* Icon Section */}
              <div className="icon-box text-2xl text-[#0D7EB6] mb-6 bg-blue-500/10 p-4 rounded-full transition-colors duration-300">
                {item.icon}
              </div>

              {/* Number */}
              {/* <div className="text-5xl md:text-6xl font-bold text-[#0D7EB6] mb-4">
                <span
                  ref={(el) => (statsRef.current[index] = el)}
                  data-target={item.value}
                  data-prefix={item.prefix}
                  data-suffix={item.suffix}
                >
                  0
                </span>
              </div> */}

              <p className="text-[#0D7EB6] font-bold text-lg md:text-[22px] mb-6 leading-relaxed">
                {item.label}
              </p>
              <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
                {item.value}
              </p>
            </div>
          ))}
        </div>
        <h2 className="text-4xl md:text-6xl py-5 md:pb-7 md:pt-24 text-[#0D7EB6] font-semibold  tracking-tight">
          How Act Works
        </h2>
        <p className="mb-20 text-white text-[20px]  max-w-4xl mx-auto leading-relaxed">
          ACT follows a continuous lifecycle — ensuring services are not only
          modernized but also transparent, governed, and continuously evolving
          alongside products.
        </p>
      </div>
    </section>
  );
}
