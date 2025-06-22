// About section types
export interface AboutData {
  title: string;
  description: string[];
  email: string;
  avatarSrc: string;
  avatarAlt: string;
  githubUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
}

// Skills section types
export interface SkillSubcategory {
  title: string;
  skills: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  subcategories?: SkillSubcategory[];
}

export interface SkillsData {
  title: string;
  categories: SkillCategory[];
}

// Projects section types
export interface ProjectLink {
  url: string;
  label: string;
}

export interface Project {
  emoji: string;
  title: string;
  links: ProjectLink[];
  description: string;
  skills: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ProjectsData {
  title: string;
  projects: Project[];
}

// Contact section types
export interface ContactData {
  title: string;
  email: string;
}

// Footer types
export interface FooterData {
  copyrightText: string;
}
