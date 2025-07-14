"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { dmSerif, poppins } from "@/app/fonts";

export default function AboutPage() {
  const [bgPositionClass, setBgPositionClass] = useState("sm:object-[center_48%] object-[center_80%]");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setBgPositionClass("object-[center_80%]");
      } else {
        setBgPositionClass("object-[center_48%]");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      <main>
        <section className="relative h-[55vh] sm:h-[120vh] flex justify-center px-6 sm:items-center items-center pt-7 sm:pt-16 overflow-hidden">
          {/* Optimerad bild istället för backgroundImage */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/skidbild.jpg"
              alt="Skidåkning"
              fill
              priority
              sizes="100vw"
              className={`object-cover ${bgPositionClass}`}
            />
          </div>

          {/* Mobil overlay */}
          <div className="absolute inset-0 bg-black/30 z-0" />

          <div className="max-w-4xl w-full text-left z-10">
            <h1 className={`${dmSerif.className} text-4xl sm:text-6xl md:text-7xl`}>
              <span className="text-[#ebddd7]">A Bit About Me</span>
            </h1>

            <p className={`${poppins.className} text-base sm:text-xl mt-2 sm:mt-6 leading-snug sm:leading-normal`}>
              <span className="text-[#ebddd7] sm:hidden">
                First things first: If I’m not shaping marketing strategies or campaigns, I’m probably dreaming of powder snow in the Alps.
              </span>
              <span className="hidden sm:inline text-[#ebddd7]">
                First things first: If I’m not shaping marketing strategies or campaigns,<br />
                I’m probably dreaming of powder snow in the Alps.
              </span>
            </p>
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
                fill="#ebddd7"
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
                fill="#ebddd7"
                d="M0,20 C60,40 120,0 180,20 C240,40 300,20 360,20 L360,60 L0,60 Z"
              />
            </svg>
          </div>
        </section>
      </main>
    </div>
  );
}
