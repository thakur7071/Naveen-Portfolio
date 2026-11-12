export interface Skill {
  name: string;
  category: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  number: string;
}