import { JavascriptIcon } from "../../../components/common/icons";
import JavascriptPage from "../../../pages/javascript/JavascriptPage";
import JavascriptArraysPage from "../../../pages/javascript/array/JavascriptArraysPage";
import JavascriptBasicsPage from "../../../pages/javascript/basics/JavascriptBasicsPage";
import JavascriptBasicsClosurePage from "../../../pages/javascript/basics/closure/JavascriptBasicsClosurePage";
import JavascriptBasicsCoercionPage from "../../../pages/javascript/basics/coercion/JavascriptBasicsCoercionPage";
import JavascriptBasicsEqualityPage from "../../../pages/javascript/basics/equality/JavascriptBasicsEqualityPage";
import JavascriptBasicsObjectsPage from "../../../pages/javascript/basics/objects/JavascriptBasicsObjectsPage";
import JavascriptBasicsPrototypePage from "../../../pages/javascript/basics/prototype/JavascriptBasicsPrototypePage";
import JavascriptBasicsScopePage from "../../../pages/javascript/basics/scope/JavascriptBasicsScopePage";
import JavascriptBasicsStaticTypingTypesPage from "../../../pages/javascript/basics/static-typing/JavascriptBasicsStaticTypingTypesPage";
import JavascriptBasicsTypesPage from "../../../pages/javascript/basics/types/JavascriptBasicsTypesPage";
import JavascriptInterestingQuestions from "../../../pages/javascript/interesting-questions/JavascriptInterestingQuestions";

export default {
  name: "Javascript",
  page: {
    pageComponent: <JavascriptPage />,
    path: "/javascript",
    pageTitle: "Javascript",
  },
  icon: <JavascriptIcon />,
  children: [
    {
      name: "Basics",
      page: {
        pageComponent: <JavascriptBasicsPage />,
        path: "/javascript/basics",
        pageTitle: "Javascript Basics",
      },
      children: [
        {
          name: "Types",
          page: {
            pageComponent: <JavascriptBasicsTypesPage />,
            path: "/javascript/basics/types",
            pageTitle: "Javascript Basics: Types",
          },
        },
        {
          name: "Coercion",
          page: {
            pageComponent: <JavascriptBasicsCoercionPage />,
            path: "/javascript/basics/coercion",
            pageTitle: "Javascript Basics: Coercion",
          },
        },
        {
          name: "Equality",
          page: {
            pageComponent: <JavascriptBasicsEqualityPage />,
            path: "/javascript/basics/equality",
            pageTitle: "Javascript Basics: Equality",
          },
        },
        {
          name: "Static Typing",
          page: {
            pageComponent: <JavascriptBasicsStaticTypingTypesPage />,
            path: "/javascript/basics/static-typing",
            pageTitle: "Javascript Basics: Static Typing",
          },
        },
        {
          name: "Scope",
          page: {
            pageComponent: <JavascriptBasicsScopePage />,
            path: "/javascript/basics/scope",
            pageTitle: "Javascript Basics: Scope",
          },
        },
        {
          name: "Closure",
          page: {
            pageComponent: <JavascriptBasicsClosurePage />,
            path: "/javascript/basics/closure",
            pageTitle: "Javascript Basics:Closure",
          },
        },
        {
          name: "Objects",
          page: {
            pageComponent: <JavascriptBasicsObjectsPage />,
            path: "/javascript/basics/objects",
            pageTitle: "Javascript Basics: Objects",
          },
        },
        {
          name: "Prototype",
          page: {
            pageComponent: <JavascriptBasicsPrototypePage />,
            path: "/javascript/basics/prototype",
            pageTitle: "Javascript Basics: Prototype",
          },
        },
      ],
    },
    {
      name: "Arrays",
      page: {
        pageComponent: <JavascriptArraysPage />,
        path: "/javascript/arrays",
        pageTitle: "Javascript Arrays",
      },
    },
    {
      name: "Patterns",
      page: {
        pageComponent: <JavascriptPage />,
        path: "/javascript/patterns",
        pageTitle: "Javascript Patterns",
      },
      children: [
        {
          name: "Module Pattern",
          page: {
            pageComponent: <JavascriptPage />,
            path: "/javascript/patterns/module-pattern",
            pageTitle: "Javascript Patterns: Module",
          },
        },
        {
          name: "Singleton Pattern",
          page: {
            pageComponent: <JavascriptPage />,
            path: "/javascript/patterns/singleton-pattern",
            pageTitle: "Javascript Patterns: Singleton",
          },
        },
        {
          name: "Proxy Pattern",
          page: {
            pageComponent: <JavascriptPage />,
            path: "/javascript/patterns/proxy-pattern",
            pageTitle: "Javascript Patterns: Proxy",
          },
        },
        {
          name: "Observer Pattern",
          page: {
            pageComponent: <JavascriptPage />,
            path: "/javascript/patterns/observer-pattern",
            pageTitle: "Javascript Patterns: Observer",
          },
        },
        {
          name: "Factory Pattern",
          page: {
            pageComponent: <JavascriptPage />,
            path: "/javascript/patterns/factory-pattern",
            pageTitle: "Javascript Patterns: Factory",
          },
        },
        {
          name: "Prototype Pattern",
          page: {
            pageComponent: <JavascriptPage />,
            path: "/javascript/patterns/prototype-pattern",
            pageTitle: "Javascript Patterns: Prototype",
          },
        },
      ],
    },
    {
      name: "Interesting Questions",
      page: {
        pageComponent: <JavascriptInterestingQuestions />,
        path: "/javascript/interesting-questions",
        pageTitle: "Javascript Interesting Questions",
      },
    },
  ],
};
