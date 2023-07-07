import { ReactElement } from "react";
import { Page, SectionType, TableOfContents } from "../types/tableOfContents";
import { Route } from "react-router-dom";

/**
 * This functions receives a section or a subset of sections and return an array with all the pages of those sections
 *  If a section does not have a page property it will skip that section and all the children that contains
 * @param sections SectionType ! SectionType[]
 * @param pages Page[] leave it empty is for recursive internal use
 * @returns Page[] ordered pages of a section or sections
 */
export function getAllPages(
  sections: TableOfContents | SectionType,
  pages: Page[] = []
) {
  let subpages: Page[] = [];
  const arraySections = Array.isArray(sections) ? [...sections] : [sections];
  arraySections.forEach(function getPageAndSubpages(section: SectionType) {
    if (section.page) {
      pages.push(section.page);
      if (section.children) {
        {
          subpages = getAllPages(section.children);
        }
      }
    }
  });
  return [...pages, ...subpages];
}

export function generateAllRoutes(
  sections: TableOfContents | SectionType
): ReactElement {
  const pages = getAllPages(sections);
  console.log(pages);
  return (
    <>
      {pages.map((page: Page) => (
        <Route key={page.path} path={page.path} element={page.pageComponent} />
      ))}
    </>
  );
}
