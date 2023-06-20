export default [
  {
    path: "project-setup",
    name: "Project Setup",
  },
  {
    path: "package-managers",
    name: "Package Managers",
    children: [
      {
        path: "package-managers/npm",
        name: "NPM",
      },
      {
        path: "package-managers/npm",
        name: "Yarn",
      },
    ],
  },
  {
    path: "build",
    name: "Build",
    children: [
      {
        path: "build/webpack",
        name: "Webpack",
      },
      {
        path: "build/parcel",
        name: "Parcel",
      },
      {
        path: "build/vite",
        name: "Vite",
      },
    ],
  },
  {
    path: "react",
    name: "React",
    children: [
      {
        path: "react/state-managers",
        name: "State Managers",
        children: [
          { path: "react/state-managers/redux", name: "Redux" },
          { path: "react/state-managers/recoil", name: "Recoil" },
        ],
      },
      {
        path: "react/my-components",
        name: "My Components",
        children: [
          { path: "react/my-components/modal", name: "Modal" },
          { path: "react/my-components/code", name: "Code" },
          { path: "react/my-components/icon", name: "Icon" },
        ],
      },
      {
        path: "react/hooks",
        name: "Hooks",
        children: [
          { path: "react/hooks/useState", name: "useState" },
          { path: "react/hooks/useEffect", name: "useEffect" },
          { path: "react/hooks/useLayoutEffect", name: "useLayoutEffect" },
          { path: "react/hooks/useMemo", name: "useMemo" },
        ],
      },
      {
        path: "react/patterns",
        name: "Patterns",
        children: [
          {
            path: "react/patterns/hoc-pattern",
            name: "Provider HOC Pattern",
          },
          {
            path: "react/patterns/provider-pattern",
            name: "Provider Pattern",
          },
          {
            path: "react/patterns/compound-component-pattern",
            name: "Compound Component Pattern",
          },
          { path: "react/patterns/hooks-pattern", name: "Hooks Pattern" },
          {
            path: "react/patterns/conditional-rendering-design-pattern",
            name: "Conditional Rendering Design Pattern",
          },
        ],
      },
      { path: "react/interesting-questions", name: "Interesting Questions" },
    ],
  },
  { path: "nextjs", name: "Nextjs" },

  {
    path: "javascript",
    name: "Javascript",
    children: [
      {
        path: "javascript/patterns",
        name: "Patterns",
        children: [
          {
            path: "javascript/patterns/module-pattern",
            name: "Module Pattern",
          },
          {
            path: "javascript/patterns/singleton-pattern",
            name: "Singleton Pattern",
          },
          {
            path: "javascript/patterns/proxy-pattern",
            name: "Proxy Pattern",
          },
          {
            path: "javascript/patterns/observer-pattern",
            name: "Observer Pattern",
          },
          {
            path: "javascript/patterns/factory-pattern",
            name: "Factory Pattern",
          },
          {
            path: "javascript/patterns/prototype-pattern",
            name: "Prototype Pattern",
          },
        ],
      },
      {
        path: "javascript/interesting-questions",
        name: "Interesting Questions",
      },
    ],
  },
  { path: "typescript", name: "Typescript" },
  {
    path: "testing",
    name: "Testing",
    children: [
      { path: "testing/unit-testing", name: "Unit Testing" },
      { path: "testing/integration-testing", name: "Integration Testing" },
      { path: "testing/integration-end-to-end", name: "E2E (End to End)" },
      { path: "testing/react-testing-library", name: "React Testing Library" },
      { path: "testing/jest", name: "Jest" },
      {
        path: "testing/cypress",
        name: "Cypress",
        children: [
          { path: "testing/cypress-components", name: "Cypress Components" },
        ],
      },
    ],
  },
  {
    path: "ux-ui",
    name: "UX / UI",
    children: [{ path: "ux-ui", name: "Figma" }],
  },
];
