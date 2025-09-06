"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar"; // din vanliga
import NavbarTransparent from "@/components/NavbarTransparent"; // about-varianten

export default function NavSwitcher() {
  const pathname = usePathname();
  // Visa transparent navbar på /about (du kan lägga till fler routes här vid behov)
  const useTransparent = pathname === "/about";
  return useTransparent ? <NavbarTransparent /> : <Navbar />;
}
