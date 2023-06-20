import { ReactElement, cloneElement, useState } from "react";
const Button = ({
  children,
  variant = contained,
  startIcon,
  endIcon,
  color = colors.default,
  secondaryColor = "white",
  size = medium,
  onClick = () => {},
}: ComponentProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const buttonColor: string = colors[color] ? colors[color] : color;

  const getPropsByVariant = (
    textProp: string,
    containedProp: string,
    outlinedProp: string
  ): string => {
    return variant === text
      ? textProp
      : variant === outlined
      ? outlinedProp
      : containedProp;
  };

  const getPropsBySize = (
    smallProp: string,
    mediumProp: string,
    largeProp: string
  ): string => {
    return size === small ? smallProp : size === large ? largeProp : mediumProp;
  };

  return (
    <button
      data-testid="button"
      onClick={onClick}
      style={{
        backgroundColor: getPropsByVariant(
          isHovering ? "white" : "transparent",
          buttonColor,
          isHovering ? "white" : "transparent"
        ),
        border: getPropsByVariant("", "", `1px solid ${buttonColor}`),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`flex w-max items-center justify-center rounded-md bg-transparent hover:bg-white hover:brightness-95 ${getPropsBySize(
        "pb-1 pl-2 pr-2 pt-1",
        "pb-2 pl-3 pr-3 pt-2",
        "pb-2 pl-4 pr-4 pt-2"
      )}`}
    >
      <div
        style={{
          color: getPropsByVariant(buttonColor, secondaryColor, buttonColor),
        }}
      >
        <div
          className="flex items-center justify-center"
          data-testid="button-content"
        >
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
          {children && (
            <p
              data-testid="button-text"
              className={`m-0 p-0 text-center uppercase ${getPropsBySize(
                "text-sm",
                "text-base",
                "text-xl"
              )}`}
            >
              {children}
            </p>
          )}
          {endIcon &&
            cloneElement(endIcon, {
              size: 20,
              color: getPropsByVariant(
                buttonColor,
                secondaryColor,
                buttonColor
              ),
              className: children ? "ml-2" : "",
            })}
        </div>
      </div>
    </button>
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
  onClick?: React.MouseEventHandler;
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
