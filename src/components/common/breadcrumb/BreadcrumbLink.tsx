import { ReactElement, cloneElement } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "../Typography/Typography";
import Styles from "../../types/style";

const BreadcrumbLink = ({
  children,
  href,
  icon,
  style = {},
}: ComponentsProps) => {
  const navigate = useNavigate();

  const onClick = () => {
    if (href) {
      navigate(href);
    }
  };
  return (
    <button
      data-testid="breadcrumb-link"
      onClick={onClick}
      style={style}
      className="flex items-center justify-center"
    >
      {icon &&
        cloneElement(icon, {
          className: "mr-2",
          size: 16,
          color: style.color,
        })}
      <Typography style={style}>{children}</Typography>
    </button>
  );
};

export type ComponentsProps = {
  children: string;
  href?: string;
  icon?: ReactElement;
  style?: Styles;
  __TYPE?: string;
};

BreadcrumbLink.defaultProps = {
  __TYPE: "BreadcrumbLink",
};

export default BreadcrumbLink;
