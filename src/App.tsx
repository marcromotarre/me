import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import JavascriptPage from "./pages/javascript/JavascriptPage";
import { Provider } from "react-redux";
import store from "./store";
import ReactPage from "./pages/react/ReactPage";
import ReduxPage from "./pages/ReduxPage";
import GitPage from "./pages/GitPage";
import ReactHooksPage from "./pages/ReactHooksPage";
import ReactMyComponents from "./pages/ReactMyComponentsPage";
import ReactMyComponentsIcon from "./pages/ReactMyComponentsIconPage";
import ReactMyComponentsModal from "./pages/ReactMyComponentsModal";
import Layout from "./pages/layouts/Layout";
import ReactMyComponentsButtonPage from "./pages/ReactMyComponentsButtonPage";
import ReactMyComponentsButtonUsePage from "./pages/ReactMyComponentsButtonUsePage";
import ReactMyComponentsButtonTestsPage from "./pages/ReactMyComponentsButtonTestsPage";
import ReactMyComponentsButtonSnapshotsPage from "./pages/ReactMyComponentsButtonSnapshotsPage";
import ReactMyComponentsButtonCodePage from "./pages/ReactMyComponentsButtonCodePage";
import ReactPatternsPage from "./pages/react/patterns/ReactPatternsPage";
import ReactPatternsHigherOrderComponentPage from "./pages/react/patterns/ReactPatternsHigherOrderComponentPage";
import ReactPatternsConditionalRenderingDesignPage from "./pages/react/patterns/ReactPatternsConditionalRenderingDesignPage";
import ReactPatternsHooksPage from "./pages/react/patterns/ReactPatternsHooksPage";
import ReactPatternsCompoundComponentPage from "./pages/react/patterns/ReactPatternsCompoundComponentPage";
import ReactPatternsProviderPage from "./pages/react/patterns/ReactPatternsProviderPage";
import ReactPatternsContainerPresentationPage from "./pages/react/patterns/ReactPatternsContainerPresentationPage";
import ReactPatternsRenderPropsPage from "./pages/react/patterns/ReactPatternsRenderPropsPage";
import ReactMyComponentsAlertPage from "./pages/react/my-components/ReactMyComponentsAlertPage";
import ReactMyComponentsTypographyPage from "./pages/react/my-components/ReactMyComponentsTypographyPage";
import ReactMyComponentsCardPage from "./pages/react/my-components/ReactMyComponentsCardPage";
import JavascriptArraysPage from "./pages/javascript/array/JavascriptArraysPage";
import ReactMyComponentsAccordionPage from "./pages/react/my-components/ReactMyComponentsAccordionPage";
import ReactMyComponentsBreadcrumbUsePage from "./pages/react/my-components/breadcrumb/ReactMyComponentsBreadcrumbUsePage";
import ReactReactQueryPage from "./pages/react/react-query/ReactReactQueryPage";
import ReactInterestingQuestions from "./pages/react/interesting-questions/ReactInterestingQuestions";
import JavascriptInterestingQuestions from "./pages/javascript/interesting-questions/JavascriptInterestingQuestions";
import JavascriptBasicsTypesPage from "./pages/javascript/basics/types/JavascriptBasicsTypesPage";
import JavascriptBasicsPage from "./pages/javascript/basics/JavascriptBasicsPage";
import JavascriptBasicsCoercionPage from "./pages/javascript/basics/coercion/JavascriptBasicsCoercionPage";
import JavascriptBasicsEqualityPage from "./pages/javascript/basics/equality/JavascriptBasicsEqualityPage";
import JavascriptBasicsStaticTypingTypesPage from "./pages/javascript/basics/static-typing/JavascriptBasicsStaticTypingTypesPage";
import JavascriptBasicsScopePage from "./pages/javascript/basics/scope/JavascriptBasicsScopePage";
import JavascriptBasicsClosurePage from "./pages/javascript/basics/closure/JavascriptBasicsClosurePage";
import JavascriptBasicsPrototypePage from "./pages/javascript/basics/prototype/JavascriptBasicsPrototypePage";
import JavascriptBasicsObjectsPage from "./pages/javascript/basics/objects/JavascriptBasicsObjectsPage";
import ProjectSetupPage from "./pages/project-setup/ProjectSetupPage";
import MePage from "./pages/me/MePage";
import TableOfContentsPage from "./pages/TableOfContentsPage";
import TypescriptPage from "./pages/typescript/TypescriptPage";
import PackageManagersPage from "./pages/package-managers/PackageManagersPage";
import PackageManagersYarnPage from "./pages/package-managers/PackageManagersYarnPage";
import ProjectSetupBundlers from "./pages/project-setup/bundlers/ProjectSetupBundlers";
import ProjectSetupBundlersWebpack from "./pages/project-setup/bundlers/webpack/ProjectSetupBundlersWebpack";
import ProjectSetupBundlersParcel from "./pages/project-setup/bundlers/parcel/ProjectSetupBundlersParcel";
import ProjectSetupBundlersVite from "./pages/project-setup/bundlers/vite/ProjectSetupBundlersVite";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<TableOfContentsPage />} />
              <Route path="/me" element={<MePage />} />
              <Route
                path="/package-managers"
                element={<PackageManagersPage />}
              />
              <Route
                path="/package-managers/yarn"
                element={<PackageManagersYarnPage />}
              />
              <Route
                path="/package-managers/npm"
                element={<PackageManagersYarnPage />}
              />
              <Route path="/project-setup" element={<ProjectSetupPage />} />
              <Route
                path="/project-setup/bundlers"
                element={<ProjectSetupBundlers />}
              />
              <Route
                path="/project-setup/bundlers/webpack"
                element={<ProjectSetupBundlersWebpack />}
              />
              <Route
                path="/project-setup/bundlers/parcel"
                element={<ProjectSetupBundlersParcel />}
              />
              <Route
                path="/project-setup/bundlers/vite"
                element={<ProjectSetupBundlersVite />}
              />
              <Route path="/javascript" element={<JavascriptPage />} />
              <Route
                path="/javascript/basics"
                element={<JavascriptBasicsPage />}
              />
              <Route
                path="/javascript/basics/types"
                element={<JavascriptBasicsTypesPage />}
              />
              <Route
                path="/javascript/basics/coercion"
                element={<JavascriptBasicsCoercionPage />}
              />
              <Route
                path="/javascript/basics/equality"
                element={<JavascriptBasicsEqualityPage />}
              />
              <Route
                path="/javascript/basics/static-typing"
                element={<JavascriptBasicsStaticTypingTypesPage />}
              />
              <Route
                path="/javascript/basics/scope"
                element={<JavascriptBasicsScopePage />}
              />
              <Route
                path="/javascript/basics/closure"
                element={<JavascriptBasicsClosurePage />}
              />
              <Route
                path="/javascript/basics/objects"
                element={<JavascriptBasicsObjectsPage />}
              />
              <Route
                path="/javascript/basics/prototype"
                element={<JavascriptBasicsPrototypePage />}
              />
              <Route
                path="/javascript/interesting-questions"
                element={<JavascriptInterestingQuestions />}
              />
              <Route
                path="/javascript/arrays"
                element={<JavascriptArraysPage />}
              />
              <Route path="/react/" element={<ReactPage />} />
              <Route path="/react/hooks" element={<ReactHooksPage />} />
              <Route
                path="/react/my-components"
                element={<ReactMyComponents />}
              />
              <Route
                path="/react/my-components/button"
                element={<ReactMyComponentsButtonPage />}
              />
              <Route
                path="/react/my-components/button/use"
                element={<ReactMyComponentsButtonUsePage />}
              />
              <Route
                path="/react/my-components/button/code"
                element={<ReactMyComponentsButtonCodePage />}
              />
              <Route
                path="/react/my-components/button/tests"
                element={<ReactMyComponentsButtonTestsPage />}
              />
              <Route
                path="/react/my-components/button/snapshots"
                element={<ReactMyComponentsButtonSnapshotsPage />}
              />
              <Route
                path="/react/my-components/alert"
                element={<ReactMyComponentsAlertPage />}
              />
              <Route
                path="/react/my-components/typography"
                element={<ReactMyComponentsTypographyPage />}
              />
              <Route
                path="/react/my-components/accordion"
                element={<ReactMyComponentsAccordionPage />}
              />
              <Route
                path="/react/my-components/breadcrumb"
                element={<ReactMyComponentsBreadcrumbUsePage />}
              />
              <Route
                path="/react/my-components/card"
                element={<ReactMyComponentsCardPage />}
              />
              <Route
                path="/react/my-components/icon"
                element={<ReactMyComponentsIcon />}
              />
              <Route
                path="/react/my-components/modal"
                element={<ReactMyComponentsModal />}
              />
              <Route path="/react/patterns" element={<ReactPatternsPage />} />
              <Route
                path="/react/patterns/container-presentation"
                element={<ReactPatternsContainerPresentationPage />}
              />
              <Route
                path="/react/patterns/hoc-pattern"
                element={<ReactPatternsHigherOrderComponentPage />}
              />
              <Route
                path="/react/patterns/render-props-pattern"
                element={<ReactPatternsRenderPropsPage />}
              />
              <Route
                path="/react/patterns/provider-pattern"
                element={<ReactPatternsProviderPage />}
              />
              <Route
                path="/react/patterns/compound-component-pattern"
                element={<ReactPatternsCompoundComponentPage />}
              />
              <Route
                path="/react/patterns/hooks-pattern"
                element={<ReactPatternsHooksPage />}
              />
              <Route
                path="/react/patterns/conditional-rendering-design-pattern"
                element={<ReactPatternsConditionalRenderingDesignPage />}
              />
              <Route
                path="/react/react-query"
                element={<ReactReactQueryPage />}
              />
              <Route
                path="/react/interesting-questions"
                element={<ReactInterestingQuestions />}
              />
              <Route path="/typescript" element={<TypescriptPage />} />

              <Route path="/redux/" element={<ReduxPage />} />
              <Route path="/git/" element={<GitPage />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
