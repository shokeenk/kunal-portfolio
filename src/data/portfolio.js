/**
 * ALL SITE CONTENT LIVES HERE.
 * Edit this file to change any text, link or list on the site — no component
 * changes needed. It is also read by vite.config.js to build the <head> tags
 * (title, description, Open Graph, Twitter, JSON-LD), so keep it plain JS.
 *
 * Search for "[CONFIRM" to find details that still need checking.
 */

export const site = {
  url: "https://kunal-portfolio-ten.vercel.app",
  title: "Kunal Shokeen – Full-Stack Developer (Java, Spring Boot, React)",
  description:
    "Kunal Shokeen is a full-stack developer (Java, Spring Boot, React) in Delhi who has built and deployed two live client websites. MCA, JIMS. Open to SDE roles in Delhi, Gurugram and Noida.",
  ogImage: "/og.png",
};

export const person = {
  name: "Kunal Shokeen",
  shortName: "Kunal",
  jobTitle: "Full-Stack Developer",
  location: "Delhi, India",
  email: "shokeenk14@gmail.com",
  phone: "+91 70114 67765",
  resume:
    "https://drive.google.com/file/d/19Z4YRhnmouYZDqSi0A3dKObBTrJ-rXDP/view?usp=sharing",
  links: [
    { label: "GitHub", icon: "github", href: "https://github.com/shokeenk" },
    {
      label: "LinkedIn",
      icon: "linkedin",
      href: "https://www.linkedin.com/in/kunal-shokeen-967099361",
    },
    { label: "LeetCode", icon: "leetcode", href: "https://leetcode.com/u/shokeenk14/" },
  ],
};

export const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  badge: "Open to SDE roles · Delhi · Gurugram · Noida",
  headline:
    "Full-stack developer who ships Java, Spring Boot and React products to real clients.",
  intro:
    "I'm Kunal, an MCA graduate from JIMS. Alongside my degree I built and deployed two production websites for paying clients, including a full e-commerce and booking platform with OAuth login, payments and an admin dashboard. I like owning a feature end to end, from the database schema to the deploy.",
  primaryCta: { label: "See my work", href: "#experience" },
  resumeCta: { label: "Download resume" },
};

// The API-response card in the hero. Values render with JSON syntax colouring
// in the order written here (strings, numbers, booleans and string arrays).
export const codeCard = {
  method: "GET",
  path: "/api/v1/developers/kunal",
  status: "200 OK",
  body: {
    name: "Kunal Shokeen",
    role: "Full-Stack Developer",
    backend: ["Java", "Spring Boot", "REST"],
    frontend: ["React", "Vite"],
    databases: ["PostgreSQL", "MySQL", "MongoDB"],
    clientSitesLive: 2,
    education: "MCA, JIMS (2026)",
    location: "Delhi, India",
    availableToJoin: true,
  },
};

export const quickFacts = [
  { value: "2 client sites", label: "Built, deployed and live" },
  { value: "4 full-stack builds", label: "Spring Boot + React" },
  { value: "End to end", label: "Schema, API, UI, deploy" },
  { value: "Immediate", label: "Available to join" },
];

