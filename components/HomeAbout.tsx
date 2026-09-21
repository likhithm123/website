import Link from "next/link";

export default function HomeAbout() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>
            <p className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-3">About The Conference</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
              ic-ETITE&apos;28 — Emerging Trends in IT &amp; Engineering
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              The Third IEEE International Conference on Emerging Trends in Information Technology and Engineering (ic-ETITE&apos;28) is organized by the <strong>School of Computer Science Engineering and Information Systems (SCORE)</strong>, Vellore Institute of Technology, Vellore.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              The conference provides an international platform for researchers, academicians, engineers, industrialists, and students to share findings in Science and Technology. All accepted papers will be published in <strong>IEEE Xplore</strong>.
            </p>

            {/* SCORE highlight */}
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-4 mb-6">
              <p className="text-blue-800 font-bold text-sm mb-1">🏛 Organized by SCORE, VIT Vellore</p>
              <p className="text-blue-700 text-sm">School of Computer Science Engineering &amp; Information Systems — 5,900+ students, 188+ faculty, NAAC A++ rated.</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2.5 px-5 rounded text-sm transition-all">
                Learn More About Conference
              </Link>
              <Link href="/call-for-papers" className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-bold py-2.5 px-5 rounded text-sm transition-all">
                Call for Papers
              </Link>
            </div>
          </div>

          {/* 2024 conference photo */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100 aspect-video flex items-center justify-center relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/ic-etite24.jpg" alt="ic-ETITE'24 conference session" className="w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-5 pb-4 pt-16">
              <p className="text-white font-semibold text-sm">ic-ETITE&apos;24</p>
              <p className="text-white/75 text-xs mt-1">Conference session, VIT Vellore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
