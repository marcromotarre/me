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
      <Breadcrumb
        separator="/"
        style={{ color: "black", backgroundColor: "#E7EBF0" }}
      >
        <BreadcrumbLink icon={<ReactIcon />} href="/react">
          React
        </BreadcrumbLink>
        <BreadcrumbLink href="/react/my-components">
          My Components
        </BreadcrumbLink>
        <BreadcrumbLink href="/react/my-components/breadcrumb">
          Breadcrumb
        </BreadcrumbLink>
      </Breadcrumb>
    </>
  );
};

export default ReactMyComponentsBreadcrumbPage;
