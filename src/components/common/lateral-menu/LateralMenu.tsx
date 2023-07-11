import { useLocation, useNavigate } from "react-router-dom";
import Accordion from "../accordion/Accordion";
import AccordionSummary from "../accordion/AccordionSummary";
import AccordionDetails from "../accordion/AccordionDetails";
import Typography from "../typography/Typography";
import { UpIcon } from "../icons";
import { cloneElement } from "react";
import TableOfContents from "../../../data/table-of-contents/sections/TableOfContents";
import {
  SectionType,
  SectionTypeWithPage,
} from "../../../types/tableOfContents";
import {
  getAllPages,
  getAllSectionsWithPage,
} from "../../../utils/tableOfContentsUtils";

/*const SectionButton = ({
  section,
  level = 0,
  pathname,
}: {
  section: SectionType;
  level?: number;
  pathname: string;
}) => {
  const navigate = useNavigate();
  <return (
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
      </Accordion>>
    </div>
  );
};*/

const SectionButton = ({
  section,
  level = 0,
}: {
  section: SectionTypeWithPage;
  level?: number;
}) => {
  const navigate = useNavigate();
  console.log(section);

  return (
    <div className="relative">
      <Accordion style={{ position: "relative", width: "100%" }}>
        <AccordionSummary
          expandIcon={section.children ? <UpIcon /> : undefined}
        >
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

const Section = ({
  section,
  level = 0,
}: {
  section: SectionTypeWithPage;
  level?: number;
}) => {
  const sectionsWithPage = getAllSectionsWithPage(section);
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 justify-start">
      {sectionsWithPage.map((section) => (
        <>
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
                  cloneElement(section.icon, {
                    className: "mr-3",
                    color: "black",
                  })}
                <Typography>{section.name}</Typography>
              </button>
            </AccordionSummary>
            <AccordionDetails>
              {section.children &&
                section.children.map(
                  (subSection: SectionType, index: number) => (
                    <div key={index}>
                      <SectionButton
                        key={`${section.name}_${section.page.path}_${index}`}
                        section={subSection}
                        level={level + 1}
                        pathname={section.page.path}
                      />
                    </div>
                  )
                )}
            </AccordionDetails>
          </Accordion>
        </>
      ))}
    </div>
  );
};

const LateralMenu = () => {
  const location = useLocation();
  const sectionsWithPage = getAllSectionsWithPage(TableOfContents);
  return (
    <div className="grid grid-cols-1 justify-start">
      {sectionsWithPage.map((section) => (
        <Section section={section} key={section.name}></Section>
      ))}
    </div>
  );
};

export default LateralMenu;
