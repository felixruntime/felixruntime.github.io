export interface Project {
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
}

export interface Skill {
  name: string;
  category?: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface Profile {
  name: string;
  tagline: string;
  bio: string;
  contactMessage?: string;
}
