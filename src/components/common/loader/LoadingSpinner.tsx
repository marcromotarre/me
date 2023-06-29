import { ReactElement, cloneElement } from "react";
import { JavascriptIcon, ReactIcon } from "../icons";

export const LoadingSpinner = ({ icon }: { icon?: ReactElement }) => (
  <div className="spinner-wrapper flex h-64 items-center justify-center">
    {icon ? (
      cloneElement(icon, { className: "animate-spin", size: 50 })
    ) : (
      <LoadingSpinner />
    )}
  </div>
);
