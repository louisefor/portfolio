"use client";
import Link from "next/link";
import { Mail, Phone, Linkedin } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#ebddd7] text-[#624b4b] pt-24 sm:pt-32 pb-46 sm:pb-24 px-6 font-heading">
      {/* Vågen uppåt */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 hidden sm:block -mt-px">
        <svg
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[80px] block"
        >
          <path
            fill="#9d8080"
            d="M0,60 C300,120 600,0 900,60 C1200,120 1440,60 1440,60 L1440,0 L0,0 Z"
          />
        </svg>
      </div>
      <div className="absolute top-0 left-0 w-full overflow-hidden z-0 sm:hidden -mt-px">
        <svg
          viewBox="0 0 360 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[40px] block"
        >
          <path
            fill="#917474"
            d="M0,20 C60,40 120,0 180,20 C240,40 300,20 360,20 L360,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* Mobil – centrerat innehåll */}
      <div className="relative z-10 sm:hidden flex flex-col mb-32 items-center text-center gap-4">
        <h2 className="text-xl font-semibold">Contact me</h2>

        <Link href="mailto:louiseforsby_@hotmail.com" className="flex items-center gap-2 hover:underline">
          <Mail className="w-5 h-5" />
          <span>louiseforsby_@hotmail.com</span>
        </Link>

        <Link href="tel:0723756146" className="flex items-center gap-2 hover:underline">
          <Phone className="w-5 h-5" />
          <span>072 375 61 46</span>
        </Link>

        <Link
          href="https://www.linkedin.com/in/louiseforsby/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 mt-2"
        >
          <Linkedin className="w-8 h-8" />
        </Link>
      </div>

      {/* Desktop – vänster kontakt, höger LinkedIn */}
      <div className="relative z-10 hidden sm:flex max-w-7xl mx-auto w-full justify-between items-center px-6 text-left">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
          <h2 className="text-xl mb-1 font-semibold">Contact me:</h2>

          <a href="mailto:louiseforsby_@hotmail.com" className="flex items-center gap-2 hover:underline">
  <Mail className="w-5 h-5" />
  <span>louiseforsby_@hotmail.com</span>
</a>


          <Link href="tel:0723756146" className="flex items-center gap-2 hover:underline">
            <Phone className="w-5 h-5" />
            <span>072 375 61 46</span>
          </Link>
        </div>

        <Link
          href="https://www.linkedin.com/in/louiseforsby/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70"
        >
          <Linkedin className="w-8 h-8" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
