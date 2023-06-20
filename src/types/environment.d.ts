export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_ICONS_ROUTE: string;
      ENV: "test" | "dev" | "prod";
    }
  }
}
