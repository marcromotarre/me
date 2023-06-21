import { PokemonType } from "../types/pokemon";

function Pokemon({ pokemon }: { pokemon: PokemonType }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={pokemon.sprite} alt={pokemon.name}></img>
      <p className="text-xs font-extralight">{pokemon.name}</p>
    </div>
  );
}

export default Pokemon;
