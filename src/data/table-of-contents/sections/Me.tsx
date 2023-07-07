import MePage from "../../../pages/me/MePage";
import { SectionType } from "../../../types/tableOfContents";

export default {
  name: "Me",
  page: { pageComponent: <MePage />, pageTitle: "Me", path: "/me" },
} as SectionType;
