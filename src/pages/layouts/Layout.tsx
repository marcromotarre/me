import { useState } from "react";

import { Provider as HeaderProvider } from "../../context/headerContext";
import Header from "../../components/Header";

function Layout({ children }) {
  const headerHook = useState({});
  return (
    <HeaderProvider value={headerHook}>
      <div className="remix-app">
        <Header />
        <div className="content-container">
          <div className="main">{children}</div>
        </div>
      </div>
      {/* header */}
    </HeaderProvider>
  );
}

export default function App({ children }) {
  return <Layout>{children}</Layout>;
}
