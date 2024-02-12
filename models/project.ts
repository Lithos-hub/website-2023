export interface Stack {
  name: string;
  icon: string;
}

export interface Project {
  image: string;
  title: string;
  stack: Stack[];
  prevTitle: string;
  description: string;
  href?: string;
  repo: string;
}
