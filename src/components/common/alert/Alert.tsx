import { isString } from "util";
import { ReactIcon } from "../icons";
import { ReactElement } from "react";

const Alert = ({ children, severity = custom }: ComponentProps) => {
  const { border, light, dark } = colors[severity];
  return (
    <div
      style={{ borderColor: border, backgroundColor: light }}
      className="grid w-auto  border p-3"
    >
      <div className="grid w-fit grid-cols-[50px_auto] items-center justify-center">
        <ReactIcon size={30} color={dark} />
        <div>
          {typeof children === "string" ? (
            <p style={{ color: dark }}>{children}</p>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
};

export default Alert;

type ComponentProps = {
  children?: string | ReactElement;
  severity: "custom" | "error" | "warning" | "info" | "success";
};

const colors = {
  custom: {
    light: "#fff",
    dark: "#000",
    border: "#000",
  },
  error: {
    light: "#FDE9E7",
    dark: "#E22B04",
    border: "#DDBAB3",
  },
  warning: {
    light: "#FEF8E6",
    dark: "#EDA434",
    border: "#EEE2CB",
  },
  success: {
    light: "#EDF6EA",
    dark: "#4E9D30",
    border: "#E2EEDD",
  },
  info: {
    light: "#F4F7FF",
    dark: "#2045FB",
    border: "#C0C4E0",
  },
};

const custom = "custom";
const error = "error";
const warning = "warning";
const info = "info";
const success = "success";
