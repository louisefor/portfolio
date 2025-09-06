// app/about/page.tsx
import AboutHero from "./components/AboutHero";
import AboutIntroSection from "./components/AboutIntroSection";
import CVsection from "./components/CVsection";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutIntroSection />
      <CVsection />
    </main>
  );
}
