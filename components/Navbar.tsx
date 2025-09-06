"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const ACTIVE_BG = "#624b4b"; // mörk
const ACTIVE_FG = "#ebddd7"; // ljus

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hash, setHash] = useState<string>("");

  // Håll koll på hash (#cv, #projects) för aktiv länk
  useEffect(() => {
    const update = () => setHash(window.location.hash || "");
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  useEffect(() => {
    // Uppdatera hash när vi byter sida
    setHash(window.location.hash || "");
  }, [pathname]);

  // Klass för nav-item med aktiv bakgrund/text
  const navItemClass = (active: boolean) =>
    `px-3 py-1 rounded-md transition-colors ${
      active
        ? "font-semibold"
        : "hover:underline"
    }`;

  const navItemStyle = (active: boolean) =>
    active
      ? { backgroundColor: ACTIVE_BG, color: ACTIVE_FG }
      : { color: "#624b4b" };

  // Aktiv-logik
  const isProjectsActive = pathname === "/" && hash === "#projects";
  const isAboutActive = pathname === "/about" && hash !== "#cv";
  const isCVActive = pathname === "/about" && hash === "#cv";
  const isRecsActive = pathname === "/recommendations";

  // Scrolla “Projects” mjukt om vi redan är på startsidan
  const handleProjectClick = (e?: React.MouseEvent) => {
    if (pathname === "/") {
      e?.preventDefault();
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      // Synka hash manuellt för aktiv-stil
      history.replaceState(null, "", "/#projects");
      setHash("#projects");
    } else {
      // Navigera till startsidan + anchor
      window.location.href = "/#projects";
    }
    setIsMenuOpen(false);
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-20 shadow-md z-50"
      style={{ backgroundColor: "#ebddd7" }}
    >
      <nav className="relative flex items-center justify-between h-full max-w-7xl mx-auto px-6 font-heading">
        {/* Vänster – meny (desktop) */}
        <div className="hidden sm:flex gap-3 text-sm sm:text-base font-medium">
          <a
            href="/#projects"
            onClick={handleProjectClick}
            className={navItemClass(isProjectsActive)}
            style={navItemStyle(isProjectsActive)}
          >
            Projects
          </a>

          <Link
            href="/about"
            className={navItemClass(isAboutActive)}
            style={navItemStyle(isAboutActive)}
          >
            About me
          </Link>

          <Link
            href="/about#cv"
            className={navItemClass(isCVActive)}
            style={navItemStyle(isCVActive)}
          >
            CV
          </Link>

          <Link
            href="/recommendations"
            className={navItemClass(isRecsActive)}
            style={navItemStyle(isRecsActive)}
          >
            Recommendations
          </Link>
        </div>

        {/* Mobil: meny-ikon */}
        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-8 h-8 text-[#624b4b]" />
            ) : (
              <Menu className="w-8 h-8 text-[#624b4b] mt-[4px]" />
            )}
          </button>
        </div>

        {/* Mobil: dropdown */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-[#ebddd7] shadow-md sm:hidden flex flex-col items-center py-4 gap-2 text-base z-40">
            <a
              href="/#projects"
              onClick={handleProjectClick}
              className={navItemClass(isProjectsActive)}
              style={navItemStyle(isProjectsActive)}
            >
              Projects
            </a>

            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className={navItemClass(isAboutActive)}
              style={navItemStyle(isAboutActive)}
            >
              About me
            </Link>

            <Link
              href="/about#cv"
              onClick={() => setIsMenuOpen(false)}
              className={navItemClass(isCVActive)}
              style={navItemStyle(isCVActive)}
            >
              CV
            </Link>

            <Link
              href="/recommendations"
              onClick={() => setIsMenuOpen(false)}
              className={navItemClass(isRecsActive)}
              style={navItemStyle(isRecsActive)}
            >
              Recommendations
            </Link>
          </div>
        )}

        {/* Mitten – namn */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold"
            style={{ color: "#624b4b" }}
          >
            Louise Forsby
          </Link>
        </div>

        {/* Höger – mailikon */}
        <div className="w-16 flex justify-end">
          <a href="mailto:louiseforsby_@hotmail.com" className="hover:opacity-70">
            <Mail className="w-8 h-8 text-[#624b4b]" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
