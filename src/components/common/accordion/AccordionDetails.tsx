import Styles from "../../types/style";

const AccordionDetails = ({
  children,
  style,
}: {
  children: React.ReactElement | React.ReactElement[];
  style?: Styles;
  __TYPE?: string;
}) => {
  return <div style={style}>{children}</div>;
};

AccordionDetails.defaultProps = {
  __TYPE: "AccordionDetails",
};

export default AccordionDetails;
