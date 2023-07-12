import { useQuery } from "@tanstack/react-query";
import PokedexState, { StateManagerType } from "./state-managers/PokedexState";

export default function PokedexPokemonName({
  stateManager,
  pokedexWidth,
}: ComponentProps) {
  const { pokemonId } = PokedexState(stateManager);
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["pokemon", pokemonId],
    queryFn: () => getPokemonData({ url, waiting: 0 }),
  });

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
      <p className="p-2 font-pokemon uppercase text-white sm:text-[9px] md:text-base lg:text-lg">
        {data?.name}
      </p>
    </div>
  );
}

type ComponentProps = {
  stateManager: StateManagerType;
  pokedexWidth: number;
};
