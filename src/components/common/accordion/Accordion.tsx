import React, { ReactElement, cloneElement, useState } from "react";
import AccordionDetails from "./AccordionDetails";
import AccordionSummary from "./AccordionSummary";

const Accordion = ({ children, style = {} }: ComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const AccordionSummaryMemo = React.memo(AccordionSummary);
  const AccordionDetailsMemo = React.memo(AccordionDetails);

  const accordionSummary = children.find(
    (child) => child.type.name === AccordionSummaryMemo.type.name
  );

  const accordionDetails = children.find(
    (child) => child.type.name === AccordionDetailsMemo.type.name
  );

  return (
    <div className="w-[100%] " style={style}>
      <div
        className={`flex  w-[100%] justify-center`}
        onClick={(e) => {
          e.preventDefault();
          if (accordionDetails) setIsOpen(!isOpen);
        }}
      >
        {cloneElement(accordionSummary, {})}
      </div>

      {isOpen && cloneElement(accordionDetails, {})}
    </div>
  );
};

type ComponentProps = {
  children: Array<ReactElement>;
  expandMoreIcon: Array<ReactElement>;
};

export default Accordion;
