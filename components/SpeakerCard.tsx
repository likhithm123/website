import { Speaker } from "@/data/speakers";
import { Building2, Globe, Sparkles } from "lucide-react";

export default function SpeakerCard({ speaker }: { speaker: Speaker; index?: number }) {
  return (
    <div className="group bg-white rounded-2xl p-6 border border-[#E4E7EC] hover:border-[#004B87] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Badges: Edition & Country */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-[#002147] bg-[#FFF4DB] px-3 py-0.5 rounded-full border border-[#F5A623]/60">
            {speaker.edition}
          </span>
          <span className="font-mono text-[11px] tracking-wider uppercase bg-slate-100 text-[#002147] px-2.5 py-0.5 rounded-md border border-slate-200 font-semibold">
            {speaker.country}
          </span>
        </div>

        {/* Speaker Name */}
        <h3 className="text-lg sm:text-xl font-bold text-[#002147] leading-snug group-hover:text-[#004B87] transition-colors">
          {speaker.name}
        </h3>

        {/* Designation */}
        <p className="text-sm text-slate-600 leading-relaxed mt-2 font-normal">
          {speaker.designation}
        </p>

        {/* Institution */}
        <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-start gap-2 text-sm text-slate-700">
          <Building2 className="w-4 h-4 text-[#004B87] shrink-0 mt-0.5" />
          <span className="font-semibold text-[#002147]">
            {speaker.institution}
          </span>
        </div>
      </div>

      {/* Keynote Topic / Domain */}
      {speaker.domain && (
        <div className="mt-4 pt-3 border-t border-slate-100">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-[13px] text-slate-800 font-medium italic leading-snug">
            <span className="not-italic text-[10px] uppercase font-bold text-[#004B87] block mb-1">
              Keynote Address / Domain
            </span>
            &ldquo;{speaker.domain}&rdquo;
          </div>
        </div>
      )}
    </div>
  );
}
