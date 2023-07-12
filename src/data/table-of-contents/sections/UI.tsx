import UiPage from "../../../pages/ui/UiPage";
import UiDataBindingPage from "../../../pages/ui/data-binding/UiDataBindingPage";
import UiJavascriptDomEventsPage from "../../../pages/ui/javascript-dom-events/UiJavascriptDomEventsPage";
import UIStateAndViewPage from "../../../pages/ui/state-and-view/UIStateAndViewPage";
import { SectionType } from "../../../types/tableOfContents";

export default {
  name: "UI",
  page: {
    pageComponent: <UiPage />,
    pageTitle: "UI",
    path: "/ui",
  },
  children: [
    {
      name: "State & View",
      page: {
        pageComponent: <UIStateAndViewPage />,
        pageTitle: "UI: State & View",
        path: "/ui/state-and-view",
      },
    },
    {
      name: "Js, DOM & Events",
      page: {
        pageComponent: <UiJavascriptDomEventsPage />,
        pageTitle: "UI: Javascript, DOM & Events",
        path: "/ui/javascript-dom-events",
      },
    },
    {
      name: "Data-Binding",
      page: {
        pageComponent: <UiDataBindingPage />,
        pageTitle: "UI: Data-Binding",
        path: "/ui/data-binding",
      },
    },
  ],
} as SectionType;
