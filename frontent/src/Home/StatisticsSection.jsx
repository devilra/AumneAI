"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiTrendingUp, FiDollarSign, FiUsers, FiClock } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function StatisticsSection() {
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

  const stats = [
    {
      icon: <FiTrendingUp />,
      value: "80",
      prefix: "",
      suffix: "%",
      label: "of customer interactions handled by AI agents by 2029",
      source: "— Gartner",
    },
    {
      icon: <FiDollarSign />,
      value: "95",
      prefix: "$",
      suffix: "B",
      label: "expected spending on service transformation by 2030",
      source: "— IDC",
    },
    {
      icon: <FiDollarSign />,
      value: "46",
      prefix: "$",
      suffix: "B",
      label: "spent annually on service transformation with limited results",
      source: "— IDC",
    },
    {
      icon: <FiUsers />,
      value: "3",
      prefix: "1 in ",
      suffix: "",
      label: "customers leave after a single poor service experience",
      source: "— PwC",
    },
    {
      icon: <FiClock />,
      value: "18",
      prefix: "12-",
      suffix: " months",
      label: "typical transformation project duration costing millions",
      source: "— Accenture",
    },
    {
      icon: <FiTrendingUp />,
      value: "70",
      prefix: "",
      suffix: "%",
      label: "of enterprises remain tied to legacy IVRs",
      source: "— Gartner",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="pt-24 text-white px-6 bg-[#1c1c1c] overflow-hidden"
    >
      <div className="max-w-[1550px] mx-auto text-center">
        <h2 className="text-4xl md:text-6xl text-[#0D7EB6] font-semibold mb-6 tracking-tight">
          Industry Trends
        </h2>
        <p className="mb-20 text-neutral-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          The customer service landscape is rapidly evolving, but many
          organizations struggle with transformation challenges.
        </p>

        <div
          ref={statsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10"
        >
          {stats.map((item, index) => (
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
              <div className="text-5xl md:text-6xl font-bold text-[#0D7EB6] mb-4">
                <span
                  ref={(el) => (statsRef.current[index] = el)}
                  data-target={item.value}
                  data-prefix={item.prefix}
                  data-suffix={item.suffix}
                >
                  0
                </span>
              </div>

              <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
                {item.label}
              </p>
              <p className="text-[#0D7EB6] text-sm font-medium tracking-wide uppercase">
                {item.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
