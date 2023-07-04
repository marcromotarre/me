export default {
  path: "/project-setup",
  name: "Project Setup",
  children: [
    {
      path: "/project-setup/bundlers",
      name: "Bundlers",
      children: [
        {
          path: "/project-setup/bundlers/webpack",
          name: "Webpack",
        },
        {
          path: "/project-setup/bundlers/parcel",
          name: "Parcel",
        },
        {
          path: "/project-setup/bundlers/vite",
          name: "Vite",
        },
      ],
    },
    { path: "/project-setup/prettier", name: "Prettier" },
    { path: "/project-setup/eslint", name: "ESLint" },
  ],
};
