import Typography from "../../../components/common/typography/Typography";
import Card from "../../../components/common/card/Card";

const ReactMyComponentsCardPage = () => {
  return (
    <>
      <Card>
        <Typography>This is a simple Card</Typography>
      </Card>
      <Card type="type2">
        <Typography>This is a simple Card</Typography>
      </Card>
      <Card type="type3">
        <Typography>This is a simple Card</Typography>
      </Card>
    </>
  );
};

export default ReactMyComponentsCardPage;
