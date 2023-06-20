import { ReactElement, cloneElement } from "react";

const Button = ({
  children,
  variant = contained,
  startIcon,
  endIcon,
  color = colors.default,
  secondaryColor = "white",
  size = medium,
}: ComponentProps) => {
  const buttonColor: string = colors[color] ? colors[color] : color;

  const getPropsByVariant = (
    textProp: string,
    containedProps: string,
    outlinedProp: string
  ): string => {
    if (variant === text) return textProp;
    if (variant === contained) return containedProps;
    if (variant === outlined) return outlinedProp;
    return "";
  };

  const getPropsBySize = (
    smallProp: string,
    mediumProp: string,
    largeProp: string
  ): string => {
    if (size === small) return smallProp;
    if (size === medium) return mediumProp;
    if (size === large) return largeProp;
    return "";
  };

  return (
    <div
      style={{
        backgroundColor: getPropsByVariant(
          "transparent",
          buttonColor,
          secondaryColor
        ),
        border: getPropsByVariant("", "", `1px solid ${buttonColor}`),
      }}
      className={`flex w-max items-center justify-center rounded-md ${getPropsBySize(
        "pb-1 pl-2 pr-2 pt-1",
        "pb-2 pl-3 pr-3 pt-2",
        "pb-2 pl-4 pr-4 pt-2"
      )}`}
    >
      <button
        style={{
          color: getPropsByVariant(buttonColor, secondaryColor, buttonColor),
        }}
        className="uppercase"
      >
        <div className="flex items-center justify-center">
          {startIcon &&
            cloneElement(startIcon, {
              size: getPropsBySize("15", "20", "25"),
              color: getPropsByVariant(
                buttonColor,
                secondaryColor,
                buttonColor
              ),
              className: children ? "mr-2" : "",
            })}
          <p
            className={`m-0 p-0 text-center ${getPropsBySize(
              "text-sm",
              "text-base",
              "text-xl"
            )}`}
          >
            {children}
          </p>
          {endIcon &&
            cloneElement(endIcon, {
              size: 20,
              color: getPropsByVariant(buttonColor, "white", buttonColor),
              className: children ? "ml-2" : "",
            })}
        </div>
      </button>
    </div>
  );
};

export default Button;

type ComponentProps = {
  children?: string;
  variant?: "contained" | "outlined" | "text";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  color?: "error" | "default" | "success" | string;
  secondaryColor?: string;
  size?: "small" | "medium" | "large";
};

const contained = "contained";
const outlined = "outlined";
const text = "text";

const small = "small";
const medium = "medium";
const large = "large";

const colors: Colors = {
  default: "rgb(96 165 250)",
  success: "#2e7d32",
  error: "#d32f2f",
};

type Colors = { [k: string]: string };
