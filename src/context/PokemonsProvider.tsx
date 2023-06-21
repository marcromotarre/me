import { createContext, useContext } from "react";
import usePokemons from "../hooks/usePokemons";

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
