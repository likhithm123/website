import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PhotoGridModal from "@/components/PhotoGridModal";
import { icetite20DrivePhotos } from "@/data/photos";
import { ArrowLeft, ExternalLink, Calendar, Users, Award, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "ic-ETITE'20 Official Photo Archive & Highlights | ic-ETITE'28",
  description:
    "Photo gallery and proceedings archive of the First IEEE International Conference on Emerging Trends in Information Technology and Engineering (ic-ETITE'20), VIT Vellore.",
};

export default function Icetite20ArchivePage() {
  return (
    <div className="bg-white min-h-screen text-[#002147]">
      <PageHeader
        badge="Inaugural Edition Archive · 24–25 Feb 2020"
        title="ic-ETITE'20 Photo Gallery & Archive"
        subtitle="Official high-resolution photo collection from the First IEEE International Conference on Emerging Trends in Information Technology and Engineering at VIT Vellore."
        breadcrumb="ic-ETITE'20 Archive"
        bgImage="/images/frame_10.jpg"
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


            <a
              href="https://ieeexplore.ieee.org/xpl/conhome/9070069/proceeding"
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
            <Calendar className="w-6 h-6 text-[#004B87] mx-auto mb-2" />
            <p className="text-2xl sm:text-3xl font-bold text-[#002147]">24–25 Feb</p>
            <p className="text-xs font-semibold text-slate-500 uppercase mt-1">2020 Conference</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <BookOpen className="w-6 h-6 text-[#004B87] mx-auto mb-2" />
            <p className="text-2xl sm:text-3xl font-bold text-[#002147]">21</p>
            <p className="text-xs font-semibold text-slate-500 uppercase mt-1">Technical Sessions</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <Users className="w-6 h-6 text-[#004B87] mx-auto mb-2" />
            <p className="text-2xl sm:text-3xl font-bold text-[#002147]">17</p>
            <p className="text-xs font-semibold text-slate-500 uppercase mt-1">Keynote Sessions</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <Award className="w-6 h-6 text-[#004B87] mx-auto mb-2" />
            <p className="text-2xl sm:text-3xl font-bold text-[#002147]">BOLT 1.0</p>
            <p className="text-xs font-semibold text-slate-500 uppercase mt-1">500+ Hackers</p>
          </div>
        </div>

        {/* Photo Gallery with Lightbox */}
        <PhotoGridModal
          photos={icetite20DrivePhotos}
          title="Inauguration & Session Archive Photos"
          subtitle="Click on any photograph to view in high resolution with complete session description."
        />
      </div>
    </div>
  );
}
