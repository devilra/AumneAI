import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlRefresh } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeviceHub } from "react-icons/md";
import { PiGlobeSimpleLight } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { RiRobot2Line } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

export default function DataGrowthSection() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bgRef.current,
      { x: "10%" },
      {
        x: "-15%",
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

  // Custom positions assigned for MD screens and above
  const cardData = [
    {
      title: "Transform Legacy to AI",
      desc: "Move from outdated IVRs and fragmented workflows to Agentic conversational services without starting from scratch.",
      icon: <SlRefresh />,
      pos: "md:top-[-30px] md:left-[-10px]",
    },
    {
      title: "Visibility & Control",
      desc: "Track deployed flows, measure performance, and gain actionable insights across the lifecycle.",
      icon: <IoEyeOutline />,
      pos: "md:top-[100px] md:left-[250px]",
    },
    {
      title: "Agility Across Platforms",
      desc: "Design once and deploy everywhere across voice, chat, and digital channels, simplifying operations.",
      icon: <MdDeviceHub />,
      pos: "md:top-[-30px] md:left-[510px]",
    },
    {
      title: "Omnichannel Experience",
      desc: "Ensure customers get consistent, connected journeys across every touchpoint.",
      icon: <PiGlobeSimpleLight />,
      pos: "md:top-[374px] md:left-[-10px]",
    },
    {
      title: "Human in the Loop",
      desc: "Experts stay in control. They review, refine, and release AI generated flows to ensure accuracy, compliance, governance, and trust.",
      icon: <FiUsers />,
      pos: "md:top-[505px] md:left-[250px]",
    },
    {
      title: "Agentic Orchestration and Co-Pilot",
      desc: "Intelligent orchestration across ACT, with a co-pilot that empowers teams to guide and collaborate with AI seamlessly.",
      icon: <RiRobot2Line />,
      pos: "md:top-[374px] md:left-[510px]",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen text-white py-40 overflow-visible"
    >
      <div className="relative z-10 max-w-[1550px] mx-auto px-6">
        {/* Main Container with Border */}
        <div className="border border-white/20 grid grid-cols-1 lg:grid-cols-12 min-h-[650px] relative ">
          {/* LEFT CONTENT BLOCK */}
          <div className="lg:col-span-5 relative overflow-hidden border-r border-white/10 p-12 lg:p-13 flex flex-col justify-center">
            <div
              ref={bgRef}
              className="absolute inset-0 w-[140%] h-full opacity-30 bg-cover bg-center pointer-events-none z-0"
              style={{ backgroundImage: "url('/para2.avif')", left: "-20%" }}
            />
            <div className="relative z-10">
              <h2 className="text-xl md:text-3xl font-semibold text-white">
                ACT bridges speed, <br />
                and customer delight <br />
                <span
                  //  className="font-semibold bg-linear-to-r from-[#036ffd] via-[#1e88e5] to-[#42a5f5] bg-clip-text text-transparent"
                  className="font-semibold bg-linear-to-r text-[#0D7EB6]"
                >
                  with enterprise-grade control.
                </span>
              </h2>
              <p className="mt-8 text-neutral-400 text-lg leading-relaxed max-w-xs">
                Empower your enterprise with seamless AI integration and
                data-driven decision making.
              </p>
            </div>
          </div>

          {/* RIGHT CARDS AREA */}
          <div className="lg:col-span-7 relative px-6 lg:px-12">
            {/* MD-la 'grid' remove pannittu normal div-ah mathi, 
                absolute positioning enable pannirukom 
            */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:absolute lg:-top-28 lg:-left-15 lg:-right-5 z-20">
              {cardData.map((card, i) => (
                <div
                  key={i}
                  className={`  border  
                     lg:w-60 h-96 bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 p-8  border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
                     md:w-64 flex flex-col justify-between transition-all duration-500 
                    relative md:absolute z-20 ${card.pos}`}
                >
                  <div>
                    <div className="text-4xl mb-6 text-white opacity-90">
                      {card.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[#0D7EB6] mb-3 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <div className="mt-8 w-full h-1 bg-linear-to-r from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1] op rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
