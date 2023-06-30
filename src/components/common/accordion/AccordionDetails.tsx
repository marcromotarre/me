import Styles from "../../types/style";

const AccordionDetails = ({
  children,
  style,
}: {
  children: React.ReactElement | React.ReactElement[];
  style?: Styles;
}) => {
  return <div style={style}>{children}</div>;
};

export default AccordionDetails;
