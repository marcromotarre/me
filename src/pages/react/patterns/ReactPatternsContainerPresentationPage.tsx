import { useEffect, useState } from "react";
import { getPokemonsData } from "../../../fetch/FetchPokemons";
import { PokemonType, PokemonsType } from "../../../types/pokemon";
import Code from "../../../components/common/code/Code";
import {
  ContainerComponentCode,
  PokemonCode,
  PokemonsCode,
} from "../../../data/codes/react/patterns/ContainerPresentationalCode";
import Pokemon from "../../../components/Pokemon";
import Pokemons from "../../../components/Pokemons";
import Alert from "../../../components/common/alert/Alert";

const ReactPatternsContainerPresentationPage = () => {
  return (
    <>
      <p className="text-xl">Container / Presentational Pattern</p>
      <p className="font-light">
        The goal of this React Pattern is to separate the the view from the
        application logic.
      </p>
      <p className="font-light">
        In order to achieve that we will need to create two components:
      </p>
      <p className="font-light">
        <span className="font-bold">Container Component: </span>
        Here goes the logic. This component will take care of what data will be
        shown to the user
      </p>
      <p className="font-light">
        <span className="font-bold">Presentational Component: </span>
        Here goes the view. This component will take care of how data will be
        shown to the user
      </p>
      <p className="font-light">
        We are going to use for this example the Pokemon API:
        https://pokeapi.co/api/v2/pokemon/
      </p>
      <p className="font-light">
        If you have any doubt about fetching you can have a look to the API Call
        Section
      </p>
      <Alert severity="success">
        <>
          <span className="font-semibold">Separation of concerns:</span>{" "}
          Presentational components can be pure functions which are responsible
          for the UI, whereas container components are responsible for the state
          and data of the application. This makes it easy to enforce the
          separation of concerns.
        </>
      </Alert>
      <Alert severity="success">
        <>
          <span className="font-semibold">Reusability:</span> We can easily
          reuse the presentational components throughout our application for
          different purposes.
        </>
      </Alert>
      <Alert severity="success">
        <>
          <span className="font-semibold">Flexibility:</span>{" "}
          {`Since
          presentational components don't alter the application logic, the
          appearance of presentational components can easily be altered by
          someone without knowledge of the codebase, for example a designer. If
          the presentational component was reused in many parts of the
          application, the change can be consistent throughout the app`}
        </>
      </Alert>
      <Alert severity="warning">
        <>
          <span className="font-semibold">Overkill:</span> The
          Container/Presentational pattern can easily be an overkill in smaller
          sized application.
        </>
      </Alert>

      <p className="text-l">Container Component</p>
      <p className="font-light">{`Let's program the logic of our feature. In this case de <PokemonsContainerComponent /> will fetch the data. When the data is loaded it will send it to the view.`}</p>
      <Code>
        <>{ContainerComponentCode}</>
      </Code>
      <p className="text-l">Presentational Components</p>
      <p className="font-light">
        {`Now that we have the logic its time to create the view. For this example
        we will need two components <Pokemons /> & <Pokemon />`}
      </p>
      <Code>
        <>{PokemonsCode}</>
      </Code>
      <Code>
        <>{PokemonCode}</>
      </Code>
      <p className="font-light">
        {`Have a look to our  <PokemonsContainerComponent />`}
      </p>
      <PokemonsContainerComponent />
    </>
  );
};

function PokemonsContainerComponent() {
  const [data, setData] = useState<PokemonsType | null>(null);

  useEffect(() => {
    getPokemonsData()
      .then((pokemons) => setData(pokemons))
      .catch(console.error);
  }, []);

  if (!data) return null;

  return <Pokemons data={data} />;
}

export default ReactPatternsContainerPresentationPage;
