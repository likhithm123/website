"use client";

import Image from "next/image";
import { ExternalLink, Award, Cpu, Globe2 } from "lucide-react";

export default function AboutAndThemesSection() {
  return (
    <section id="about" className="border-b border-[#E2E8F0] bg-white scroll-mt-20">
      <div className="container-x py-16 md:py-24 space-y-20 md:space-y-28">
        {/* =========================================================================
            1. ABOUT IC-ETITE (Matching user's Screenshot 2 with Old-School Photo)
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#E05A00] font-serif">
              About IC-ETITE
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.85] text-slate-700 font-normal">
              The purpose of this conference is to enhance the research in Information Technology,
              Computer Engineering, Communication Engineering, Electronics Engineering and to
              afford an international platform for researchers, academicians, engineers, industrialists
              and students around the world to share their research findings with the global experts
              in the field of Science and Technology.
            </p>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.85] text-slate-700 font-normal">
              The primary goal of the conference is to help the delegates to launch their research or
              business relations and to associate for future collaborations in their career path.
              Original, unpublished papers highlighting specific research domains from all subject
              perspectives are invited from delegates worldwide. In this concern, the conference aims
              to deliver, coordinate and publish research and resources to enrich the impact and growth
              of education allied.
            </p>
          </div>

          {/* Image Column: Old-School Classic Framed Photo (No text below photo) */}
          <div className="lg:col-span-5">
            <div className="p-2.5 bg-white border-2 border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-[280px] sm:h-[350px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <Image
                  src="/images/004A3218.JPG"
                  alt="Dignitaries releasing conference proceedings on dais at ic-ETITE International Conference"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. THEME OF THE CONFERENCE (Matching user's Screenshot 2 with Old-School Photo)
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Image Column (Left on Desktop): Old-School Classic Framed Photo (No text below photo) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="p-2.5 bg-white border-2 border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-[280px] sm:h-[350px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <Image
                  src="/images/004A3344.JPG"
                  alt="Auditorium Gathering with ic-ETITE'24 Conference Banner at VIT Vellore"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Text Column (Right on Desktop) */}
          <div className="lg:col-span-7 space-y-4 text-left order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#E05A00] font-serif">
              Theme of the Conference
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.85] text-slate-700 font-normal">
              ic-ETITE expresses the importance of upgrading the research in Information Technology
              and Engineering. It motivates to provide a worldwide platform to researchers far and
              widespread by exploring their innovations in the field of science and technology.
            </p>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.85] text-slate-700 font-normal">
              The mission is to promote and improve the research and development related to
              Information Technology and Engineering. The essential objective of the conference is to
              assist the researchers in discovering the global linkage for future joint efforts in
              their academic outlook.
            </p>
          </div>
        </div>

        {/* =========================================================================
            3. ABOUT VIT (Vellore Institute of Technology) - with Hyperlink
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pt-8 border-t border-slate-200">
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#002147]/5 border border-[#002147]/15 text-xs font-bold text-[#002147] uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-[#F5A623]" />
              <span>Host University · Established 1984</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#002147] font-serif">
              About Vellore Institute of Technology (VIT)
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.85] text-slate-700 font-normal">
              Vellore Institute of Technology (VIT) was founded in 1984 as Vellore Engineering College
              by the Chancellor, <strong>Dr. G. Viswanathan</strong>. Conferred university status in
              2001, VIT has consistently emerged as one of India’s premier institutions of higher
              education and scientific discovery.
            </p>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.85] text-slate-700 font-normal">
              Ranked <strong>#10 in Engineering</strong> by NIRF (Ministry of Education, Govt. of India)
              and accredited with <strong>NAAC A++ (Score 3.66/4.0)</strong>, VIT is home to over 40,000
              students from 50+ nations. The institution is renowned for academic flexibility, cutting-edge
              laboratories, and high-impact research publications and conferences.
            </p>
            <div className="pt-2">
              <a
                href="https://vit.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-xs py-2.5 px-5"
              >
                <span>Visit Official vit.ac.in</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Image Column: Old-School Classic Framed Campus Photo (No text below photo) */}
          <div className="lg:col-span-5">
            <div className="p-2.5 bg-white border-2 border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-[280px] sm:h-[350px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <Image
                  src="/images/frame_15.jpg"
                  alt="VIT Vellore Silver Jubilee Tower (SJT) Landmark"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            4. ABOUT SCORE - with Hyperlink
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Image Column (Left on Desktop): Old-School Classic Framed Lab Photo (No text below photo) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="p-2.5 bg-white border-2 border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-[280px] sm:h-[350px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <Image
                  src="/images/frame_1.jpg"
                  alt="Silver Jubilee Tower (SJT) & Computing Laboratories at SCORE VIT Vellore"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Text Column (Right on Desktop) */}
          <div className="lg:col-span-7 space-y-4 text-left order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004B87]/5 border border-[#004B87]/15 text-xs font-bold text-[#004B87] uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>Organizing School</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#002147] font-serif">
              About SCORE
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.85] text-slate-700 font-normal">
              The <strong>School of Computer Science Engineering and Information Systems (SCORE)</strong> is the flagship center for computing, software systems, and data intelligence at VIT Vellore.
            </p>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.85] text-slate-700 font-normal">
              Accommodating more than <strong>5,900 undergraduate and postgraduate scholars</strong> and
              <strong>188+ distinguished doctoral faculty members</strong>, SCORE is internationally recognized
              for translational computing research. The school houses 12+ specialized laboratories and
              has authored over 3,200 research articles.
            </p>
            <div className="pt-2">
              <a
                href="https://vit.ac.in/schools/school-of-computer-science-engineering-and-information-systems"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-xs py-2.5 px-5"
              >
                <span>Visit SCORE Official School Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================================
            5. ABOUT IEEE INFORMATION THEORY SOCIETY (IEEE ITS) - with Hyperlink
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00B4D8]/10 border border-[#00B4D8]/30 text-xs font-bold text-[#004B87] uppercase tracking-wider">
              <Globe2 className="w-3.5 h-3.5 text-[#00B4D8]" />
              <span>Technical Student Body · VIT Vellore Chapter</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#002147] font-serif">
              About IEEE Information Theory Society (ITS)
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.85] text-slate-700 font-normal">
              The <strong>IEEE Information Theory Society (ITS) Student Chapter</strong> at VIT Vellore
              is an elite student organization dedicated to the theoretical foundations and practical
              implementations of information processing, transmission, cryptography, coding theory, and
              algorithmic intelligence.
            </p>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.85] text-slate-700 font-normal">
              As an official student technical organizing partner for ic-ETITE and the host of the
              nationwide <strong>BOLT Hackathon</strong> series, the IEEE ITS Chapter coordinates
              hands-on workshops, technical symposiums, and international guest lectures, fostering
              peer collaboration across leading Indian and global universities.
            </p>
            <div className="pt-2">
              <a
                href="https://ieee-its-1-tzbd.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-xs py-2.5 px-5"
              >
                <span>Visit IEEE ITS Chapter Official Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Image Column: Old-School Classic Framed Workshop Photo (No text below photo) */}
          <div className="lg:col-span-5">
            <div className="p-2.5 bg-white border-2 border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-[280px] sm:h-[350px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <Image
                  src="/images/ieee-its-workshop.jpg"
                  alt="IEEE Information Theory Society Technical Symposium Session"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
