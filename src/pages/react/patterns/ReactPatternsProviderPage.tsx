import Pokemon from "../../../components/Pokemon";
import Code from "../../../components/common/code/Code";
import {
  PokemonsProvider,
  usePokemonsContext,
} from "../../../context/PokemonsProvider";
import {
  pokemonsComponentUsingContextCode,
  pokemonsProviderCode,
  pokemonsProviderUsageCode,
} from "../../../data/codes/react/patterns/ProviderPatternCode";

const ReactPatternsProviderPage = () => {
  return (
    <>
      <p className="text-xl">Provider Pattern</p>
      <p className="font-light">
        Make data available to multiple child components
      </p>
      <p className="font-light">
        The Provider Pattern uses React&apos;s Context API - which is a way to
        easily share data between components.
      </p>
      <p className="font-light">
        A great example of Provider Pattern is theme. Is a prop that is allowed
        to be used in every component of the application.
      </p>
      <p className="font-light">
        In order to apply Provider Pattern to our application. For example for
        Pokemons, we wil need to create:
      </p>
      <p className="ml-6 font-light">- PokemonsContext</p>
      <p className="ml-6 font-light">
        - usePokemonsContext {`(useContext hook)`}
      </p>
      <p className="ml-6 font-light">- PokemonsProvider</p>

      <Code>
        <>{pokemonsProviderCode}</>
      </Code>
      <p className="font-light">
        It&apos;s really easy now to use our Pokemons Provider in our
        application. Simply encamposulate all components that wants to use
        PokemonsProvider data inside
      </p>
      <Code>
        <>{pokemonsProviderUsageCode}</>
      </Code>
      <p className="font-light">
        If we have a look at the {`<Pokemons />`} Component:
      </p>
      <Code>
        <>{pokemonsComponentUsingContextCode}</>
      </Code>
      <p className="font-light">
        And here you have an example of this code runing
      </p>

      <PokemonsProvider>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "3em",
          }}
        >
          <Pokemons />
        </div>
      </PokemonsProvider>
    </>
  );
};

const Pokemons = () => {
  const pokemons = usePokemonsContext();
  return (
    <div className="flex w-[100%] flex-wrap items-center justify-center">
      {pokemons.map((pokemon: PokemonType, index: number) => (
        <Pokemon key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default ReactPatternsProviderPage;
