import { useState } from "react";
import PokemonsWithLoader from "../../../components/PokemonsWithLoader";
import Button from "../../../components/common/buttons/Button";
import Code from "../../../components/common/code/Code";
import {
  LoadingSpinnerCode,
  pokemonsWithLoaderCode,
  withLoaderCode,
} from "../../../data/codes/react/patterns/HigherOrderComponentPatternCode";
import Alert from "../../../components/common/alert/Alert";

const ReactPatternsHigherOrderComponentPage = () => {
  const [loadExample, setLoadExample] = useState(false);
  return (
    <>
      <p className="text-xl">{`Higher Order Component (HOC) Pattern`}</p>
      <p className="font-light">
        The Higher Order Component Pattern or HOC Pattern it can be used to pass
        reusable logic down as props to components throughout your application.
      </p>
      <p className="font-light">
        One tipical example about Higher order Component is withLoader
      </p>
      <Code>
        <>{withLoaderCode}</>
      </Code>
      <p className="font-light">
        For that case I have created i kind of Loader Spinner
      </p>
      <Code>
        <>{LoadingSpinnerCode}</>
      </Code>

      <Alert severity="success">
        <>
          <span className="font-semibold">Separation of concerns:</span> Using
          the Higher-Order Component pattern allows us to keep logic that we
          want to re-use all in one place. This reduces the risk of accidentally
          spreading bugs throughout the application by duplicating code over and
          over, potentially introducing new bugs each time
        </>
      </Alert>

      <Alert severity="warning">
        <>
          <span className="font-semibold">Readability:</span> When using
          multiple composed HOCs that all pass props to the element that is
          wrapped within them, it can be difficult to figure out which HOC is
          responsible for which prop. This can hinder debugging and scaling an
          application easily.
        </>
      </Alert>

      <p className="font-light">
        {`Let's grab the previous example of pokemon and add a loader using with loader.`}
      </p>
      <Code>
        <>{pokemonsWithLoaderCode}</>
      </Code>

      <Code noHeader>
        <>{`<PokemonsWithLoader />`}</>
      </Code>

      <p className="font-light">
        I added a delay of 10 seconds to see the loader properly
      </p>
      {loadExample ? (
        <PokemonsWithLoader />
      ) : (
        <div className="flex h-64 w-[100%] items-center justify-center">
          <Button onClick={() => setLoadExample(true)}>See example</Button>
        </div>
      )}
    </>
  );
};

export default ReactPatternsHigherOrderComponentPage;
