"use client";
import React from "react";
import { dmSerif, poppins } from "@/app/fonts";
import Link from "next/link";


const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#ebddd7] px-6 pt-36 pb-28 sm:pt-6 sm:pb-0 sm:min-h-screen flex justify-center items-center">
      <div className="max-w-4xl w-full text-left z-10">
        <h1
          className={`${dmSerif.className} text-4xl sm:text-6xl md:text-7xl`}
          style={{ color: "#624b4b" }}
        >
          Strategic marketer with hands-on UX/UI experience
        </h1>
        <p
          className={`${poppins.className} text-lg sm:text-xl mt-6`}
          style={{ color: "#624b4b" }}
        >
          I connect the dots between business goals, user experience and digital execution.
        </p>

        <Link href="/about" passHref>
  <button
    className="mt-10 px-6 py-3 rounded-lg text-white font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:bg-[#836060]"
    style={{ backgroundColor: "#9d8080" }}
  >
    Get to know me
  </button>
</Link>

      </div>

      {/* Vågen – desktop */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 hidden sm:block -mb-px">
        <svg
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[80px] block"
        >
          <path
            fill="#d7c3b9"
            d="M0,60 C300,120 600,0 900,60 C1200,120 1440,60 1440,60 L1440,150 L0,150 Z"
          />
        </svg>
      </div>

      {/* Vågen – mobil */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0 sm:hidden -mb-px">
        <svg
          viewBox="0 0 360 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[40px] block"
        >
          <path
            fill="#d7c3b9"
            d="M0,20 C60,40 120,0 180,20 C240,40 300,20 360,20 L360,60 L0,60 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
