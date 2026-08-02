import type {
  Project,
  Experience,
  Education,
  Certification,
  SkillCategory,
  SocialLink,
  NavItem,
} from "@/types";

export const personalInfo = {
  fullName: "Pholosho Bethuel Mashabela",
  firstName: "Pholosho",
  lastName: "Mashabela",
  email: "Pholosho204@gmail.com",
  phone: "+27 60 911 6216",
  location: "Johannesburg, South Africa",
  address: "15 Auckland Ave, Johannesburg",
  linkedin: "https://linkedin.com/in/pb-mashabela",
  github: "https://github.com/Pholosho204",
  headline: "Computer Science Graduate · Full-Stack Developer",
  tagline:
    "Building thoughtful software with strong foundations in full-stack development, mobile apps, and cloud technologies.",
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Pholosho204",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/pb-mashabela",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:Pholosho204@gmail.com",
    icon: "mail",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: "code",
    skills: ["Java", "PHP", "Python", "JavaScript", "Kotlin", "HTML", "CSS"],
  },
  {
    name: "Frontend",
    icon: "layout",
    skills: [
      "React Native (Expo)",
      "Bootstrap",
      "Figma",
      "Responsive Design",
      "HTML/CSS",
      "JavaScript",
    ],
  },
  {
    name: "Backend",
    icon: "server",
    skills: ["Node.js", "JEE", "Django", "Flask", "REST APIs", "PHP"],
  },
  {
    name: "Databases",
    icon: "database",
    skills: [
      "MySQL",
      "Oracle SQL",
      "PL/SQL",
      "SQLite",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "PHPMyAdmin",
    ],
  },
  {
    name: "Mobile Development",
    icon: "smartphone",
    skills: ["React Native (Expo)", "Android Studio", "Kotlin"],
  },
  {
    name: "Cloud & Deployment",
    icon: "cloud",
    skills: [
      "AWS EC2",
      "AWS S3",
      "AWS Lambda",
      "IAM",
      "Monitoring",
      "Scalability",
      "Firebase",
    ],
  },
  {
    name: "Tools",
    icon: "wrench",
    skills: ["Git", "GitHub", "VS Code", "Android Studio", "XAMPP", "Figma"],
  },
  {
    name: "Soft Skills",
    icon: "users",
    skills: ["Leadership", "Teamwork", "Problem-Solving", "Collaboration"],
  },
];

