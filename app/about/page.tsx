import NavbarTransparent from "@/components/NavbarTransparent";
import AboutHero from "./components/AboutHero";
import AboutIntroSection from "./components/AboutIntroSection";
import CVsection from "./components/CVsection";

export default function AboutPage() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 z-10">
        <NavbarTransparent />
      </div>

      <main>
        <AboutHero />
        <AboutIntroSection />
        <CVsection />
      </main>
    </div>
  );
}
