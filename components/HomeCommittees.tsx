"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, Award, ChevronDown, ArrowRight, User } from "lucide-react";
import { organizingLeadership } from "@/data/committees";

// Portrait photo card component for Chief Patron and Patrons
function PatronPhotoCard({
  name,
  role,
  affiliation,
  image,
  portfolioUrl,
  isChief = false,
}: {
  name: string;
  role: string;
  affiliation?: string;
  image?: string;
  portfolioUrl?: string;
  isChief?: boolean;
}) {
  const initials = name
    .split(" ")
    .filter((w) => !w.startsWith("Dr.") && !w.startsWith("Mr.") && !w.startsWith("Prof."))
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={`w-full rounded-2xl border bg-white p-5 text-center transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between ${
        isChief
          ? "border-[#F5A623] ring-2 ring-[#F5A623]/20 md:scale-105"
          : "border-slate-200"
      }`}
    >
      <div>


        {/* Role Badge */}
        <div className="mb-2">
          <span
            className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider ${
              isChief
                ? "bg-[#FFF4DB] text-[#002147] border border-[#F5A623]"
                : "bg-slate-100 text-[#002147] border border-slate-200"
            }`}
          >
            {role}
          </span>
        </div>

        {/* Name & Affiliation */}
        <h3 className="font-bold text-base sm:text-lg text-[#002147] tracking-tight leading-snug mb-1">
          {name}
        </h3>
        {affiliation && (
          <p className="text-xs text-slate-600 leading-relaxed max-w-[220px] mx-auto">
            {affiliation}
          </p>
        )}
      </div>


    </div>
  );
}

export default function HomeCommittees() {
  const { chiefPatron, patrons } = organizingLeadership;

  return (
    <section id="committees" className="border-b border-[#E2E8F0] bg-[#F8FAFC] scroll-mt-20">
      <div className="container-x py-16 md:py-24">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4DB] border border-[#F5A623]/40 text-[12px] font-bold text-[#002147] mb-3">
            <Award className="w-3.5 h-3.5 text-[#F5A623]" />
            <span>Conference Leadership &amp; Patronage</span>
          </div>
          <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] text-[#002147] font-bold">
            Chief Patron &amp; Patrons
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Distinguished university leadership and visionary patrons guiding ic-ETITE&apos;28 at Vellore Institute of Technology.
          </p>
        </div>

        {/* 1. Chief Patron Featured Spotlight */}
        <div className="max-w-md mx-auto mb-12">
          <PatronPhotoCard
            name={chiefPatron.name}
            role={chiefPatron.role}
            affiliation={chiefPatron.affiliation}
            image={chiefPatron.image}
            portfolioUrl={chiefPatron.portfolioUrl}
            isChief={true}
          />
        </div>

        {/* 2. Patrons Grid (Row 1: 3, Row 2: 3, Row 3: 2 centered) */}
        <div className="mb-14 max-w-5xl mx-auto">
          <h3 className="text-center text-xs font-bold uppercase tracking-widest text-[#F5A623] mb-6">
            Patrons &amp; Institutional Leadership
          </h3>
          {/* First 6 patrons in 3-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {patrons.slice(0, 6).map((patron) => (
              <PatronPhotoCard
                key={patron.name}
                name={patron.name}
                role={patron.role}
                affiliation={patron.affiliation}
                image={patron.image}
                portfolioUrl={patron.portfolioUrl}
              />
            ))}
          </div>

          {/* Remaining 2 patrons centered in a 2-column grid */}
          {patrons.length > 6 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mt-6">
              {patrons.slice(6).map((patron) => (
                <PatronPhotoCard
                  key={patron.name}
                  name={patron.name}
                  role={patron.role}
                  affiliation={patron.affiliation}
                  image={patron.image}
                  portfolioUrl={patron.portfolioUrl}
                />
              ))}
            </div>
          )}
        </div>

        {/* View All Committees Link */}
        <div className="text-center">
          <Link
            href="/committees"
            className="btn-outline text-xs inline-flex items-center gap-2 py-2.5 px-5"
          >
            <span>View Executive &amp; Coordinating Committees</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
