"use client";

import { useState } from "react";
import Link from "next/link";
import { Award, Globe, Building2, Cpu, Users } from "lucide-react";
import {
  internationalAdvisoryData,
  nationalAdvisoryData,
} from "@/data/advisory";

interface TextMember {
  name: string;
  affiliation: string;
}

interface CommitteeSection {
  title: string;
  members: TextMember[];
}

type TabType = "organizing" | "international" | "national" | "technical" | "student";

export default function CommitteesPage() {
  const [activeTab, setActiveTab] = useState<TabType>("organizing");

  // Organizing Committee: Left Column
  const organizingLeftSections: CommitteeSection[] = [
    {
      title: "Chief Patron",
      members: [
        {
          name: "Dr. G. Viswanathan",
          affiliation: "Chancellor, VIT",
        },
      ],
    },
    {
      title: "Patrons",
      members: [
        {
          name: "Mr. Sankar Viswanathan",
          affiliation: "Vice President, VIT",
        },
        {
          name: "Dr. Sekar Viswanathan",
          affiliation: "Vice President, VIT",
        },
        {
          name: "Dr. G.V. Selvam",
          affiliation: "Vice President, VIT",
        },
        {
          name: "Dr. Rambabu Kodali",
          affiliation: "Vice - Chancellor, VIT",
        },
        {
          name: "Dr. Partha Sharathi Mallick",
          affiliation: "Pro-Vice Chancellor, VIT, Vellore",
        },
        {
          name: "Dr. Jayabarathi T",
          affiliation: "Registrar, VIT",
        },
      ],
    },
    {
      title: "Organising Chair",
      members: [
        {
          name: "Dr. Sumathy S",
          affiliation: "Professor & Dean, SCORE, VIT, Vellore",
        },
      ],
    },
    {
      title: "Organising Co-chair",
      members: [
        {
          name: "Dr. Dhinesh Babu. L. D",
          affiliation: "Professor & Associate Dean, SCORE, VIT, Vellore",
        },
      ],
    },
    {
      title: "Conference Chair",
      members: [
        {
          name: "Dr. John Singh. K",
          affiliation: "Professor, SCORE, VIT, Vellore",
        },
      ],
    },
  ];

  // Organizing Committee: Right Column
  const organizingRightSections: CommitteeSection[] = [
    {
      title: "Organising Secretary",
      members: [
        {
          name: "Dr. Shynu P. G",
          affiliation: "Associate Professor, SCORE, VIT, Vellore",
        },
      ],
    },
    {
      title: "Publication Chair",
      members: [
        {
          name: "Dr. Vijayan R",
          affiliation: "Professor, SCORE, VIT, Vellore",
        },
      ],
    },
    {
      title: "Publication Co-chairs",
      members: [
        {
          name: "Dr. Meenatchi S",
          affiliation: "Associate Professor, SCORE, VIT, Vellore",
        },
        {
          name: "Dr. Brindha K",
          affiliation: "Associate Professor, SCORE, VIT, Vellore",
        },
        {
          name: "Dr. Malathy E",
          affiliation: "Assistant Professor, SCORE, VIT, Vellore",
        },
      ],
    },
    {
      title: "Finance Chair",
      members: [
        {
          name: "Dr. Gunasekaran G",
          affiliation: "Associate Professor, SCORE, VIT, Vellore",
        },
      ],
    },
    {
      title: "Finance Co-chair",
      members: [
        {
          name: "Dr. Prasanna. S",
          affiliation: "Associate Professor, SCORE, VIT, Vellore",
        },
      ],
    },
  ];

  // Operations and Management Committees
  const operationsCommittees: CommitteeSection[] = [
    {
      title: "Sponsorship Committee",
      members: [
        { name: "Dr. Srimathi. C", affiliation: "Associate Professor, SCORE, VIT, Vellore" },
        { name: "Dr. Sendhil Kumar. K. S", affiliation: "Associate Professor, SCORE, VIT, Vellore" },
        { name: "Dr. Selva Rani. B", affiliation: "Associate Professor, SCORE, VIT, Vellore" },
      ],
    },
    {
      title: "Publicity and Media Committee",
      members: [
        { name: "Dr. Chiranji Lal Chowdhary", affiliation: "Professor, SCORE, VIT, Vellore" },
        { name: "Dr. Radha. R", affiliation: "Associate Professor, SCORE, VIT, Vellore" },
        { name: "Dr. Ramya. G", affiliation: "Associate Professor, SCORE, VIT, Vellore" },
      ],
    },
    {
      title: "Registration Committee",
      members: [
        { name: "Dr. Jasmine. N", affiliation: "Associate Professor, SCORE, VIT, Vellore" },
        { name: "Dr. Umamaheswari. E", affiliation: "Associate Professor, SCORE, VIT, Vellore" },
        { name: "Dr. Sivagami. M", affiliation: "Associate Professor, SCORE, VIT, Vellore" },
      ],
    },
    {
      title: "Event Management Committee",
      members: [
        { name: "Dr. Srinivas Koppu", affiliation: "Professor, SCORE, VIT, Vellore" },
        { name: "Dr. Priya. M", affiliation: "Associate Professor, SCORE, VIT, Vellore" },
        { name: "Dr. Arivuselvan. K", affiliation: "Associate Professor, SCORE, VIT, Vellore" },
      ],
    },
  ];

  // Technical Committee
  const technicalChairs: CommitteeSection = {
    title: "Technical Programme Chairs",
    members: [
      { name: "Dr. Jeyanthi. N", affiliation: "Professor, SCORE, VIT, Vellore" },
      { name: "Dr. Parkavi. K", affiliation: "Associate Professor, SCORE, VIT, Vellore" },
      { name: "Dr. Saravanan. R", affiliation: "Associate Professor, SCORE, VIT, Vellore" },
    ],
  };

  const technicalPublication: CommitteeSection = {
    title: "Technical Review & Publication Committee",
    members: [
      { name: "Dr. Shola. U", affiliation: "Associate Professor, SCORE, VIT, Vellore" },
      { name: "Dr. Deepa. M", affiliation: "Associate Professor, SCORE, VIT, Vellore" },
      { name: "Dr. Govindarajan. M", affiliation: "Associate Professor, SCORE, VIT, Vellore" },
      { name: "Dr. Mythili. N", affiliation: "Assistant Professor, SCORE, VIT, Vellore" },
    ],
  };

  // Student Committee Members
  const studentLeads: TextMember[] = [
    { name: "Dr. John Singh K", affiliation: "Faculty Sponsor & Counselor, SCORE, VIT Vellore" },
    { name: "Likhith Medarametla", affiliation: "Lead Architect & Full Stack Lead, IEEE ITS Chapter, SCORE, VIT Vellore" },
    { name: "M.V.J.M Jaya Veera Maheshwar", affiliation: "Full Stack Developer, IEEE ITS Chapter, SCORE, VIT Vellore" },
    { name: "Judson Daniel", affiliation: "Frontend Developer, IEEE ITS Chapter, SCORE, VIT Vellore" },
    { name: "IEEE ITS Student Executive Board", affiliation: "Student Chapter Officers & Technical Associates, VIT Vellore" },
    { name: "Conference Student Volunteer Cohort", affiliation: "Session Hosts & Delegate Support Teams, SCORE, VIT Vellore" },
  ];

  // Split international advisory array into two balanced columns
  const intlHalf = Math.ceil(internationalAdvisoryData.length / 2);
  const intlCol1 = internationalAdvisoryData.slice(0, intlHalf);
  const intlCol2 = internationalAdvisoryData.slice(intlHalf);

  // Split national advisory array into two balanced columns
  const natHalf = Math.ceil(nationalAdvisoryData.length / 2);
  const natCol1 = nationalAdvisoryData.slice(0, natHalf);
  const natCol2 = nationalAdvisoryData.slice(natHalf);

  // Tab configurations matching Image 2
  const tabs = [
    { id: "organizing" as TabType, label: "Organizing Committee", icon: Award },
    { id: "international" as TabType, label: "International Advisory", icon: Globe },
    { id: "national" as TabType, label: "National Advisory", icon: Building2 },
    { id: "technical" as TabType, label: "Technical Committee", icon: Cpu },
    { id: "student" as TabType, label: "Student Committee", icon: Users },
  ];

  return (
    <main className="bg-white min-h-screen text-[#1A1A1A] py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SWITCHER PILL (Matching Image 2 Reference) */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1 sm:gap-1.5 p-1.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-full shadow-sm max-w-full overflow-x-auto no-scrollbar">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? "bg-[#002147] text-white shadow-md"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                  }`}
                  aria-pressed={isActive}
                >
                  <Icon
                    className={`w-4 h-4 shrink-0 transition-colors ${
                      isActive ? "text-[#FFB81C]" : "text-slate-400"
                    }`}
                  />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 1. TAB: ORGANIZING COMMITTEE */}
        {activeTab === "organizing" && (
          <div className="animate-in fade-in duration-200">
            {/* Main Title in Blue */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#004B87] tracking-tight mb-8 sm:mb-10">
              Organizing Committee
            </h1>

            {/* 2-Column Responsive Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-8 sm:gap-y-10">
              {/* Left Column */}
              <div className="space-y-8 sm:space-y-10">
                {organizingLeftSections.map((section) => (
                  <section key={section.title} className="space-y-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#004B87] tracking-tight">
                      {section.title}
                    </h2>
                    <div className="space-y-1.5 pt-1">
                      {section.members.map((member) => (
                        <div
                          key={member.name}
                          className="text-[15px] sm:text-[15.5px] leading-relaxed text-[#222]"
                        >
                          <span className="font-bold text-black">{member.name}</span>
                          {member.affiliation ? `, ${member.affiliation}` : ""}
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-8 sm:space-y-10">
                {organizingRightSections.map((section) => (
                  <section key={section.title} className="space-y-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#004B87] tracking-tight">
                      {section.title}
                    </h2>
                    <div className="space-y-1.5 pt-1">
                      {section.members.map((member) => (
                        <div
                          key={member.name}
                          className="text-[15px] sm:text-[15.5px] leading-relaxed text-[#222]"
                        >
                          <span className="font-bold text-black">{member.name}</span>
                          {member.affiliation ? `, ${member.affiliation}` : ""}
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>

            {/* Operations & Management Committees */}
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004B87] tracking-tight mb-8">
                Operations &amp; Management Committees
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
                {operationsCommittees.map((group) => (
                  <section key={group.title} className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#004B87] tracking-tight">
                      {group.title}
                    </h3>
                    <div className="space-y-1.5 pt-1">
                      {group.members.map((member) => (
                        <div
                          key={member.name}
                          className="text-[15px] sm:text-[15.5px] leading-relaxed text-[#222]"
                        >
                          <span className="font-bold text-black">{member.name}</span>
                          {member.affiliation ? `, ${member.affiliation}` : ""}
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. TAB: INTERNATIONAL ADVISORY */}
        {activeTab === "international" && (
          <div className="animate-in fade-in duration-200">
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#004B87] tracking-tight mb-8 sm:mb-10">
              International Advisory Board
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-4">
              <div className="space-y-3">
                {intlCol1.map((m) => (
                  <div key={m.name} className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#222]">
                    <span className="font-bold text-black">{m.name}</span>
                    {m.institution ? `, ${m.institution}` : ""}
                    {m.country ? `, ${m.country}` : ""}
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {intlCol2.map((m) => (
                  <div key={m.name} className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#222]">
                    <span className="font-bold text-black">{m.name}</span>
                    {m.institution ? `, ${m.institution}` : ""}
                    {m.country ? `, ${m.country}` : ""}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. TAB: NATIONAL ADVISORY */}
        {activeTab === "national" && (
          <div className="animate-in fade-in duration-200">
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#004B87] tracking-tight mb-8 sm:mb-10">
              National Advisory Board
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-4">
              <div className="space-y-3">
                {natCol1.map((m) => (
                  <div key={m.name} className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#222]">
                    <span className="font-bold text-black">{m.name}</span>
                    {m.institution ? `, ${m.institution}` : ""}
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {natCol2.map((m) => (
                  <div key={m.name} className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#222]">
                    <span className="font-bold text-black">{m.name}</span>
                    {m.institution ? `, ${m.institution}` : ""}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4. TAB: TECHNICAL COMMITTEE */}
        {activeTab === "technical" && (
          <div className="animate-in fade-in duration-200">
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#004B87] tracking-tight mb-8 sm:mb-10">
              Technical Committee &amp; Reviewers
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-[#004B87] tracking-tight">
                  {technicalChairs.title}
                </h2>
                <div className="space-y-2 pt-1">
                  {technicalChairs.members.map((m) => (
                    <div key={m.name} className="text-[15px] leading-relaxed text-[#222]">
                      <span className="font-bold text-black">{m.name}</span>
                      {`, ${m.affiliation}`}
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-[#004B87] tracking-tight">
                  {technicalPublication.title}
                </h2>
                <div className="space-y-2 pt-1">
                  {technicalPublication.members.map((m) => (
                    <div key={m.name} className="text-[15px] leading-relaxed text-[#222]">
                      <span className="font-bold text-black">{m.name}</span>
                      {`, ${m.affiliation}`}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        )}

        {/* 5. TAB: STUDENT COMMITTEE */}
        {activeTab === "student" && (
          <div className="animate-in fade-in duration-200">
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#004B87] tracking-tight mb-3">
              Student Committee &amp; IEEE ITS Chapter
            </h1>
            <p className="text-base text-slate-600 mb-8 sm:mb-10">
              Student leadership, engineering development team, and volunteer coordinators powering ic-ETITE&apos;28.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-8">
              <div className="space-y-3">
                {studentLeads.slice(0, 3).map((m) => (
                  <div key={m.name} className="text-[15px] leading-relaxed text-[#222]">
                    <span className="font-bold text-black">{m.name}</span>
                    {`, ${m.affiliation}`}
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {studentLeads.slice(3).map((m) => (
                  <div key={m.name} className="text-[15px] leading-relaxed text-[#222]">
                    <span className="font-bold text-black">{m.name}</span>
                    {`, ${m.affiliation}`}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="mt-14 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-semibold text-[#004B87] hover:underline inline-flex items-center gap-1"
          >
            ← Back to Conference Home
          </Link>
          <Link
            href="/team"
            className="text-sm font-semibold text-[#004B87] hover:underline inline-flex items-center gap-1"
          >
            View Web Development Team →
          </Link>
        </div>

      </div>
    </main>
  );
}
