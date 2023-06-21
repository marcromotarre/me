import { PokemonType, PokemonsType } from "../types/pokemon";
import Pokemon from "./Pokemon";

function Pokemons({ data }: { data: PokemonsType }) {
  return (
    <div className="flex w-[100%] flex-wrap items-center justify-center">
      {data.map((pokemon: PokemonType, index: number) => (
        <Pokemon key={index} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default Pokemons;
