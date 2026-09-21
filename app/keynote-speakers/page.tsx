import type { Metadata } from "next";
import SpeakerCard from "@/components/SpeakerCard";
import { speakersData } from "@/data/speakers";
import { Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Keynote Speakers Directory | ic-ETITE'28",
  description:
    "Eminent global researchers, keynote luminaries, and plenary chairs of the IEEE ic-ETITE conference series.",
};

import PageHeader from "@/components/PageHeader";

export default function KeynoteSpeakersPage() {
  const keynotes = speakersData.filter((s) => s.type === "Keynote Speaker");
  const panelSpeakers = speakersData.filter((s) => s.type === "Panel Speaker");

  return (
    <div className="bg-white min-h-screen text-[#002147]">
      <PageHeader
        badge="Distinguished Luminaries & Scientists"
        title="Keynote Speakers & Plenary Chairs"
        subtitle="Leading international researchers, IEEE Fellows, and corporate research directors who shape the intellectual trajectory of the ic-ETITE conference series."
        breadcrumb="Keynote Speakers"
        bgImage="/images/frame_15.jpg"
      />

      <div className="container-x py-16">
        {/* Notice on ic-ETITE'28 Upcoming Lineup */}
        <div className="mb-12 p-6 rounded-2xl bg-[#F7F8FA] border border-[#E4E7EC] flex items-start gap-4">
          <Info className="w-5 h-5 text-[#0B6B4A] shrink-0 mt-0.5" />
          <div className="text-[13.5px] text-[#101B2E]/80 leading-relaxed">
            <strong className="font-semibold text-[#101B2E]">ic-ETITE’28 Keynote Announcements:</strong> The technical
            program committee is currently confirming the plenary keynote addresses for the February 2028 edition with
            international IEEE Fellows and distinguished research leaders. Below is the verified directory of distinguished
            keynote and panel luminaries across the conference series.
          </div>
        </div>

        {/* Keynote Speakers Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0B6B4A]" />
            <h2 className="font-serif text-2xl font-bold text-[#101B2E]">
              Keynote Luminaries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keynotes.map((speaker, idx) => (
              <SpeakerCard key={speaker.id} speaker={speaker} index={idx} />
            ))}
          </div>
        </div>

        {/* Panel Speakers Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1D5C82]" />
            <h2 className="font-serif text-2xl font-bold text-[#101B2E]">
              Panel &amp; Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {panelSpeakers.map((speaker, idx) => (
              <SpeakerCard key={speaker.id} speaker={speaker} index={idx + 20} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
