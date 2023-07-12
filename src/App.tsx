import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layouts/Layout";
import { generateAllRoutes } from "./utils/tableOfContentsUtils";
import TableOfContents from "./data/table-of-contents/TableOfContents";

const App = () => {
  const queryClient = new QueryClient();
  const tableOfContentsRoutes = generateAllRoutes(TableOfContents);
  console.log(tableOfContentsRoutes);
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>{tableOfContentsRoutes}</Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
