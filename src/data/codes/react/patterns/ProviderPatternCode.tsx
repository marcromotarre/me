export const pokemonsProviderCode = `
import React, { useContext } from "react";
import usePokemons from "../hooks/usePokemons";
import { createContext } from "vm";

const PokemonsContext = createContext(null);

export function usePokemonsContext() {
  return useContext(PokemonsContext);
}

export function PokemonsProvider(props) {
  const pokemons = usePokemons();

  if (!pokemons) return null;

  return (
    <PokemonsContext.Provider value={pokemons}>
      {props.children}
    </PokemonsContext.Provider>
  );
}
`;

export const pokemonsProviderUsageCode = `
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
`;

export const pokemonsComponentUsingContextCode = `
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
`;
