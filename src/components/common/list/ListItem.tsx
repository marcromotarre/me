import { ReactElement } from "react";
import Styles from "../../types/style";
import Typography from "../typography/Typography";

export default function ListItem({ children, style = {} }: ComponentProps) {
  return (
    <li style={style}>
      <>
        {typeof children == "string" ? (
          <Typography>{children}</Typography>
        ) : (
          <div style={{ width: "100%" }}>{children}</div>
        )}
      </>
    </li>
  );
}

export type ComponentProps = {
  children?: string | ReactElement | Array<ReactElement>;
  style?: Styles;
  __TYPE?: string;
};

ListItem.defaultProps = {
  __TYPE: "ListItem",
};
