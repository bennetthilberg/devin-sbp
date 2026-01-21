import HeroSection from "./components/HeroSection";
import MeetDevinSection from "./components/MeetDevinSection";
import PlanSection from "./components/PlanSection";
import PrioritiesSection from "./components/PrioritiesSection";
import VoteSection from "./components/VoteSection";

export default function Home() {
  return (
    <main className="w-full">
      <div className="heroBackground">
        <HeroSection />
        <MeetDevinSection />
      </div>
      <PrioritiesSection />
      <PlanSection />
      <VoteSection />
    </main>
  );
}
