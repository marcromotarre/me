import Alert from "../../../components/common/alert/Alert";
import { ReactIcon } from "../../../components/common/icons";

const ReactMyComponentsAlertPage = () => {
  return (
    <>
      <p className="text-xl">Alert</p>
      <Alert icon={<ReactIcon />} severity="success">
        This is a success Alert
      </Alert>
      <Alert severity="info">This is a info Alert</Alert>
      <Alert severity="warning">This is a warning Alert</Alert>
      <Alert severity="error">This is a warning Alert</Alert>

      <p className="text-xl">Variant</p>
      <p className="text-lg">Filled</p>

      <Alert variant="filled" severity="success">
        This is a success Alert
      </Alert>
      <Alert variant="filled" severity="info">
        This is a info Alert
      </Alert>
      <Alert variant="filled" severity="warning">
        This is a warning Alert
      </Alert>
      <Alert variant="filled" severity="error">
        This is a warning Alert
      </Alert>

      <p className="text-lg">Outlined</p>
      <Alert variant="outlined" severity="success">
        This is a success Alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is a info Alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is a warning Alert
      </Alert>
      <Alert variant="outlined" severity="error">
        This is a warning Alert
      </Alert>

      <p className="text-lg">Icon Change</p>
      <Alert icon={<ReactIcon />} severity="success">
        This is a success Alert with different icon
      </Alert>
      <Alert icon={<ReactIcon />} severity="info">
        This is a info Alert with different icon
      </Alert>
      <Alert icon={<ReactIcon />} severity="warning">
        This is a warning Alert with different icon
      </Alert>
      <Alert icon={<ReactIcon />} severity="error">
        This is a error Alert with different icon
      </Alert>

      <p className="text-lg">Without Icon</p>
      <Alert icon={false} severity="success">
        This is a success Alert without icon
      </Alert>
      <Alert icon={false} severity="info">
        This is a info Alert without icon
      </Alert>
      <Alert icon={false} severity="warning">
        This is a warning Alert without icon
      </Alert>
      <Alert icon={false} severity="error">
        This is a error Alert without icon
      </Alert>
    </>
  );
};

export default ReactMyComponentsAlertPage;
