import { useLocation, useNavigate } from "react-router-dom";
import Accordion from "../accordion/Accordion";
import AccordionSummary from "../accordion/AccordionSummary";
import AccordionDetails from "../accordion/AccordionDetails";
import Typography from "../typography/Typography";
import { UpIcon } from "../icons";
import { cloneElement } from "react";
import TableOfContents from "../../../data/table-of-contents/sections/TableOfContents";
import { SectionType } from "../../../types/tableOfContents";

const SectionButton = ({
  section,
  level = 0,
  pathname,
}: {
  section: SectionType;
  level?: number;
  pathname: string;
}) => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <Accordion style={{ position: "relative" }}>
        <AccordionSummary expandIcon={section.children ? <UpIcon /> : null}>
          <button
            style={{ paddingLeft: `${level * 24}px` }}
            className="flex w-[100%] items-center justify-start"
            onClick={(e) => {
              e.stopPropagation();
              navigate(section.page.path);
            }}
          >
            {section.icon &&
              cloneElement(section.icon, { className: "mr-3", color: "black" })}
            <Typography>{section.name}</Typography>
          </button>
        </AccordionSummary>
        <AccordionDetails>
          {section.children &&
            section.children.map((subSection: SectionType, index: number) => (
              <div key={index}>
                <SectionButton
                  key={`${section.name}_${section.page.path}_${index}`}
                  section={subSection}
                  level={level + 1}
                  pathname={section.page.path}
                />
              </div>
            ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const LateralMenu = () => {
  const location = useLocation();
  return (
    <div className="grid grid-cols-1 justify-start">
      {TableOfContents.map((section: SectionType) => (
        <SectionButton
          key={section.page.path}
          section={section}
          pathname={location.pathname}
        />
      ))}
    </div>
  );
};

export default LateralMenu;
