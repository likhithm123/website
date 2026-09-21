import Link from "next/link";

export default function VitInfoSection() {
  return (
    <div className="bg-[#111042] text-white py-12 px-8 md:px-16">
      <div className="max-w-5xl">

        {/* About VIT */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-3">About VIT</h3>
          <p className="text-sm text-blue-100 text-justify leading-relaxed mb-4">
            Vellore Institute of Technology was established under Section 3 of the University Grants Commission (UGC) Act, 1956, and was founded in 1984 as Vellore Engineering College. The Union Ministry of Human Resources Development conferred University status on Vellore Engineering College in 2001. The University is headed by its founder and Chancellor, Dr. G. Viswanathan, a former Parliamentarian and Minister in the Tamil Nadu Government. It persistently seeks and adopts innovative methods to improve the quality of higher education consistently.
          </p>
          <h5 className="text-lg font-bold mb-3 text-[#DE6D1B]">Ranking &amp; Accreditation</h5>
          <div className="space-y-1.5 text-sm text-blue-100">
            <p>✶ Engineering &amp; Technology — 240th best in the World, 9th in India (QS World University Rankings by Subject 2023)</p>
            <p>✶ Computer Science &amp; Information Systems — top 201–250 globally, 7th in India (QS 2023)</p>
            <p>✶ 8th best University, 11th best research &amp; engineering institution in India (NIRF 2023, Govt. of India)</p>
            <p>✶ 173rd best Institution in Asia (QS Asia University Rankings 2023)</p>
            <p>✶ Ranked top 601–700 globally, top 3 in India (Shanghai ARWU 2022)</p>
            <p>✶ NAAC Accreditation with <strong>A++ grade</strong> (3.66 / 4)</p>
          </div>
        </div>

        {/* About SCORE */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-3">About SCORE</h3>
          <p className="text-sm text-blue-100 text-justify leading-relaxed">
            The School of Computer Science Engineering and Information Systems (SCORE) offers B.Tech (IT), M.Tech (Software Engineering), MCA, BCA, B.Sc (Computer Science), M.Tech (by Research) and Ph.D programs. Its focus is on holistic learning to help students make significant contributions to the IT industry and to serve society. The school has more than 5,900 students and 188 committed faculty members, apart from many visiting professors and working professionals. The School has State-of-the-art infrastructure for teaching-learning, research and consultancy, with strong linkages with leading IT companies and research organizations.
          </p>
        </div>

        {/* About IEEE ITS VIT */}
        <div>
          <h3 className="text-2xl font-bold mb-3">About IEEE Information Theory Society, VIT</h3>
          <p className="text-sm text-blue-100 text-justify leading-relaxed">
            The IEEE Information Theory Society at VIT is a newly established student chapter that explores the latest advancements in information theory to tackle modern-day challenges. We provide a nurturing environment for fresh ideas and innovative thinking, empowering individuals to make a difference. Our chapter organizes technical events, workshops, and delivers high-quality projects to partners and collaborators.
          </p>
        </div>

      </div>
    </div>
  );
}
