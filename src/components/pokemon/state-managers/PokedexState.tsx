import { useRecoilState } from "recoil";
import { usePokedexContext } from "../PokedexProvider";
import { pokedexState } from "../../../pages/react/state-managers/ReactRecoilPage";
import { usePokedexStore } from "./PokedexZustandState";

export type PokedexStateType = {
  pokemonId: number;
  increment: () => {};
  decrement: () => {};
};

const FIRST_POKEMON_INDEX = 1;
const LAST_POKEMON_INDEX = 1010;

export default function PokedexState(stateManager: string) {
  if (stateManager == "ContextApi") {
    const { pokemonId, increment, decrement }: PokedexStateType =
      usePokedexContext<PokedexStateType>();
    return { pokemonId, increment, decrement };
  } else if (stateManager == "Recoil") {
    const [pokemonId, setPokemonId] = useRecoilState(pokedexState);
    return {
      pokemonId,
      increment: () => {
        pokemonId + 1 > LAST_POKEMON_INDEX
          ? setPokemonId(FIRST_POKEMON_INDEX)
          : setPokemonId(pokemonId + 1);
      },
      decrement: () => {
        pokemonId - 1 < FIRST_POKEMON_INDEX
          ? setPokemonId(LAST_POKEMON_INDEX)
          : setPokemonId(pokemonId - 1);
      },
    };
  } else if (stateManager == "Zustand") {
    const { pokemonId, increment, decrement } = usePokedexStore();
    return { pokemonId, increment, decrement };
  }
}
