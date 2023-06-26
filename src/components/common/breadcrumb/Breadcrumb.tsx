import React, { ReactElement, cloneElement } from "react";
import BreadcrumbLink from "./BreadcrumbLink";
import Typography from "../Typography/Typography";
import { link } from "fs";

const Breadcrumb = ({
  children,
  separator = "/",
  style = {},
}: ComponentProps) => {
  const BreadcrumbLinkMemo = React.memo(BreadcrumbLink);
  const links = [...(Array.isArray(children) ? children : [children])].filter(
    (child) => child.type.name === BreadcrumbLinkMemo.type.name
  );
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${
          links.length * 2 - 1
        }, max-content [col-start])`,
        columnGap: "10px",
        ...defaultStyles,
        ...style,
      }}
      className="w-fit rounded-lg pb-2 pl-4 pr-4 pt-2 "
    >
      {links.map((link, index: number) => {
        return (
          <React.Fragment key={index}>
            {cloneElement(link, {
              style: {
                color: style.color,
                fontWeight: index === links.length - 1 ? "500" : "",
              },
            })}
            {index < links.length - 1 && <Typography>{separator}</Typography>}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const defaultStyles: Styles = {
  color: "black",
  backgroundColor: "transparent",
};

type ComponentProps = {
  style?: Styles;
  children: ReactElement | Array<ReactElement>;
  separator?: string;
};
export default Breadcrumb;

type Styles = { backgroundColor?: string; color?: string };
