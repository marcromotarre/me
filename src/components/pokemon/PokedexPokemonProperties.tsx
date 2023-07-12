import { useQuery } from "@tanstack/react-query";
import PokedexState from "./state-managers/PokedexState";
import { getPokemonData } from "../../fetch/FetchPokemon";

export default function PokedexPokemonProperties({
  stateManager,
  pokedexWidth,
}) {
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
        width: `${pokedexWidth * 0.42}px`,
        height: `${pokedexWidth * 0.48}px`,
        top: `${pokedexWidth * 0.517}px`,
        left: `${pokedexWidth * 0.54}px`,
      }}
      className="p-4"
    >
      <div className="grid grid-cols-1 gap-y-2 ">
        <p className="font-pokemon uppercase text-white sm:text-[9px] md:text-base lg:text-lg">
          Pokemon #: {data?.id}
        </p>
        <p className="font-pokemon uppercase text-white sm:text-[9px] md:text-base lg:text-lg">
          Weight: {data?.weight}
        </p>
        <p className="font-pokemon uppercase text-white sm:text-[9px] md:text-base lg:text-lg">
          Height: {data?.height}
        </p>
      </div>
    </div>
  );
}
