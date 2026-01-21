import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdLaptop } from "react-icons/io";
import { CiMobile4 } from "react-icons/ci";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { IoMdContact } from "react-icons/io";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  // Active link style function
  const activeStyle = ({ isActive }) =>
    isActive
      ? "text-[#0D7EB6] font-bold transition"
      : "hover:text-gray-400 transition";

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // 10px-ku mela scroll pannumbodu mattum effect work aagum (accidental scroll thadukka)
    if (latest > previous && latest > 150) {
      setHidden(true); // Downward scroll - Hide
    } else {
      setHidden(false); // Upward scroll - Show
    }
  });

  return (
    <header className="sticky top-0 z-50 w-full ">
      {/* ======================================================
          STEP 1: WIX PREVIEW TOP BAR (IMAGE MATCHED)
      ====================================================== */}
      {/* <div className="bg-white text-black h-14 px-6 flex items-center justify-between  border-b border-gray-200 text-sm"> */}
      {/* Left */}
      {/* <div className="flex items-center justify-center gap-6"> */}
      {/* WIX Logo */}
      {/* <div className="flex items-center">
            <img src="/logo.png" alt="" className="h-14" />
            <h1
              className="text-xl font-bold
  bg-linear-to-r
  from-[#036ffd] via-[#011f4f] to-[#b7d1e9]
  bg-clip-text text-transparent"
            >
              AumneAI
            </h1>
          </div> */}
      {/* </div> */}
      {/* <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <IoMdLaptop size={30} />
            <CiMobile4 size={30} />
          </div>
          <p className="hidden md:block text-[17px] text-gray-600">
            Click edit and create your own amazing website
          </p>

          <a href="#" className="underline text-gray-700 font-medium">
            Read More
          </a>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded-md font-medium hover:opacity-90 transition">
          Edit this site
        </button> */}
      {/* Center + Right */}
      {/* </div> */}

      {/* ======================================================
          STEP 2: MAIN VISTA.IO NAVBAR (UNCHANGED)
      ====================================================== */}
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }} // Custom cubic-bezier for extra smoothness        //className="sticky top-0 z-50 w-full"
        className="bg-[#0a0a0a] text-white px-16 py-5 flex items-center justify-between font-sans shadow-xl"
      >
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex items-center">
            <img src="/logo.png" alt="" className="h-16" />
            {/* <h1
              className="text-xl font-bold
  bg-linear-to-r
  from-[#036ffd] via-[#011f4f] to-[#b7d1e9]
  bg-clip-text text-transparent"
            >
              AumneAI
            </h1> */}
          </div>
        </NavLink>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10 text-[15px] font-normal">
          <NavLink to="/" className={activeStyle}>
            Home
          </NavLink>
          <NavLink to="/solutions" className={activeStyle}>
            Solutions
          </NavLink>
          <NavLink to="/benefits" className={activeStyle}>
            Benefits
          </NavLink>
          <NavLink to="/industry-trends" className={activeStyle}>
            Industry Trends
          </NavLink>
          <NavLink to="/roi-calculator" className={activeStyle}>
            ROI Calculator
          </NavLink>

          <NavLink to="/gst-partnership" className={activeStyle}>
            GSI Partnership
          </NavLink>

          {/* Login */}
          {/* <NavLink to="/login" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-linear-to-r from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1] rounded-full flex items-center justify-center group-hover:scale-110 transition">
              <span className="text-[12px]">
                <IoMdContact size={20} />
              </span>
            </div>
            <span className="text-[#0D7EB6]">Log In</span>
          </NavLink> */}

          {/* CTA */}
          <NavLink to="/get-started">
            <button className=" bg-linear-to-r from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1] px-6 py-2 rounded-md hover:bg-white  hover:to-[#5187b4]   transition duration-300">
              Get Started
            </button>
          </NavLink>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
