export interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: "completed" | "in-progress";
  overview: string;
  problem: string;
  features: string[];
  technologies: string[];
  lessons?: string;
  challenges?: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  institution: string;
  qualification: string;
  focus?: string;
  period: string;
  location: string;
  details: string[];
  coursework: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
