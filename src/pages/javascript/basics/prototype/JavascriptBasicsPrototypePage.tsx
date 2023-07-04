import Alert from "../../../../components/common/alert/Alert";

const JavascriptBasicsPrototypePage = () => {
  return (
    <>
      <Alert severity="info">
        Objects are built by &ldquo;constructor calls&rdquo; (via new)
      </Alert>
      <Alert severity="info">
        A &ldquo;constructor call&rdquo; makes an object its own prototype
      </Alert>
    </>
  );
};

export default JavascriptBasicsPrototypePage;
