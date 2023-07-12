import { TableOfContents } from "../../types/tableOfContents";
import JavascriptSection from "./sections/Javascript";
import MeSection from "./sections/Me";
import PackageManagersSection from "./sections/PackageManagers";
import ProjectSetupSection from "./sections/ProjectSetup";
import ReactSection from "./sections/React";
import UiSection from "./sections/UI";
import TypescriptSection from "./sections/Typescript";

export default [
  MeSection,
  //ProjectSetupSection,
  PackageManagersSection,
  UiSection,
  ReactSection,
  JavascriptSection,
  TypescriptSection,
] as TableOfContents;
