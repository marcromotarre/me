import Typography from "../../../components/common/Typography/Typography";
import Alert from "../../../components/common/alert/Alert";
import Breadcrumb from "../../../components/common/breadcrumb/Breadcrumb";
import BreadcrumbLink from "../../../components/common/breadcrumb/BreadcrumbLink";
import {
  ReactComponentIcon,
  ReactIcon,
  ReduxIcon,
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
      <Typography variant="h4">href</Typography>
      <Typography>
        Use href prop in links to navigate through your application
      </Typography>
      <div className="flex justify-center">
        <Breadcrumb>
          <BreadcrumbLink href="/react">React</BreadcrumbLink>
          <BreadcrumbLink href="/react/my-components">
            My Components
          </BreadcrumbLink>
          <BreadcrumbLink href="/react/my-components/breadcrumb">
            Breadcrumb
          </BreadcrumbLink>
        </Breadcrumb>
      </div>
      <Alert severity="warning">
        If you click on this breadcrumb links you will be redirected. Other
        breadcrumbs on this page does not have href prop.
      </Alert>
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
        <Breadcrumb separator={<RightIcon />}>
          <BreadcrumbLink>React</BreadcrumbLink>
          <BreadcrumbLink>My Components</BreadcrumbLink>
          <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
        </Breadcrumb>
      </div>
      <div className="flex justify-center">
        <Breadcrumb separator={<ReactIcon />}>
          <BreadcrumbLink>React</BreadcrumbLink>
          <BreadcrumbLink>My Components</BreadcrumbLink>
          <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
        </Breadcrumb>
      </div>
      <Typography variant="h4">Breadcrumbs with icons</Typography>
      <Typography>We can add the icon in the breadcrumb link</Typography>
      <div className="flex justify-center">
        <Breadcrumb style={{ link: { color: "black" } }}>
          <BreadcrumbLink icon={<ReactIcon />}>React</BreadcrumbLink>
          <BreadcrumbLink icon={<ReactComponentIcon />}>
            My Components
          </BreadcrumbLink>
          <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
        </Breadcrumb>
      </div>
      <Typography variant="h4">Customitzation</Typography>
      <Typography>
        Some params of the breadcrumb can be customized using style prop. Here
        you have some cool examples
      </Typography>
      <Typography variant="h6">Color</Typography>
      <Typography>Edit all color of the breadcrumb</Typography>
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
      <Typography>Add a background and edit text color</Typography>
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
      <Typography>Edit the shape with border radius</Typography>
      <div className="flex justify-center">
        <Breadcrumb
          style={{
            backgroundColor: "#61DAFB",
            color: "white",
            borderRadius: "25px",
          }}
        >
          <BreadcrumbLink icon={<ReactIcon />}>React</BreadcrumbLink>
          <BreadcrumbLink>My Components</BreadcrumbLink>
          <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
        </Breadcrumb>
      </div>
      <div className="flex justify-center">
        <Breadcrumb
          style={{
            backgroundColor: "#61DAFB",
            color: "white",
            borderRadius: "0",
          }}
        >
          <BreadcrumbLink icon={<ReactIcon />}>React</BreadcrumbLink>
          <BreadcrumbLink>My Components</BreadcrumbLink>
          <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
        </Breadcrumb>
      </div>

      <Typography>Or edit color of separator or links</Typography>
      <div className="flex justify-center">
        <Breadcrumb
          style={{
            separator: { color: "red" },
            link: { color: "black" },
          }}
          separator={<ReduxIcon />}
        >
          <BreadcrumbLink>React</BreadcrumbLink>
          <BreadcrumbLink>My Components</BreadcrumbLink>
          <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
        </Breadcrumb>
      </div>
      <div className="flex justify-center">
        <Breadcrumb
          style={{
            separator: { color: "grey" },
            link: { color: "black" },
          }}
          separator={<ReduxIcon />}
        >
          <BreadcrumbLink>React</BreadcrumbLink>
          <BreadcrumbLink>My Components</BreadcrumbLink>
          <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
        </Breadcrumb>
      </div>

      <div className="flex justify-center">
        <Breadcrumb
          style={{
            separator: { color: "#61DAFB" },
            link: { color: "black" },
          }}
        >
          <BreadcrumbLink icon={<ReactIcon />}>React</BreadcrumbLink>
          <BreadcrumbLink>My Components</BreadcrumbLink>
          <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
        </Breadcrumb>
      </div>
      <div className="flex justify-center">
        <Breadcrumb
          style={{
            separator: { color: "black" },
            link: { color: "#61DAFB" },
          }}
        >
          <BreadcrumbLink icon={<ReactIcon />}>React</BreadcrumbLink>
          <BreadcrumbLink>My Components</BreadcrumbLink>
          <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
        </Breadcrumb>
      </div>
      <Typography>Also edit color of just one separator</Typography>
      <div className="flex justify-center">
        <Breadcrumb
          style={{
            separator: { color: "black" },
            link: { color: "#61DAFB" },
          }}
        >
          <BreadcrumbLink style={{ color: "red" }} icon={<ReactIcon />}>
            React
          </BreadcrumbLink>
          <BreadcrumbLink>My Components</BreadcrumbLink>
          <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
        </Breadcrumb>
      </div>
    </>
  );
};

export default ReactMyComponentsBreadcrumbPage;
