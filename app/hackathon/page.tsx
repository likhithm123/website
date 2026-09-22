import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Award,
  Calendar,
  Clock,
  Users,
  Trophy,
  ChevronRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function HackathonPage() {

  return (
    <div className="bg-white min-h-screen text-[#002147]">
      {/* Hero Banner for BOLT 3.0 */}
      <section className="relative bg-[#001C3D] text-white py-16 md:py-24 overflow-hidden border-b border-white/10">
        {/* Glow ambient background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(circle,rgba(204,255,0,0.15)_0%,transparent_70%)] blur-3xl" />
        </div>

        <div className="container-x relative z-10 text-center max-w-4xl mx-auto">
          {/* Centered BOLT 3.0 Logo (Pure Electric Lime Accents, NO White Background) */}
          <div className="flex flex-col items-center justify-center mb-7">
            <div className="inline-flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 py-3.5 sm:py-4 rounded-3xl bg-[#00142E]/90 border-2 border-[#CCFF00] shadow-[0_0_40px_rgba(204,255,0,0.3)] backdrop-blur-xl hover:scale-105 transition-all duration-300">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-[#CCFF00]/15 border border-[#CCFF00]/40 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-[#CCFF00] fill-[#CCFF00] animate-pulse" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl sm:text-4xl md:text-5xl font-black tracking-wider text-white">
                    BOLT <span className="text-[#CCFF00]">3.0</span>
                  </span>
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#001C3D] bg-[#CCFF00] px-2 py-0.5 rounded-md shadow-sm">
                    LIVE
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#CCFF00] tracking-widest uppercase font-bold mt-0.5">
                  National Flagship Hackathon · Co-located with ic-ETITE&apos;28
                </p>
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            BOLT 3.0 Hackathon
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Organized by the <strong>IEEE Information Theory Society (ITS) Student Chapter</strong> and the{" "}
            <strong>School of Computer Science Engineering &amp; Information Systems (SCORE)</strong> at VIT Vellore.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-white/90 mb-10">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15">
              <Trophy className="w-4 h-4 text-[#FFB81C]" />
              <span>₹1,00,000+ Prize Pool</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15">
              <Clock className="w-4 h-4 text-[#CCFF00]" />
              <span>24-Hour Offline Hackathon</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15">
              <Calendar className="w-4 h-4 text-[#FFB81C]" />
              <span>February 09–10, 2028</span>
            </span>
          </div>

          <a
            href="#register"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#CCFF00] hover:bg-[#b8e600] text-[#001C3D] font-extrabold text-sm transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(204,255,0,0.4)]"
          >
            <span>Registration Dates TBA · More Details Yet to Come</span>
            <ChevronRight className="w-4 h-4 stroke-[3]" />
          </a>
        </div>
      </section>

      {/* Overview & Tracks Grid */}
      <section className="container-x py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7 space-y-6">
            <div>
              <p className="text-xs uppercase font-bold tracking-wider text-[#DE6D1B]">About The Challenge</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#002147] mt-1">
                Innovate, Build &amp; Deploy at Scale
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#334E68]">
              BOLT 3.0 is the third iteration of VIT&apos;s renowned national hackathon series. In 2024, BOLT 2.0 witnessed
              over <strong>683 team registrations</strong> spanning 45+ premier institutions across India. For 2028, BOLT
              3.0 challenges developers, designers, and engineers to engineer deployable computational solutions across
              5 high-impact tracks.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl border border-slate-200 bg-[#F8FAFC]">
                <h3 className="text-base font-bold text-[#002147] flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#DE6D1B]" />
                  <span>1. AI &amp; Autonomous Agents</span>
                </h3>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                  Generative AI workflows, multi-agent frameworks, neuro-symbolic reasoning, and intelligent automation.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-[#F8FAFC]">
                <h3 className="text-base font-bold text-[#002147] flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#DE6D1B]" />
                  <span>2. Cyber Trust &amp; Web3</span>
                </h3>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                  Zero-knowledge proofs, decentralized identity, post-quantum cryptosystems, and threat detection.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-[#F8FAFC]">
                <h3 className="text-base font-bold text-[#002147] flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#DE6D1B]" />
                  <span>3. Smart Mobility &amp; IoT</span>
                </h3>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                  V2X communication, electric vehicle telematics, drone telemetry, and real-time edge processing.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-[#F8FAFC]">
                <h3 className="text-base font-bold text-[#002147] flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#DE6D1B]" />
                  <span>4. Healthcare &amp; Green Tech</span>
                </h3>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                  Biomedical diagnostics, assistive technology, carbon footprint intelligence, and smart grid systems.
                </p>
              </div>
            </div>

            {/* Prize Breakdown */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#002147] to-[#003366] text-white shadow-lg border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-[#FFB81C]" />
                <h3 className="text-xl font-bold">Awards &amp; Incentives</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                <div className="p-4 sm:p-3.5 rounded-xl bg-white/10 border border-[#CCFF00]/40 shadow-sm flex items-center justify-between sm:flex-col sm:justify-center gap-2">
                  <div className="text-left sm:text-center">
                    <p className="text-xs text-[#FFB81C] font-bold uppercase tracking-wider">1st Prize</p>
                    <p className="text-xs text-white/80 mt-0.5 sm:mt-1">Cash + Trophy</p>
                  </div>
                  <p className="text-2xl sm:text-2xl lg:text-3xl font-black text-[#CCFF00] tracking-tight">₹50,000</p>
                </div>
                <div className="p-4 sm:p-3.5 rounded-xl bg-white/10 border border-white/15 shadow-sm flex items-center justify-between sm:flex-col sm:justify-center gap-2">
                  <div className="text-left sm:text-center">
                    <p className="text-xs text-[#FFB81C] font-bold uppercase tracking-wider">2nd Prize</p>
                    <p className="text-xs text-white/80 mt-0.5 sm:mt-1">Cash + Trophy</p>
                  </div>
                  <p className="text-2xl sm:text-2xl lg:text-3xl font-black text-[#FFE57F] tracking-tight">₹30,000</p>
                </div>
                <div className="p-4 sm:p-3.5 rounded-xl bg-white/10 border border-white/15 shadow-sm flex items-center justify-between sm:flex-col sm:justify-center gap-2">
                  <div className="text-left sm:text-center">
                    <p className="text-xs text-[#FFB81C] font-bold uppercase tracking-wider">3rd Prize</p>
                    <p className="text-xs text-white/80 mt-0.5 sm:mt-1">Cash + Trophy</p>
                  </div>
                  <p className="text-2xl sm:text-2xl lg:text-3xl font-black text-[#FFE57F] tracking-tight">₹20,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Status Box (Dates TBA) */}
          <div id="register" className="md:col-span-5 scroll-mt-24">
            <div className="p-7 sm:p-9 rounded-3xl border-2 border-slate-200 bg-white shadow-xl space-y-6">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#001C3D] bg-[#CCFF00] px-3 py-1 rounded-full shadow-xs">
                  Registration Opening Soon
                </span>
                <span className="text-xs font-bold text-slate-500 font-mono">Status: TBA</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#002147] tracking-tight">
                  Register for BOLT 3.0
                </h3>
                <p className="text-sm font-semibold text-[#DE6D1B] mt-1">
                  Registration dates TBA — More details yet to come
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#00142E] text-white border border-[#CCFF00]/40 space-y-4 shadow-inner">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#CCFF00]/15 border border-[#CCFF00]/40 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-[#CCFF00]" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-[#CCFF00] tracking-wide">
                      Portal Launch Scheduled Soon
                    </p>
                    <p className="text-xs text-white/70 mt-0.5">
                      National Flagship 24h Offline Hackathon
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                  Official registration dates for BOLT 3.0 will be announced shortly along with the release of full problem statements, team guidelines, and judging rubrics.
                </p>

                <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-white/80">
                  <div className="flex items-center gap-2">
                    <span className="text-[#CCFF00]">✓</span>
                    <span>Teams of 2 to 4 members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#CCFF00]">✓</span>
                    <span>₹1,00,000+ total prize pool</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#CCFF00]">✓</span>
                    <span>Free registration supported by IEEE ITS VIT Chapter</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 text-center">
                <p className="text-xs text-slate-600">
                  Have questions before registration opens? Reach out to the secretariat at{" "}
                  <a
                    href="mailto:johnsingh.k@vit.ac.in"
                    className="text-[#004B87] font-semibold underline hover:text-[#002147]"
                  >
                    johnsingh.k@vit.ac.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
