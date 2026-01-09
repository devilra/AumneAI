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
      }
    );
  }, []);

  const cardData = [
    {
      title: "Transform Legacy to AI",
      desc: "Move from outdated IVRs and fragmented workflows to Agentic conversational services without starting from scratch.",
      icon: <SlRefresh />,
    },
    {
      title: "Visibility & Control",
      desc: "Track deployed flows, measure performance, and gain actionable insights across the lifecycle.",
      icon: <IoEyeOutline />,
    },
    {
      title: "Agility Across Platforms",
      desc: "Design once and deploy everywhere across voice, chat, and digital channels, simplifying operations.",
      icon: <MdDeviceHub />,
    },
    {
      title: "Omnichannel Experience",
      desc: "Ensure customers get consistent, connected journeys across every touchpoint.",
      icon: <PiGlobeSimpleLight />,
    },
    {
      title: "Human in the Loop",
      desc: "Experts stay in control. They review, refine, and release AI generated flows to ensure accuracy, compliance, governance, and trust.",
      icon: <FiUsers />,
    },
    {
      title: "Agentic Orchestration and Co-Pilot",
      desc: "Intelligent orchestration across ACT, with a co-pilot that empowers teams to guide and collaborate with AI seamlessly.",
      icon: <RiRobot2Line />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen text-white py-40 overflow-visible "
    >
      <div className="relative z-10 max-w-[1550px] mx-auto px-6 ">
        {/* Main Container with Border */}
        <div className="border border-white/20 grid grid-cols-1 lg:grid-cols-12 min-h-[600px] relative">
          {/* LEFT CONTENT BLOCK */}
          <div className="lg:col-span-5 relative overflow-hidden border-r border-white/10 p-12 lg:p-16 flex flex-col justify-center">
            <div
              ref={bgRef}
              className="absolute inset-0 w-[140%] h-full opacity-30 bg-cover bg-center pointer-events-none z-0"
              style={{ backgroundImage: "url('/para2.avif')", left: "-20%" }}
            />
            <div className="relative z-10">
              <h2 className="text-4xl  font-semibold text-white ">
                Let Your Data Take <br />
                Your Business to <br />
                <span className="font-semibold">Higher Grounds</span>
              </h2>
              <p className="mt-8 text-neutral-500 text-lg leading-relaxed max-w-xs">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
            </div>
          </div>

          {/* RIGHT CARDS AREA */}
          <div className="lg:col-span-7 relative px-6 lg:px-12">
            {/* Grid with custom top-offset to overlap the top border */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:absolute lg:-top-28 lg:-left-15 lg:-right-5 z-20">
              {cardData.map((card, i) => (
                <div
                  key={i}
                  className={`bg-[#121212] p-10 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
                    min-h-[250px] lg:w-60 flex flex-col justify-between transition-all duration-500 
                    ${
                      i % 2 !== 0
                        ? "lg:translate-y-0" // 2nd and 4th cards move way down to overlap bottom border
                        : "lg:translate-y-0" // 1st and 3rd cards stay top to overlap top border
                    }`}
                >
                  <div>
                    <div className="text-4xl mb-8 opacity-90">{card.icon}</div>
                    <h3 className="text-xl font-semibold text-indigo-300 mb-5 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-neutral-500 text-md leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <div className="mt-8 w-full h-1 bg-neutral-700 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
