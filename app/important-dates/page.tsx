import type { Metadata } from "next";
import Link from "next/link";
import DatesTimeline from "@/components/DatesTimeline";
import CFPSection from "@/components/CFPSection";
import { importantDatesData } from "@/data/dates";

export const metadata: Metadata = {
  title: "Important Dates & Milestone Schedule | ic-ETITE'28",
  description:
    "Official schedule of paper submission deadlines, peer review acceptance notices, camera ready milestones, and symposium dates for ic-ETITE'28.",
};

import PageHeader from "@/components/PageHeader";

export default function ImportantDatesPage() {
  return (
    <div className="bg-white min-h-screen text-[#002147]">
      <PageHeader
        badge="Submission Milestones · IEEE Deadlines"
        title="Important Dates & Timeline"
        subtitle="Please adhere strictly to the official conference submission schedule. All deadlines are 23:59 IST (UTC +05:30)."
        breadcrumb="Important Dates"
        bgImage="/images/frame_1.jpg"
      />

      <DatesTimeline />

      {/* Formal Table View of Milestones */}
      <section className="py-16 bg-[#F7F8FA] border-b border-[#E4E7EC]">
        <div className="container-x max-w-4xl mx-auto">
          <div className="border border-[#CBD5E1] rounded-2xl overflow-hidden shadow-md bg-white">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#002147] text-white">
                <tr>
                  <th className="py-4.5 px-6 font-bold text-sm sm:text-base tracking-wide">Event Milestone</th>
                  <th className="py-4.5 px-6 font-bold text-sm sm:text-base tracking-wide">Scheduled Date</th>
                  <th className="py-4.5 px-6 font-bold text-sm sm:text-base tracking-wide">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-[#002147]">
                {importantDatesData.map((item) => (
                  <tr key={item.id} className="hover:bg-[#F8FAFC] transition-colors">
                    <td className="py-5 px-6">
                      <div className="text-base sm:text-lg font-bold text-[#002147]">{item.title}</div>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed max-w-md">
                        {item.description}
                      </p>
                    </td>
                    <td className="py-5 px-6 font-sans font-bold tabular-nums text-base sm:text-lg text-[#002147] whitespace-nowrap">
                      {item.date}
                    </td>
                    <td className="py-5 px-6 whitespace-nowrap">
                      {item.id === "paper-submission" ? (
                        <Link
                          href="/call-for-papers#submit"
                          className="text-sm font-bold text-[#0B6B4A] hover:underline inline-flex items-center gap-1.5"
                        >
                          Submit Now
                        </Link>
                      ) : (
                        <span className="text-sm font-medium text-slate-500">Scheduled</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CFPSection />
    </div>
  );
}
