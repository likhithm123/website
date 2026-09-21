import Link from "next/link";
import { MapPin, Navigation, Mail, Phone, Plane, Train, Hotel } from "lucide-react";

export default function HomeVenueContact() {
  return (
    <>
      {/* Venue */}
      <section id="venue" className="border-b border-[#E4E7EC] bg-white scroll-mt-20">
        <div className="container-x py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5 space-y-4">
              <p className="text-[12.5px] tracking-wider uppercase text-[#4A5568] font-semibold">Location &amp; Travel</p>
              <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] text-[#101B2E]">Conference Venue</h2>
              <p className="text-[15px] leading-relaxed text-[#101B2E]/80">
                School of Computer Science Engineering &amp; Information Systems (SCORE)<br />
                Vellore Institute of Technology<br />
                Vellore, Tamil Nadu, India — 632014
              </p>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Vellore+Institute+of+Technology+Vellore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-xs inline-flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-7 grid sm:grid-cols-2 gap-5">
              <div className="bg-[#F7F8FA] border border-[#E4E7EC] rounded-2xl p-6">
                <div className="w-9 h-9 rounded-lg bg-white border border-[#E4E7EC] grid place-items-center text-[#1D5C82] mb-3">
                  <Plane className="w-4 h-4" />
                </div>
                <h4 className="text-[14px] font-bold text-[#101B2E]">Airport Connectivity</h4>
                <p className="text-[12.5px] text-[#4A5568] mt-1.5 leading-relaxed">
                  Chennai International Airport (MAA) is 130 km away (~2.5 hrs by highway). Bengaluru Airport (BLR) is
                  200 km away (~3.5 hrs).
                </p>
              </div>

              <div className="bg-[#F7F8FA] border border-[#E4E7EC] rounded-2xl p-6">
                <div className="w-9 h-9 rounded-lg bg-white border border-[#E4E7EC] grid place-items-center text-[#0B6B4A] mb-3">
                  <Train className="w-4 h-4" />
                </div>
                <h4 className="text-[14px] font-bold text-[#101B2E]">Rail &amp; Transit</h4>
                <p className="text-[12.5px] text-[#4A5568] mt-1.5 leading-relaxed">
                  Katpadi Junction Railway Station (KPD) is situated just 3 km from the university campus, with frequent
                  superfast express trains.
                </p>
              </div>

              <div className="bg-[#F7F8FA] border border-[#E4E7EC] rounded-2xl p-6 sm:col-span-2">
                <div className="flex items-center gap-2 text-[14px] font-bold text-[#101B2E] mb-2">
                  <Hotel className="w-4 h-4 text-[#101B2E]" />
                  <span>Accommodation &amp; Guest Care</span>
                </div>
                <p className="text-[12.5px] text-[#4A5568] leading-relaxed">
                  Subsidized on-campus university guest rooms are available on request for registered outstation and
                  foreign delegates. Premium hotels in Vellore city (Fortune Park, Benzz Park, Khanna Fiesta) are located
                  within 5–10 minutes of the campus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-b border-[#E4E7EC] bg-[#F7F8FA] scroll-mt-20">
        <div className="container-x py-20 md:py-24">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-[12.5px] tracking-wider uppercase text-[#4A5568] font-semibold mb-2">Get in Touch</p>
            <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] text-[#101B2E]">Conference Secretariat</h2>
            <p className="mt-3 text-[14.5px] text-[#4A5568]">
              For paper submission, registration invoices, sponsorship packages, and logistics inquiries:
            </p>
            <a
              href="mailto:icetiteconference@vit.ac.in"
              className="inline-block mt-4 text-[16px] font-bold text-[#0B6B4A] hover:underline"
            >
              icetiteconference@vit.ac.in
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            <div className="bg-white border border-[#E4E7EC] rounded-2xl p-6 text-center shadow-sm">
              <p className="text-[14px] font-bold text-[#101B2E]">Organizing School</p>
              <p className="text-[12.5px] text-[#4A5568] mt-1">SCORE</p>
              <p className="text-[11.5px] text-[#4A5568]/80 mt-2">Vellore Institute of Technology</p>
            </div>
            <div className="bg-white border border-[#E4E7EC] rounded-2xl p-6 text-center shadow-sm">
              <p className="text-[14px] font-bold text-[#101B2E]">Technical Sponsor</p>
              <p className="text-[12.5px] text-[#4A5568] mt-1">IEEE</p>
              <p className="text-[11.5px] text-[#4A5568]/80 mt-2">Institute of Electrical and Electronics Engineers</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
