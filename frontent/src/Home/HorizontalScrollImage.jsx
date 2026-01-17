import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollVideo() {
  const sectionRef = useRef(null);
  const videoWrapperRef = useRef(null);

  useEffect(() => {
    // Scroll pannum pothu video wrapper-ai horizontal-ah move panrom
    gsap.to(videoWrapperRef.current, {
      xPercent: -15, // Konjam horizontal movement scroll kaga
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[400px] md:h-[600px] mt-5  overflow-hidden flex items-center justify-center bg-black"
    >
      {/* 1. Video Background Wrapper */}
      <div
        ref={videoWrapperRef}
        className="absolute inset-0 w-[120%] h-full pointer-events-none"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70"
        >
          {/* Replace with your video file path */}
          <source src="/video/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 2. Black Overlay: Video mela text clear-ah theriya ithu help pannum */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/40 z-10 pointer-events-none"></div>

      {/* 3. Central Content (Optional) */}
      {/* <div className="relative z-20 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tighter">
          MODERN INNOVATION
        </h2>
        <p className="text-gray-300 mt-4 max-w-lg">
          Experience the seamless flow of technology and design through our
          background visual.
        </p>
      </div> */}
    </section>
  );
}
