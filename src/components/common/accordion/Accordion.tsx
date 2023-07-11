import React, { ReactElement, cloneElement, useState } from "react";
import Styles from "../../types/style";

const Accordion = ({ children, style = {} }: ComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const accordionSummary = [
    ...(Array.isArray(children) ? children : [children]),
  ].filter((child) => child?.props.__TYPE === "AccordionSummary");

  const accordionDetails = [
    ...(Array.isArray(children) ? children : [children]),
  ].filter((child) => child?.props.__TYPE === "AccordionDetails");
  return (
    <div className="w-[100%] " style={style}>
      <div
        className={`flex  w-[100%] justify-center`}
        onClick={(e) => {
          e.preventDefault();
          if (accordionDetails) setIsOpen(!isOpen);
        }}
      >
        {cloneElement(accordionSummary[0], {})}
      </div>

      {isOpen && cloneElement(accordionDetails[0], {})}
    </div>
  );
};

type ComponentProps = {
  children: ReactElement | ReactElement[];
  style?: Styles;
};

export default Accordion;
