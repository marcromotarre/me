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
        display: "flex",
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
                href: index === links.length - 1 ? "" : link.href,
              },
            })}

            {index < links.length - 1 && (
              <div className="ml-2 mr-2">
                <Typography>{separator}</Typography>
              </div>
            )}
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
