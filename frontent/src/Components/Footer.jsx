import React from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white/70 py-20 px-6 md:px-16 border-t border-white/5">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* LOGO & ADDRESS BLOCK */}
        <div className="space-y-8">
          {/* <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FF5A5A] rounded-sm flex items-center justify-center rotate-45">
              <div className="w-4 h-4 bg-white rounded-full -rotate-45" />
            </div>
            <span className="text-2xl font-bold tracking-tighter">
              VISTA.IO
            </span>
          </div> */}
          <div>
            <img src="/logo.png" alt="Logo" className="h-20" />
          </div>

          <div className=" space-y-2 text-sm md:text-md leading-relaxed">
            <p>123-456-7890</p>
            <p>Info@aumneai.com</p>
            <p>India</p>
            <p>Bangalore</p>
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="flex flex-col md:text-md   gap-3">
          <a href="#" className=" hover:text-white transition-colors">
            Solutions
          </a>
          <a href="#" className=" hover:text-white transition-colors">
            Vision
          </a>
          <a href="#" className=" hover:text-white transition-colors">
            Programs
          </a>
          <a href="#" className=" hover:text-white transition-colors">
            Blog
          </a>
          <div className="mt-4">
            <button className="bg-linear-to-r from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1] hover:to-[#5187b4] text-white px-8 py-3 rounded-md font-medium transition-all transform active:scale-95">
              Get Started
            </button>
          </div>
        </div>

        {/* NEWSLETTER FORM */}
        <div className="md:col-span-1 space-y-3">
          <h4 className=" md:text-md ">Subscribe to Our Newsletter</h4>
          <div className="space-y-4">
            <div>
              <label className="block  mb-2 md:text-md ">Email *</label>
              <input
                type="email"
                className="w-full bg-transparent border border-neutral-800 p-3 focus:outline-none focus:border-[#5a5757] transition-colors"
              />
            </div>

            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" className="mt-1 accent-[#766c6c]" />
              <span className="text-xs text-neutral-500 group-hover:text-gray-300 transition-colors">
                Yes, subscribe me to your newsletter. *
              </span>
            </label>

            <button className="w-full md:w-auto border text-neutral-500 border-gray-700 px-10 py-2 hover:bg-white hover:text-black transition-all">
              Submit
            </button>
          </div>
        </div>

        {/* SOCIAL LINKS & COPYRIGHT */}
        <div className="flex flex-col items-start md:items-end justify-between space-y-12 md:space-y-0">
          <div className="space-y-4">
            <p className=" md:text-md ">Follow Us On:</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="group relative p-2 rounded-full bg-neutral-300/30 overflow-hidden transition-all"
              >
                {/* Gradient Hover Layer */}
                <span
                  className="absolute inset-0 bg-linear-to-r from-[#036ffd] via-[#1e88e5] to-[#42a5f5] 
                   opacity-0 transition-opacity duration-300 ease-out 
                   group-hover:opacity-100"
                />

                {/* Icon */}
                <FaLinkedinIn
                  className="relative z-10 text-neutral-300 group-hover:text-white transition-colors"
                  size={18}
                />
              </a>

              <a
                href="#"
                className="group relative p-2 rounded-full bg-neutral-300/30 overflow-hidden transition-all"
              >
                {/* Gradient Hover Layer */}
                <span
                  className="absolute inset-0 bg-linear-to-r from-[#036ffd] via-[#1e88e5] to-[#42a5f5] 
                   opacity-0 transition-opacity duration-300 ease-out 
                   group-hover:opacity-100"
                />

                {/* Icon */}
                <FaFacebookF
                  className="relative z-10 text-neutral-300 group-hover:text-white transition-colors"
                  size={18}
                />
              </a>
              <a
                href="#"
                className="group relative p-2 rounded-full bg-neutral-300/30 overflow-hidden transition-all"
              >
                {/* Gradient Hover Layer */}
                <span
                  className="absolute inset-0 bg-linear-to-r from-[#036ffd] via-[#1e88e5] to-[#42a5f5] 
                   opacity-0 transition-opacity duration-300 ease-out 
                   group-hover:opacity-100"
                />

                {/* Icon */}
                <FaTwitter
                  className="relative z-10 text-neutral-300 group-hover:text-white transition-colors"
                  size={18}
                />
              </a>
            </div>
          </div>

          {/* <div className="text-xs text-gray-500 text-left md:text-right">
            <p>© 2035 by Vista.io.</p>
            <p>
              Powered and secured by{" "}
              <a href="#" className="underline">
                Wix
              </a>
            </p>
          </div> */}
        </div>
      </div>

      {/* FLOATING CHAT ICON (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-linear-to-r from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1]  p-4 rounded-xl shadow-lg hover:scale-110 transition-transform">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
