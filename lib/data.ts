export const navItems = [
  { label: 'Become a CPA', href: '#become-cpa' },
  { label: 'Membership', href: '#membership' },
  { label: 'CPD & resources', href: '#elevate' },
  { label: 'Focus areas', href: '#focus' },
  { label: 'News', href: '#news' },
];

export const heroBento = {
  featured: {
    tag: 'News',
    title: 'CPA Canada CEO joins global leaders at B7',
    desc: 'Pamela Steer was part of the discussion at the Business 7 Summit on the importance of trust and interoperability to support global financial stability in a fragmented world.',
    cta: 'Learn more',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80',
    href: '#news',
  },
  cards: [
    {
      tag: 'Webinar',
      title: 'CPA Canada Connects June',
      desc: "On June 25, we'll discuss why CPAs are essential to building trust in today's complex fraud landscape.",
      cta: 'Save your spot',
      href: '#elevate',
      accent: 'blue',
    },
    {
      tag: 'Policy',
      title: "CPA Canada's 2026 pre-budget submission",
      desc: "Transparent, consistent and reliable financial information is fundamental to Canada's economic performance.",
      cta: 'Read now',
      href: '#news',
      accent: 'amber',
    },
    {
      tag: 'Resource',
      title: 'Professional Engagement Guide',
      desc: "Your firm's essential methodology resource for conducting audit, review, compilation and other assurance engagements.",
      cta: 'Subscribe',
      href: '#elevate',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80',
    },
  ],
};

export const focusAreas = [
  {
    id: 'ethics',
    title: 'Ethics & Governance',
    desc: 'Actively demonstrate transparency, accountability and ethics. Centre integrity in your work and stay ahead of regulation.',
    highlights: ['Professional integrity', 'Regulatory readiness', '96% compliance index'],
    accent: 'emerald',
    href: '#focus',
  },
  {
    id: 'technology',
    title: 'Data & Technology',
    desc: 'CPAs must keep pace with fast-evolving technologies. Build awareness of how data, technology, and AI are reshaping the profession.',
    highlights: ['AI & analytics', 'Digital transformation', '91% adoption by 2026'],
    accent: 'violet',
    href: '#focus',
  },
  {
    id: 'reporting',
    title: 'Financial Reporting',
    desc: 'Leverage the latest trends and maintain compliance with regulation to enhance your expertise in reporting and assurance.',
    highlights: ['IFRS guidance', 'ASPE standards', 'PSAS for public sector'],
    accent: 'blue',
    href: '#focus',
  },
  {
    id: 'public',
    title: 'Public Interest',
    desc: 'Develop programs and advocate for public policy that serves consumers, businesses and organizations across Canada.',
    highlights: ['Consumer protection', 'Policy advocacy', '87% public trust score'],
    accent: 'sky',
    href: '#focus',
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    desc: 'Stay up to date on sustainability reporting, assurance, and sustainable finance trends and policy initiatives.',
    highlights: ['ESG reporting', 'CSRD alignment', 'TCFD frameworks'],
    accent: 'teal',
    href: '#focus',
  },
  {
    id: 'tax',
    title: 'Tax',
    desc: 'Influencing and advocating for an equitable, effective and efficient tax system with timely practitioner guidance.',
    highlights: ['Corporate tax', 'Personal tax', 'GST/HST resources'],
    accent: 'amber',
    href: '#focus',
  },
];

export const elevateCards = [
  {
    title: 'CPA Canada Handbook',
    desc: 'Complimentary access for all Canadian CPAs. Indispensable for staying updated on financial reporting and assurance standards.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
    href: '#elevate',
  },
  {
    title: 'The ONE 2026',
    desc: "Unite with Canada's top finance and accounting professionals from October 5–7 in Québec City.",
    image: 'https://images.unsplash.com/photo-1475727097780-ee8c57052de2?w=800&q=80',
    href: '#elevate',
  },
  {
    title: 'Complimentary CPD',
    desc: 'World-class, free professional development sessions with on-demand access to suit your convenience.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
    href: '#elevate',
  },
];

