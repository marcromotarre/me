import { TypescriptIcon } from "../../../components/common/icons";

export default {
  path: "/typescript",
  name: "Typescript",
  icon: <TypescriptIcon />,
  children: [
    { path: "/typescript/variables-and-values", name: "Variables and Values" },
    { path: "/typescript/typing-functions", name: "Typing Functions" },
    { path: "/typescript/index-signatures", name: "Index Signatures" },
    { path: "/typescript/arrays", name: "Arrays" },
    { path: "/typescript/tuples", name: "Tuples" },
    {
      path: "/typescript/structural-vs-nominal-types",
      name: "Structural vs Nominal Types",
    },
    { path: "/typescript/union-types", name: "Union Types" },
    { path: "/typescript/intersection-types", name: "Intersection Types" },
    {
      path: "/typescript/type-aliases-and-interfaces",
      name: "Type Aliases & Interfaces",
    },
    {
      path: "/typescript/functions-and-functions-overloads",
      name: "Functions and Functions Overloads",
    },

    {
      path: "/typescript/typescript-with-react",
      name: "Typescript With React",
    },
  ],
};
