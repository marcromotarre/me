import { ReactIcon, ReactQueryIcon } from "../../../components/common/icons";
import ReactHooksPage from "../../../pages/ReactHooksPage";
import ReactMyComponentsButtonCodePage from "../../../pages/ReactMyComponentsButtonCodePage";
import ReactMyComponentsButtonPage from "../../../pages/ReactMyComponentsButtonPage";
import ReactMyComponentsButtonSnapshotsPage from "../../../pages/ReactMyComponentsButtonSnapshotsPage";
import ReactMyComponentsButtonTestsPage from "../../../pages/ReactMyComponentsButtonTestsPage";
import ReactMyComponentsButtonUsePage from "../../../pages/ReactMyComponentsButtonUsePage";
import ReactMyComponentsIcon from "../../../pages/ReactMyComponentsIconPage";
import ReactMyComponentsModal from "../../../pages/ReactMyComponentsModal";
import ReactMyComponents from "../../../pages/ReactMyComponentsPage";
import ReactPage from "../../../pages/react/ReactPage";
import ReactInterestingQuestions from "../../../pages/react/interesting-questions/ReactInterestingQuestions";
import ReactMyComponentsAccordionPage from "../../../pages/react/my-components/ReactMyComponentsAccordionPage";
import ReactMyComponentsAlertPage from "../../../pages/react/my-components/ReactMyComponentsAlertPage";
import ReactMyComponentsBreadcrumbPage from "../../../pages/react/my-components/ReactMyComponentsBreadcrumbPage";
import ReactMyComponentsCardPage from "../../../pages/react/my-components/ReactMyComponentsCardPage";
import ReactMyComponentsTypographyPage from "../../../pages/react/my-components/ReactMyComponentsTypographyPage";
import ReactMyComponentsCalendarPage from "../../../pages/react/my-components/calendar/ReactMyComponentsCalendarPage";
import ReactMyComponentsListPage from "../../../pages/react/my-components/list/ReactMyComponentsListPage";
import ReactPatternsCompoundComponentPage from "../../../pages/react/patterns/ReactPatternsCompoundComponentPage";
import ReactPatternsContainerPresentationPage from "../../../pages/react/patterns/ReactPatternsContainerPresentationPage";
import ReactPatternsHigherOrderComponentPage from "../../../pages/react/patterns/ReactPatternsHigherOrderComponentPage";
import ReactPatternsHooksPage from "../../../pages/react/patterns/ReactPatternsHooksPage";
import ReactPatternsPage from "../../../pages/react/patterns/ReactPatternsPage";
import ReactPatternsProviderPage from "../../../pages/react/patterns/ReactPatternsProviderPage";
import ReactPatternsRenderPropsPage from "../../../pages/react/patterns/ReactPatternsRenderPropsPage";
import ReactReactQueryPage from "../../../pages/react/react-query/ReactReactQueryPage";
import ReactContextApiPage from "../../../pages/react/state-managers/ReactContextApiPage";
import ReactRecoilPage from "../../../pages/react/state-managers/ReactRecoilPage";
import ReactReduxPage from "../../../pages/react/state-managers/ReactReduxPage";
import ReactStateManagersPage from "../../../pages/react/state-managers/ReactStateManagersPage";
import ReactZustandPage from "../../../pages/react/state-managers/ReactZustandPage";

