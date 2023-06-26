import Typography from "../../../components/common/Typography/Typography";
import Breadcrumb from "../../../components/common/breadcrumb/Breadcrumb";
import BreadcrumbLink from "../../../components/common/breadcrumb/BreadcrumbLink";
import { ReactIcon, ReduxIcon } from "../../../components/common/icons";

const ReactMyComponentsBreadcrumbPage = () => {
  return (
    <>
      <Typography variant="h3">Breadcrumb</Typography>
      <Typography>
        Breadcrumb is a component to easily navigate across pages.
      </Typography>
      <Breadcrumb separator="/" style={{ color: "black" }}>
        <BreadcrumbLink>Section 1</BreadcrumbLink>
        <BreadcrumbLink>Section 1.5</BreadcrumbLink>
        <BreadcrumbLink>Section 1.5.3</BreadcrumbLink>
        <BreadcrumbLink>Section 1.5.3.2</BreadcrumbLink>
      </Breadcrumb>
    </>
  );
};

export default ReactMyComponentsBreadcrumbPage;
