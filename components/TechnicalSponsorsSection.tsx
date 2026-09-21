"use client";

import Image from "next/image";
import Link from "next/link";

export default function TechnicalSponsorsSection() {
  return (
    <section
      id="sponsors"
      className="border-b border-[#E2E8F0] bg-white py-14 md:py-20 scroll-mt-20 select-none"
      aria-label="Technical Sponsor and Organizing School"
    >
      <div className="container-x">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-10 border border-slate-100 shadow-xs">
          {/* TECHNICAL SPONSOR Header */}
          <div className="text-center mb-6">
            <h3 className="text-sm sm:text-base md:text-lg font-black tracking-widest text-[#001C3D] uppercase">
              TECHNICAL SPONSOR
            </h3>
          </div>

          {/* Kept Blank as requested */}
          <div className="flex justify-center items-center mb-12">
            <div className="h-16 w-72 rounded-2xl border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-xs font-medium tracking-wider uppercase">
              To Be Announced
            </div>
          </div>

          {/* ORGANIZING SCHOOL Header */}
          <div className="text-center mb-8">
            <h3 className="text-sm sm:text-base md:text-lg font-black tracking-widest text-[#001C3D] uppercase">
              ORGANIZING SCHOOL
            </h3>
          </div>

          {/* Supported By Logos: SCORE · VIT Vellore with VIT Round Logo */}
          <div className="flex justify-center items-center">
            <Link
              href="/about"
              className="group flex flex-col items-center p-6 rounded-2xl border border-transparent hover:border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-white"
              title="School of Computer Science Engineering & Information Systems, VIT Vellore"
            >
              {/* VIT Round Logo Container */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-slate-200 bg-white shadow-md p-2 group-hover:border-[#004B87] group-hover:shadow-lg transition-all flex items-center justify-center">
                <Image
                  src="/logos/vit-round-logo.svg"
                  alt="Vellore Institute of Technology Round Seal - SCORE"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>

              <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#002147] mt-3.5 text-center uppercase tracking-wider transition-colors">
                SCORE · VIT VELLORE
              </span>
              <span className="text-[11px] text-slate-500 text-center max-w-xs mt-1">
                School of Computer Science Engineering &amp; Information Systems
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
