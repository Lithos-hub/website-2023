type Stack = {
  techName: string;
  imageUrl: string;
};

export interface Experience {
  image: string;
  title: string;
  subtitle: string;
  initialMonth: number;
  endMonth: number;
  start: string;
  finish: string;
  initialYear: number;
  stack: Stack[];
  tasks: string[];
}
