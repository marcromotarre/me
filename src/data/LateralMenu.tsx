import { ReactElement } from "react";
import {
  JavascriptIcon,
  NextIcon,
  ReactIcon,
  TypescriptIcon,
} from "../components/common/icons";

export const getChildren = (
  sectionNames: Array<string>
): Array<SectionType> => {
  let foundSections = [...TABLE_OF_CONTENTS_DATA];
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

export type SectionType = {
  path: string;
  name: string;
  icon?: ReactElement;
  children?: Array<SectionType>;
};

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

const TABLE_OF_CONTENTS_DATA: Array<SectionType> = [
  {
    path: "/project-setup",
    name: "Project Setup",
  },
  {
    path: "/package-managers",
    name: "Package Managers",
    children: [
      {
        path: "/package-managers/npm",
        name: "NPM",
      },
      {
        path: "/package-managers/npm",
        name: "Yarn",
      },
    ],
  },
  {
    path: "/build",
    name: "Build",
    children: [
      {
        path: "/build/webpack",
        name: "Webpack",
      },
      {
        path: "/build/parcel",
        name: "Parcel",
      },
      {
        path: "/build/vite",
        name: "Vite",
      },
    ],
  },
  {
    path: "/react",
    name: "React",
    icon: <ReactIcon />,
    children: [
      {
        path: "/react/state-managers",
        name: "State Managers",
        children: [
          { path: "/react/state-managers/redux", name: "Redux" },
          { path: "/react/state-managers/recoil", name: "Recoil" },
        ],
      },
      {
        path: "/react/my-components",
        name: "My Components",
        children: [
          {
            path: "/react/my-components/button",
            name: "Button",
            children: [
              { path: "/react/my-components/button/use", name: "Use" },
              { path: "/react/my-components/button/code", name: "Code" },
              { path: "/react/my-components/button/tests", name: "Testing" },
              {
                path: "/react/my-components/button/snapshots",
                name: "Snapshots",
              },
            ],
          },
          { path: "/react/my-components/alert", name: "Alert" },
          { path: "/react/my-components/accordion", name: "Accordion" },
          { path: "/react/my-components/breadcrumb", name: "Breadcrumb" },
          { path: "/react/my-components/card", name: "Card" },
          { path: "/react/my-components/typography", name: "Typography" },
          { path: "/react/my-components/modal", name: "Modal" },
          { path: "/react/my-components/code", name: "Code" },
          { path: "/react/my-components/icon", name: "Icon" },
        ],
      },
      {
        path: "/react/hooks",
        name: "Hooks",
        children: [
          { path: "/react/hooks/useState", name: "useState" },
          { path: "/react/hooks/useEffect", name: "useEffect" },
          { path: "/react/hooks/useLayoutEffect", name: "useLayoutEffect" },
          { path: "/react/hooks/useMemo", name: "useMemo" },
        ],
      },
      {
        path: "/react/patterns",
        name: "Patterns",
        children: [
          {
            path: "/react/patterns/container-presentation",
            name: "Container Presentation Pattern",
          },
          {
            path: "/react/patterns/hoc-pattern",
            name: "Higher Order Component (HOC) Pattern",
          },
          {
            path: "/react/patterns/render-props-pattern",
            name: "Render Props Pattern",
          },
          {
            path: "/react/patterns/provider-pattern",
            name: "Provider Pattern",
          },
          {
            path: "/react/patterns/compound-component-pattern",
            name: "Compound Component Pattern",
          },
          { path: "/react/patterns/hooks-pattern", name: "Hooks Pattern" },
          {
            path: "/react/patterns/conditional-rendering-design-pattern",
            name: "Conditional Rendering Design Pattern",
          },
        ],
      },
      { path: "/react/interesting-questions", name: "Interesting Questions" },
    ],
  },
  { path: "/nextjs", name: "Nextjs", icon: <NextIcon /> },

  {
    path: "/javascript",
    name: "Javascript",
    icon: <JavascriptIcon />,
    children: [
      { path: "/javascript/arrays", name: "Arrays" },
      {
        path: "/javascript/patterns",
        name: "Patterns",
        children: [
          {
            path: "/javascript/patterns/module-pattern",
            name: "Module Pattern",
          },
          {
            path: "/javascript/patterns/singleton-pattern",
            name: "Singleton Pattern",
          },
          {
            path: "/javascript/patterns/proxy-pattern",
            name: "Proxy Pattern",
          },
          {
            path: "/javascript/patterns/observer-pattern",
            name: "Observer Pattern",
          },
          {
            path: "/javascript/patterns/factory-pattern",
            name: "Factory Pattern",
          },
          {
            path: "/javascript/patterns/prototype-pattern",
            name: "Prototype Pattern",
          },
        ],
      },
      {
        path: "/javascript/interesting-questions",
        name: "Interesting Questions",
      },
    ],
  },
  { path: "/typescript", name: "Typescript", icon: <TypescriptIcon /> },
  {
    path: "/testing",
    name: "Testing",
    children: [
      { path: "/testing/unit-testing", name: "Unit Testing" },
      { path: "/testing/integration-testing", name: "Integration Testing" },
      { path: "/testing/integration-end-to-end", name: "E2E (End to End)" },
      { path: "/testing/react-testing-library", name: "React Testing Library" },
      { path: "/testing/jest", name: "Jest" },
      {
        path: "/testing/cypress",
        name: "Cypress",
        children: [
          { path: "/testing/cypress-components", name: "Cypress Components" },
        ],
      },
    ],
  },
  {
    path: "/ux-ui",
    name: "UX / UI",
    children: [{ path: "/ux-ui", name: "Figma" }],
  },
];

export default TABLE_OF_CONTENTS_DATA;
