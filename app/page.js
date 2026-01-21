import HeroSection from "./components/HeroSection";
import MeetDevinSection from "./components/MeetDevinSection";
import PrioritiesSection from "./components/PrioritiesSection";

export default function Home() {
  return (
    <main className="w-full">
      <div className="heroBackground">
        <HeroSection />
        <MeetDevinSection />
      </div>
      <PrioritiesSection />
    </main>
  );
}
