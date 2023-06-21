import Code from "../components/common/code/Code";
import { ButtonCode } from "../data/codes/ButtonCode";

const ReactMyComponentsButtonSnapshotsPage = () => {
  return (
    <>
      <p className="text-xl">Snapshots</p>
      <p className="font-light">{`Let's have a look at the code. As the other components in the library <Button /> component has been developed in typescript`}</p>
      <Code>
        <>{ButtonCode}</>
      </Code>
    </>
  );
};

export default ReactMyComponentsButtonSnapshotsPage;
