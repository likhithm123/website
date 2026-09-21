import { conferenceData } from "@/data/conference";
import { Compass, Network, Cpu, Users } from "lucide-react";

export default function ThemeSection() {
  const { theme } = conferenceData;
  const pillarIcons = [Compass, Cpu, Network, Users];

  return (
    <section className="py-16 sm:py-20 bg-[#f7f5f0] border-b border-[#e8e4dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#c4622d]" />
          <span className="font-mono text-[11px] tracking-widest uppercase text-[#c4622d]">
            Conference Vision
          </span>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-14 items-start mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1714] tracking-tight leading-tight mb-4">
              {theme.title}
            </h2>
            <p className="font-mono text-xs uppercase tracking-wider text-[#004B87] font-semibold">
              {theme.tagline}
            </p>
          </div>
          <p className="text-sm sm:text-base text-[#6b6560] leading-relaxed">
            {theme.description}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {theme.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length];
            return (
              <div
                key={pillar.title}
                className="bg-white p-6 rounded-xl border border-[#e8e4dc] shadow-subtle hover:border-[#004B87]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#f7f5f0] flex items-center justify-center text-[#1a1714] mb-4 border border-[#e8e4dc]">
                    <Icon className="w-4 h-4 text-[#004B87]" />
                  </div>
                  <h3 className="text-base font-bold text-[#1a1714] mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#6b6560] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#f0ede7] font-mono text-[10px] text-[#9c968f] uppercase tracking-wider">
                  Pillar 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

