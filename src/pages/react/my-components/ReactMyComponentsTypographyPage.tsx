import Alert from "../../../components/common/alert/Alert";
import Card from "../../../components/common/card/Card";
import Typography from "../../../components/common/typography/Typography";

const ReactMyComponentsTypographyPage = () => {
  return (
    <>
      <Typography variant="h3">Typography</Typography>
      <Alert severity="info">
        The Typography component makes it easy to apply a default set of font
        weights and sizes in your application.
      </Alert>
      <Alert severity="info">
        The Typography component helps to standarize all texts in you
        application.
      </Alert>
      <Typography>Typography is a component to render text.</Typography>
      <Typography>
        Here you have an example of all posible texts displayed:
      </Typography>

      <Card style={{ display: "grid" }}>
        <Typography variant="h1" gutterBottom paragraph>
          h1. Heading
        </Typography>
        <Typography variant="h2" gutterBottom>
          h2. Heading
        </Typography>
        <Typography variant="h3" gutterBottom>
          h3. Heading
        </Typography>
        <Typography variant="h4" gutterBottom>
          h4. Heading
        </Typography>
        <Typography variant="h5" gutterBottom>
          h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" gutterBottom>
          button text
        </Typography>
        <Typography variant="caption" gutterBottom>
          caption text
        </Typography>
        <Typography variant="overline" gutterBottom>
          overline text
        </Typography>
      </Card>
    </>
  );
};

export default ReactMyComponentsTypographyPage;
