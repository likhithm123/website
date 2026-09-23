import type { Metadata } from "next";
import DatesTimeline from "@/components/DatesTimeline";
import { importantDatesData } from "@/data/dates";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Important Dates & Milestone Schedule | ic-ETITE'28",
  description:
    "Official schedule and milestone dates for ic-ETITE'28 at Vellore Institute of Technology (VIT), Vellore.",
};

export default function ImportantDatesPage() {
  return (
    <div className="bg-white min-h-screen text-[#002147]">
      <PageHeader
        badge="Official Milestone Schedule"
        title="Important Dates & Timeline"
        subtitle="Official conference dates and milestone schedule for ic-ETITE'28. All deadlines are 23:59 IST (UTC +05:30)."
        breadcrumb="Important Dates"
        bgImage="/images/frame_.webp"
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
                  <th className="py-4.5 px-6 font-bold text-sm sm:text-base tracking-wide text-right">Scheduled Date</th>
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
                    <td className="py-5 px-6 font-bold tabular-nums text-base sm:text-lg text-[#002147] whitespace-nowrap text-right">
                      {item.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
