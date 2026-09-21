"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-center">
        <CheckCircle2 className="w-12 h-12 text-[#002147] mx-auto mb-4" />
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#002147]">
          Inquiry Transmitted Successfully
        </h3>
        <p className="text-sm sm:text-base text-slate-700 mt-2 max-w-md mx-auto leading-relaxed">
          Your message has been logged with the ic-ETITE&apos;28 conference secretariat at SCORE, VIT Vellore.
          An official reply will be routed to your email address within 2 business days.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-bold text-[#002147] hover:underline"
        >
          Send another inquiry →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-sm sm:text-base">
      <div>
        <label className="block font-bold text-[#002147] text-sm sm:text-base mb-1.5">
          Full Name (with Honorific)
        </label>
        <input
          type="text"
          required
          placeholder="e.g., Prof. Sarah Jenkins / Dr. Ramesh Kumar"
          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-900 text-sm sm:text-base focus:outline-none focus:bg-white focus:border-[#002147] transition-all"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-bold text-[#002147] text-sm sm:text-base mb-1.5">
            Institutional Email Address
          </label>
          <input
            type="email"
            required
            placeholder="name@university.edu"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-900 text-sm sm:text-base focus:outline-none focus:bg-white focus:border-[#002147] transition-all"
          />
        </div>
        <div>
          <label className="block font-bold text-[#002147] text-sm sm:text-base mb-1.5">
            Institution / Organization
          </label>
          <input
            type="text"
            required
            placeholder="e.g., University / Corporate R&D Lab"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-900 text-sm sm:text-base focus:outline-none focus:bg-white focus:border-[#002147] transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block font-bold text-[#002147] text-sm sm:text-base mb-1.5">
          Inquiry Subject
        </label>
        <select
          aria-label="Inquiry Subject"
          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-900 text-sm sm:text-base focus:outline-none focus:bg-white focus:border-[#002147] transition-all"
        >
          <option>Call for Papers &amp; Track Suitability</option>
          <option>Registration Fees &amp; Payment Verification</option>
          <option>Visa Facilitation Letter Request</option>
          <option>Technical Sponsorship &amp; Exhibition</option>
          <option>Keynote &amp; Special Sessions</option>
          <option>Other Secretariat Queries</option>
        </select>
      </div>

      <div>
        <label className="block font-bold text-[#002147] text-sm sm:text-base mb-1.5">
          Message / Submission Details
        </label>
        <textarea
          rows={4}
          required
          placeholder="Provide clear details regarding your inquiry, paper title/ID if already submitted..."
          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-900 text-sm sm:text-base focus:outline-none focus:bg-white focus:border-[#002147] transition-all"
        />
      </div>

      <button
        type="submit"
        className="btn-primary w-full py-3.5 px-6 rounded-xl text-sm sm:text-base font-bold flex items-center justify-center gap-2"
      >
        <span>Transmit Inquiry to Secretariat</span>
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}
