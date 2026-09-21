export interface RegistrationFeeTier {
  category: string;
  indianFee: string;
  foreignFee: string;
  isIeeeDiscount?: boolean;
}

export interface RegistrationPolicy {
  rule: string;
  isImportant?: boolean;
}

export const registrationFeesData: RegistrationFeeTier[] = [
  {
    category: "Industry Professionals",
    indianFee: "Rs. 15,000",
    foreignFee: "400$",
  },
  {
    category: "Faculty / Academicians",
    indianFee: "Rs. 14,000",
    foreignFee: "350$",
  },
  {
    category: "Faculty / Academicians (IEEE Members)",
    indianFee: "Rs. 12,000",
    foreignFee: "325$",
    isIeeeDiscount: true,
  },
  {
    category: "Research Scholars, UG and PG Students",
    indianFee: "Rs. 10,000",
    foreignFee: "300$",
  },
  {
    category: "Research Scholars, UG and PG Students (IEEE Members)",
    indianFee: "Rs. 8,000",
    foreignFee: "275$",
    isIeeeDiscount: true,
  },
  {
    category: "VIT (internal)",
    indianFee: "Rs. 10,000",
    foreignFee: "—",
  },
  {
    category: "Co-Authors / Participants (non-authors)",
    indianFee: "Rs. 5,000",
    foreignFee: "200$",
  },
];

export const registrationGuidelines: RegistrationPolicy[] = [
  {
    rule: "Registration fee includes conference participation, proceedings kit, technical session access, and applicable taxes.",
  },
  {
    rule: "In adherence to IEEE guidelines, only papers presented in person or as scheduled by the conference committee will be considered for recommendation to the IEEE Xplore® Digital Library.",
    isImportant: true,
  },
  {
    rule: "Authors must verify their registration category and IEEE membership credentials before completing payment. Deviations will require category rectification.",
    isImportant: true,
  },
  {
    rule: "For each accepted paper, at least one author must register under the applicable author category by the camera-ready deadline.",
  },
  {
    rule: "Co-Authors or non-presenting participants may register under the Co-Authors / Participants category.",
  },
];
