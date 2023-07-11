import PackageManagersNpmPage from "../../../pages/package-managers/PackageManagersNpmPage";
import PackageManagersPage from "../../../pages/package-managers/PackageManagersPage";
import PackageManagersYarnPage from "../../../pages/package-managers/PackageManagersYarnPage";

export default {
  name: "Package Managers",
  page: {
    pageComponent: <PackageManagersPage />,
    pageTitle: "Package Managers",
    path: "/package-managers",
  },
  children: [
    {
      name: "NPM",
      page: {
        pageComponent: <PackageManagersNpmPage />,
        pageTitle: "Package Managers: NPM",
        path: "/package-managers/npm",
      },
    },
    {
      name: "Yarn",
      page: {
        pageComponent: <PackageManagersYarnPage />,
        pageTitle: "Package Managers: Yarn",
        path: "/package-managers/yarn",
      },
    },
  ],
};
