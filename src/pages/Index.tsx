
import HeroSection from "@/components/HeroSection";
import RegistrationSection from "@/components/RegistrationSection";
import SponsorsSection from "@/components/SponsorsSection";
import PrizesSection from "@/components/PrizesSection";
import LocationSection from "@/components/LocationSection";
import TracksSection from "@/components/TracksSection";
import ScheduleSection from "@/components/ScheduleSection";
import OrganizersSection from "@/components/OrganizersSection";
import AudienceSection from "@/components/AudienceSection";
import Footer from "@/components/Footer";
import { useCountdown } from "@/hooks/useCountdown";

const Index = () => {
  const targetDate = new Date("2025-07-26T09:00:00").getTime();
  const timeLeft = useCountdown(targetDate);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
      <HeroSection timeLeft={timeLeft} />
      <RegistrationSection />
      {/* <SponsorsSection /> */}
      <PrizesSection />
      <LocationSection />
      <TracksSection />
      <ScheduleSection />
      <OrganizersSection />
      <AudienceSection />
      <Footer />
    </div>
  );
};

export default Index;
