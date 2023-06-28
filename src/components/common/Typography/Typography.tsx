import { ReactElement, createElement } from "react";
import TYPOGRAPHY_DATA from "./TypographyData";
import { FontType } from "./types/TypographyType";
import Styles from "../../types/style";

const Typography = ({
  variant = "body1",
  children,
  paragraph,
  gutterBottom,
  component,
  style = {},
}: ComponentProps) => {
  return createElement(
    paragraph
      ? TYPOGRAPHY_DATA.paragraph.component
      : component
      ? TYPOGRAPHY_DATA[component].component
      : TYPOGRAPHY_DATA[variant].component,
    {
      className: `${TYPOGRAPHY_DATA[variant].className} ${
        gutterBottom ? GUTTER_BOTTOM : ""
      }`,
      style,
    },
    children
  );
};

export default Typography;

const GUTTER_BOTTOM = "mb-3";

type ComponentProps = {
  component?: FontType;
  variant?: FontType;
  children: ReactElement | string;
  paragraph?: boolean;
  gutterBottom?: boolean;
  style?: Styles;
  fontSize?: string;
};

Typography.defaultProps = {
  variant: "body1",
  paragraph: false,
  gutterBottom: false,
};
