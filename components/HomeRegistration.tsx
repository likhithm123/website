import Link from "next/link";
import { CreditCard, ExternalLink } from "lucide-react";

export default function HomeRegistration() {
  const fees = [
    { category: "Industry Professionals", inr: "Rs. 15,000", usd: "400$" },
    { category: "Faculty / Academicians", inr: "Rs. 14,000", usd: "350$" },
    { category: "Faculty / Academicians (IEEE Members)", inr: "Rs. 12,000", usd: "325$" },
    { category: "Research Scholars, UG and PG Students", inr: "Rs. 10,000", usd: "300$" },
    { category: "Research Scholars, UG and PG Students (IEEE Members)", inr: "Rs. 8,000", usd: "275$" },
    { category: "VIT (internal)", inr: "Rs. 10,000", usd: "—" },
    { category: "Co-Authors / Participants (non-authors)", inr: "Rs. 5,000", usd: "200$" },
  ];

  return (
    <section id="registration" className="border-b border-[#E4E7EC] bg-white scroll-mt-20">
      <div className="container-x py-20 md:py-24">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E4E7EC] bg-[#F7F8FA] text-[12px] font-semibold text-[#0B6B4A] mb-3">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Delegate &amp; Author Access</span>
          </div>
          <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] text-[#101B2E]">Registration Fees</h2>
          <p className="mt-3 text-[14px] text-[#4A5568]">
            Discounted pricing is available for IEEE members and registered students upon credential verification.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-[#E4E7EC] rounded-2xl shadow-sm mb-8">
          <table className="reg-table w-full text-left text-[14px] min-w-[640px]">
            <thead>
              <tr className="bg-[#F7F8FA] text-[12.5px] uppercase tracking-wider text-[#4A5568]">
                <th className="px-6 py-4 font-semibold border-b border-[#E4E7EC]">Category</th>
                <th className="px-6 py-4 font-semibold border-b border-[#E4E7EC]">Indian Authors &amp; Delegates</th>
                <th className="px-6 py-4 font-semibold border-b border-[#E4E7EC]">Foreign Authors &amp; Delegates</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E4E7EC]">
              {fees.map((f) => (
                <tr key={f.category} className="hover:bg-[#F7F8FA] transition-colors">
                  <td className="px-6 py-4 font-medium text-[#101B2E]">{f.category}</td>
                  <td className="px-6 py-4 font-bold text-[#002147]">{f.inr}</td>
                  <td className="px-6 py-4 font-bold text-[#004B87]">{f.usd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl border border-[#E4E7EC] bg-[#F7F8FA]">
          <p className="text-[13px] text-[#4A5568] text-center sm:text-left">
            At least one author per accepted paper must register at the standard author category to enable IEEE Xplore indexing.
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/registration" className="btn-outline text-xs">
              View Payment Instructions
            </Link>
            <Link href="/registration" className="btn-primary text-xs">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
