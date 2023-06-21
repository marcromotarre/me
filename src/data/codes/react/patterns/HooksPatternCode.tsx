export const usePokemonsCode = `
import { useEffect, useState } from "react";
import { getPokemonsData } from "../fetch/FetchPokemons";
import { PokemonsType } from "../types/pokemon";

export default function usePokemons() {
  const [pokemons, setPokemons] = useState<PokemonsType>([]);

  useEffect(() => {
    getPokemonsData()
      .then((response) => setPokemons(response))
      .catch(console.error);
  }, []);

  return pokemons;
}
`;
