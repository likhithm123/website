export interface Icetite24Photo {
  id: string;
  image: string;
  title: string;
  category: "dais" | "hackathon" | "expo" | "networking" | "keynote";
  categoryLabel: string;
  edition: string;
  location: string;
  caption: string;
  badge?: string;
  featuredOnHome?: boolean;
}

export const ICETITE24_PHOTOS: Icetite24Photo[] = [
  {
    id: "dais-inaugural-2024",
    image: "/images/icetite24/icetite24_16_inaugural_ceremony_dais.jpg",
    title: "Grand Inaugural Dais & Assembly",
    category: "dais",
    categoryLabel: "Inaugural & Dais",
    edition: "ic-ETITE'24 Second Edition",
    location: "Anna Auditorium Main Stage, VIT Vellore",
    caption:
      "Hon'ble Chancellor Dr. G. Viswanathan, Chief Guest Dr. Zvi Galil, leadership, and international dignitaries inaugurating ic-ETITE'24.",
    badge: "Official Inauguration",
    featuredOnHome: true,
  },
  {
    id: "bolt-stage-awards-2024",
    image: "/images/icetite24/icetite24_18_bolt_hackathon_awards_stage.jpg",
    title: "BOLT 2.0 Hackathon Award Ceremony",
    category: "hackathon",
    categoryLabel: "BOLT 2.0 Hackathon",
    edition: "BOLT 2.0 National Hackathon",
    location: "Anna Auditorium Main Stage, VIT Vellore",
    caption:
      "Prestigious certificate and prize distribution to winning student coders and prototype innovators of the 24-hour BOLT 2.0 Hackathon.",
    badge: "BOLT 2.0 Hackathon",
    featuredOnHome: true,
  },
  {
    id: "bolt-winners-felicitation-2024",
    image: "/images/icetite24/icetite24_19_bolt_winners_felicitation.jpg",
    title: "BOLT 2.0 Champions Felicitation on Dais",
    category: "hackathon",
    categoryLabel: "BOLT 2.0 Hackathon",
    edition: "BOLT 2.0 National Hackathon",
    location: "Anna Auditorium Dais, VIT Vellore",
    caption:
      "Champion hackathon teams receiving honors and cash awards on stage following round-the-clock code sprints and project evaluations.",
    badge: "Hackathon Champions",
    featuredOnHome: false,
  },
  {
    id: "cisco-expo-booth-2024",
    image: "/images/icetite24/icetite24_04_cisco_expo.jpg",
    title: "Cisco Technology Expo & Innovation Booth",
    category: "expo",
    categoryLabel: "TechNext & Industry Expo",
    edition: "Industry Collaboration",
    location: "TechNext Industrial Expo Arena, VIT Vellore",
    caption:
      "Interactive tech booth by Title Sponsor Cisco featuring 'Code with Cisco: Igniting Minds, Empowering Innovation'.",
    badge: "Title Sponsor Cisco",
    featuredOnHome: true,
  },
  {
    id: "drone-prototype-expo-2024",
    image: "/images/icetite24/icetite24_11_drone_prototype_expo.jpg",
    title: "SkyWatch Autonomous Drone Live Demonstration",
    category: "expo",
    categoryLabel: "TechNext & Industry Expo",
    edition: "TechNext'24 Project Expo",
    location: "Project Exhibition Pavilion, VIT Vellore",
    caption:
      "Student engineering team demonstrating autonomous aerial surveillance drone prototype with live telemetry to conference delegates.",
    badge: "Autonomous Robotics",
    featuredOnHome: true,
  },
  {
    id: "startup-innovators-showcase-2024",
    image: "/images/icetite24/icetite24_13_java_capital_innovators.jpg",
    title: "Student Innovators & Tech Startup Pavilion",
    category: "expo",
    categoryLabel: "TechNext & Industry Expo",
    edition: "Startup & Innovation Showcase",
    location: "SCORE Innovation Concourse, VIT Vellore",
    caption:
      "Budding tech founders demonstrating breakthrough prototypes and software products supported by Java Capital and IEEE.",
    badge: "Student Startups",
    featuredOnHome: true,
  },
  {
    id: "technext-committee-leads-2024",
    image: "/images/icetite24/icetite24_14_technext_committee.jpg",
    title: "TechNext'24 Committee & Project Mentors",
    category: "expo",
    categoryLabel: "TechNext & Industry Expo",
    edition: "TechNext'24 Expo",
    location: "Exhibition Hall, VIT Vellore",
    caption:
      "Organizing leads, jury members, and student coordinators celebrating the landmark success of the TechNext'24 industrial project expo.",
    badge: "TechNext Committee",
    featuredOnHome: false,
  },
  {
    id: "organizing-team-volunteers-2024",
    image: "/images/icetite24/icetite24_10_organizing_team.jpg",
    title: "ic-ETITE'24 Student Committee & Volunteers",
    category: "dais",
    categoryLabel: "Inaugural & Dais",
    edition: "Conference Leadership & Volunteers",
    location: "Main Auditorium, VIT Vellore",
    caption:
      "The dedicated student volunteer team and organizers that ensured flawless execution across all 32 technical sessions and events.",
    badge: "Volunteers Taskforce",
    featuredOnHome: true,
  },
  {
    id: "keynote-podium-speech-2024",
    image: "/images/icetite24/icetite24_15_podium_address.jpg",
    title: "Distinguished Keynote Address from the Dais",
    category: "keynote",
    categoryLabel: "Keynotes & Sessions",
    edition: "ic-ETITE'24 Keynote Plenary",
    location: "Anna Auditorium Main Dais, VIT Vellore",
    caption:
      "Eminent international keynote speaker delivering insights on frontier computational research and next-generation engineering systems.",
    badge: "Keynote Address",
    featuredOnHome: false,
  },
  {
    id: "dignitaries-assembly-chairs-2024",
    image: "/images/icetite24/icetite24_12_dignitaries_keynote.jpg",
    title: "Executive Session Chairs & Keynote Assembly",
    category: "dais",
    categoryLabel: "Inaugural & Dais",
    edition: "ic-ETITE'24 Second Edition",
    location: "Anna Auditorium Dais, VIT Vellore",
    caption:
      "Track chairs, international delegates, and academic patrons convened on the main dais for scientific session deliberations.",
    badge: "Session Chairs",
    featuredOnHome: false,
  },
  {
    id: "smart-world-iot-demo-2024",
    image: "/images/icetite24/icetite24_05_technext_smart_world.jpg",
    title: "Smart World IoT & Embedded Hardware Exhibit",
    category: "expo",
    categoryLabel: "TechNext & Industry Expo",
    edition: "TechNext'24 Project Expo",
    location: "Expo Pavilion, VIT Vellore",
    caption:
      "Live demonstrations of smart IoT prototypes and embedded sensor networks presented to visiting academicians and industry reviewers.",
    badge: "IoT & Hardware",
    featuredOnHome: false,
  },
  {
    id: "green-tech-computing-2024",
    image: "/images/icetite24/icetite24_17_intell_green_innovation.jpg",
    title: "Intell-i-Green Sustainable Computing Demonstration",
    category: "expo",
    categoryLabel: "TechNext & Industry Expo",
    edition: "TechNext'24 Project Expo",
    location: "TechNext Arena, VIT Vellore",
    caption:
      "Eco-friendly engineering innovation showcasing intelligent green energy management and automated sensor monitoring.",
    badge: "Green Computing",
    featuredOnHome: false,
  },
  {
    id: "plenary-audience-authors-2024",
    image: "/images/icetite24/icetite24_06_plenary_audience_hall.jpg",
    title: "Auditorium Plenary Session with Paper Presenters",
    category: "keynote",
    categoryLabel: "Keynotes & Sessions",
    edition: "ic-ETITE'24 Technical Tracks",
    location: "Anna Auditorium, VIT Vellore",
    caption:
      "Faculty members, international delegates, and research authors engaging during the keynote and paper presentation sessions.",
    badge: "1,088+ Attendees",
    featuredOnHome: true,
  },
  {
    id: "networking-gala-night-2024",
    image: "/images/icetite24/icetite24_01_networking_gala.jpg",
    title: "Conference Networking Gala & Delegates Assembly",
    category: "networking",
    categoryLabel: "Networking & Fellowship",
    edition: "Social Colloquium & Networking",
    location: "Central Lawns, VIT Vellore",
    caption:
      "Evening networking banquet bringing together keynote speakers, faculty chairs, delegates, and student authors under campus lights.",
    badge: "Networking Gala",
    featuredOnHome: true,
  },
  {
    id: "evening-fellowship-mixer-2024",
    image: "/images/icetite24/icetite24_02_campus_evening.jpg",
    title: "Evening Reception & Academic Fellowship",
    category: "networking",
    categoryLabel: "Networking & Fellowship",
    edition: "Delegates Reception",
    location: "Campus Amphitheatre Grounds, VIT Vellore",
    caption:
      "Cross-disciplinary interactions and collaborative discussions among visiting national and international scholars during the evening mixer.",
    badge: "Scholars Mixer",
    featuredOnHome: false,
  },
  {
    id: "student-researchers-conclave-2024",
    image: "/images/icetite24/icetite24_03_student_delegates.jpg",
    title: "Student Researchers & Presenters Conclave",
    category: "networking",
    categoryLabel: "Networking & Fellowship",
    edition: "Youth Innovation Forum",
    location: "Campus Concourse, VIT Vellore",
    caption:
      "Youthful enthusiasm and collaborative spirit of university students participating in conference tracks and hackathons.",
    badge: "Student Delegates",
    featuredOnHome: false,
  },
  {
    id: "delegates-celebration-night-2024",
    image: "/images/icetite24/icetite24_07_delegates_celebration.jpg",
    title: "Delegates Celebration & Night Summit",
    category: "networking",
    categoryLabel: "Networking & Fellowship",
    edition: "Conference Fellowship",
    location: "Outdoor Pavilion, VIT Vellore",
    caption:
      "Vibrant moments of celebration and fellowship marking the successful culmination of intensive conference sessions.",
    badge: "Fellowship Summit",
    featuredOnHome: false,
  },
  {
    id: "campus-fellowship-dialogue-2024",
    image: "/images/icetite24/icetite24_08_campus_gathering.jpg",
    title: "Interdisciplinary Research Dialogue on Campus",
    category: "networking",
    categoryLabel: "Networking & Fellowship",
    edition: "Academic Colloquium",
    location: "Central Courtyard, VIT Vellore",
    caption:
      "Researchers across computing, communication, and electronic engineering domains discussing joint publishing initiatives.",
    badge: "Research Dialogue",
    featuredOnHome: false,
  },
  {
    id: "cultural-evening-hospitality-2024",
    image: "/images/icetite24/icetite24_09_cultural_evening.jpg",
    title: "Cultural Evening & Traditional Hospitality",
    category: "networking",
    categoryLabel: "Networking & Fellowship",
    edition: "Cultural Reception",
    location: "Auditorium Concourse, VIT Vellore",
    caption:
      "Traditional cultural celebration honoring delegates from 19 countries, demonstrating the renowned hospitality of VIT Vellore.",
    badge: "Cultural Evening",
    featuredOnHome: false,
  },
];
