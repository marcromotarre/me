import { ReactElement, cloneElement } from "react";
import Styles from "../../types/style";

const AccordionSummary = ({
  expandIcon,
  children,
  style = {},
}: ComponentProps) => {
  return (
    <div style={style} className="grid w-[100%] grid-cols-[auto_20px] p-3">
      <div className="self-center">{children}</div>
      {expandIcon &&
        cloneElement(expandIcon, { size: "15", className: "self-center" })}
    </div>
  );
};

type ComponentProps = {
  expandIcon?: ReactElement | undefined;
  children?: ReactElement | ReactElement[];
  style?: Styles;
  __TYPE: "AccordionSummary";
};

AccordionSummary.defaultProps = {
  __TYPE: "AccordionSummary",
};

export default AccordionSummary;
