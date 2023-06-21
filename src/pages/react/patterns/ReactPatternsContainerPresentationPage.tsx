import { useEffect, useState } from "react";
import { getPokemonsData } from "../../../fetch/FetchPokemons";
import { PokemonType, PokemonsType } from "../../../types/pokemon";
import Code from "../../../components/common/code/Code";
import {
  ContainerComponentCode,
  PokemonCode,
  PokemonsCode,
} from "../../../data/codes/react/patterns/ContainerPresentationalCode";

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

  return <Pokemons pokemons={data} />;
}

function Pokemons({ pokemons }: { pokemons: PokemonsType }) {
  return (
    <div className="grid grid-cols-10 items-center justify-center">
      {pokemons.map((pokemon: PokemonType, index: number) => (
        <Pokemon key={index} name={pokemon.name} sprite={pokemon.sprite} />
      ))}
    </div>
  );
}

function Pokemon({ name, sprite }: { name: string; sprite?: string }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={sprite} alt={name}></img>
      <p>{name}</p>
    </div>
  );
}
export default ReactPatternsContainerPresentationPage;
