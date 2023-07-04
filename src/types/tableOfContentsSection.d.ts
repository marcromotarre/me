import { ReactElement } from "react";

export type SectionType = {
  path: string;
  name: string;
  icon?: ReactElement;
  children?: Array<SectionType>;
};
