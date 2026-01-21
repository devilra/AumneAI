import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  LuSearch,
  LuEye,
  LuPalette,
  LuCode,
  LuRocket,
  LuRefreshCw,
} from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

export default function HowActs() {
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
      title: "Discovery",
      desc: "Ingests enterprise artifacts including legacy IVRs, workflows, transcripts, product documents, API guides, knowledge bases, etc. to capture intents, personas, and objectives.",
      icon: <LuSearch />,
      pos: "md:top-[-30px] md:left-[-40px]",
    },
    {
      title: "Visibility",
      desc: "Provides a single view into existing flows, performance, and gaps, creating a clear foundation for modernization.",
      icon: <LuEye />,
      pos: "md:top-[100px] md:left-[235px]",
    },
    {
      title: "Design",
      desc: "Combines Fingerprinting, rule based heuristics, and AI models to generate conversational journeys aligned with enterprise goals and customer needs.",
      icon: <LuPalette />,
      pos: "md:top-[-30px] md:left-[510px]",
    },
    {
      title: "Develop",
      desc: "Flows are validated, refined, and integrated with human in the loop oversight, compliance checks, and system integrations.",
      icon: <LuCode />,
      pos: "md:top-[410px] md:left-[-40px]",
    },
    {
      title: "Deploy",
      desc: "Publish across voice, chat, and digital platforms with enterprise grade governance and multi platform agility.",
      icon: <LuRocket />,
      pos: "md:top-[540px] md:left-[235px]",
    },
    {
      title: "Continuous Evolution",
      desc: "A built in feedback loop captures insights from every interaction. ACT uses this learning to continuously evolve services in sync with product changes.",
      icon: <LuRefreshCw />,
      pos: "md:top-[410px] md:left-[510px]",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen text-white py-40 mb-20 overflow-visible"
    >
      <div className="relative z-10 max-w-[1550px] mx-auto px-6 md:px-16">
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
              <h2 className="text-xl md:text-3xl  tracking-[3px] font-bold text-white">
                The Act Lifecycle
                {/* <span
                  //  className="font-semibold bg-linear-to-r from-[#036ffd] via-[#1e88e5] to-[#42a5f5] bg-clip-text text-transparent"
                  className="font-semibold bg-linear-to-r text-[#0D7EB6]"
                >
                  with enterprise-grade control.
                </span> */}
              </h2>
              {/* <p className="mt-8 text-neutral-400 text-lg leading-relaxed max-w-xs">
                Empower your enterprise with seamless AI integration and
                data-driven decision making.
              </p> */}
            </div>
          </div>

          {/* RIGHT CARDS AREA */}
          <div className="lg:col-span-7 relative px-6 lg:px-12">
            {/* MD-la 'grid' remove pannittu normal div-ah mathi, 
                absolute positioning enable pannirukom 
            */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:absolute lg:-top-28 lg:-left-15 lg:-right-5 z-20">
              {cardData.map((card, i) => (
                <div
                  key={i}
                  className={`
        relative group transition-all duration-700 ease-out
        lg:w-64 h-[420px] p-8
        /* Background & Glass effect */
        bg-slate-900/40 backdrop-blur-xl
        /* Border styling */
        border border-white/10 border-b-white/5
        /* Shadow & Glow */
        shadow-[0_20px_50px_rgba(0,0,0,0.5)]
        hover:shadow-[0_0_30px_rgba(13,126,182,0.3)]
        /* Amazing Angle & Perspective */
        hover:-translate-y-4 hover:rotate-1
        flex flex-col justify-between overflow-hidden
        rounded-2xl md:absolute z-20 ${card.pos}
      `}
                >
                  {/* 1. Animated Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-[#0D7EB6]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* 2. Top Glow Ornament */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0D7EB6]/10 blur-3xl rounded-full group-hover:bg-[#0D7EB6]/30 transition-all duration-500" />

                  <div className="relative z-10">
                    {/* Icon with Floating effect */}
                    <div className="text-4xl mb-6 text-white transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                      {card.icon}
                    </div>

                    {/* Title with Gradient */}
                    <h3 className="text-lg font-semibold bg-clip-text bg-linear-to-r text-[#0D7EB6] mb-4 leading-tight">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-400 text-sm leading-relaxed font-medium group-hover:text-slate-200 transition-colors duration-300">
                      {card.desc}
                    </p>
                  </div>

                  {/* 3. Bottom Progress/Accent Line with Shine */}
                  <div className="relative mt-8">
                    <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-0 group-hover:w-full h-full bg-linear-to-r from-[#1E4EAD] via-[#0D7EB6] to-[#1CC2D1] transition-all duration-700 ease-in-out" />
                    </div>
                    {/* Subtle Number/Index Indicator */}
                    <span className="absolute -top-6 right-0 text-[10px] font-mono text-white/20 tracking-widest group-hover:text-[#0D7EB6] transition-colors">
                      PHASE_0{i + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
