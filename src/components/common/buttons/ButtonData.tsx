import Styles from "../../types/style";

export const DEFAULT_BUTTON_COLOR = "rgb(96 165 250)";
export const SUCCESS_BUTTON_COLOR = "#2e7d32";
export const ERROR_BUTTON_COLOR = "#d32f2f";

export const ICON_SIZE_SMALL = "15";
export const ICON_SIZE_MEDIUM = "20";
export const ICON_SIZE_LARGE = "25";

const BUTTON_COLORS: Colors = {
  success: SUCCESS_BUTTON_COLOR,
  error: ERROR_BUTTON_COLOR,
  default: DEFAULT_BUTTON_COLOR,
};

const BUTTON_TEXT_STYLE = (buttonProps: ButtonProps) => ({
  backgroundColor: buttonProps.isHovering ? "white" : "transparent",
});

const BUTTON_CONTAINED_STYLE = (buttonProps: ButtonProps) => ({
  backgroundColor: buttonProps.color,
});

const BUTTON_OUTLINED_STYLE = (buttonProps: ButtonProps) => ({
  backgroundColor: buttonProps.isHovering ? "white" : "transparent",
  border: buttonProps.color ? `1px solid ${buttonProps.color}` : "",
});

const BUTTON_STYLE = (buttonProps: ButtonProps) => {
  const style = {
    text: BUTTON_TEXT_STYLE(buttonProps),
    contained: BUTTON_CONTAINED_STYLE(buttonProps),
    outlined: BUTTON_OUTLINED_STYLE(buttonProps),
  };
  return buttonProps.variant ? style[buttonProps.variant] : "";
};

const BUTTON_CLASSNAME = (buttonProps: ButtonProps) => {
  const sharedClassNames = `flex h-fit w-max items-center justify-center bg-transparent hover:bg-white hover:brightness-95`;
  const classNameBySize = {
    small: "pb-1 pl-2 pr-2 pt-1",
    medium: "pb-2 pl-3 pr-3 pt-2",
    large: "pb-2 pl-4 pr-4 pt-2",
  };

  const classNameByShape = {
    default: "rounded-md",
    rounded: "rounded-full",
    rect: "",
  };

  return `${sharedClassNames} ${
    buttonProps.size ? classNameBySize[buttonProps.size] : ""
  } ${buttonProps.shape ? classNameByShape[buttonProps.shape] : ""}`;
};

const BUTTON_CONTENT_STYLE = (buttonProps: ButtonProps) => {
  const style = {
    text: { color: buttonProps.color },
    contained: { color: buttonProps.secondaryColor },
    outlined: { color: buttonProps.color },
  };
  return buttonProps.variant ? style[buttonProps.variant] : "";
};

const BUTTON_ICON_COLOR = (buttonProps: ButtonProps) => {
  const style = {
    text: buttonProps.color,
    contained: buttonProps.secondaryColor,
    outlined: buttonProps.color,
  };
  return buttonProps.variant ? style[buttonProps.variant] : "";
};

type ButtonProps = {
  variant?: "outlined" | "text" | "contained";
  color?: "error" | "default" | "success" | string;
  secondaryColor?: string;
  size?: "small" | "medium" | "large";
  shape?: "default" | "rounded" | "rect";
  style?: Styles;
  children?: string;
  onClick?: React.MouseEventHandler;
  isHovering?: boolean;
};

type ButtonConfiguration = {
  button: {
    className: string;
    style: Styles;
  };
  buttonContent: {
    className: string;
    style: Styles;
  };
  buttonText: {
    className: string;
    style: Styles;
  };
  buttonStartIcon: {
    className: string;
    iconProps: {
      color?: string;
      size?: string;
    };
  };
  buttonEndIcon: {
    className: string;
    iconProps: {
      color?: string;
      size?: string;
    };
  };
};
type Colors = { [k: string]: string };

const BUTTON_DATA = (buttonProps: ButtonProps): ButtonConfiguration => {
  const buttonColor =
    buttonProps.color && BUTTON_COLORS[buttonProps.color]
      ? BUTTON_COLORS[buttonProps.color]
      : buttonProps.color;

  const modifiedButtonProps = { ...buttonProps, color: buttonColor };

  return {
    button: {
      className: BUTTON_CLASSNAME(modifiedButtonProps),
      style: BUTTON_STYLE(modifiedButtonProps),
    },
    buttonContent: {
      className: "flex items-center justify-center",
      style: BUTTON_CONTENT_STYLE(modifiedButtonProps),
    },
    buttonStartIcon: {
      className: "",
      iconProps: {
        color: BUTTON_ICON_COLOR(modifiedButtonProps),
      },
    },
    buttonEndIcon: {
      className: "",
      iconProps: {
        color: BUTTON_ICON_COLOR(modifiedButtonProps),
      },
    },
    buttonText: {
      className: "ml-2 mr-2",
      style: {
        color: BUTTON_ICON_COLOR(modifiedButtonProps),
      },
    },
  };
};
export default BUTTON_DATA;
