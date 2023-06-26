import Typography from "../../../components/common/Typography/Typography";
import Breadcrumb from "../../../components/common/breadcrumb/Breadcrumb";
import BreadcrumbLink from "../../../components/common/breadcrumb/BreadcrumbLink";
import { ReactIcon, ReduxIcon } from "../../../components/common/icons";

const ReactMyComponentsBreadcrumbPage = () => {
  const links = [{ name: "name1" }, { name: "name/2" }];

  return (
    <>
      <Typography variant="h3">Breadcrumb</Typography>
      <Typography>Breadcrumb is a component to ...</Typography>
      <Breadcrumb separator="/" style={{ color: "black" }}>
        <BreadcrumbLink icon={<ReactIcon />}>React</BreadcrumbLink>
        <BreadcrumbLink href="/">My Components</BreadcrumbLink>
        <BreadcrumbLink icon={<ReduxIcon />} href="/">
          Redux Component
        </BreadcrumbLink>
      </Breadcrumb>
    </>
  );
};

export default ReactMyComponentsBreadcrumbPage;
