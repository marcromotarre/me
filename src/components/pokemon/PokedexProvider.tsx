import { createContext, useContext, useState } from "react";

export const PokedexContext = createContext();
const FIRST_POKEMON_INDEX = 1;
const LAST_POKEMON_INDEX = 1010;
export const PokedexProvider = ({ children }) => {
  const [pokemonId, setPokemonId] = useState(FIRST_POKEMON_INDEX);

  const increment = () => {
    pokemonId + 1 > LAST_POKEMON_INDEX
      ? setPokemonId(FIRST_POKEMON_INDEX)
      : setPokemonId(pokemonId + 1);
  };

  const decrement = () => {
    pokemonId - 1 < FIRST_POKEMON_INDEX
      ? setPokemonId(LAST_POKEMON_INDEX)
      : setPokemonId(pokemonId - 1);
  };

  const contextValue = {
    pokemonId,
    increment,
    decrement,
  };

  return (
    <PokedexContext.Provider value={contextValue}>
      {children}
    </PokedexContext.Provider>
  );
};

export const usePokedexContext = () => {
  return useContext(PokedexContext);
};