export const projects: Project[] = [
  {
    id: "tender-tracker",
    title: "Tender Tracker",
    subtitle: "Full-Stack Web Application",
    status: "in-progress",
    overview:
      "Independently developing a tender management system for Ithemba General Trading to streamline the tracking and management of business tenders.",
    problem:
      "Manual tracking of tender submissions, deadlines, and status updates created inefficiencies and risk of missed opportunities for the business.",
    features: [
      "Manage tender submissions and deadlines",
      "Status tracking for business tenders",
      "Streamlined workflow for the company",
    ],
    technologies: ["Full-Stack Development", "GitHub"],
    lessons:
      "Building a production system independently for a real business reinforced the importance of clear requirements, maintainable architecture, and iterative delivery.",
    challenges:
      "Balancing feature completeness with a clean handover while the repository remains private pending completion.",
    githubUrl: "https://github.com/Pholosho204",
  },
  {
    id: "gym-management",
    title: "Gym Management System",
    subtitle: "Full-Stack Web Application",
    status: "completed",
    overview:
      "Collaborated with a team to develop a website that helps gyms manage members and payments through a responsive interface and reliable backend.",
    problem:
      "Gyms needed a simple digital system to track memberships and payments instead of relying on paper or fragmented tools.",
    features: [
      "Responsive UI built with Bootstrap",
      "PHP/MySQL backend for members and payments",
      "Deployed and publicly accessible",
    ],
    technologies: ["PHP", "MySQL", "SQLite", "Bootstrap", "Git", "HTML", "CSS"],
    lessons:
      "Team collaboration and clear division of frontend and backend responsibilities accelerated delivery of a usable product.",
    challenges:
      "Ensuring responsive behaviour across devices and reliable data handling for membership records.",
    githubUrl: "https://github.com/Pholosho204",
    liveUrl: "https://fitzone-gym-fitzess.free.nf",
  },
  {
    id: "event-management",
    title: "Event Management System",
    subtitle: "MLAB Team Project",
    status: "completed",
    overview:
      "Collaborated online with a team to develop a web-based application for managing events, from design through to a working prototype.",
    problem:
      "Organisers needed a straightforward way to register events and manage attendance without complex enterprise tooling.",
    features: [
      "UI designed in Figma",
      "Front-end built with HTML, CSS, and JavaScript",
      "Event registration functionality",
      "Prototype delivered for 50+ users via GitHub collaboration",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Figma", "GitHub"],
    lessons:
      "Remote collaboration and consistent Git practices are essential for delivering cohesive team projects on schedule.",
    challenges:
      "Coordinating design and development across remote contributors while meeting delivery expectations.",
    githubUrl: "https://github.com/Pholosho204",
  },
  {
    id: "clearsky-intelligence",
    title: "ClearSky Intelligence",
    subtitle: "Hackathon Team Project",
    status: "completed",
    overview:
      "Collaborated with a team to develop an AI-powered platform that helps industries and communities in Mpumalanga monitor and reduce carbon emissions in real time.",
    problem:
      "Industries and communities lacked accessible tools for real-time emissions monitoring, actionable recommendations, and engagement around sustainable behaviour.",
    features: [
      "Real-time emissions analytics",
      "AI-driven recommendations",
      "Compliance-ready reporting",
      "Community chatbot with a rewards system promoting sustainable behaviour",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "Firebase",
      "GitHub",
      "LLMs",
    ],
    lessons:
      "Combining rule-based calculators with LLM-powered recommendations can produce practical, user-facing sustainability tools under tight deadlines.",
    challenges:
      "Integrating analytics, AI features, and a rewards system into a coherent experience within a 48-hour hackathon window.",
    githubUrl: "https://github.com/Pholosho204",
  },
];

export const experiences: Experience[] = [
  {
    id: "ground-up-grinders",
    company: "Ground Up Grinders",
    role: "Work-Integrated Learning Intern (WIL)",
    period: "Apr 2026 – Present",
    description: [
      "Currently completing Work-Integrated Learning placement as part of final-year graduation requirements at Tshwane University of Technology.",
      "Applying full-stack and software engineering skills in a real-world environment while preparing for graduation in October 2026.",
    ],
  },
  {
    id: "ithemba",
    company: "Ithemba General Trading",
    role: "Software Development Intern",
    period: "Mar 2026",
    description: [
      "Developed a Tender Tracker application to help the company manage and monitor business tender submissions and deadlines.",
      "Worked independently on a full-stack solution tailored to the organisation’s operational needs.",
    ],
    technologies: ["Full-Stack Development"],
  },
  {
    id: "mlab",
    company: "mLab",
    role: "Front End Development Intern",
    period: "Mar 2025 – June 2025",
    location: "Witbank, eMalahleni Campus",
    description: [
      "Completed 4 UI modules on schedule within a team event system project.",
      "Pushed 15+ Git commits and was praised for clean, reusable code.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Figma", "Git"],
  },
];

export const education: Education[] = [
  {
    id: "tut",
    institution: "Tshwane University of Technology",
    qualification: "Diploma in Computer Science",
    focus: "Software Development",
    period: "Expected Graduation: October 2026",
    location: "Witbank, eMalahleni Campus",
    details: [
      "NQF Level 6",
      "Credits Completed: 360 out of 360",
      "All academic coursework completed",
    ],
    coursework: [
      "Software Engineering",
      "Mobile Programming",
      "Database Design",
      "Cloud (AWS)",
      "Full-Stack Development",
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "maish",
    title: "2nd Place – Mpumalanga AI Student Hackathon (MAISH)",
    issuer: "Tshwane University of Technology",
    date: "23 – 25 October 2025",
    description:
      "Placed 2nd by collaboratively designing, building, deploying, and pitching a cloud-based solution within 48 hours, demonstrating strong teamwork, problem-solving, and performance under pressure.",
  },
  {
    id: "hackerrank",
    title: "Software Engineer Intern Certificate",
    issuer: "HackerRank",
    date: "August 2025",
    description:
      "Demonstrated strong problem-solving and coding skills through practical assessments covering data structures, algorithms, and core software engineering concepts.",
  },
  {
    id: "freecodecamp",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "September 2025",
    description:
      "Built responsive, mobile-first web interfaces using HTML and CSS, applying modern layout techniques to ensure cross-device compatibility and usability.",
  },
];
