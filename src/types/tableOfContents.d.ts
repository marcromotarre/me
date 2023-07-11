import { ReactElement } from "react";

export type SectionType = {
  name: string;
  icon?: ReactElement;
  page?: Page;
  children?: SectionType[];
};

export type SectionTypeWithPage = {
  name: string;
  icon?: ReactElement;
  page: Page;
  children?: SectionType[];
};

export type TableOfContents = SectionType[];

export type Page = {
  pageComponent: ReactElement;
  pageTitle?: string;
  path: string;
};
