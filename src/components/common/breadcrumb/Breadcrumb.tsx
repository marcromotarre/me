import React, { ReactElement } from "react";
import BreadcrumbLink, {
  ComponentsProps as BreadcrumbLinkProps,
} from "./BreadcrumbLink";
import BreadcrumbSeparator from "./BreadcrumbSeparator";
import Styles from "../../types/style";

const Breadcrumb: React.FC<ComponentProps> = ({
  children,
  separator = "/",
  style = {},
}) => {
  const links = [...(Array.isArray(children) ? children : [children])].filter(
    (child) => child?.props.__TYPE === "BreadcrumbLink"
  );

  const _style = { ...defaultStyles, ...style };

  return (
    <div
      style={{
        display: "flex",
        ..._style,
      }}
      className="w-fit rounded-lg pb-2 pl-4 pr-4 pt-2 "
    >
      {links.map((link, index: number) => {
        return (
          <React.Fragment key={index}>
            {link && (
              <BreadcrumbLink
                {...link.props}
                style={{
                  ...style,
                  ...style.link,
                  ...link.props.style,
                  fontWeight: index === links.length - 1 ? "500" : "",
                }}
              >
                {link.props.children}
              </BreadcrumbLink>
            )}
            {index < links.length - 1 && (
              <BreadcrumbSeparator
                style={{ ...style, ...style.separator }}
                separator={separator}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const defaultStyles: Styles = {};

interface BreadcrumbStyles extends Styles {
  separator?: Styles;
  link?: Styles;
}

type ComponentProps = {
  style?: BreadcrumbStyles;
  separator?: string | ReactElement;
  children?:
    | React.ReactElement<BreadcrumbLinkProps>
    | React.ReactElement<BreadcrumbLinkProps>[];
};
export default Breadcrumb;
