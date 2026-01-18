import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DataGrowthSection from "./DataGrowthSection";
import VelocityReliabilitySection from "./VelocityReliabilitySection";
import StatisticsSection from "./StatisticsSection";
import HorizontalScrollVideo from "./HorizontalScrollImage";

gsap.registerPlugin(ScrollTrigger);

export default function BannerSection() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // 1. PINNING LOGIC
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });

    // 2. BACKGROUND PARALLAX (Video move aagura effect)
    gsap.to(bgRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // 3. CONTENT REVEAL
    gsap.to(contentRef.current, {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "30% top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main className="">
      {/* SECTION 1: Fixed Banner with Video Background */}
      <section
        ref={sectionRef}
        className="relative h-screen w-full overflow-hidden z-10"
      >
        {/* Updated: Background Video */}
        <video
          ref={bgRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-[120%] object-cover"
        >
          <source src="/video/bg-video.mp4" type="video/mp4" />
          {/* Replace "/your-video-file.mp4" with your actual video path */}
          Your browser does not support the video tag.
        </video>

        {/* Overlay to make text readable */}
        <div className="absolute inset-0 bg-black/50" />

        <div
          ref={contentRef}
          className="relative z-20 flex space-y-8 flex-col justify-start pt-20 h-full w-full lg:w-[1100px] px-6 md:px-16 text-white"
        >
          <h1 className="text-2xl md:text-4xl lg:text-7xl text-center lg:text-start font-semibold">
            The First Agentic Service <br />
            <span className="py-3 inline-block">Lifecycle Platform</span>
          </h1>
          <p className="text-xl md:text-xl text-center lg:text-start w-full lg:w-[600px] text-white/50 ">
            Aumne revolutionizes Service Lifecycle Management with Agentic
            systems, transforming legacy IVRs, chatbots, fragmented workflows,
            and siloed support into Agentic conversational services.{" "}
            <span className="font-extrabold text-[#0D7EB6] ">
              Achieve 5x faster modernization.
            </span>
          </p>

          <div className="text-center lg:text-start">
            <button className="w-fit rounded-lg bg-linear-to-r from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1] hover:to-[#5187b4] px-8 py-2">
              Lets's ACT
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="bg-[#0A0A0A] px-10 ">
        <DataGrowthSection />
      </section>

      <section className="">
        <VelocityReliabilitySection />
      </section>
      <section className="">
        <StatisticsSection />
        <section className="">
          <HorizontalScrollVideo />
        </section>
      </section>
    </main>
  );
}
