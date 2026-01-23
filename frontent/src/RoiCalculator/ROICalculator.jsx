import { useEffect, useRef } from "react";

const ROICalculator = () => {
  const textRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textRef.current.classList.remove(
            "opacity-0",
            "translate-x-20"
          );
          boxRef.current.classList.remove(
            "opacity-0",
            "-translate-x-20"
          );
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(textRef.current);
    observer.observe(boxRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="roi-calculator"
      className="relative overflow-hidden bg-gradient-to-r from-[#02060d] via-[#071827] via-[#0b2a3d] to-[#0e3b4e] py-15 px-4 text-center"
    >
      {/* TEXT */}
      <div
        ref={textRef}
        className="mx-auto mb-16 max-w-4xl transform opacity-0 translate-x-20 transition-all duration-1000 ease-out"
      >
        <h1 className="mb-6 text-5xl font-bold text-[#0D7EB6]">
          ROI Calculator
        </h1>
        <p className="text-lg leading-relaxed text-white">
          Calculate your potential savings and transformation benefits with our
          Agentic platform. Please describe your estimation of your legacy
          transformation project or a new customer service flow.
        </p>
      </div>

      {/* BOX */}
      <div
  ref={boxRef}
  className=" mx-auto max-w-4xl transform opacity-0 -translate-x-20 rounded-2xl  bg-[#163A5A] p-10 transition-all duration-1000 ease-out hover:-translate-y-1 hover:shadow-glow"
    >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="text-left">
            <label className="mb-2 block text-sm text-[#9fb6d1]">
              Time Period (months)
            </label>
            <input
              type="number"
              defaultValue="12"
              className="w-full rounded-lg bg-[#0b2440] px-4 py-3 text-white outline-none"
            />
          </div>

          <div className="text-left">
            <label className="mb-2 block text-sm text-[#9fb6d1]">
              Budget ($)
            </label>
            <input
              type="number"
              defaultValue="12000"
              className="w-full rounded-lg bg-[#0b2440] px-4 py-3 text-white outline-none"
            />
          </div>

          <div className="text-left">
            <label className="mb-2 block text-sm text-[#9fb6d1]">
              People Involved
            </label>
            <input
              type="number"
              defaultValue="2"
              className="w-full rounded-lg bg-[#0b2440] px-4 py-3 text-white outline-none"
            />
          </div>
        </div>

        <button className="mt-8 rounded-xl bg-[#19b6ff] px-10 py-4 font-semibold text-black transition-all duration-300 hover:bg-[#0ea5e9]">
          Calculate ROI
        </button>
      </div>
    </section>
  );
};

export default ROICalculator;
