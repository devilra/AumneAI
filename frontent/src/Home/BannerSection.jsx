import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DataGrowthSection from "./DataGrowthSection";
import VelocityReliabilitySection from "./VelocityReliabilitySection";
import StatisticsSection from "./StatisticsSection";
import HorizontalScrollImage from "./HorizontalScrollImage";

gsap.registerPlugin(ScrollTrigger);

export default function BannerSection() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // 1. PINNING LOGIC: Banner section-a screen-la fix pannuvom
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      pin: true, // Indha section-a fix pannidum
      pinSpacing: false, // Adutha section mela vara idham tharum
    });

    // 2. BACKGROUND PARALLAX: Video-la irukura maari light movement
    gsap.to(bgRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // 3. CONTENT REVEAL: Text mela scroll aagumbodu light-a fade aagum
    gsap.to(contentRef.current, {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "50% top",
        scrub: true,
      },
    });
  }, []);

  return (
    <main className="">
      {/* SECTION 1: Fixed Banner */}
      <section
        ref={sectionRef}
        className="relative h-screen w-full overflow-hidden z-10"
      >
        <div
          ref={bgRef}
          className="absolute inset-0 w-full h-[120%] -top-[1%] bg-cover bg-center"
          style={{ backgroundImage: "url('/para.avif')" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div
          ref={contentRef}
          className="relative z-20 flex space-y-10 flex-col justify-start pt-10 h-full w-full lg:w-[1000px] px-6 md:px-20 text-white"
        >
          <h1 className="text-2xl md:text-4xl lg:text-7xl text-center lg:text-start font-semibold">
            The First Agentic Service Lifecycle Platform
          </h1>
          <p className="text-xl md:text-xl l text-center lg:text-start w-full tracking-tight lg:w-[600px] text-white/50 ">
            Aumne revolutionizes Service Lifecycle Management with Agentic
            systems, transforming legacy IVRs, chatbots, fragmented workflows,
            and siloed support into Agentic conversational services. Achieve{" "}
            <span className="text-white">5x faster modernization.</span>
          </p>

          <div className="text-center lg:text-start">
            <button className=" w-fit rounded-lg bg-red-500 px-8 py-2">
              Lets's ACT
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: Idhu Banner-a cover pannitu mela varum (Video-la irukura maari) */}
      <section className="relative z-30 min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <DataGrowthSection />
      </section>

      <section className="">
        <VelocityReliabilitySection />
      </section>
      <section className="">
        <StatisticsSection />
      </section>
      <section className="">
        <HorizontalScrollImage />
      </section>
    </main>
  );
}
