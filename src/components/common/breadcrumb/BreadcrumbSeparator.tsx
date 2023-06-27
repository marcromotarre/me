import { ReactElement, cloneElement } from "react";
import Typography from "../Typography/Typography";
import Styles from "../../types/style";

const BreadcrumbSeparator = ({ separator, style }: ComponentProps) => {
  return (
    <div className="ml-2 mr-2 flex items-center justify-center">
      {typeof separator === "string" ? (
        <Typography style={{ ...defaultStyles, ...style }}>
          {separator}
        </Typography>
      ) : (
        cloneElement(separator, { ...style })
      )}
    </div>
  );
};

type ComponentProps = { separator: string | ReactElement; style: Styles };

const defaultStyles: Styles = {
  color: "black",
};

export default BreadcrumbSeparator;