import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  CheckCircle2,
  ExternalLink,
  Camera,
  Sparkles,
  ChevronRight,
  GraduationCap,
  Globe2,
  Users,
  Layers,
  BookOpen,
  Building2,
  Cpu,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import GallerySlideshow from "@/components/GallerySlideshow";

export const metadata: Metadata = {
  title: "About ic-ETITE'28 | Vellore Institute of Technology",
  description:
    "Learn about ic-ETITE'28, organized by SCORE, VIT Vellore, technically co-sponsored by IEEE. Explore conference legacy, VIT rankings, and IEEE ITS chapter.",
};

const rankingsList = [
  {
    title: "QS World University Rankings by Subject 2026",
    desc: "119th globally in Engineering & Technology · 86th in Computer Science & Information Systems · 87th in Electrical & Electronic Engineering",
    badge: "Global Top 100",
  },
  {
    title: "NIRF 2025 (Govt. of India)",
    desc: "Ranked 14th in University category, 14th in Research, and 16th in Engineering in India",
    badge: "Top 15 in India",
  },
  {
    title: "NAAC Accreditation",
    desc: "Accredited with the highest A++ Grade with a cumulative CGPA of 3.66 on a 4.0 scale",
    badge: "A++ Grade",
  },
  {
    title: "QS Sustainability Rankings 2026",
    desc: "Ranked 352nd globally and 7th among institutions in India for environmental and social impact",
    badge: "7th in India",
  },
  {
    title: "Shanghai Ranking (ARWU) 2025",
    desc: "Placed in 501–600 global rank band and in the 1–2 rank band among all Indian institutions",
    badge: "Top 2 in India",
  },
];

