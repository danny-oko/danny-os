export interface Project {
  id: string;
  name: string;
  description: string;
  overview: string;
  features: string[];
  techStack: string[];
  challenges: Array<{
    challenge: string;
    solution: string;
  }>;
  teamRoles: Array<{
    name: string;
    role: string;
  }>;
  meta: {
    duration: string;
    category: string;
    team: string;
  };
  demoUrl?: string;
  githubUrl?: string;
  status?: string;
  metrics?: string[];
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "aegis",
    name: "Aegis",
    description: "AI Property-Monitoring Platform",
    overview:
      "Aegis is an AI-powered monitoring platform that automatically detects residential common-area violations such as smoking, vaping, and littering inside apartment complexes. It pairs low-latency edge detection (YOLOv8) with deep vision reasoning (Google Gemini 2.5 Flash) to catch violations accurately while keeping cloud costs low. Built for apartment homeowners' associations, property managers, and building security teams.",
    features: [
      "Two-stage AI vision pipeline (YOLOv8 edge gate → Gemini verification)",
      "Automatic LAN camera discovery (ONVIF + TCP port scans)",
      "Multi-stream RTSP ingestion, up to 30 concurrent cameras",
      "Fault-tolerant streaming (auto-reconnect, frame-skip, 60s backoff)",
      "High-confidence event filtering to Cloudflare D1 / R2",
      "Real-time violation dashboard",
    ],
    techStack: [
      "YOLOv8",
      "Google Gemini 2.5 Flash",
      "LitServe",
      "Next.js",
      "TypeScript",
      "Cloudflare D1",
      "Cloudflare R2",
      "FFmpeg",
      "RTSP / ONVIF",
    ],
    challenges: [
      {
        challenge: "High cloud-API cost from analyzing every frame",
        solution:
          "A lightweight YOLOv8 edge gate screens frames first; only high-confidence crops are forwarded to Gemini for deep analysis.",
      },
      {
        challenge: "Unreliable camera networks and dropouts",
        solution:
          "A fault-tolerant layer with automatic reconnection and a 60-second backoff keeps the dashboard live without crashing.",
      },
      {
        challenge: "Discovering cameras with zero configuration",
        solution:
          "ONVIF plus custom TCP port scanning auto-detects active IP / NVR cameras for a plug-and-play setup.",
      },
    ],
    teamRoles: [
      {
        name: "Danny",
        role: "Team Lead — architected the two-stage AI vision pipeline, camera discovery, and RTSP ingestion; led a team of 5.",
      },
    ],
    meta: {
      duration: "2 Weeks",
      category: "Applied AI / Computer Vision",
      team: "5 Developers · Team Lead",
    },
    githubUrl: "https://github.com/pinecone-studio/pinequest-s4-e2-aegis",
    status: "Hackathon · PineQuest Ep.2",
    metrics: ["Up to 30 concurrent cameras", "High-confidence filtering (≥0.7)"],
    featured: true,
  },
  {
    id: "brisk",
    name: "Brisk",
    description: "AI Meeting Assistant",
    overview:
      "Brisk is an AI-powered meeting hub that records audio, transcribes speech to text, and summarizes meetings into actionable next steps. It works as an automated meeting assistant that removes manual note-taking and makes sure every attendee leaves with clear tasks — even those who joined late or dropped early.",
    features: [
      "Real-time multi-speaker transcription",
      "Auto-generated structured summaries inside Google Docs",
      "Post-meeting automated email distribution",
      "Google Workspace + OAuth 2.0 integration (Docs, Drive, Gmail)",
      "Action-item extraction and assignment",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Google Workspace API",
      "OAuth 2.0",
      "Cloudflare Workers",
      "Serverless Functions",
    ],
    challenges: [
      {
        challenge: "Meetings end with forgotten tasks ('ghost tasks')",
        solution:
          "Auto-generated action items are emailed to every attendee when a call ends — cutting forgotten follow-ups 18–25% in internal testing.",
      },
      {
        challenge: "Turning raw multi-speaker transcripts into readable reports",
        solution:
          "Serverless workers parse speaker turns and generate styled documents through the Google Docs API.",
      },
      {
        challenge: "Secure access to users' Google accounts",
        solution: "OAuth 2.0 with granular scopes and secure token rotation.",
      },
    ],
    teamRoles: [
      {
        name: "Danny",
        role: "Team Lead — built the core automation (transcript → Google Docs) and the full Workspace / OAuth integration; led a team of 5.",
      },
    ],
    meta: {
      duration: "2 Weeks",
      category: "AI / Productivity",
      team: "5 Developers · Team Lead",
    },
    demoUrl: "https://brisk-client.danny-otgontsetseg.workers.dev",
    githubUrl: "https://github.com/pinecone-studio/pinequest-s4-e1-brisk",
    status: "Hackathon · PineQuest Ep.1",
    metrics: ["~80% accuracy", "18–25% fewer forgotten tasks"],
    featured: true,
  },
  {
    id: "mazaalai-learn",
    name: "Mazaalai-Learn",
    description: "Gamified Script-Learning App",
    overview:
      "Mazaalai-Learn gamifies learning the traditional Mongolian script, Duolingo-style. It offers an AI-powered, engaging way to study daily through reading, translation, and interactive practice, helping users master the national script as Mongolia moves toward becoming a dual-script nation.",
    features: [
      "Global leaderboard with traditional Mongolian wrestling ranks",
      "AI audio evaluation — speech-to-text pronunciation scoring",
      "Real-time accuracy feedback",
      "Daily streaks and XP progression",
      "Interactive reading & translation exercises",
    ],
    techStack: [
      "Next.js",
      "Hono",
      "Drizzle",
      "Cloudflare D1 (SQLite)",
      "Clerk",
      "Bun",
      "TypeScript",
      "Tailwind",
    ],
    challenges: [
      {
        challenge: "Leaderboard slowed down under high concurrent traffic",
        solution:
          "Cloudflare edge caching plus optimized queries kept load times fast under load.",
      },
      {
        challenge: "Large client bundle and slow initial load",
        solution:
          "Migrated the monorepo to Bun and removed dead code / unused dependencies — cutting initial load time by 50%.",
      },
      {
        challenge: "Scoring users' pronunciation accurately",
        solution:
          "AI speech-to-text compared against stored ground-truth targets for real-time accuracy feedback.",
      },
    ],
    teamRoles: [
      {
        name: "Danny",
        role: "Built the leaderboard / ranking system, the AI audio-evaluation engine, and the monorepo performance optimization.",
      },
    ],
    meta: {
      duration: "Internship Project",
      category: "EdTech / Full-Stack",
      team: "6 Developers",
    },
    demoUrl: "https://mazaalai-learn.vercel.app",
    githubUrl: "https://github.com/danny-oko/mazaalai-learn",
    status: "Internship · Pinecone Academy",
    metrics: ["50% faster initial load"],
    featured: true,
  },
  {
    id: "guidly",
    name: "Guidly",
    description: "AI University-Application Ecosystem",
    overview:
      "Guidly is an AI-powered ecosystem for targeting top US universities. It features a comprehensive school database, intelligent goal-setting, and secure document vaults for essays and application materials — helping applicants plan, track, and manage their path from research to submission.",
    features: [
      "Comprehensive US university database",
      "Intelligent, AI-assisted goal-setting",
      "Secure document vaults for essays & materials",
      "Application progress tracking",
    ],
    techStack: ["Next.js", "TypeScript", "LangChain", "AI / LLM", "Tailwind"],
    challenges: [],
    teamRoles: [],
    meta: {
      duration: "Ongoing",
      category: "AI / EdTech",
      team: "Solo",
    },
    githubUrl: "https://github.com/danny-oko/Guidly",
    status: "Personal Project",
    featured: true,
  },
  {
    id: "xp-digital",
    name: "XP Digital",
    description: "Web Development Agency",
    overview:
      "A web development freelancing agency which founded by a group of friends.",
    features: [],
    techStack: [],
    challenges: [],
    teamRoles: [],
    meta: {
      duration: "Ongoing",
      category: "Agency",
      team: "Founders",
    },
    demoUrl: "https://xp-agency.vercel.app/",
  },
  {
    id: "xperience",
    name: "Xperience",
    description: "Internship & Job Hub",
    overview:
      "A platform bridging academic knowledge and real-world experience. Connects students with internships, mentorships, and skill-development opportunities.",
    features: [
      "Multi-auth login (Google, Facebook, Email)",
      "Internship categories",
      "Real-time notifications",
      "Application tracking dashboard",
      "Company dashboard",
      "Cross-device admin panel",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "MongoDB",
      "Firebase",
      "React Query",
      "WebSockets",
      "Vercel",
    ],
    challenges: [
      {
        challenge: "Complex search/filter",
        solution: "Elasticsearch (or efficient indexed search).",
      },
      {
        challenge: "Real-time updates",
        solution: "WebSocket implementation.",
      },
      {
        challenge: "Cross-device design",
        solution: "Mobile-first responsive UI.",
      },
      {
        challenge: "Data-heavy pages",
        solution: "React Query optimization.",
      },
    ],
    teamRoles: [
      {
        name: "Danny",
        role: "Led the entire development team, planning each piece of the process and guiding execution from start to finish. By coordinating tasks, ensuring quality, and managing delivery, the project was completed as a polished and functional web application.",
      },
      {
        name: "Bayarbayasgalan",
        role: "Senior Developer, core logic & integrations",
      },
    ],
    meta: {
      duration: "1 Month",
      category: "Web Development",
      team: "2 Developers • Owned by XP Digital",
    },
    demoUrl: "https://xperience.mn",
  },
  {
    id: "sunrise-mongolia",
    name: "Sunrise Mongolia",
    description: "Travel Platform",
    overview:
      "An innovative travel platform showcasing the best adventures in Mongolia. Provides trip catalogs with filters, media galleries, SEO-optimized pages, and booking request forms.",
    features: [
      "Filterable trip catalog",
      "Media gallery",
      "SEO-friendly landing pages",
      "Booking request form",
      "Admin dashboard for trips, pricing, promotions",
      "Performance-focused UI",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "MongoDB",
      "Cloudinary",
      "Vercel",
    ],
    challenges: [
      {
        challenge: "Complex filtering system",
        solution: "MongoDB aggregation engine.",
      },
      {
        challenge: "Heavy media content",
        solution: "Cloudinary integration for optimization.",
      },
      {
        challenge: "Flexible admin panel for non-technical users",
        solution: "Custom CMS-like dashboard.",
      },
      {
        challenge: "High-performance needs",
        solution: "Next.js optimization & caching.",
      },
    ],
    teamRoles: [
      { name: "Danny", role: "Founder, Project Manager, Lead Developer" },
      {
        name: "Bayarbayasgalan",
        role: "Senior Developer, core logic & integrations",
      },
    ],
    meta: {
      duration: "1 month",
      category: "Web Development",
      team: "2 developers",
    },
    demoUrl: "https://sunrisemongolia.com",
  },
  {
    id: "winacademy",
    name: "WinAcademy",
    description: "Online Learning Platform",
    overview:
      "Built with modern web technologies, WinAcademy delivers online learning that is accessible and easy to understand. It includes course catalogs, membership systems, payments, video lessons, user reviews, and admin dashboards.",
    features: [
      "Course catalog with quick enrollment",
      "Membership access system",
      "Online payment with QPay integration",
      "Video training + media library",
      "User ratings & reviews",
      "CMS (news, announcements, FAQ)",
      "Admin dashboard for content, user, and payment management",
      "Performance analytics and audit logs",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "MongoDB",
      "NextAuth",
      "Cloudinary",
      "QPay",
      "Bunny.net",
      "Vercel",
    ],
    challenges: [
      {
        challenge: "Online payment with instant course access",
        solution: "Webhook connection with QPay API for instant course unlock.",
      },
      {
        challenge: "Large video/media files",
        solution: "Optimized compression & streaming via Cloudinary.",
      },
      {
        challenge: "Membership/course access control",
        solution: "Role-based access on MongoDB.",
      },
      {
        challenge: "Secure authentication",
        solution: "NextAuth with Google/Facebook login.",
      },
    ],
    teamRoles: [
      {
        name: "Danny",
        role: "Led the entire development team, planning each piece of the process and guiding execution from start to finish. By coordinating tasks, ensuring quality, and managing delivery, the project was completed as a polished and functional web application.",
      },
      {
        name: "Bayarbayasgalan",
        role: "Senior Developer, core logic & integrations",
      },
    ],
    meta: {
      duration: "1 month",
      category: "Web Development",
      team: "2 developers",
    },
    demoUrl: "https://winacademy.mn",
  },
  // {
  //   id: "new-era",
  //   name: "New Era",
  //   description: "Education Platform",
  //   overview:
  //     "A comprehensive education platform centralizing school information, enrollment, programs, news, and media.",
  //   features: [
  //     "Enrollment system with FAQ",
  //     "News & announcements CMS",
  //     "Media gallery",
  //     "Reviews & ratings",
  //     "Role-based admin dashboard",
  //     "Audit logs",
  //     "Responsive design",
  //     "Online lessons streaming",
  //   ],
  //   techStack: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "NextAuth", "Bunny.net (with TUS uploads)", "Vercel"],
  //   challenges: [
  //     {
  //       challenge: "Complex content management",
  //       solution: "Role-based CMS.",
  //     },
  //     {
  //       challenge: "Responsive design",
  //       solution: "Tailwind mobile-first.",
  //     },
  //     {
  //       challenge: "Performance with heavy content",
  //       solution: "SSR with Next.js.",
  //     },
  //     {
  //       challenge: "Streaming & video mgmt",
  //       solution: "Bunny.net + TUS uploads.",
  //     },
  //   ],
  //   teamRoles: [
  //     { name: "Danny", role: "Founder, Project Manager, Lead Developer" },
  //     { name: "Bayarbayasgalan", role: "Senior Developer, core logic & integrations" },
  //   ],
  //   meta: {
  //     duration: "1 month",
  //     category: "Web Development",
  //     team: "2 developers",
  //   },
  //   demoUrl: "https://edunewera.mn",
  // },
  {
    id: "han-education",
    name: "Han Education",
    description: "Study in China Platform",
    overview:
      "Helps students apply to Chinese universities & scholarships. Guides applicants step by step with documentation support and enables consultants to connect directly with students.",
    features: [
      "Student data collection",
      "Editable CMS for consultants",
      "Multi-language support",
      "Role-based admin access",
      "Direct communication with consultants",
      "Application documentation guidance",
      "Step-by-step process tracking",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "MongoDB",
      "NextAuth",
      "Cloudinary",
      "Vercel",
    ],
    challenges: [
      {
        challenge: "Complex application processes",
        solution: "Built guided form workflows.",
      },
      {
        challenge: "Fast communication",
        solution: "Admin & consultant dashboards.",
      },
      {
        challenge: "Data security",
        solution: "Encrypted storage and NextAuth authentication.",
      },
      {
        challenge: "Multi-language support",
        solution: "i18n integration.",
      },
    ],
    teamRoles: [
      { name: "Danny", role: "Founder, Project Manager, Lead Developer" },
      {
        name: "Bayarbayasgalan",
        role: "Senior Developer, core logic & integrations",
      },
    ],
    meta: {
      duration: "1 month",
      category: "Web Development",
      team: "2 developers",
    },
    demoUrl: "https://haneducation.mn",
  },
];
