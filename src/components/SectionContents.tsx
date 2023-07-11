import { useNavigate } from "react-router-dom";
import { SectionType } from "../types/tableOfContents";
import List from "./common/list/List";
import ListItem from "./common/list/ListItem";
import Typography from "./common/typography/Typography";

export default function SectionContents({ section }: { section: SectionType }) {
  const subSections = section.children;
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h6">
        Click on any section in {section.name} section:
      </Typography>
      <List>
        {subSections?.map((subSection) => (
          <ListItem>
            <button
              onClick={() => {
                if (subSection.page?.path) {
                  navigate(subSection.page?.path);
                }
              }}
            >
              <Typography>{subSection.name}</Typography>
            </button>
          </ListItem>
        ))}
      </List>
    </>
  );
}