const archivalGallery = [
  {
    image: "/images/gallery/icetite20_stage_inaugural.jpg",
    title: "ic-ETITE'20 Main Dais & Inauguration",
    badge: "First Edition · 2020",
    caption:
      "Hon'ble Chancellor Dr. G. Viswanathan, Chief Guest, Guests of Honour, and university leadership presiding over the solemn inauguration on the Anna Auditorium dais.",
  },
  {
    image: "/images/gallery/icetite20_plenary_audience.jpg",
    title: "Plenary Delegates at Anna Auditorium",
    badge: "Plenary Gathering",
    caption:
      "A full house of international delegates, academic leaders, research scholars, and students participating in the inaugural proceedings.",
  },
  {
    image: "/images/gallery/icetite20_tree_plantation_barsky.jpg",
    title: "Tree Plantation · Prof. Brian A. Barsky",
    badge: "Green Campus Tradition",
    caption:
      "Prof. Brian A. Barsky (UC Berkeley, USA) planting a commemorative sapling with Chancellor Dr. G. Viswanathan outside Anna Auditorium.",
  },
  {
    image: "/images/gallery/icetite20_tree_plantation_abraham.jpg",
    title: "Tree Plantation · Dr. Ajith Abraham",
    badge: "Green Campus Tradition",
    caption:
      "Dr. Ajith Abraham (Director, MIR Labs, USA) and university leadership planting a commemorative tree on the auditorium lawns.",
  },
  {
    image: "/images/gallery/icetite20_tree_plantation_halonen.jpg",
    title: "Tree Plantation · Dr. Raija Halonen",
    badge: "Green Campus Tradition",
    caption:
      "Dr. Raija Halonen (University of Oulu, Finland) participating in the commemorative green plantation tradition.",
  },
  {
    image: "/images/gallery/icetite20_traditional_welcome.jpg",
    title: "Ceremonial Welcome of International Guests",
    badge: "Traditional Welcome",
    caption:
      "Traditional Indian ceremonial floral welcome accorded to international keynote speakers at the Anna Auditorium entrance.",
  },
  {
    image: "/images/gallery/icetite20_delegation_portrait.jpg",
    title: "Chancellor & International Keynote Delegation",
    badge: "Leadership Delegation",
    caption:
      "Official delegation portrait featuring Chancellor Dr. G. Viswanathan and international delegates from UC Berkeley, MIR Labs, and partner institutions.",
  },
  {
    image: "/images/gallery/icetite24_inauguration.jpg",
    title: "ic-ETITE'24 Grand Inaugural Conclave",
    badge: "Second Edition · 2024",
    caption:
      "Hon'ble Chancellor Dr. G. Viswanathan meeting Chief Guest Dr. Zvi Galil, former Dean of Computing at Georgia Tech, USA.",
  },
  {
    image: "/images/gallery/icetite24_dignitaries.jpg",
    title: "ic-ETITE'24 Leadership Summit with MeitY Secretary",
    badge: "ic-ETITE'24 Edition",
    caption:
      "Chancellor Dr. G. Viswanathan and university leadership conferring with Chief Guest Shri S. Krishnan, IAS, Secretary, MeitY, Govt. of India.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-[#002147]">
      <PageHeader
        badge="Vellore Institute of Technology · SCORE"
        title="About ic-ETITE'28"
        subtitle="Advancing foundational and applied breakthroughs across Information Technology and Engineering. Organized by SCORE, VIT Vellore, and technically co-sponsored by IEEE."
        breadcrumb="About Conference"
        bgImage="/images/frame_15.jpg"
      />

      <div className="container-x py-16 md:py-24 space-y-20">
        {/* Conference Overview */}
        <section className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-6 space-y-5">
            <span className="text-xs sm:text-sm font-bold text-[#002147] uppercase tracking-wider bg-[#FFF4DB] px-3.5 py-1.5 rounded-full border border-[#F5A623]/50">
              Conference Overview
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#002147] font-bold leading-tight">
              An International Forum for Scholarly Excellence
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 font-normal">
              The <strong>Third IEEE International Conference on Emerging Trends in Information Technology and Engineering (ic-ETITE&apos;28)</strong>{" "}
              serves as an eminent global podium where international scientists, academicians, corporate R&amp;D technologists,
              and scholars convene to disseminate original research.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 font-normal">
              Organized by the <strong>School of Computer Science Engineering and Information Systems (SCORE)</strong>, VIT Vellore,
              and technically co-sponsored by <strong>IEEE</strong>, all presented papers will be submitted to the
              <strong> IEEE Xplore® Digital Library</strong>.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link href="/call-for-papers" className="btn-primary text-sm font-bold py-2.5 px-5">
                Call for Papers
              </Link>
              <Link href="/tracks" className="btn-outline text-sm font-semibold py-2.5 px-5">
                Explore 4 Tracks
              </Link>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-lg">
              <Image
                src="/images/gallery/icetite24_inauguration.jpg"
                alt="ic-ETITE Conference Plenary Session"
                width={800}
                height={450}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs sm:text-sm text-slate-600 font-medium">
                Dignitaries and keynote luminaries at ic-ETITE, Anna Auditorium, VIT Vellore
              </div>
            </div>
          </div>
        </section>

        {/* ── HIGHLIGHTS OF PREVIOUS EDITIONS (ic-ETITE'24 & ic-ETITE'20) ── */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs sm:text-sm font-bold text-[#004B87] uppercase tracking-wider bg-[#EBF3F8] px-3.5 py-1.5 rounded-full border border-[#004B87]/30 inline-block mb-3">
              Conference Heritage &amp; Impact
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#002147]">
              Highlights of Previous Editions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              A track record of scholarly rigor, high paper submission volume, international participation, and IEEE Xplore indexed proceedings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ic-ETITE'24 Card */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-sm p-7 sm:p-9 flex flex-col justify-between hover:border-[#002147] transition-all">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#002147] text-white text-xs font-bold font-mono uppercase tracking-wider">
                    Second Edition · 22–23 Feb 2024
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    IEEE Xplore Indexed
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] mb-2">
                  Highlights of ic-ETITE’24
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Organized by SCORE, VIT Vellore. Technically co-sponsored by IEEE and organized with IEEE ITS VIT.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 mb-6 text-center">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-2xl font-serif font-bold text-[#002147]">1,688</p>
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mt-0.5">Papers Received</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-2xl font-serif font-bold text-[#002147]">19</p>
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mt-0.5">Countries</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-2xl font-serif font-bold text-[#002147]">1,088</p>
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mt-0.5">Participants</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-2xl font-serif font-bold text-[#004B87]">32</p>
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mt-0.5">Tech Sessions</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-2xl font-serif font-bold text-[#004B87]">22</p>
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mt-0.5">Keynotes</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-2xl font-serif font-bold text-[#DE6D1B]">683</p>
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mt-0.5">BOLT 2.0 Reg.</p>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#002147] shrink-0 mt-0.5" />
                    <span><strong>Chief Guests:</strong> Dr. Zvi Galil (Georgia Tech, USA) &amp; Shri S. Krishnan, IAS (Secretary, MeitY, Govt. of India).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#002147] shrink-0 mt-0.5" />
                    <span><strong>Keynote Luminaries:</strong> Eminent academicians, Vice-Chancellors, IIT professors, and industry leaders from Microsoft, Amazon, and global labs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#002147] shrink-0 mt-0.5" />
                    <span><strong>Technext’24:</strong> Flagship industrial expo and project innovation competition.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#002147] shrink-0 mt-0.5" />
                    <span><strong>Industry Collaborations &amp; Sponsors:</strong> Intel, Cisco, Yellow.ai, Java Capital, and Seed VC Innovation.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200">
                <a
                  href="https://ieeexplore.ieee.org/xpl/conhome/10493200/proceeding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs w-full py-3 inline-flex items-center justify-center gap-2"
                >
                  <span>Access ic-ETITE’24 IEEE Xplore Proceedings</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* ic-ETITE'20 Card */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-sm p-7 sm:p-9 flex flex-col justify-between hover:border-[#002147] transition-all">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#004B87] text-white text-xs font-bold font-mono uppercase tracking-wider">
                    First Edition · 24–25 Feb 2020
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    IEEE Xplore Indexed
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] mb-2">
                  Highlights of First ic-ETITE’20
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Inaugural edition technically co-sponsored by IEEE and organized by SCORE, VIT Vellore.
                </p>

                <div className="grid grid-cols-2 gap-3.5 mb-6 text-center">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-3xl font-serif font-bold text-[#002147]">21</p>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">Technical Sessions</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-3xl font-serif font-bold text-[#002147]">17</p>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">Keynote Sessions</p>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#004B87] shrink-0 mt-0.5" />
                    <span><strong>100% Publication:</strong> All presented papers published in IEEE Xplore Digital Library.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#004B87] shrink-0 mt-0.5" />
                    <span><strong>Archival ISBNs:</strong> Electronic ISBN: <code className="font-mono text-[11px] bg-slate-100 px-1.5 py-0.5 rounded">978-1-7281-4142-8</code> · USB ISBN: <code className="font-mono text-[11px] bg-slate-100 px-1.5 py-0.5 rounded">978-1-7281-4141-1</code></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#004B87] shrink-0 mt-0.5" />
                    <span><strong>BOLT Hackathon:</strong> Breakthrough on Locked Technology national hackathon with 500+ participants and ₹1,00,000 cash prize pool.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200">
                <a
                  href="https://ieeexplore.ieee.org/xpl/conhome/9070069/proceeding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-xs w-full py-3 inline-flex items-center justify-center gap-2"
                >
                  <span>Access ic-ETITE’20 IEEE Xplore Proceedings</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── PHOTO GALLERY OF PREVIOUS EDITIONS (AUTHENTIC HISTORICAL ARCHIVE) ── */}
        <section className="bg-gradient-to-b from-[#FAFBFD] to-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF4DB] border border-[#F5A623]/40 text-xs font-bold text-[#002147] mb-2 uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5 text-[#F5A623]" />
              <span>Official Photo Archive</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#002147]">
              Conference Moments &amp; Gallery
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Authentic glimpses of the inaugural ceremonies, keynote addresses, and delegates from ic-ETITE’24 and ic-ETITE’20 at VIT Vellore.
            </p>
          </div>

          {/* Interactive Featured Slideshow Player */}
          <GallerySlideshow />

          {/* Curated Historical Moments 3-in-a-row Grid */}
          <div className="mt-14 pt-10 border-t border-slate-200">
            <div className="text-center max-w-xl mx-auto mb-8">
              <h3 className="font-serif text-2xl font-bold text-[#002147]">
                Curated Archival Moments
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Selected archival photographs with official event details and dignitary attributions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {archivalGallery.map((photo, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={photo.image}
                        alt={photo.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 360px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-block px-2.5 py-1 rounded-full bg-[#001C3D]/85 backdrop-blur-md text-[#FFB81C] text-[10.5px] font-bold border border-white/20 tracking-wide">
                          {photo.badge}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-[#002147] mb-1.5 group-hover:text-[#004B87] transition-colors leading-snug">
                        {photo.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {photo.caption}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-0">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#DE6D1B]">
                      <span>VIT Vellore Campus</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT VIT & RANKINGS ── */}
        <section className="space-y-12">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="md:col-span-6 order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-lg">
                <Image
                  src="/images/vit-campus.jpg"
                  alt="VIT Vellore Main Campus Entrance"
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs sm:text-sm text-slate-600 font-medium">
                  Vellore Institute of Technology (VIT), Vellore Main Campus Entrance
                </div>
              </div>
            </div>

            <div className="md:col-span-6 order-1 md:order-2 space-y-5">
              <span className="text-xs sm:text-sm font-bold text-[#002147] uppercase tracking-wider bg-[#FFF4DB] px-3.5 py-1.5 rounded-full border border-[#F5A623]/50">
                Host University
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#002147] font-bold leading-tight">
                About Vellore Institute of Technology (VIT)
              </h2>
              <p className="text-base leading-relaxed text-slate-700 font-normal">
                Vellore Institute of Technology (VIT) was established in 1984 as Vellore Engineering College and granted university status by the Government of India in 2001 under Section 3 of the UGC Act, 1956. Founded by <strong>Dr. G. Viswanathan</strong>, VIT is committed to providing quality higher education and fostering excellence in teaching, research, and innovation.
              </p>
              <p className="text-base leading-relaxed text-slate-700 font-normal">
                The University promotes a vibrant, cosmopolitan academic environment with extensive global partnerships across universities and research institutions worldwide. Guided by its motto <em>&ldquo;Transforming life through excellence in education and research,&rdquo;</em> VIT prepares scholars to address emerging global challenges.
              </p>
            </div>
          </div>

          {/* Ranking & Accreditation Cards */}
          <div className="bg-[#FAFBFD] border-2 border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs sm:text-sm font-bold text-[#002147] uppercase tracking-wider bg-[#FFF4DB] px-3.5 py-1.5 rounded-full border border-[#F5A623]/50 inline-block mb-3">
                Global Recognition
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#002147] font-bold">
                Ranking &amp; Accreditation
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                VIT&apos;s strong performance in national and international rankings reflects its consistent emphasis on academic and research excellence.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-5">
              {rankingsList.map((rank) => (
                <div
                  key={rank.title}
                  className="w-full sm:w-[calc(33.333%-14px)] max-w-sm bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#002147] transition-colors"
                >
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-mono bg-[#002147]/10 text-[#002147] mb-3">
                      {rank.badge}
                    </span>
                    <h4 className="font-bold text-[#002147] text-base mb-2">
                      {rank.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {rank.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT SCORE ── */}
        <section className="bg-white border-2 border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center mb-10">
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs sm:text-sm font-bold text-[#004B87] uppercase tracking-wider bg-[#EBF3F8] px-3.5 py-1.5 rounded-full border border-[#004B87]/30 inline-block">
                Organizing School
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#002147] font-bold">
                School of Computer Science Engineering and Information Systems (SCORE)
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-700">
                The <strong>School of Computer Science Engineering and Information Systems (SCORE)</strong> at VIT Vellore is a vibrant academic and research community committed to excellence in Computer Science, Information Technology, Artificial Intelligence, Data Engineering, Cyber Security, Software Engineering, and Computer Applications.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                SCORE offers comprehensive academic programmes including <strong>B.Tech.</strong> in IT, CSE (AI &amp; Data Engineering), and CSE (Cyber Security); <strong>BCA</strong>, <strong>B.Sc.</strong> in Computer Science; <strong>M.Tech.</strong> in Cybersecurity, Software Engineering, and by Research; <strong>MCA</strong>, <strong>M.Sc.</strong> in AI &amp; ML, and <strong>Ph.D.</strong> programmes. Supported by state-of-the-art infrastructure, Centres of Excellence, industry-supported laboratories, and international expert interactions, SCORE promotes transformative education and lifelong learning.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md">
                <Image
                  src="/images/004A3344.JPG"
                  alt="ic-ETITE Conference Plenary Gathering at Anna Auditorium, VIT Vellore"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 font-medium">
                  SCORE Academic Facilities &amp; Technology Infrastructure, VIT Vellore
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200 text-center">
              <p className="text-3xl font-serif font-bold text-[#002147]">5,900+</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">Students</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200 text-center">
              <p className="text-3xl font-serif font-bold text-[#002147]">188+</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">Research Faculty</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200 text-center">
              <p className="text-3xl font-serif font-bold text-[#004B87]">15+</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">CoEs &amp; Labs</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200 text-center">
              <p className="text-3xl font-serif font-bold text-emerald-700">IEEE</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">Xplore Standards</p>
            </div>
          </div>
        </section>

        {/* ── ABOUT IEEE ITS CHAPTER ── */}
        <section className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-6 space-y-4">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              Co-Organizing Chapter
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#002147] font-bold leading-tight">
              About IEEE Information Theory Society, VIT Chapter
            </h2>
            <p className="text-base leading-relaxed text-slate-700">
              The <strong>IEEE Information Theory Society at VIT</strong> is a vibrant student chapter dedicated to exploring the latest advancements in information theory and applying them to address contemporary technological challenges.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              The chapter provides a nurturing platform for students to foster innovative ideas, develop technical expertise, and engage in meaningful research and projects. Through technical events, workshops, seminars, and collaborative initiatives with partners from academia and industry, the chapter empowers students to develop innovative solutions and contribute meaningfully to the advancement of information and communication technologies.
            </p>
          </div>

          <div className="md:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-lg">
              <Image
                src="/images/ieee-its-workshop.jpg"
                alt="IEEE Information Theory Society Workshop at VIT"
                width={800}
                height={450}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs sm:text-sm text-slate-600 font-medium">
                IEEE Information Theory Society student researchers and faculty symposium at VIT Vellore
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
