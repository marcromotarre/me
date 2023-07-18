import SectionContents from "../components/SectionContents";
import Typography from "../components/common/typography/Typography";
import TableOfContents from "../data/table-of-contents/TableOfContents";

export default function MainPage() {
  const section = { name: "main", children: [...TableOfContents] };
  return <SectionContents section={section} />;
}
