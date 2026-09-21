"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { conferenceTracksData, ResearchTrack } from "@/data/tracks";
import {
  Search,
  Database,
  Radio,
  Cpu,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  BookOpen,
} from "lucide-react";

const trackThemeConfig: Record<
  string,
  {
    icon: typeof Database;
    accentBg: string;
    accentBorder: string;
    accentText: string;
    badgeBg: string;
    badgeText: string;
    gradient: string;
  }
> = {
  it: {
    icon: Database,
    accentBg: "bg-[#002147]/5",
    accentBorder: "border-[#002147]",
    accentText: "text-[#002147]",
    badgeBg: "bg-[#002147]/10",
    badgeText: "text-[#002147]",
    gradient: "from-[#002147] to-[#0D2E5C]",
  },
  comm: {
    icon: Radio,
    accentBg: "bg-[#004B87]/5",
    accentBorder: "border-[#004B87]",
    accentText: "text-[#004B87]",
    badgeBg: "bg-[#004B87]/10",
    badgeText: "text-[#004B87]",
    gradient: "from-[#004B87] to-[#0075A2]",
  },
  comp: {
    icon: Cpu,
    accentBg: "bg-[#085037]/5",
    accentBorder: "border-[#085037]",
    accentText: "text-[#085037]",
    badgeBg: "bg-[#085037]/10",
    badgeText: "text-[#085037]",
    gradient: "from-[#085037] to-[#0B6B4A]",
  },
  elec: {
    icon: Zap,
    accentBg: "bg-[#D98200]/5",
    accentBorder: "border-[#F5A623]",
    accentText: "text-[#D98200]",
    badgeBg: "bg-[#FFF4DB]",
    badgeText: "text-[#995C00]",
    gradient: "from-[#101B2E] to-[#1D5C82]",
  },
};

