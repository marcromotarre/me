import { useQuery } from "@tanstack/react-query";
import { getPokemonData } from "../../fetch/FetchPokemon";
import Styles from "../types/style";
import PokedexState from "./state-managers/PokedexState";

export default function Pokemon({ style = {}, stateManager }: ComponentProps) {
  const { pokemonId } = PokedexState(stateManager);
  console.log("pokemonId", pokemonId, stateManager);
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["pokemon", pokemonId],
    queryFn: () => getPokemonData({ url, waiting: 0 }),
  });

  return (
    <>{data && <img width="100%" src={data.sprite} alt={data.name}></img>}</>
  );
}

type ComponentProps = {
  style?: Styles;
};
