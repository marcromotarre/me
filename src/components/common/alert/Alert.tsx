import {
  ErrorCircledIcon,
  InfoCircledIcon,
  SuccessCircledIcon,
  WarningIcon,
} from "../icons";
import { ReactElement, cloneElement } from "react";

const Alert = ({
  children,
  severity = "success",
  variant = "default",
  icon = true,
}: {
  children?: string | ReactElement;
  severity?: "error" | "warning" | "info" | "success";
  color?: "error" | "warning" | "info" | "success";
  variant?: "filled" | "outlined" | "default";
  icon?: boolean | ReactElement;
}) => {
  const {
    borderColor,
    inColor,
    textColor,
    iconColor,
    icon: componentIcon,
  } = data[severity];
  return (
    <div
      style={{
        borderColor: borderColor[variant],
        backgroundColor: inColor[variant],
      }}
      className="grid w-auto rounded-md border p-3"
    >
      <div
        className={`grid w-fit ${
          icon ? "grid-cols-[50px_auto]" : "grid-cols-1"
        } items-center justify-center`}
      >
        {icon
          ? icon === true
            ? cloneElement(componentIcon, {
                size: 30,
                color: iconColor[variant],
              })
            : cloneElement(icon, { size: 30, color: iconColor[variant] })
          : null}
        <div style={{ color: textColor[variant] }}>
          {typeof children === "string" ? (
            <p style={{ color: textColor[variant] }}>{children}</p>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
};

export default Alert;

const data = {
  error: {
    icon: <ErrorCircledIcon />,
    textColor: {
      default: "#E22B04",
      outlined: "#E22B04",
      filled: "white",
    },
    inColor: {
      default: "#EDF6EA",
      outlined: "transparent",
      filled: "#E22B04",
    },
    borderColor: {
      default: "#DDBAB3",
      outlined: "#E22B04",
      filled: "transparent",
    },
    iconColor: {
      default: "#E22B04",
      outlined: "#E22B04",
      filled: "white",
    },
  },
  warning: {
    icon: <WarningIcon />,
    textColor: {
      default: "#EFA434",
      outlined: "#EFA434",
      filled: "white",
    },
    inColor: {
      default: "#FEF8E6",
      outlined: "transparent",
      filled: "#EFA434",
    },
    borderColor: {
      default: "#EEE2CB",
      outlined: "#EFA434",
      filled: "transparent",
    },
    iconColor: {
      default: "#EDA434",
      outlined: "#EDA434",
      filled: "white",
    },
  },
  success: {
    icon: <SuccessCircledIcon />,
    textColor: {
      default: "#4E9635",
      outlined: "#4E9635",
      filled: "white",
    },
    inColor: {
      default: "#EDF6EA",
      outlined: "transparent",
      filled: "#4E9635",
    },
    borderColor: {
      default: "#DDBAB3",
      outlined: "#4E9635",
      filled: "transparent",
    },
    iconColor: {
      default: "#4E9635",
      outlined: "#4E9635",
      filled: "white",
    },
  },
  info: {
    icon: <InfoCircledIcon />,
    textColor: {
      default: "#2045FB",
      outlined: "#2045FB",
      filled: "white",
    },
    inColor: {
      default: "#F4F7FF",
      outlined: "transparent",
      filled: "#2045FB",
    },
    borderColor: {
      default: "#C0C4E0",
      outlined: "#2045FB",
      filled: "transparent",
    },
    iconColor: {
      default: "#2045FB",
      outlined: "#2045FB",
      filled: "white",
    },
  },
};
