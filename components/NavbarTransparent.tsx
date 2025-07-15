"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, X } from "lucide-react";
import React, { useState } from "react";

const NavbarTransparent: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 h-20">
      {/* Blur-bakgrund */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#ebddd7]/60 to-transparent backdrop-blur-sm" />

      <nav className="relative flex items-center justify-between h-full max-w-7xl mx-auto px-6 font-heading">
        {/* Vänstermeny – desktop */}
        <div className="hidden sm:flex gap-10 text-sm sm:text-base font-medium text-[#ebddd7]">
          <Link href="/#projects" className="hover:underline">Projects</Link>
          <button onClick={() => scrollTo("about")} className="hover:underline">About me</button>
          <button onClick={() => scrollTo("cv")} className="hover:underline">CV</button>
        </div>

        {/* Mobilmeny-ikon */}
        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-8 h-8 text-[#ebddd7]" />
            ) : (
              <Menu className="w-8 h-8 text-[#ebddd7] mt-[4px]" />
            )}
          </button>
        </div>

        {/* Mobilmeny – dropdown */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-[#ebddd7] shadow-md sm:hidden flex flex-col items-center py-4 gap-4 text-[#624b4b] text-base z-40">
            <Link href="/#projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <button onClick={() => { scrollTo("about"); setIsMenuOpen(false); }} className="hover:underline">About me</button>
            <button onClick={() => { scrollTo("cv"); setIsMenuOpen(false); }} className="hover:underline">CV</button>
          </div>
        )}

        {/* Namn */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold text-[#ebddd7]"
          >
            Louise Forsby
          </Link>
        </div>

        {/* Mailikon */}
         {/* Höger – ikon */}
<div className="w-16 flex justify-end">
  <a href="mailto:louiseforsby_@hotmail.com" className="hover:opacity-70">
    <Mail className="w-8 h-8 text-[#ebddd7]" />
  </a>
</div>
      </nav>
    </div>
  );
};

export default NavbarTransparent;
