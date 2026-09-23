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
    role: "Faculty Advisor ",
    title: "Professor, School of Computer Science Engineering & Information Systems (SCORE)",
    affiliation: "VIT Vellore",
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
    name: "Judson Daniel",
    role: "Lead Architect & Full Stack Lead",
    title: "IEEE Information Theory Society (ITS) Student Chapter",
    affiliation: "SCORE, VIT Vellore",
    badge: "Project Lead",
  },
  {
    name: "M.V.J.M Jaya Veera Maheshwar",
    role: "Full Stack Developer",
    title: "IEEE Information Theory Society (ITS) Student Chapter",
    affiliation: "SCORE, VIT Vellore",
    badge: "Web Development Lead",
  },

];