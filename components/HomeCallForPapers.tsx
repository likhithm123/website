import Link from "next/link";
import { Check, ExternalLink, Download } from "lucide-react";

export default function HomeCallForPapers() {
  return (
    <section id="call-for-papers" className="border-b border-[#E4E7EC] bg-white scroll-mt-20">
      <div className="container-x py-20 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="md:col-span-5 space-y-6">
            <p className="text-[12.5px] tracking-wider uppercase text-[#4A5568] font-semibold">
              Call for Papers &amp; Manuscripts
            </p>
            <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] text-[#101B2E] leading-tight">
              Submit Your Original Research
            </h2>
            <p className="text-[15px] leading-relaxed text-[#101B2E]/80">
              Original and unpublished research manuscripts addressing emerging challenges, innovative technologies,
              and foundational paradigms in Information Technology and Engineering are invited from researchers worldwide.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/call-for-papers"
                className="btn-primary inline-flex items-center gap-1.5"
              >
                <span>Submit Your Paper</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Guidelines */}
          <div className="md:col-span-7">
            <div className="border border-[#E4E7EC] rounded-2xl p-7 md:p-9 bg-[#F7F8FA] shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[15px] font-bold text-[#101B2E]">Submission Guidelines</p>
                <span className="text-xs px-2.5 py-0.5 rounded bg-white border border-[#E4E7EC] text-[#0B6B4A] font-semibold">
                  IEEE Compliant
                </span>
              </div>

              <ul className="space-y-3.5 text-[14px] text-[#101B2E]/85">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0B6B4A] shrink-0" />
                  <span>All submissions undergo rigorous double-blind peer review and IEEE technical plagiarism scrutiny.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0B6B4A] shrink-0" />
                  <span>Manuscripts must adhere strictly to IEEE standard two-column conference formatting.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0B6B4A] shrink-0" />
                  <span>Manuscripts should not contain live embedded links, headers, or footers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0B6B4A] shrink-0" />
                  <span>Manuscripts should avoid scanned or low-resolution compressed images.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0B6B4A] shrink-0" />
                  <span>Email submissions will not be entertained; submissions must proceed through EasyChair.</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-[#E4E7EC] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[13.5px]">
                <div>
                  Conference Email:{" "}
                  <a
                    href="mailto:icetiteconference@vit.ac.in"
                    className="font-semibold text-[#1D5C82] hover:underline"
                  >
                    icetiteconference@vit.ac.in
                  </a>
                </div>
                <Link
                  href="/call-for-papers"
                  className="text-xs font-semibold text-[#0B6B4A] hover:underline shrink-0 inline-flex items-center gap-1"
                >
                  <span>Detailed Formatting Rules</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