export default {
  name: "React",
  page: {
    pageComponent: <ReactPage />,
    path: "/react",
    pageTitle: "React",
  },
  icon: <ReactIcon />,
  children: [
    {
      name: "My Components",
      page: {
        pageComponent: <ReactMyComponents />,
        path: "/react/my-components",
        pageTitle: "React: My Components",
      },
      children: [
        {
          name: "Button",
          page: {
            pageComponent: <ReactMyComponentsButtonPage />,
            path: "/react/my-components/button",
            pageTitle: "React: My Components",
          },
          children: [
            {
              name: "Use",
              page: {
                pageComponent: <ReactMyComponentsButtonUsePage />,
                path: "/react/my-components/button/use",
                pageTitle: "React: My Components",
              },
            },
            {
              name: "Code",
              page: {
                pageComponent: <ReactMyComponentsButtonCodePage />,
                path: "/react/my-components/button/code",
                pageTitle: "React: My Components",
              },
            },
            {
              name: "Testing",
              page: {
                pageComponent: <ReactMyComponentsButtonTestsPage />,
                path: "/react/my-components/button/tests",
                pageTitle: "React: My Components",
              },
            },
            {
              name: "Snapshots",
              page: {
                pageComponent: <ReactMyComponentsButtonSnapshotsPage />,
                path: "/react/my-components/button/snapshots",
                pageTitle: "React: My Components",
              },
            },
          ],
        },
        {
          name: "Alert",
          page: {
            pageComponent: <ReactMyComponentsAlertPage />,
            path: "/react/my-components/alert",
            pageTitle: "React My Components: Alert",
          },
        },
        {
          name: "Accordion",
          page: {
            pageComponent: <ReactMyComponentsAccordionPage />,
            path: "/react/my-components/accordion",
            pageTitle: "React My Components: Accordion",
          },
        },
        {
          name: "Breadcrumb",
          page: {
            pageComponent: <ReactMyComponentsBreadcrumbPage />,
            path: "/react/my-components/breadcrumb",
            pageTitle: "React My Components: Breadcrumb",
          },
        },
        {
          name: "Card",
          page: {
            pageComponent: <ReactMyComponentsCardPage />,
            path: "/react/my-components/card",
            pageTitle: "React My Components: Card",
          },
        },
        {
          name: "Typography",
          page: {
            pageComponent: <ReactMyComponentsTypographyPage />,
            path: "/react/my-components/typography",
            pageTitle: "React My Components: Typography",
          },
        },
        {
          name: "Modal",
          page: {
            pageComponent: <ReactMyComponentsModal />,
            path: "/react/my-components/modal",
            pageTitle: "React My Components: Modal",
          },
        },
        {
          name: "Icon",
          page: {
            pageComponent: <ReactMyComponentsIcon />,
            path: "/react/my-components/icon",
            pageTitle: "React My Components: Icon",
          },
        },
        {
          name: "List",
          page: {
            pageComponent: <ReactMyComponentsListPage />,
            path: "/react/my-components/list",
            pageTitle: "React My Components: List",
          },
        },
        {
          name: "Calendar",
          page: {
            pageComponent: <ReactMyComponentsCalendarPage />,
            path: "/react/my-components/calendar",
            pageTitle: "React My Components: Calendar",
          },
        },
      ],
    },
    {
      name: "Hooks",
      page: {
        pageComponent: <ReactHooksPage />,
        path: "/react/hooks",
        pageTitle: "React Hooks",
      },
      children: [
        {
          name: "useState",
          page: {
            pageComponent: <ReactHooksPage />,
            path: "/react/hooks/useState",
            pageTitle: "React Hooks: useState",
          },
        },
        {
          name: "useEffect",
          page: {
            pageComponent: <ReactHooksPage />,
            path: "/react/hooks/useEffect",
            pageTitle: "React Hooks: useEffect",
          },
        },
        {
          name: "useLayoutEffect",
          page: {
            pageComponent: <ReactHooksPage />,
            path: "/react/hooks/useLayoutEffect",
            pageTitle: "React Hooks: useLayoutEffect",
          },
        },
        {
          name: "useMemo",
          page: {
            pageComponent: <ReactHooksPage />,
            path: "/react/hooks/useMemo",
            pageTitle: "React Hooks: useMemo",
          },
        },
      ],
    },
    {
      name: "Patterns",
      page: {
        pageComponent: <ReactPatternsPage />,
        path: "/react/patterns",
        pageTitle: "React Patterns",
      },
      children: [
        {
          name: "Container Presentation Pattern",
          page: {
            pageComponent: <ReactPatternsContainerPresentationPage />,
            path: "/react/patterns/container-presentation",
            pageTitle: "React Patterns: Container Presentation",
          },
        },
        {
          name: "HOC Pattern",
          page: {
            pageComponent: <ReactPatternsHigherOrderComponentPage />,
            path: "/react/patterns/hoc-pattern",
            pageTitle: "React Patterns: Higher Order Component",
          },
        },
        {
          name: "Render Props Pattern",
          page: {
            pageComponent: <ReactPatternsRenderPropsPage />,
            path: "/react/patterns/render-props-pattern",
            pageTitle: "React Patterns: Render Props",
          },
        },
        {
          name: "Provider Pattern",
          page: {
            pageComponent: <ReactPatternsProviderPage />,
            path: "/react/patterns/provider-pattern",
            pageTitle: "React Patterns: Provider",
          },
        },
        {
          name: "Compound Component Pattern",
          page: {
            pageComponent: <ReactPatternsCompoundComponentPage />,
            path: "/react/patterns/compound-component-pattern",
            pageTitle: "React Patterns: Compound Component Pattern",
          },
        },
        {
          name: "Hooks Pattern",
          page: {
            pageComponent: <ReactPatternsHooksPage />,
            path: "/react/patterns/hooks-pattern",
            pageTitle: "React Patterns: Hooks",
          },
        },
        {
          name: "Conditional Rendering Design Pattern",
          page: {
            pageComponent: <ReactPatternsPage />,
            path: "/react/patterns/conditional-rendering-design-pattern",
            pageTitle: "React Patterns: Conditional Rendering Design",
          },
        },
      ],
    },
    {
      name: "State Managers",
      page: {
        pageComponent: <ReactStateManagersPage />,
        path: "/react/state-managers",
        pageTitle: "React: State Managers",
      },
      /*children: [
        {
          name: "Context Api",
          page: {
            pageComponent: <ReactContextApiPage />,
            path: "/react/state-managers/context-api",
            pageTitle: "React State Managers: Context API",
          },
        },
        {
          name: "Redux",
          page: {
            pageComponent: <ReactReduxPage />,
            path: "/react/state-managers/redux",
            pageTitle: "React State Managers: Redux",
          },
        },
        {
          name: "Recoil",
          page: {
            pageComponent: <ReactRecoilPage />,
            path: "/react/state-managers/recoil",
            pageTitle: "React State Managers: Recoil",
          },
        },
        {
          name: "Zustand",
          page: {
            pageComponent: <ReactZustandPage />,
            path: "/react/state-managers/zustand",
            pageTitle: "React State Managers: Zustand",
          },
        },
      ],*/
    },
    {
      name: "React Query",
      page: {
        pageComponent: <ReactReactQueryPage />,
        path: "/react/react-query",
        pageTitle: "React Query",
      },
      icon: <ReactQueryIcon color="red" />,
    },
    {
      name: "Interesting Questions",
      page: {
        pageComponent: <ReactInterestingQuestions />,
        path: "/react/interesting-questions",
        pageTitle: "React: Interesting Questions",
      },
    },
  ],
};
