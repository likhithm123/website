export interface ConferenceInfo {
  name: string;
  shortName: string;
  edition: string;
  editionNumber: number;
  year: number;
  dates: string;
  datesRaw: {
    start: string;
    end: string;
  };
  venue: {
    name: string;
    department: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    fullAddress: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    mapsUrl: string;
  };
  organizer: {
    name: string;
    shortName: string;
    establishedYear: number;
    chancellor: string;
    website: string;
  };
  technicalCoSponsor: {
    name: string;
    role: string;
    badgeText: string;
    website: string;
  };
  supportedBy: Array<{
    name: string;
    role: "Supported By";
    badgeText: string;
    website?: string;
  }>;
  theme: {
    title: string;
    tagline: string;
    description: string;
    pillars: Array<{
      title: string;
      desc: string;
    }>;
  };
  aboutConference: {
    summary: string;
    paragraphs: string[];
    audiences: string[];
    focusAreas: string[];
  };
  contact: {
    email: string;
    alternateEmail?: string;
    organizer?: string;
    institution?: string;
    chairName?: string;
    publicationChair?: string;
    financeChair?: string;
    address: string;
    socials: {
      instagram?: string;
      linkedin?: string;
      facebook?: string;
    };
  };
  submission: {
    platform: string;
    url: string;
    emailSubmissionAccepted: boolean;
    plagiarismCheck: boolean;
    rules: string[];
  };
  rankings: Array<{
    agency: string;
    year: string;
    highlight: string;
    details: string;
  }>;
  scoreInfo: {
    name: string;
    formerName?: string;
    studentsCount: string;
    facultyCount: string;
    description: string;
    domains: string[];
  };
  ieeeItsInfo: {
    name: string;
    description: string;
    mission: string;
    pillars: string[];
  };
  previousEditions: {
    edition24: {
      year: number;
      dates: string;
      stats: Array<{ label: string; value: string; count: number; suffix?: string }>;
      description: string;
    };
    edition20: {
      year: number;
      dates: string;
      proceedingsUrl: string;
      ieeeXploreIsbn: string;
      usbIsbn: string;
      highlights: string[];
    };
  };
  previousCollaborations: Array<{
    name: string;
    category: string;
    note: string;
  }>;
}

