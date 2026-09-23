import { importantDatesData } from "@/data/dates";
import { Calendar } from "lucide-react";

export default function DatesTimeline() {
  return (
    <section id="dates" className="py-16 sm:py-20 bg-white border-b border-[#E4E7EC]">
      <div className="container-x">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-[#E4E7EC]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0B6B4A]" />
              <span className="text-[11px] tracking-widest uppercase text-[#0B6B4A] font-bold">
                Milestones &amp; Schedule
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101B2E] tracking-tight">
              Conference Milestone Schedule
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#4A5568] max-w-md leading-relaxed">
            All deadlines are strictly 23:59 Indian Standard Time (IST / UTC +05:30) unless formally extended by the
            organizing committee.
          </p>
        </div>

        {/* Schedule Row List */}
        <div className="max-w-4xl mx-auto divide-y divide-[#E4E7EC] border border-[#E4E7EC] rounded-2xl overflow-hidden bg-white shadow-sm">
          {importantDatesData.map((item, index) => {
            const isConferenceDay = item.id === "conference-dates";

            return (
              <div
                key={item.id}
                className={`py-5 px-5 sm:px-8 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  isConferenceDay ? "bg-emerald-50/50" : "hover:bg-slate-50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-sm font-bold text-[#002147]/70 pt-0.5 shrink-0 w-8">
                    0{index + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-base sm:text-lg font-bold text-[#002147]">
                        {item.title}
                      </h3>
                      {isConferenceDay && (
                        <span className="text-xs tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#002147] text-[#F5A623] font-bold">
                          Conference Days
                        </span>
                      )}
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-lg leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right shrink-0 pl-12 sm:pl-0">
                  <span className="text-lg sm:text-xl font-extrabold tabular-nums text-[#002147] block">
                    {item.date}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {isConferenceDay ? "Event Dates" : "Milestone"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-xs text-[#4A5568] max-w-xl mx-auto">
          All milestone dates and times are strictly observed according to Indian Standard Time (IST / UTC +05:30).
        </div>
      </div>
    </section>
  );
}