export const experience = [
  {
    company: "Global FUT Services",
    role: "Full-Stack Developer",
    type: "Freelance · Remote",
    period: "Aug 2026 – Oct 2026",
    summary:
      "Designed, built and deployed a full-stack e-commerce and coaching platform for an EA SPORTS FC content creator's business, from first requirements to a live custom domain.",
    bullets: [
      "Built the Spring Boot REST API and PostgreSQL schema for orders, coaching bookings with date/time slot scheduling, and a loyalty points wallet; frontend in React + Vite.",
      "Implemented sign-up/login with email plus Google, X and Discord OAuth, and an admin dashboard to manage orders, categories and notifications.",
      "Designed a multi-channel checkout (UPI, PayPal, crypto) with transaction-reference verification, multi-currency pricing, and WhatsApp order alerts to the business owner.",
      // Fulfilment module found in the client repo; switch to "Integrating" if it isn't live yet.
      "Integrated a third-party fulfilment API for order delivery, and added an LLM-powered support chat for common customer questions.",
      "Deployed the database, backend and frontend on Render, connected GoDaddy domains, and prepared the legal pages required for payment-gateway (PayU) website verification.",
      "Managed scope directly with the client: delivered a 16-item change list and moved further requests into separately quoted work.",
    ],
    tech: ["Spring Boot", "React", "PostgreSQL", "OAuth 2.0", "Render"],
    link: { label: "globalfutservices.com", href: "https://globalfutservices.com" },
  },
  {
    company: "Static Football Academy",
    role: "Web Developer",
    type: "Freelance · Delhi",
    // Dates taken from the site's git history (first commit Aug 2026, SEO redesign Sep 2026).
    period: "Aug 2026 – Sep 2026",
    summary:
      "Built the first website for a West Delhi youth football academy that previously had no online presence, so it can showcase its work to parents, players and partners.",
    bullets: [
      "Designed, built and deployed the site on Vercel.",
      "Redesigned the UI, colour system and section order while keeping existing content, and added on-page SEO to improve local search visibility.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "SEO", "Vercel"],
    link: {
      label: "static-football-academy-website.vercel.app",
      href: "https://static-football-academy-website.vercel.app",
    },
  },
];

// `github: null` hides the link on the card.
export const projects = [
  {
    tag: "Full-stack · MCA",
    title: "Rapid Medico System",
    description:
      "Online medicine-ordering platform. Users browse medicines, place and track orders; JWT-secured REST APIs for catalogue, cart and orders.",
    tech: ["Spring Boot", "React", "MySQL", "JWT"],
    github: null,
  },
  {
    tag: "Full-stack · MCA",
    title: "Journal App",
    description:
      "Secure journaling application with user accounts and JWT-based authentication so users can only access their own entries.",
    tech: ["Spring Boot", "React", "MongoDB", "JWT"],
    github: null,
  },
  {
    tag: "Hackathon · ISRO BAH 2026",
    title: "CHANDRA-ICE",
    description:
      "AI-powered framework for detecting lunar water ice using Chandrayaan-2 radar and optical imagery, submitted to ISRO's Bharatiya Antariksh Hackathon 2026.",
    tech: ["AI/ML", "Remote sensing", "Research"],
    github: null,
  },
  {
    tag: "Systems design · MCA",
    title: "Retailer Billing System",
    description:
      "Systems-design report modelling a retail billing workflow end to end, with Level 0 and Level 1 DFDs produced as clean SVGs.",
    tech: ["System design", "DFD", "Documentation"],
    github: null,
  },
];

export const skills = [
  { group: "Languages", items: ["Java", "JavaScript", "SQL"] },
  { group: "Backend", items: ["Spring Boot", "REST APIs", "JWT auth", "OAuth 2.0", "Kafka"] },
  { group: "Frontend", items: ["React", "Vite", "HTML", "CSS"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { group: "Deploy & tools", items: ["Git", "GitHub", "Render", "Vercel", "IntelliJ IDEA"] },
  { group: "Fundamentals", items: ["Data structures & algorithms", "OOP", "DBMS"] },
];

export const education = [
  {
    period: "2024 – 2026",
    title: "Master of Computer Applications (MCA)",
    org: "Jagan Institute of Management Studies (JIMS), Delhi",
  },
  {
    period: "2020 – 2023",
    title: "Bachelor of Computer Applications (BCA)",
    org: "Vivekananda Institute of Professional Studies, Pitampura, Delhi",
  },
  {
    period: "2026 – present",
    title: "Co-organiser, EA FC tournament community",
    org: "Leadership",
    detail:
      "Co-run a 750+ member gaming community hosting knockout tournaments of 55+ players. Own registrations and verification, brackets on Challonge, stream coordination and finances; secured a sponsor through email outreach.",
  },
];

export const contact = {
  heading: "Hiring a full-stack or Java developer?",
  text: "I'm available to join immediately for software developer roles in Delhi NCR or remote. I reply to email within a day.",
};

export const footer = {
  copyright: "© 2026 Kunal Shokeen",
  note: "Built and deployed by me, like everything above.",
};