export const conferenceData: ConferenceInfo = {
  name: "IEEE International Conference on Emerging Trends in Information Technology and Engineering",
  shortName: "ic-ETITE’28",
  edition: "The Third IEEE International Conference on Emerging Trends in Information Technology and Engineering",
  editionNumber: 3,
  year: 2028,
  dates: "10–11 February 2028",
  datesRaw: {
    start: "2028-02-10",
    end: "2028-02-11",
  },
  venue: {
    name: "Vellore Institute of Technology",
    department: "School of Computer Science Engineering and Information Systems (SCORE)",
    city: "Vellore",
    state: "Tamil Nadu",
    country: "India",
    pincode: "632014",
    fullAddress: "School of Computer Science Engineering and Information Systems (SCORE), Vellore Institute of Technology, Vellore, Tamil Nadu, India - 632014",
    coordinates: {
      lat: 12.9698,
      lng: 79.1559,
    },
    mapsUrl: "https://maps.google.com/?q=Vellore+Institute+of+Technology+Vellore",
  },
  organizer: {
    name: "Vellore Institute of Technology",
    shortName: "VIT Vellore",
    establishedYear: 1984,
    chancellor: "Dr. G. Viswanathan",
    website: "https://vit.ac.in",
  },
  technicalCoSponsor: {
    name: "IEEE",
    role: "Technical Sponsor",
    badgeText: "Technically Sponsored By",
    website: "https://www.ieee.org",
  },
  supportedBy: [
    {
      name: "IEEE Information Theory Society, VIT Student Chapter",
      role: "Supported By",
      badgeText: "Organizing Society Chapter",
      website: "https://ieee-its-landing.vercel.app",
    },
  ],
  theme: {
    title: "Advancing Research. Enabling Innovation. Connecting the World.",
    tagline: "Shaping the frontier of emerging computational and engineering paradigms.",
    description:
      "ic-ETITE’28 expresses the paramount significance of advancing fundamental and translational research across Information Technology, Computer Engineering, Communication Engineering, and Electronics Engineering. The conference provides an international forum for researchers, academicians, engineers, industry leaders, and scholars to present original scientific findings, examine transformative methodologies, and forge durable cross-border academic alliances.",
    pillars: [
      {
        title: "Scientific Rigor & Peer Review",
        desc: "Strict adherence to IEEE peer-review standards ensuring high citation value and profound academic integrity.",
      },
      {
        title: "Interdisciplinary Convergence",
        desc: "Bridging the gap between theory-driven information mathematics and industry-ready hardware/software systems.",
      },
      {
        title: "Global Scholarly Network",
        desc: "Connecting eminent scientists from over 20 nations across North America, Europe, Asia, and Australasia.",
      },
      {
        title: "Future Academic Partnerships",
        desc: "Fostering joint research proposals, bilateral academic exchanges, and collaborative doctoral research.",
      },
    ],
  },
  aboutConference: {
    summary:
      "An international academic forum for researchers, academicians, engineers, industry professionals, and students to present, exchange, and collaborate on emerging developments in Information Technology and Engineering.",
    paragraphs: [
      "The Third IEEE International Conference on Emerging Trends in Information Technology and Engineering (ic-ETITE’28) is organized by the School of Computer Science Engineering and Information Systems (SCORE) at Vellore Institute of Technology (VIT), Vellore, India.",
      "The primary purpose of this biennial symposium is to elevate global research standards across information sciences, communications, intelligent computing, and microelectronics. It affords an international forum for delegates worldwide to disseminate peer-reviewed discoveries, explore disruptive technologies, and cultivate enduring business-research consortia.",
      "Original, unpublished research manuscripts highlighting specific domains from fundamental theory to applied engineering systems are solicited. All accepted and presented papers will be submitted to the IEEE for inclusion in the IEEE Xplore® Digital Library, subject to meeting IEEE's rigorous quality benchmarks.",
    ],
    audiences: [
      "Principal Investigators & Faculty Researchers",
      "Doctoral Scholars & Postgraduate Researchers",
      "Corporate R&D Directors & Industrial Technologists",
      "Practicing Engineers & System Architects",
      "Undergraduate Innovators with Novel Findings",
    ],
    focusAreas: [
      "Peer-Reviewed Knowledge Dissemination",
      "Interdisciplinary Computational Research",
      "Translational Industry–Academia Interaction",
      "International Bilateral Research Consortia",
      "Emerging Paradigms in Information Theory & Engineering",
    ],
  },
  contact: {
    email: "icetiteconference@vit.ac.in",
    organizer: "School of Computer Science Engineering and Information Systems (SCORE)",
    institution: "Vellore Institute of Technology (VIT), Vellore",
    address: "School of Computer Science Engineering and Information Systems (SCORE), Vellore Institute of Technology, Vellore, Tamil Nadu, India - 632014",
    socials: {
      instagram: "https://www.instagram.com/icetite20/",
      facebook: "https://www.facebook.com/icetite.icetite.3/",
    },
  },
  submission: {
    platform: "EasyChair",
    url: "https://easychair.org/conferences/?conf=icetite28",
    emailSubmissionAccepted: false,
    plagiarismCheck: true,
    rules: [
      "All submissions undergo a strict double-blind plagiarism check and standard IEEE technical scrutiny.",
      "Manuscripts must adhere strictly to IEEE standard two-column conference formatting (Word or LaTeX template).",
      "Manuscripts must not contain embedded hyperlinks, scanned images, running headers, or footers.",
      "Submissions must consist of original, unpublished research not currently under review by any other journal or conference.",
      "Email submissions will strictly NOT be accepted; all submissions must proceed through the official EasyChair portal.",
      "In accordance with IEEE guidelines, at least one author of each accepted paper must register at the standard author rate and present the work at the conference.",
    ],
  },
  rankings: [
    {
      agency: "QS World University Rankings by Subject 2026",
      year: "2026",
      highlight: "86 Globally (Computer Science & Information Systems)",
      details: "Ranked 119 globally in Engineering & Technology, and 87 globally in Electrical & Electronic Engineering.",
    },
    {
      agency: "QS Sustainability Rankings 2026",
      year: "2026",
      highlight: "352 Globally · 7th in India",
      details: "Recognized for institutional governance, sustainable campus practices, and high-impact sustainability research.",
    },
    {
      agency: "Shanghai Ranking / ARWU 2025",
      year: "2025",
      highlight: "501–600 Global Rank Band",
      details: "Consistently positioned among the top premier universities in India according to the Academic Ranking of World Universities.",
    },
    {
      agency: "NAAC Accreditation",
      year: "Current",
      highlight: "A++ Grade (Highest Tier)",
      details: "Accredited with an exceptional institutional CGPA of 3.66 out of 4.0 in the 4th cycle of national accreditation.",
    },
    {
      agency: "NIRF Rankings 2025 (Govt. of India)",
      year: "2025",
      highlight: "14th University · 14th Research · 16th Engineering",
      details: "Nationally recognized by the Ministry of Education for outstanding research output and academic infrastructure.",
    },
  ],
  scoreInfo: {
    name: "School of Computer Science Engineering and Information Systems (SCORE)",
    studentsCount: "5,900+",
    facultyCount: "188+",
    description:
      "SCORE at Vellore Institute of Technology is a vanguard academic department offering comprehensive B.Tech, M.Tech, MCA, BCA, and doctoral research programs in Information Technology and Computing Sciences. With world-class laboratories, extensive corporate linkages, and active Center of Excellence facilities, the School nurtures transformative discovery across applied data science, autonomous systems, cybersecurity, and intelligent software engineering.",
    domains: [
      "Artificial Intelligence & Deep Learning",
      "Cybersecurity & Cryptographic Engineering",
      "Data Engineering & Cloud Systems",
      "Quantum Information Processing",
      "Software Systems Architecture",
      "Intelligent IoT & Edge Computing",
      "Human-Centered Computing",
    ],
  },
  ieeeItsInfo: {
    name: "IEEE Information Theory Society, VIT Student Chapter",
    description:
      "The IEEE Information Theory Society Student Chapter at VIT is a premier student organization dedicated to the theoretical mathematical underpinnings and practical realizations of information processing, coding theory, data compression, cryptography, and stochastic communication networks.",
    mission:
      "To inspire curiosity, nurture rigorous mathematical inquiry, and provide a collaborative crucible where student innovators engineer modern communication breakthroughs under the mentorship of global experts.",
    pillars: [
      "Theoretical Information Sciences",
      "Advanced Coding & Cryptography Workshops",
      "Colloquia with International IEEE Fellows",
      "Interdisciplinary Student R&D Projects",
      "Academic Peer Mentoring & Publications",
    ],
  },
  previousEditions: {
    edition24: {
      year: 2024,
      dates: "22–23 February 2024",
      description: "ic-ETITE'24 assembled leading researchers across 19 countries with 32 technical sessions and 22 keynote addresses.",
      stats: [
        { label: "Papers Received", value: "1,688", count: 1688 },
        { label: "Countries Represented", value: "19", count: 19 },
        { label: "Technical Sessions", value: "32", count: 32 },
        { label: "Keynote Sessions", value: "22", count: 22 },
        { label: "Conference Participants", value: "1,088", count: 1088 },
        { label: "BOLT 2.0 Hackathon Registrations", value: "683", count: 683 },
      ],
    },
    edition20: {
      year: 2020,
      dates: "24–25 February 2020",
      proceedingsUrl: "https://ieeexplore.ieee.org/xpl/conhome/9070069/proceeding",
      ieeeXploreIsbn: "978-1-7281-4142-8",
      usbIsbn: "978-1-7281-4141-1",
      highlights: [
        "Inaugural edition with all presented papers archived in the IEEE Xplore® Digital Library.",
        "All presented papers archived in the IEEE Xplore® Digital Library.",
        "21 rigorous technical presentation tracks and 17 distinguished keynote sessions.",
        "Inaugural BOLT (Breakthrough on Locked Technology) Hackathon conducted with 500+ participants and ₹1,00,000 in prizes.",
      ],
    },
  },
  previousCollaborations: [
    { name: "Intel", category: "Technology Partner (ic-ETITE'24)", note: "Previous Edition Technical Collaboration" },
    { name: "Cisco", category: "Title Sponsor (ic-ETITE'24)", note: "Previous Edition Technical Collaboration" },
    { name: "Yellow.ai", category: "Industry Partner (ic-ETITE'24)", note: "Previous Edition AI Collaboration" },
    { name: "Java Capital", category: "Venture Partner (ic-ETITE'24)", note: "Previous Edition Innovation Partner" },
    { name: "Seed VC Innovation", category: "Ecosystem Partner (ic-ETITE'24)", note: "Previous Edition Incubation Partner" },
  ],
};
