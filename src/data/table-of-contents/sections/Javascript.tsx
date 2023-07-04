import { JavascriptIcon } from "../../../components/common/icons";

export default {
  path: "/javascript",
  name: "Javascript",
  icon: <JavascriptIcon />,
  children: [
    {
      path: "/javascript/basics",
      name: "Basics",
      children: [
        { path: "/javascript/basics/types", name: "Types" },
        { path: "/javascript/basics/coercion", name: "Coercion" },
        { path: "/javascript/basics/equality", name: "Equality" },
        { path: "/javascript/basics/static-typing", name: "Static Typing" },
        { path: "/javascript/basics/scope", name: "Scope" },
        { path: "/javascript/basics/closure", name: "Closure" },
        { path: "/javascript/basics/objects", name: "Objects" },
        { path: "/javascript/basics/prototype", name: "Prototype" },
      ],
    },
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
};
