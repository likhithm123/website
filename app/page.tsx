import Hero from "@/components/Hero";
import AboutAndThemesSection from "@/components/AboutAndThemesSection";
import TechnicalSponsorsSection from "@/components/TechnicalSponsorsSection";
import HomeCallForPapers from "@/components/HomeCallForPapers";
import HomeImportantDates from "@/components/HomeImportantDates";
import HomeKeynoteSpeakers from "@/components/HomeKeynoteSpeakers";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero with Video Background, Countdown Bar & Credential Strips */}
      <Hero />

      {/* 2. About IC-ETITE, Theme, About VIT, About SCORE, About IEEE ITS (Old-School Photo Frames & Hyperlinks) */}
      <AboutAndThemesSection />

      {/* 3. Technical Sponsorship (IEEE) & Organizing Chapter (IEEE ITS) */}
      <TechnicalSponsorsSection />

      {/* 4. Call for Papers & Guidelines */}
      <HomeCallForPapers />

      {/* 5. Important Dates Milestone Timeline */}
      <HomeImportantDates />

      {/* 6. Keynote Speakers with Guest Pictures */}
      <HomeKeynoteSpeakers />
    </div>
  );
}