export default function TracksSection({ isPreview = false }: { isPreview?: boolean }) {
  const [activeTrackId, setActiveTrackId] = useState<string>("it");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"focused" | "all">("focused");

  const filteredTracks = useMemo(() => {
    if (!searchQuery.trim()) return conferenceTracksData;
    const q = searchQuery.toLowerCase();
    return conferenceTracksData
      .map((track) => {
        const matchesTrack =
          track.title.toLowerCase().includes(q) ||
          track.description.toLowerCase().includes(q) ||
          track.number.toLowerCase().includes(q);
        const matchedTopics = track.topics.filter((topic) => topic.toLowerCase().includes(q));
        if (matchesTrack || matchedTopics.length > 0) {
          return {
            ...track,
            topics: matchesTrack ? track.topics : matchedTopics,
          };
        }
        return null;
      })
      .filter(Boolean) as ResearchTrack[];
  }, [searchQuery]);

  const activeTrack = useMemo(() => {
    return (
      filteredTracks.find((t) => t.id === activeTrackId) ||
      filteredTracks[0] ||
      conferenceTracksData[0]
    );
  }, [filteredTracks, activeTrackId]);

  const totalTopicsCount = useMemo(() => {
    return conferenceTracksData.reduce((acc, t) => acc + t.topics.length, 0);
  }, []);

  const handleScrollToSubmit = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById("submit");
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#submit");
    }
  };

  return (
    <section id="tracks" className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-[#E2E8F0] scroll-mt-24">
      <div className="container-x">
        {/* Section Header Controls */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#002147]/5 border border-[#002147]/15 text-xs font-bold text-[#002147] uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-[#F5A623]" />
            <span>4 Pillars · {totalTopicsCount}+ Indicative Research Specializations</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#002147] mb-4">
            Technical Research Tracks
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
            Authors are invited to submit original, high-impact research papers aligned with any of
            the 4 core tracks below. All accepted papers will be submitted for inclusion into{" "}
            <strong>IEEE Xplore®</strong>.
          </p>

          {/* Search Filter Bar */}
          <div className="relative max-w-xl mx-auto mt-8">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics (e.g., Quantum, 5G, VLSI, Cloud, Robotics)..."
              className="w-full pl-12 pr-20 py-3.5 rounded-2xl border-2 border-slate-200 bg-white text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#002147] shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 hover:text-[#002147] px-2 py-1 rounded bg-slate-100"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Track Selection Cards (Executive Badges) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {conferenceTracksData.map((track) => {
            const theme = trackThemeConfig[track.id] || trackThemeConfig.it;
            const Icon = theme.icon;
            const isActive = activeTrack?.id === track.id;

            return (
              <button
                key={track.id}
                onClick={() => {
                  setActiveTrackId(track.id);
                  setViewMode("focused");
                }}
                className={`relative rounded-2xl p-5 sm:p-6 text-left transition-all duration-300 border-2 flex flex-col justify-between overflow-hidden group shadow-sm hover:shadow-md ${
                  isActive && viewMode === "focused"
                    ? "bg-white border-[#002147] ring-4 ring-[#002147]/10 -translate-y-1"
                    : "bg-white border-slate-200 hover:border-slate-400"
                }`}
              >
                {/* Top Accent Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 transition-opacity ${
                    isActive && viewMode === "focused" ? "bg-[#F5A623] opacity-100" : "opacity-0 group-hover:opacity-60 bg-slate-300"
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider font-mono ${
                        isActive ? "bg-[#002147] text-white" : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {track.number}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isActive ? "bg-[#FFF4DB] text-[#002147]" : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#002147] leading-snug mb-1">
                    {track.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    {track.topics.length} Research Topics
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className={isActive ? "text-[#002147] font-bold" : "text-slate-500"}>
                    {isActive ? "Active View" : "Click to Explore"}
                  </span>
                  <span className={`text-sm ${isActive ? "text-[#F5A623] font-bold" : "text-slate-400"}`}>
                    →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* View Toggle Bar (Focused Track vs All Tracks) */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("focused")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                viewMode === "focused"
                  ? "bg-[#002147] text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              Focused Track View
            </button>
            <button
              onClick={() => setViewMode("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                viewMode === "all"
                  ? "bg-[#002147] text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              All 4 Tracks Grid
            </button>
          </div>
        </div>

        {/* 1. FOCUSED VIEW (Redesigned Executive Showcase) */}
        {viewMode === "focused" && activeTrack && (
          <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden">
            {/* Track Banner Header */}
            <div className="bg-gradient-to-r from-[#002147] via-[#001733] to-[#002147] p-6 sm:p-10 text-white relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold font-mono uppercase tracking-widest mb-3 border border-white/15">
                    <span>{activeTrack.number}</span>
                    <span>·</span>
                    <span className="text-[#F5A623]">{activeTrack.shortCode}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
                    {activeTrack.title}
                  </h3>

                  <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed font-normal">
                    {activeTrack.description}
                  </p>
                </div>

                <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3">
                  <Link
                    href="/call-for-papers#submit"
                    onClick={handleScrollToSubmit}
                    className="btn-gold py-3 px-6 text-sm font-bold inline-flex items-center justify-center gap-2 text-center"
                  >
                    <span>Submit to this Track</span>
                  </Link>
                  <Link
                    href="/call-for-papers"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-xs sm:text-sm font-semibold text-white border border-white/20 transition-colors text-center"
                  >
                    <span>Submission Guidelines</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Topics Section */}
            <div className="p-6 sm:p-10 bg-[#FAFBFD]">
              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#002147]" />
                  <h4 className="text-base sm:text-lg font-bold text-[#002147]">
                    Indicative Research Topics &amp; Domains
                  </h4>
                  <span className="ml-2 px-2.5 py-0.5 rounded-full bg-[#FFF4DB] text-[#002147] text-xs font-bold border border-[#F5A623]/40">
                    {activeTrack.topics.length} topics
                  </span>
                </div>
                <span className="text-xs text-slate-500 hidden sm:inline">
                  Topics are not restricted to listed keywords
                </span>
              </div>

              {/* Topics Grid with Large, Readable Typography */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                {activeTrack.topics.map((topic, i) => (
                  <div
                    key={topic}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-[#002147] hover:shadow-md transition-all flex items-start gap-3 group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#002147] group-hover:text-[#F5A623] shrink-0 mt-0.5 transition-colors" />
                    <span className="text-sm sm:text-base font-semibold text-slate-800 group-hover:text-[#002147] leading-snug transition-colors">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. ALL TRACKS VIEW */}
        {viewMode === "all" && (
          <div className="space-y-12">
            {filteredTracks.map((track) => (
              <div
                key={track.id}
                className="bg-white rounded-3xl border-2 border-slate-200 shadow-md p-6 sm:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
                  <div>
                    <span className="text-xs font-mono uppercase font-bold text-[#004B87] tracking-wider">
                      {track.number} · {track.shortCode}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] mt-0.5">
                      {track.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                      {track.description}
                    </p>
                  </div>
                  <Link
                    href="/call-for-papers#submit"
                    onClick={handleScrollToSubmit}
                    className="btn-gold text-xs py-2.5 px-4 inline-flex items-center gap-1.5 shrink-0 self-start sm:self-center font-bold"
                  >
                    <span>Submit</span>
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {track.topics.map((topic) => (
                    <div
                      key={topic}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-[#002147] transition-all flex items-start gap-2.5 text-sm sm:text-base font-medium text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#002147] shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {isPreview && (
          <div className="mt-12 text-center">
            <Link
              href="/tracks"
              className="btn-primary inline-flex items-center gap-2 py-3 px-6 text-sm font-bold"
            >
              <span>Explore All 4 Research Tracks in Detail</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
