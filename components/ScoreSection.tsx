import { conferenceData } from "@/data/conference";
import { Building2, GraduationCap, Users2, BookOpen } from "lucide-react";

export default function ScoreSection() {
  const { scoreInfo } = conferenceData;

  return (
    <section className="py-16 sm:py-20 bg-[#f7f5f0] border-b border-[#e8e4dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#004B87]" />
          <span className="font-mono text-[11px] tracking-widest uppercase text-[#004B87]">
            Host Academic Department
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a1714] tracking-tight leading-[1.2]">
              School of Computer Science Engineering and Information Systems
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#004B87] mt-1 font-medium">
              (SCORE · School of Computer Science Engineering and Information Systems)
            </p>

            <p className="mt-4 text-sm sm:text-base text-[#6b6560] leading-relaxed">
              {scoreInfo.description}
            </p>

            {/* Research domains as typography tags */}
            <div className="mt-6">
              <p className="font-mono text-[10px] tracking-widest uppercase text-[#9c968f] mb-3">
                Key Research & Academic Domains:
              </p>
              <div className="flex flex-wrap gap-2">
                {scoreInfo.domains.map((dom) => (
                  <span
                    key={dom}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-white border border-[#e8e4dc] text-[#1a1714]"
                  >
                    {dom}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-8 rounded-xl border border-[#e8e4dc] shadow-subtle flex flex-col justify-between space-y-6">
            <h3 className="text-base font-bold text-[#1a1714] border-b border-[#e8e4dc] pb-3">
              Departmental Credentials & Scale
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#f7f5f0] border border-[#e8e4dc]">
                <div className="text-2xl sm:text-3xl font-bold text-[#1a1714]">
                  {scoreInfo.studentsCount}
                </div>
                <div className="text-xs text-[#6b6560] mt-1 flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-[#137547]" />
                  Enrolled Students
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#f7f5f0] border border-[#e8e4dc]">
                <div className="text-2xl sm:text-3xl font-bold text-[#1a1714]">
                  {scoreInfo.facultyCount}
                </div>
                <div className="text-xs text-[#6b6560] mt-1 flex items-center gap-1">
                  <Users2 className="w-3.5 h-3.5 text-[#004B87]" />
                  Dedicated Faculty
                </div>
              </div>
            </div>

            <div className="text-xs text-[#6b6560] space-y-2 pt-2 border-t border-[#e8e4dc] leading-relaxed">
              <p>
                Offers B.Tech (IT), M.Tech (Software Engineering), MCA, BCA, B.Sc (CS), M.Tech (by Research), and Ph.D. programs with state-of-the-art research laboratories and industry centers of excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
