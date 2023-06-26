import { ReactElement, cloneElement } from "react";

const AccordionSummary = ({ expandIcon, children }: ComponentProps) => {
  return (
    <div className="grid w-[100%] grid-cols-[auto_50px] p-3">
      <div className="self-center">{children}</div>
      {cloneElement(expandIcon, { size: "15", className: "self-center" })}
    </div>
  );
};

type ComponentProps = {
  expandIcon: ReactElement;
};

export default AccordionSummary;
