import { ReactElement, cloneElement } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "../Typography/Typography";

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
      onClick={onClick}
      style={{ ...defaultStyles, ...style }}
      className="flex items-center justify-center"
    >
      {icon &&
        cloneElement(icon, {
          className: "mr-2",
          size: 16,
          color: style.color,
        })}
      <Typography style={{ fontWeight: style.fontWeight }}>
        {children}
      </Typography>
    </button>
  );
};

type Styles = { fontWeight?: string; color?: string };

type ComponentsProps = {
  children: string;
  href?: string;
  icon?: ReactElement;
  style?: Styles;
};

const defaultStyles: Styles = {
  color: "black",
  fontWeight: "300",
};

export default BreadcrumbLink;
