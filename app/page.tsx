import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FocusSection from "@/components/FocusSection";
import ProjectsSection from "@/components/ProjectsSection"; // <-- Lägg till denna rad

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FocusSection />
      <ProjectsSection /> {/* <-- Lägg in den här */}
    </main>
  );
}
