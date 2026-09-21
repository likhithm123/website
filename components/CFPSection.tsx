import Link from "next/link";
import { conferenceData } from "@/data/conference";
import {
  FileText,
  AlertCircle,
  ExternalLink,
  Mail,
  ShieldCheck,
  CheckCircle,
  Download,
  AlertTriangle,
} from "lucide-react";

export default function CFPSection() {
  const { submission, contact } = conferenceData;

  return (
    <section id="cfp" className="py-16 sm:py-20 bg-white border-b border-[#E4E7EC]">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: CFP Overview & Submission CTA */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <span className="text-xs sm:text-sm font-bold text-[#002147] uppercase tracking-wider bg-[#FFF4DB] px-3.5 py-1.5 rounded-full border border-[#F5A623]/50 self-start">
              Submission Guidelines &amp; Portal
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#002147] tracking-tight leading-[1.15]">
              Call for Papers &amp; Manuscripts
            </h2>

            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-semibold">
              Original and unpublished research papers addressing emerging challenges, innovative technologies, and foundational paradigms in Information Technology and Engineering are invited from researchers worldwide.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              All submitted papers will undergo rigorous double-blind plagiarism checks and strict IEEE peer-review scrutiny. Accepted and presented papers will be submitted to the IEEE for inclusion in the <strong>IEEE Xplore® Digital Library</strong>.
            </p>

            <div className="mt-4 p-6 sm:p-7 rounded-2xl bg-[#FAFBFD] border-2 border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-sm">
              <div>
                <span className="text-xs font-mono tracking-widest uppercase text-slate-500 font-bold">
                  Official Submission Portal
                </span>
                <p className="text-xl font-bold text-[#002147] mt-0.5">
                  EasyChair Conference System
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  Track: <span className="font-mono font-bold text-[#004B87]">icetite28</span>
                </p>
              </div>

              <Link
                href="#tracks"
                className="btn-gold text-sm sm:text-base py-3 px-6 inline-flex items-center gap-2 shrink-0 font-bold shadow-md cursor-pointer"
              >
                <span>Submit Your Paper</span>
              </Link>
            </div>

            {/* Template downloads */}
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-700">
              <span className="font-bold text-[#002147]">IEEE Manuscript Templates:</span>
              <a
                href="https://www.ieee.org/conferences/publishing/templates.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-white hover:bg-slate-50 text-[#002147] font-semibold text-xs sm:text-sm border border-slate-200 transition-colors inline-flex items-center gap-1.5 shadow-2xs"
              >
                <Download className="w-4 h-4 text-[#004B87]" /> Word Template (.docx)
              </a>
              <a
                href="https://www.ieee.org/conferences/publishing/templates.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-white hover:bg-slate-50 text-[#002147] font-semibold text-xs sm:text-sm border border-slate-200 transition-colors inline-flex items-center gap-1.5 shadow-2xs"
              >
                <Download className="w-4 h-4 text-[#004B87]" /> LaTeX Package (.zip)
              </a>
            </div>
          </div>

          {/* Right Column: Strict Submission Requirements */}
          <div className="lg:col-span-6 bg-[#FAFBFD] p-6 sm:p-8 rounded-2xl border-2 border-slate-200 shadow-sm flex flex-col space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-[#002147] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#F5A623]" />
              <span>Submission Compliance Rules</span>
            </h3>

            <div className="space-y-3 text-sm sm:text-base text-slate-800">
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                <CheckCircle className="w-5 h-5 text-[#002147] shrink-0 mt-0.5" />
                <span>
                  <strong>Plagiarism Process:</strong> All submissions undergo strict anti-plagiarism screening using IEEE CrossCheck standard verification tools.
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                <AlertCircle className="w-5 h-5 text-[#004B87] shrink-0 mt-0.5" />
                <span>
                  <strong>No Hyperlinks &amp; Media:</strong> Manuscripts should not contain embedded live links or scanned low-resolution raster graphics.
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                <AlertCircle className="w-5 h-5 text-[#004B87] shrink-0 mt-0.5" />
                <span>
                  <strong>Clean Standard Margins:</strong> Manuscripts must adhere strictly to IEEE two-column layout without custom running headers, footers, or page numbers.
                </span>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-3 text-amber-950">
                <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  <strong>No Email Submissions:</strong> Submissions transmitted via email will strictly <em>NOT</em> be considered under any circumstances; all papers must proceed via EasyChair.
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E4E7EC] flex items-center justify-between text-xs text-[#4A5568]">
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-[#4A5568]" />
                <span>Editorial Queries:</span>
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="font-mono font-semibold text-[#0B6B4A] hover:underline"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
