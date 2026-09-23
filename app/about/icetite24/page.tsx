import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PhotoGridModal from "@/components/PhotoGridModal";
import { icetite24Photos } from "@/data/photos";
import { ArrowLeft, ExternalLink, Calendar, Users, Award, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "ic-ETITE'24 Official Photo Archive & Highlights | ic-ETITE'28",
  description:
    "Photo gallery and highlights of the Second IEEE International Conference on Emerging Trends in Information Technology and Engineering (ic-ETITE'24), VIT Vellore.",
};

export default function Icetite24ArchivePage() {
  return (
    <div className="bg-white min-h-screen text-[#002147]">
      <PageHeader
        badge="Second Edition Archive · 22–23 Feb 2024"
        title="ic-ETITE'24 Photo Gallery & Highlights"
        subtitle="Official moments, keynote plenary addresses, proceedings release, and track sessions from ic-ETITE'24 at Anna Auditorium, VIT Vellore."
        breadcrumb="ic-ETITE'24 Archive"
        bgImage="/images/frame_15.jpg"
      />

      <div className="container-x py-12 sm:py-16">
        {/* Navigation & Summary Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#004B87] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to About Conference</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/technext"
              className="btn-primary text-xs py-2.5 px-4 inline-flex items-center gap-2 font-bold"
            >
              <span>Explore TechNext Expo Photos</span>
              <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
            </Link>

            <Link
              href="/hackathon"
              className="btn-primary text-xs py-2.5 px-4 inline-flex items-center gap-2 font-bold"
            >
              <span>Explore BOLT 2.0 Photos</span>
              <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
            </Link>

            <a
              href="https://ieeexplore.ieee.org/xpl/conhome/10493200/proceeding"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2.5 px-4 inline-flex items-center gap-2 font-bold"
            >
              <span>IEEE Xplore Proceedings</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Milestone Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <BookOpen className="w-6 h-6 text-[#004B87] mx-auto mb-2" />
            <p className="text-2xl sm:text-3xl font-bold text-[#002147]">1,688</p>
            <p className="text-xs font-semibold text-slate-500 uppercase mt-1">Papers Submitted</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <Users className="w-6 h-6 text-[#004B87] mx-auto mb-2" />
            <p className="text-2xl sm:text-3xl font-bold text-[#002147]">1,088</p>
            <p className="text-xs font-semibold text-slate-500 uppercase mt-1">Participants</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <Calendar className="w-6 h-6 text-[#004B87] mx-auto mb-2" />
            <p className="text-2xl sm:text-3xl font-bold text-[#002147]">19 Countries</p>
            <p className="text-xs font-semibold text-slate-500 uppercase mt-1">Global Presence</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <Award className="w-6 h-6 text-[#004B87] mx-auto mb-2" />
            <p className="text-2xl sm:text-3xl font-bold text-[#002147]">32 Tracks</p>
            <p className="text-xs font-semibold text-slate-500 uppercase mt-1">Technical Sessions</p>
          </div>
        </div>

        {/* Photo Gallery with Lightbox */}
        <PhotoGridModal
          photos={icetite24Photos}
          title="ic-ETITE'24 Official Moments & Plenary Sessions"
          subtitle="Click on any photograph to view high resolution moments from the second edition of ic-ETITE."
        />
      </div>
    </div>
  );
}
