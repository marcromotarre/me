import { TypescriptIcon } from "../../../components/common/icons";
import TypescriptPage from "../../../pages/typescript/TypescriptPage";
import TypescriptArraysPage from "../../../pages/typescript/arrays/TypescriptArraysPage";
import TypescriptCodeInfrastructurePage from "../../../pages/typescript/code-infrastructure/TypescriptCodeInfrastructurePage";
import TypescriptConditionalTypesPage from "../../../pages/typescript/conditional-types/TypescriptConditionalTypesPage";
import TypescriptExercisesAdvancesPatternsPage from "../../../pages/typescript/exercises/advanced-patterns/TypescriptExercisesAdvancesPatternsPage";
import TypescriptExercisesGenericsPage from "../../../pages/typescript/exercises/generics/TypescriptExercisesGenericsPage";
import TypescriptExercisesTypeTransformationsPage from "../../../pages/typescript/exercises/type-transformations/TypescriptExercisesTypeTransformationsPage";
import TypescriptFunctionsinDepthPage from "../../../pages/typescript/functions-in-depth/TypescriptFunctionsinDepthPage";
import TypescriptGenericsPage from "../../../pages/typescript/generics/TypescriptGenericsPage";
import TypescriptIndexSignaturesPage from "../../../pages/typescript/index-signatures/TypescriptIndexSignaturesPage";
import TypescriptIntersectionTypesPage from "../../../pages/typescript/intersection-types/TypescriptIntersectionTypesPage";
import TypescriptStructuralVsNominalTypesPage from "../../../pages/typescript/structural-vs-nominal-types/TypescriptStructuralVsNominalTypesPage";
import TypescriptTuplesPage from "../../../pages/typescript/tuples/TypescriptTuplesPage";
import TypescriptTypeAliasesAndInterfacesPage from "../../../pages/typescript/type-aliases-and-interfaces/TypescriptTypeAliasesAndInterfacesPage";
import TypescriptTypesAndValuesInDepthPage from "../../../pages/typescript/types-and-values-in-depth/TypescriptTypesAndValuesInDepthPage";
import TypescriptWithReact from "../../../pages/typescript/typescript-with-react/TypescriptWithReact";
import TypescriptTypingFunctionsPage from "../../../pages/typescript/typing-functions/TypescriptTypingFunctionsPage";
import TypescriptUnionTypesPage from "../../../pages/typescript/union-types/TypescriptUnionTypesPage";
import TypescriptVariablesAndValuesPage from "../../../pages/typescript/variables-and-values/TypescriptVariablesAndValuesPage";

export default {
  name: "Typescript",
  page: {
    pageComponent: <TypescriptPage />,
    pageTitle: "Typescript",
    path: "/typescript",
  },

  icon: <TypescriptIcon />,
  children: [
    {
      name: "Variables and Values",
      page: {
        pageComponent: <TypescriptVariablesAndValuesPage />,
        pageTitle: "Typescript: Variables and Values",
        path: "/typescript/variables-and-values",
      },
    },
    {
      name: "Typing Functions",
      page: {
        pageComponent: <TypescriptTypingFunctionsPage />,
        pageTitle: "Typescript: Typing Functions",
        path: "/typescript/typing-functions",
      },
    },
    {
      name: "Index Signatures",
      page: {
        pageComponent: <TypescriptIndexSignaturesPage />,
        path: "/typescript/index-signatures",
        pageTitle: "Typescript: Index Signatures",
      },
    },
    {
      name: "Arrays",
      page: {
        pageComponent: <TypescriptArraysPage />,
        path: "/typescript/arrays",
        pageTitle: "Typescript: Arrays",
      },
    },
    {
      name: "Tuples",
      page: {
        pageComponent: <TypescriptTuplesPage />,
        path: "/typescript/tuples",
        pageTitle: "Typescript: Tuples",
      },
    },
    {
      name: "Structural vs Nominal Types",
      page: {
        pageComponent: <TypescriptStructuralVsNominalTypesPage />,
        path: "/typescript/structural-vs-nominal-types",
        pageTitle: "Typescript: Structural vs Nominal Types",
      },
    },
    {
      name: "Union Types",
      page: {
        pageComponent: <TypescriptUnionTypesPage />,
        path: "/typescript/union-types",
        pageTitle: "Typescript: Union Types",
      },
    },
    {
      name: "Intersection Types",
      page: {
        pageComponent: <TypescriptIntersectionTypesPage />,
        path: "/typescript/intersection-types",
        pageTitle: "Typescript: Intersection Types",
      },
    },
    {
      name: "Type Aliases & Interfaces",
      page: {
        pageComponent: <TypescriptTypeAliasesAndInterfacesPage />,
        path: "/typescript/type-aliases-and-interfaces",
        pageTitle: "Typescript: Type Aliases & Interfaces",
      },
    },
    {
      name: "Functions in Depth",
      page: {
        pageComponent: <TypescriptFunctionsinDepthPage />,
        path: "/typescript/functions-in-depth",
        pageTitle: "Typescript: Functions in Depth",
      },
    },
    {
      name: "Types & Values in Depth",
      page: {
        pageComponent: <TypescriptTypesAndValuesInDepthPage />,
        path: "/typescript/types-and-values-in-depth",
        pageTitle: "Typescript: Types & Values in Depth",
      },
    },
    {
      path: "/typescript/generics",
      name: "Generics",
      page: {
        pageComponent: <TypescriptGenericsPage />,
        path: "/typescript/generics",
        pageTitle: "Typescript: Generics",
      },
    },
    {
      name: "Code Infrastructure",
      page: {
        pageComponent: <TypescriptCodeInfrastructurePage />,
        path: "/typescript/code-infrastructure",
        pageTitle: "Typescript: Code Infrastructure",
      },
    },
    {
      name: "Conditional Types",
      page: {
        pageComponent: <TypescriptConditionalTypesPage />,
        path: "/typescript/conditional-types",
        pageTitle: "Typescript: Conditional Types",
      },
    },
    {
      name: "Typescript With React",
      page: {
        pageComponent: <TypescriptWithReact />,
        path: "/typescript/typescript-with-react",
        pageTitle: "Typescript: Typescript With React",
      },
    },
    {
      name: "Exercises",
      page: {
        pageComponent: <TypescriptWithReact />,
        path: "/typescript/exercises",
        pageTitle: "Typescript: Exercices",
      },
      children: [
        {
          name: "Type Transformations",
          page: {
            pageComponent: <TypescriptExercisesTypeTransformationsPage />,
            path: "/typescript/exercises/type-transformations",
            pageTitle: "Typescript Exercices: Type Transformations",
          },
        },
        {
          name: "Generics",
          page: {
            pageComponent: <TypescriptExercisesGenericsPage />,
            path: "/typescript/exercises/generics",
            pageTitle: "Typescript Exercices: Generics",
          },
        },
        {
          name: "Advanced Patterns",
          page: {
            pageComponent: <TypescriptExercisesAdvancesPatternsPage />,
            path: "/typescript/exercises/advanced-patterns",
            pageTitle: "Typescript Exercices: Advanced Patterns",
          },
        },
      ],
    },
  ],
};
