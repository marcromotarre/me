export default {
  path: "/testing",
  name: "Testing",
  children: [
    { path: "/testing/unit-testing", name: "Unit Testing" },
    { path: "/testing/integration-testing", name: "Integration Testing" },
    { path: "/testing/integration-end-to-end", name: "E2E (End to End)" },
    { path: "/testing/react-testing-library", name: "React Testing Library" },
    { path: "/testing/jest", name: "Jest" },
    {
      path: "/testing/cypress",
      name: "Cypress",
      children: [
        { path: "/testing/cypress-components", name: "Cypress Components" },
      ],
    },
  ],
};
