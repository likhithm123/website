export interface TeamMember {
  name: string;
  role: string;
  title: string;
  affiliation: string;
  image?: string;
  portfolioUrl?: string;
  badge?: string;
}

export const ieeeItsLeadership: TeamMember[] = [
  {
    name: "Dr. John Singh K",
    role: "Faculty Advisor & Branch Counselor",
    title: "Professor, School of Computer Science Engineering & Information Systems (SCORE)",
    affiliation: "VIT Vellore",
    portfolioUrl: "https://vit.ac.in/information-technolo/dr-john-singh-k",
    badge: "Faculty Advisor",
  },
  {
    name: "Likhith Medarametla",
    role: "Lead Architect & Full Stack Lead",
    title: "IEEE Information Theory Society (ITS) Student Chapter",
    affiliation: "SCORE, VIT Vellore",
    portfolioUrl: "https://www.linkedin.com/in/likhithmedarametla/",
    badge: "Project Lead",
  },
  {
    name: "M.V.J.M Jaya Veera Maheshwar",
    role: "Full Stack Developer",
    title: "IEEE Information Theory Society (ITS) Student Chapter",
    affiliation: "SCORE, VIT Vellore",
    badge: "Web Development Lead",
  },
  {
    name: "Judson Daniel",
    role: "Frontend Developer",
    title: "IEEE Information Theory Society (ITS) Student Chapter",
    affiliation: "SCORE, VIT Vellore",
    badge: "Web Development Lead",
  },
];

