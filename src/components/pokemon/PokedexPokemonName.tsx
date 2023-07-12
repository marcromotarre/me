import { useQuery } from "@tanstack/react-query";
import PokedexState from "./state-managers/PokedexState";

export default function PokedexPokemonName({ stateManager, pokedexWidth }) {
  const { pokemonId } = PokedexState(stateManager);
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["pokemon", pokemonId],
    queryFn: () => getPokemonData({ url, waiting: 0 }),
  });
  console.log(data);
  return (
    <div
      style={{
        position: "absolute",
        width: `${pokedexWidth * 0.32}px`,
        height: `${pokedexWidth * 0.06}px`,
        top: `${pokedexWidth * 0.955}px`,
        left: `${pokedexWidth * 0.04}px`,
        display: "flex",
        alignItems: "center",
      }}
    >
      <p className="p-2 font-pokemon uppercase text-white">{data?.name}</p>
    </div>
  );
}
