import Button from "../components/common/buttons/Button";
import { ReactIcon } from "../components/common/icons";

const ReactMyComponentsButtonPage = () => {
  return (
    <div>
      <div className="m-4 grid grid-cols-3 gap-y-3">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button startIcon={<ReactIcon />} variant="text">
          Text
        </Button>
        <Button startIcon={<ReactIcon />} variant="contained">
          Contained
        </Button>
        <Button startIcon={<ReactIcon />} variant="outlined">
          Outlined
        </Button>
        <Button endIcon={<ReactIcon />} variant="text">
          Text
        </Button>
        <Button endIcon={<ReactIcon />} variant="contained">
          Contained
        </Button>
        <Button endIcon={<ReactIcon />} variant="outlined">
          Outlined
        </Button>
        <Button color={"error"} variant="outlined">
          Error
        </Button>
        <Button color={"success"} variant="contained">
          Success
        </Button>
        <Button variant="contained">Default</Button>
        <Button size="small" startIcon={<ReactIcon />} variant="text">
          Small
        </Button>
        <Button size="small" startIcon={<ReactIcon />} variant="contained">
          Small
        </Button>
        <Button size="small" startIcon={<ReactIcon />} variant="outlined">
          Small
        </Button>

        <Button size="medium" startIcon={<ReactIcon />} variant="text">
          medium
        </Button>
        <Button size="medium" startIcon={<ReactIcon />} variant="contained">
          medium
        </Button>
        <Button size="medium" startIcon={<ReactIcon />} variant="outlined">
          medium
        </Button>

        <Button size="large" startIcon={<ReactIcon />} variant="text">
          large
        </Button>
        <Button size="large" startIcon={<ReactIcon />} variant="contained">
          large
        </Button>
        <Button size="large" startIcon={<ReactIcon />} variant="outlined">
          large
        </Button>
        <Button startIcon={<ReactIcon />} variant="text" />
        <Button startIcon={<ReactIcon />} variant="contained" />
        <Button startIcon={<ReactIcon />} variant="outlined" />
      </div>
    </div>
  );
};

export default ReactMyComponentsButtonPage;
