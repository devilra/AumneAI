import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollImage() {
  const sectionRef = useRef(null);
  const imageWrapperRef = useRef(null);

  useEffect(() => {
    // Scroll pannum pothu image-ai horizontal-ah move panrom
    gsap.to(imageWrapperRef.current, {
      xPercent: -20, // Left side-la 30% varaikkum move aagum
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom", // Section screen ulla varum pothu start aagum
        end: "bottom top", // Section screen-ai vittu pogum pothu mudiyum
        scrub: 1, // Scroll-ku etra mathiri smooth-ah move aagum (Intha value thaan up/down logic-ai handle pannum)
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-5 mt-20  overflow-hidden flex items-center justify-center"
    >
      {/* Image Wrapper: 
          Itharku container-ai vida athiga width (w-[150%]) koduthurukaen, 
          appo thaan scroll panna idham irukum.
      */}
      <div
        ref={imageWrapperRef}
        className="relative w-full h-[400px] md:h-[300px] flex items-center justify-center pointer-events-none"
      >
        <img
          src="/para4.avif" // Unga image path
          alt="Abstract Wave"
          className="w-full h-full object-cover  scale-150 opacity-60"
        />
        {/* 🔥 Bottom Fade Overlay */}
      </div>

      {/* Optional: Central Text (If needed like other sections) */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        {/* Neenga ethavathu overlay text vaikkanum-na inga vaikalam */}
      </div>
    </section>
  );
}
