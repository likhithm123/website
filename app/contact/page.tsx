import type { Metadata } from "next";
import { conferenceData } from "@/data/conference";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Conference Secretariat | ic-ETITE'28",
  description:
    "Official contact directory for ic-ETITE'28 at Vellore Institute of Technology, School of Computer Science Engineering & Information Systems (SCORE).",
};

import PageHeader from "@/components/PageHeader";

const leadershipContacts = [
  {
    role: "Conference Chair",
    name: "Dr. John Singh. K",
    designation: "Professor",
    email: "johnsingh.k@vit.ac.in",
  },
  {
    role: "Publication Chair",
    name: "Dr. Vijayan. R",
    designation: "Professor",
    email: "rvijayan@vit.ac.in",
  },
  {
    role: "Finance Chair",
    name: "Dr. Priya M",
    designation: "Associate Professor",
    email: "priya.m@vit.ac.in",
  },
];

export default function ContactPage() {
  const { contact, venue } = conferenceData;

  return (
    <div className="bg-white min-h-screen text-[#002147]">
      <PageHeader
        badge="Secretariat & Communications Desk"
        title="Contact Conference Secretariat"
        subtitle="For inquiries regarding paper submissions, track scopes, delegate registrations, and official visa facilitation letters, please reach out to our team."
        breadcrumb="Contact"
        bgImage="/images/frame_1.jpg"
      />

      <div className="container-x py-16 space-y-16">
        {/* Top: Inquiry Form & Primary Secretariat Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details & Official Roles */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#FAFBFD] p-7 sm:p-8 rounded-2xl border-2 border-slate-200 shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <Mail className="w-6 h-6 text-[#002147]" />
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#002147]">
                  Primary Conference Electronic Mail
                </h2>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider block font-bold">
                    Official Secretariat Inbox
                  </span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-lg sm:text-xl font-bold text-[#004B87] hover:underline transition-colors mt-0.5 block"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-700 mt-4 leading-relaxed font-normal">
                All paper submission queries, registration confirmations, and technical program concerns are addressed via
                this central portal.
              </p>
            </div>

            {/* Academic Department & Secretariat Details */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl border-2 border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-serif font-bold text-[#002147] flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#004B87]" />
                <span>Conference Secretariat &amp; Organizing School</span>
              </h3>

              <div className="space-y-3 text-sm sm:text-base">
                <div className="p-4 rounded-xl bg-[#FAFBFD] border border-slate-200">
                  <span className="text-xs font-bold text-[#004B87] uppercase tracking-wider block">
                    Organizing Department
                  </span>
                  <p className="font-serif font-bold text-[#002147] text-base sm:text-lg mt-1">{contact.organizer}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAFBFD] border border-slate-200">
                  <span className="text-xs font-bold text-[#004B87] uppercase tracking-wider block">
                    Institution
                  </span>
                  <p className="font-serif font-bold text-[#002147] text-base sm:text-lg mt-1">{contact.institution}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAFBFD] border border-slate-200">
                  <span className="text-xs font-bold text-[#004B87] uppercase tracking-wider block">
                    Technical Sponsor
                  </span>
                  <p className="font-serif font-bold text-[#002147] text-base sm:text-lg mt-1">IEEE</p>
                </div>
              </div>
            </div>

            {/* Campus Address Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FAFBFD] border-2 border-slate-200 text-sm sm:text-base text-slate-700 space-y-2">
              <h3 className="font-serif font-bold text-[#002147] text-base sm:text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#002147]" />
                <span>Host Department Address</span>
              </h3>
              <p className="leading-relaxed text-slate-700 font-normal">
                {venue.fullAddress}
              </p>
            </div>
          </div>

          {/* Formal Secretariat Inquiry Form */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-10 rounded-2xl border-2 border-slate-200 shadow-md">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002147] mb-2">
              Transmit Inquiry to Secretariat
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
              Complete this formal correspondence form. You will receive an official response at your institutional email
              within 2 business days.
            </p>

            <ContactForm />
          </div>
        </div>

        {/* Bottom: Key Leadership Committee Contacts Table */}
        <section className="bg-white rounded-3xl border-2 border-slate-200 shadow-sm overflow-hidden p-6 sm:p-8 md:p-10">
          <div className="max-w-2xl mb-8">
            <span className="text-xs sm:text-sm font-bold text-[#002147] uppercase tracking-wider bg-[#FFF4DB] px-3.5 py-1.5 rounded-full border border-[#F5A623]/50 inline-block mb-3">
              Official Conference Chairs
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147]">
              Key Committee Contacts
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Reach out directly to the respective conference leadership chairs for academic, publication, and financial queries.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border-2 border-slate-200 shadow-xs">
            <table className="w-full text-left text-sm sm:text-base border-collapse">
              <thead>
                <tr className="bg-[#002147] text-white">
                  <th scope="col" className="py-4 px-6 font-bold">Role</th>
                  <th scope="col" className="py-4 px-6 font-bold">Name</th>
                  <th scope="col" className="py-4 px-6 font-bold">Designation</th>
                  <th scope="col" className="py-4 px-6 font-bold">Email</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-900">
                {leadershipContacts.map((c, idx) => (
                  <tr
                    key={c.role}
                    className={`hover:bg-[#FFFDF7] transition-colors ${
                      idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"
                    }`}
                  >
                    <td className="py-4 px-6 font-bold text-[#002147] whitespace-nowrap">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#002147]/5 border border-[#002147]/15 text-xs font-bold text-[#002147]">
                        {c.role}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-bold text-[#002147] whitespace-nowrap">
                      {c.name}
                    </td>
                    <td className="py-4 px-6 text-slate-700 font-medium whitespace-nowrap">
                      {c.designation}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <a
                        href={`mailto:${c.email}`}
                        className="font-medium text-sm sm:text-base text-[#004B87] hover:underline inline-flex items-center gap-1.5"
                      >
                        <Mail className="w-4 h-4 text-[#004B87]" />
                        <span>{c.email}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
