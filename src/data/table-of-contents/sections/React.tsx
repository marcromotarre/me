import { ReactIcon, ReactQueryIcon } from "../../../components/common/icons";

export default {
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
        { path: "/react/my-components/list", name: "List" },
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
    {
      path: "/react/react-query",
      name: "React Query",
      icon: <ReactQueryIcon color="red" />,
    },
    { path: "/react/interesting-questions", name: "Interesting Questions" },
  ],
};
