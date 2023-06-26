import { ReactElement } from "react";

const Typography = ({
  variant = "body1",
  children,
  paragraph = false,
  gutterBottom = false,
  component,
  style,
}: ComponentProps) => {
  const _style = { ...defaultStyles, ...style };
  const applyProps = (content: string) => {
    if (paragraph)
      return <p className={classNames({ gutterBottom })[variant]}>{content}</p>;

    if (component) {
      if (component === "h1")
        return (
          <h1 style={_style} className={classNames({ gutterBottom })[variant]}>
            {content}
          </h1>
        );
      if (component === "h2")
        return (
          <h2 style={_style} className={classNames({ gutterBottom })[variant]}>
            {content}
          </h2>
        );
      if (component === "h3")
        return (
          <h3 style={_style} className={classNames({ gutterBottom })[variant]}>
            {content}
          </h3>
        );
      if (component === "h4")
        return (
          <h4 style={_style} className={classNames({ gutterBottom })[variant]}>
            {content}
          </h4>
        );
      if (component === "h5")
        return (
          <h5 style={_style} className={classNames({ gutterBottom })[variant]}>
            {content}
          </h5>
        );
      if (component === "h6")
        return (
          <h6 style={_style} className={classNames({ gutterBottom })[variant]}>
            {content}
          </h6>
        );

      if (component === "subtitle1")
        return (
          <h6 style={_style} className={classNames({ gutterBottom })[variant]}>
            {content}
          </h6>
        );
      if (component === "subtitle2")
        return (
          <h6 className={classNames({ gutterBottom })[variant]}>{content}</h6>
        );
      if (component === "body1")
        return (
          <p style={_style} className={classNames({ gutterBottom })[variant]}>
            {content}
          </p>
        );
      if (component === "body2")
        return (
          <p style={_style} className={classNames({ gutterBottom })[variant]}>
            {content}
          </p>
        );
      if (component === "button")
        return (
          <span
            style={_style}
            className={classNames({ gutterBottom })[variant]}
          >
            {content}
          </span>
        );
      if (component === "caption")
        return (
          <span
            style={_style}
            className={classNames({ gutterBottom })[variant]}
          >
            {content}
          </span>
        );
      if (component === "overline")
        return (
          <span
            style={_style}
            className={classNames({ gutterBottom })[variant]}
          >
            {content}
          </span>
        );
    }

    if (variant === "h1")
      return (
        <h1 style={_style} className={classNames({ gutterBottom }).h1}>
          {content}
        </h1>
      );
    if (variant === "h2")
      return (
        <h2 style={_style} className={classNames({ gutterBottom }).h2}>
          {content}
        </h2>
      );
    if (variant === "h3")
      return (
        <h3 style={_style} className={classNames({ gutterBottom }).h3}>
          {content}
        </h3>
      );
    if (variant === "h4")
      return (
        <h4 style={_style} className={classNames({ gutterBottom }).h4}>
          {content}
        </h4>
      );
    if (variant === "h5")
      return (
        <h5 style={_style} className={classNames({ gutterBottom }).h5}>
          {content}
        </h5>
      );
    if (variant === "h6")
      return (
        <h6 style={_style} className={classNames({ gutterBottom }).h6}>
          {content}
        </h6>
      );

    if (variant === "subtitle1")
      return (
        <h6 style={_style} className={classNames({ gutterBottom }).subtitle1}>
          {content}
        </h6>
      );
    if (variant === "subtitle2")
      return (
        <h6 style={_style} className={classNames({ gutterBottom }).subtitle2}>
          {content}
        </h6>
      );
    if (variant === "body1")
      return (
        <p style={_style} className={classNames({ gutterBottom }).body1}>
          {content}
        </p>
      );
    if (variant === "body2")
      return (
        <p style={_style} className={classNames({ gutterBottom }).body2}>
          {content}
        </p>
      );
    if (variant === "button")
      return (
        <span style={_style} className={classNames({ gutterBottom }).button}>
          {content}
        </span>
      );
    if (variant === "caption")
      return (
        <span style={_style} className={classNames({ gutterBottom }).caption}>
          {content}
        </span>
      );
    if (variant === "overline")
      return (
        <span style={_style} className={classNames({ gutterBottom }).overline}>
          {content}
        </span>
      );
  };

  return <>{typeof children === "string" && applyProps(children)}</>;
};

export default Typography;

const classNames = ({ gutterBottom }: { gutterBottom: boolean }) => {
  return {
    h1: `sm:text-4xl md:text-5xl lg:text-5xl font-normal ${
      gutterBottom ? GUTTER_BOTTOM : ""
    }`,
    h2: `sm:text-3xl md:text-4xl lg:text-4xl font-normal ${
      gutterBottom ? GUTTER_BOTTOM : ""
    }`,
    h3: `sm:text-2xl md:text-3xl lg:text-3xl font-normal ${
      gutterBottom ? GUTTER_BOTTOM : ""
    }`,
    h4: `text-2xl font-normal ${gutterBottom ? GUTTER_BOTTOM : ""}`,
    h5: `sm:text-lg md:text-2xl lg:text-2xl text-xl font-normal ${
      gutterBottom ? GUTTER_BOTTOM : ""
    }`,
    h6: `sm:text-lg md:text-xl lg:text-xl  font-normal ${
      gutterBottom ? GUTTER_BOTTOM : ""
    }`,
    subtitle1: `sm:text-sm md:text-base lg:text-base font-normal ${
      gutterBottom ? GUTTER_BOTTOM : ""
    }`,
    subtitle2: `text-sm ${gutterBottom ? GUTTER_BOTTOM : ""}`,
    body1: `sm:text-sm md:text-base lg:text-base font-light ${
      gutterBottom ? GUTTER_BOTTOM : ""
    }`,
    body2: `sm:text-xs md:text-sm lg:text-sm font-normal ${
      gutterBottom ? GUTTER_BOTTOM : ""
    }`,
    button: `sm:text-xs md:text-sm lg:text-sm font-medium ${
      gutterBottom ? GUTTER_BOTTOM : ""
    }`,
    caption: `sm:text-xs md:text-sm lg:text-sm font-normal ${
      gutterBottom ? GUTTER_BOTTOM : ""
    }`,
    overline: `sm:text-xs md:text-sm lg:text-sm font-normal ${
      gutterBottom ? GUTTER_BOTTOM : ""
    }`,
  };
};

const GUTTER_BOTTOM = "mb-3";

const defaultStyles = {};

type FontType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "button"
  | "caption"
  | "overline";

type Style = { fontWeight?: string };

type ComponentProps = {
  component?: FontType;
  variant?: FontType;
  children: ReactElement | string;
  paragraph?: boolean;
  gutterBottom?: boolean;
  style?: Style;
};
