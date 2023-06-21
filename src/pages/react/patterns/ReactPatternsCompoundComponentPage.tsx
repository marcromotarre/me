const ReactPatternsCompoundComponentPage = () => {
  return (
    <>
      <p className="text-xl">Compount Component Pattern</p>
      <p className="font-light">
        Create multiple components that work together to perform a single task
      </p>
      <p className="font-light">
        With the Compound Pattern, we can create multiple components that work
        together to perform one single task.
      </p>
      <p className="font-light">
        In this application a great example of that is the {`<Modal />`}{" "}
        Component.
      </p>
      <p className="ml-6 font-light">- Modal.Header</p>
      <p className="ml-6 font-light">- Modal.Body</p>
      <p className="ml-6 font-light">- Modal.Footer</p>
    </>
  );
};

export default ReactPatternsCompoundComponentPage;
