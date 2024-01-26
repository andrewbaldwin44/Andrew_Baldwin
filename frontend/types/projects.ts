export interface IProjectTag {
  iconUrl: string;
  tag: string;
  projectTaagId: string;
}

export interface IProject {
  demoLink?: string;
  description: string;
  githubLink?: string;
  imageUrl: string;
  title: string;
  order?: number;
}