export const membershipTiers = [
  {
    name: 'Affiliate',
    price: 'Free',
    period: '',
    features: [
      'Select national resources & news',
      'Unified CPA community voice',
      'Independent advocacy',
    ],
    missing: 'No complimentary CPD',
    featured: false,
    cta: 'Create free profile',
  },
  {
    name: 'Member',
    price: '$200',
    period: '/yr',
    features: [
      '16+ included CPD hours',
      'Flexible CPA Canada credits',
      'Pivot magazine (digital + print)',
      'Tax 360™ access',
      'Voting rights on governance',
    ],
    missing: null,
    featured: true,
    cta: 'Join as Member',
  },
  {
    name: 'Member Advantage',
    price: '$1,295',
    period: '/yr',
    features: [
      '20+ CPD hours included',
      'Enhanced credits & webinars',
      'Tax 360 Advantage + CCH™',
      'Best value for full coverage',
    ],
    missing: null,
    featured: false,
    cta: 'Explore Advantage',
  },
];

export type QuizTier = 'member' | 'advantage' | 'affiliate';

export const membershipQuiz = [
  {
    question: 'How many PD hours do you typically need per year?',
    options: [
      { text: '10–16 hours is enough for me', tier: 'member' as QuizTier },
      { text: 'I want maximum coverage — 20+ hours', tier: 'advantage' as QuizTier },
      { text: "I don't need PD right now", tier: 'affiliate' as QuizTier },
    ],
  },
  {
    question: 'Do you need advanced tax intelligence (CCH™ integration)?',
    options: [
      { text: 'Yes — tax is core to my practice', tier: 'advantage' as QuizTier },
      { text: 'Basic Tax 360™ is sufficient', tier: 'member' as QuizTier },
      { text: "Tax resources aren't a priority", tier: 'affiliate' as QuizTier },
    ],
  },
  {
    question: "What's your primary goal?",
    options: [
      { text: 'Stay connected with minimal cost', tier: 'affiliate' as QuizTier },
      { text: 'Balanced value — PD + tools + community', tier: 'member' as QuizTier },
      { text: 'All-in coverage with no gaps', tier: 'advantage' as QuizTier },
    ],
  },
];

export const quizTierLabels: Record<QuizTier, string> = {
  member: 'Member ($200/yr)',
  advantage: 'Member Advantage ($1,295/yr)',
  affiliate: 'Affiliate (Free)',
};

export const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/CPACanada' },
  { label: 'X', href: 'https://twitter.com/CPAcanada' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/school/cpa-canada/' },
  { label: 'Instagram', href: 'https://www.instagram.com/cpa.canada/' },
  { label: 'YouTube', href: 'https://youtube.com/CPAcanada' },
];

export const aiResponses: Record<string, string> = {
  membership:
    'CPA Canada offers **Affiliate (Free)**, **Member ($200/yr)** with 16+ PD hours, and **Member Advantage ($1,295/yr)** with 20+ hours and Tax 360 Advantage. Not sure which fits? Take the 30-second membership quiz.',
  pd: 'You have **14 of 20 PD hours** logged. Deadline is Dec 31. Try "AI in audit" (2 hrs) to close the gap.',
  tax: '**Tax 360™** is included with Member. **Advantage** adds CCH™ AnswerConnect integration for firms.',
  default:
    'Ask me about membership tiers, PD hours, Tax 360™, or finding resources. Try "Compare membership tiers".',
};

export const newsItems = [
  {
    title: '4 tools to limit online gambling',
    desc: 'Guardrails to stay in control of your spending and time.',
    tag: 'Personal Finance',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
    href: '#news',
  },
  {
    title: "Are we in a recession? Let's get technical.",
    desc: "CPA Canada's chief economist breaks down what this really means for Canada.",
    tag: 'Economy',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80',
    href: '#news',
  },
  {
    title: 'This CPA is charting new ground',
    desc: 'CPA James Spearing has never shied away from unexplored territory.',
    tag: 'Profiles',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    href: '#news',
  },
];
