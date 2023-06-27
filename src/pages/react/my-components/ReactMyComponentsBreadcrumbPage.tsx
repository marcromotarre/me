import Typography from "../../../components/common/Typography/Typography";
import Breadcrumb from "../../../components/common/breadcrumb/Breadcrumb";
import BreadcrumbLink from "../../../components/common/breadcrumb/BreadcrumbLink";
import {
  ReactComponentIcon,
  ReactIcon,
  RightIcon,
} from "../../../components/common/icons";

const ReactMyComponentsBreadcrumbPage = () => {
  return (
    <>
      <Typography variant="h3">Breadcrumb</Typography>
      <Typography>
        Breadcrumb is a component to easily navigate across pages.
      </Typography>
      <div className="flex justify-center">
        <Breadcrumb>
          <BreadcrumbLink>Section 1</BreadcrumbLink>
          <BreadcrumbLink>Section 1.5</BreadcrumbLink>
          <BreadcrumbLink>Section 1.5.3</BreadcrumbLink>
          <BreadcrumbLink>Section 1.5.3.2</BreadcrumbLink>
        </Breadcrumb>
      </div>
      <Typography variant="h4">Custom separator</Typography>
      <Typography>We can modify the separator</Typography>
      <div className="flex justify-center">
        <Breadcrumb separator=">">
          <BreadcrumbLink>React</BreadcrumbLink>
          <BreadcrumbLink>My Components</BreadcrumbLink>
          <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
        </Breadcrumb>
      </div>
      <div className="flex justify-center">
        <Breadcrumb separator="-">
          <BreadcrumbLink>React</BreadcrumbLink>
          <BreadcrumbLink>My Components</BreadcrumbLink>
          <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
        </Breadcrumb>
      </div>
      <Typography>And also use a icon for it and edit its props</Typography>
      <div className="flex justify-center">
        <Breadcrumb separator={<RightIcon color="grey" />}>
          <BreadcrumbLink>React</BreadcrumbLink>
          <BreadcrumbLink>My Components</BreadcrumbLink>
          <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
        </Breadcrumb>
      </div>
      <div className="flex justify-center">
        <Breadcrumb separator={<ReactIcon color="black" size={15} />}>
          <BreadcrumbLink>React</BreadcrumbLink>
          <BreadcrumbLink>My Components</BreadcrumbLink>
          <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
        </Breadcrumb>
      </div>
      <Typography variant="h4">Breadcrumbs with icons</Typography>
      <Typography>We can add the icon in the breadcrumb link</Typography>
      <div className="flex justify-center">
        <Breadcrumb>
          <BreadcrumbLink icon={<ReactIcon />}>React</BreadcrumbLink>
          <BreadcrumbLink icon={<ReactComponentIcon />}>
            My Components
          </BreadcrumbLink>
          <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
        </Breadcrumb>
      </div>
      <Typography variant="h4">Customitzation</Typography>
      <Typography>Some params of the breadcrumb can be customized</Typography>
      <Typography variant="h6">Color</Typography>
      <div className="flex justify-center">
        <Breadcrumb
          style={{
            color: "#61DAFB",
          }}
        >
          <BreadcrumbLink icon={<ReactIcon />}>React</BreadcrumbLink>
          <BreadcrumbLink>My Components</BreadcrumbLink>
          <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
        </Breadcrumb>
      </div>
      <div className="flex justify-center">
        <Breadcrumb>
          <BreadcrumbLink
            icon={<ReactIcon />}
            style={{
              color: "#61DAFB",
            }}
          >
            React
          </BreadcrumbLink>
          <BreadcrumbLink>My Components</BreadcrumbLink>
          <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
        </Breadcrumb>
      </div>
      <div className="flex justify-center">
        <Breadcrumb
          style={{
            backgroundColor: "#61DAFB",
            color: "white",
            borderRadius: "rounder",
          }}
        >
          <BreadcrumbLink icon={<ReactIcon />}>React</BreadcrumbLink>
          <BreadcrumbLink>My Components</BreadcrumbLink>
          <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
        </Breadcrumb>
      </div>
    </>
  );
};

export default ReactMyComponentsBreadcrumbPage;
