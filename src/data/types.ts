// About section types
export interface IAboutData {
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
export interface ISkillSubcategory {
  title: string;
  skills: string[];
}

export interface ISkillCategory {
  title: string;
  skills: string[];
  subcategories?: ISkillSubcategory[];
}

export interface ISkillsData {
  title: string;
  categories: ISkillCategory[];
}

// Projects section types
export interface IProjectLink {
  url: string;
  label: string;
}

export interface IProject {
  emoji: string;
  title: string;
  links: IProjectLink[];
  description: string;
  skills: string;
  imageSrc: string;
  imageAlt: string;
  isLast?: boolean;
}

export interface IProjectsData {
  title: string;
  projects: IProject[];
}

// Contact section types
export interface IContactData {
  title: string;
  email: string;
}

// Footer types
export interface IFooterData {
  copyrightText: string;
}
