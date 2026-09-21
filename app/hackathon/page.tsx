"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Award,
  Calendar,
  Clock,
  Users,
  Trophy,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Send,
  Sparkles,
} from "lucide-react";

export default function HackathonPage() {
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({
    teamName: "",
    leaderName: "",
    leaderEmail: "",
    leaderPhone: "",
    college: "",
    track: "AI & Autonomous Agents",
    teamSize: "3",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

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
            <span>Register Your Team Now</span>
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

          {/* Registration Form Box */}
          <div id="register" className="md:col-span-5 scroll-mt-24">
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-[#F8FAFC] shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00] animate-ping" />
                <span className="text-xs font-bold text-[#DE6D1B] uppercase tracking-wider">Registration Form</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#002147] mb-1">Register for BOLT 3.0</h3>
              <p className="text-sm text-slate-600 mb-6">
                Teams of 2 to 4 members. Free registration supported by IEEE ITS Chapter.
              </p>

              {registered ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-900">Registration Received!</h4>
                  <p className="text-sm text-emerald-800 leading-relaxed">
                    Thank you, <strong>{formData.leaderName}</strong>! Your team <strong>&quot;{formData.teamName}&quot;</strong> has
                    been registered for BOLT 3.0. Confirmation has been sent to <strong>{formData.leaderEmail}</strong>.
                  </p>
                  <button
                    onClick={() => setRegistered(false)}
                    className="text-sm font-bold text-emerald-700 underline mt-2"
                  >
                    Register another team
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-sm font-medium">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1 text-sm">Team Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Quantum Pioneers"
                      value={formData.teamName}
                      onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002147] bg-white text-slate-900 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1 text-sm">Team Leader Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.leaderName}
                      onChange={(e) => setFormData({ ...formData, leaderName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002147] bg-white text-slate-900 text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1 text-sm">Email ID *</label>
                      <input
                        type="email"
                        required
                        placeholder="leader@college.edu"
                        value={formData.leaderEmail}
                        onChange={(e) => setFormData({ ...formData, leaderEmail: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002147] bg-white text-slate-900 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1 text-sm">Mobile / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.leaderPhone}
                        onChange={(e) => setFormData({ ...formData, leaderPhone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002147] bg-white text-slate-900 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1 text-sm">College / University Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vellore Institute of Technology"
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002147] bg-white text-slate-900 text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1 text-sm">Preferred Track</label>
                      <select
                        value={formData.track}
                        onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002147] bg-white text-slate-900 text-sm"
                      >
                        <option>AI &amp; Autonomous Agents</option>
                        <option>Cyber Trust &amp; Web3</option>
                        <option>Smart Mobility &amp; IoT</option>
                        <option>Healthcare &amp; Green Tech</option>
                        <option>Open Innovation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-1 text-sm">Team Size</label>
                      <select
                        value={formData.teamSize}
                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002147] bg-white text-slate-900 text-sm"
                      >
                        <option value="2">2 Members</option>
                        <option value="3">3 Members</option>
                        <option value="4">4 Members</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#002147] hover:bg-[#003366] text-white font-bold text-sm sm:text-base transition-colors flex items-center justify-center gap-2 shadow-md mt-3"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Hackathon Application</span>
                  </button>

                  <p className="text-xs text-slate-500 text-center pt-1">
                    Shortlisted teams will be invited to the 24h Offline Hackathon at Silver Jubilee Tower (SJT), VIT Vellore.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
