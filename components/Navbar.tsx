"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleProjectClick = () => {
    if (pathname !== "/") {
      window.location.href = "/#projects";
    } else {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-20 shadow-md z-50"
      style={{ backgroundColor: "#ebddd7" }}
    >
      <nav className="relative flex items-center justify-between h-full max-w-7xl mx-auto px-6 font-heading">
        {/* Vänstersida – meny */}
        <div className="hidden sm:flex gap-10 text-sm sm:text-base font-medium text-[#624b4b]">
          <button onClick={handleProjectClick} className="hover:underline">Projects</button>
          <Link href="/about" className="hover:underline">About me</Link>
          <Link href="/about#cv" className="hover:underline">CV</Link>
        </div>

        {/* Mobilmeny-ikon */}
        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-8 h-8 text-[#624b4b]" />
            ) : (
              <Menu className="w-8 h-8 text-[#624b4b] mt-[4px]" />
            )}
          </button>
        </div>

        {/* Mobilmeny – dropdown */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-[#ebddd7] shadow-md sm:hidden flex flex-col items-center py-4 gap-4 text-[#624b4b] text-base z-40">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setTimeout(() => handleProjectClick(), 100);
              }}
              className="hover:underline"
            >
              Projects
            </button>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>About me</Link>
            <Link href="/about#cv" onClick={() => setIsMenuOpen(false)}>CV</Link>
          </div>
        )}

        {/* Mitten – namn */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold text-[#624b4b]"
          >
            Louise Forsby
          </Link>
        </div>

        {/* Höger – ikon */}
        <div className="w-16 flex justify-end">
          <Link href="mailto:louiseforsby_@hotmail.com" className="hover:opacity-70">
            <Mail className="w-8 h-8 text-[#624b4b]" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
