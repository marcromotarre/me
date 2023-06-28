import { useLocation, useNavigate } from "react-router-dom";
import pages from "../../../data/LateralMenu";
import Accordion from "../accordion/Accordion";
import AccordionSummary from "../accordion/AccordionSummary";
import AccordionDetails from "../accordion/AccordionDetails";
import Typography from "../typography/Typography";
import { UpIcon } from "../icons";
import { cloneElement } from "react";
import { relative } from "path";

const PageButton = ({
  page,
  level = 0,
  pathname,
}: {
  page: Page;
  level?: number;
  pathname: string;
}) => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <Accordion style={{ position: "relative" }}>
        <AccordionSummary expandIcon={page.children ? <UpIcon /> : null}>
          <button
            style={{ paddingLeft: `${level * 24}px` }}
            className="flex w-[100%] items-center justify-start"
            onClick={(e) => {
              e.stopPropagation();
              navigate(page.path);
            }}
          >
            {page.icon &&
              cloneElement(page.icon, { className: "mr-3", color: "black" })}
            <Typography>{page.name}</Typography>
          </button>
        </AccordionSummary>
        <AccordionDetails>
          {page.children &&
            page.children.map((subpage: Page, index) => (
              <div>
                <PageButton
                  key={`${page.name}_${page.path}_${index}`}
                  page={subpage}
                  level={level + 1}
                  pathname={pathname}
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
      {pages.map((page: Page) => (
        <PageButton key={page.path} page={page} pathname={location.pathname} />
      ))}
    </div>
  );
};

export default LateralMenu;

type Page = {
  name: string;
  path: string;
  children?: Array<Page>;
};
