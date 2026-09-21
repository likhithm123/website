import Link from "next/link";
import { importantDatesData } from "@/data/dates";
import { Calendar, AlertCircle } from "lucide-react";

export default function DatesTimeline() {
  return (
    <section id="dates" className="py-16 sm:py-20 bg-white border-b border-[#E4E7EC]">
      <div className="container-x">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-[#E4E7EC]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0B6B4A]" />
              <span className="font-mono text-[11px] tracking-widest uppercase text-[#0B6B4A] font-semibold">
                Milestones &amp; Deadlines
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#101B2E] tracking-tight">
              Conference Milestone Schedule
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#4A5568] max-w-md leading-relaxed">
            All deadlines are strictly 23:59 Indian Standard Time (IST / UTC +05:30) unless formally extended by the
            technical program chairs.
          </p>
        </div>

        {/* Schedule Row List */}
        <div className="max-w-4xl mx-auto divide-y divide-[#E4E7EC] border border-[#E4E7EC] rounded-2xl overflow-hidden bg-white shadow-sm">
          {importantDatesData.map((item, index) => {
            const isConferenceDay = item.id === "conference-dates";
            const isSubmission = item.id === "paper-submission";

            return (
              <div
                key={item.id}
                className={`py-5 px-5 sm:px-8 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  isConferenceDay
                    ? "bg-emerald-50/50"
                    : isSubmission
                    ? "bg-amber-50/50"
                    : "hover:bg-slate-50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm font-bold text-[#002147]/70 pt-0.5 shrink-0 w-8">
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
                      {isSubmission && (
                        <span className="text-xs tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#004B87] text-white font-bold">
                          Submission Open
                        </span>
                      )}
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-lg leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right shrink-0 pl-12 sm:pl-0">
                  <span className="text-lg sm:text-xl font-extrabold font-sans tabular-nums text-[#002147] block">
                    {item.date}
                  </span>
                  {isSubmission ? (
                    <Link
                      href="/call-for-papers#submit"
                      className="text-xs sm:text-sm text-[#004B87] hover:underline font-bold inline-flex items-center gap-1"
                    >
                      <span>Submit Now</span>
                    </Link>
                  ) : (
                    <span className="font-mono text-xs font-semibold text-slate-500">
                      Scheduled Milestone
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-xs text-[#4A5568] max-w-xl mx-auto">
          Please adhere strictly to author submission guidelines. Manuscripts arriving after the deadline cannot be sent for review.
        </div>
      </div>
    </section>
  );
}
