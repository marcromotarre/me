export type Section = {
  name: string;
  icon: string;
  col?: number;
  component: (...args: any) => any;
};
