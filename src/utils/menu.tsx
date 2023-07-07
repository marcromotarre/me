import TableOfContents from "../data/table-of-contents/sections/TableOfContents";
import { SectionType } from "../types/tableOfContents";

export const getChildren = (
  sectionNames: Array<string>
): Array<SectionType> => {
  let foundSections = [...TableOfContents];
  let accumulativePathName = "";
  sectionNames.map((sectionName) => {
    if (foundSections) {
      accumulativePathName = `${accumulativePathName}/${sectionName}`;

      const filteredSections = foundSections.find(
        (section) => section.path === accumulativePathName
      );

      foundSections = filteredSections ? filteredSections.children : [];
    }
  });
  return foundSections ? foundSections : [];
};

export const getFullInfo = (sectionNames) => {};

export const getLinearList = (
  sections: Array<SectionType>
): Array<SectionType> => {
  return sections.reduce((acc: Array<SectionType>, curr: SectionType) => {
    let linear = [curr];
    if (curr.children) {
      linear = [...linear, ...getLinearList(curr.children)];
    }
    return [
      ...acc,
      ...linear.map((section: SectionType) => ({
        name: section.name,
        path: section.path,
        icon: section.icon,
      })),
    ];
  }, []);
};
