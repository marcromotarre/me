import { useRecoilState } from "recoil";
import { usePokedexContext } from "./PokedexProvider";
import { pokedexState } from "../../../pages/react/state-managers/ReactRecoilPage";
import { usePokedexStore } from "./PokedexZustandState";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/pokedexSlice";

export type PokedexStateType = {
  pokemonId: number;
  increment: () => void;
  decrement: () => void;
};

export const FIRST_POKEMON_INDEX = 1;
export const LAST_POKEMON_INDEX = 1010;

export type StateManagerType = "Recoil" | "Zustand" | "ContextApi" | "Redux";

export default function PokedexState(
  stateManager: StateManagerType
): PokedexStateType {
  if (stateManager == "ContextApi") {
    const { pokemonId, increment, decrement }: PokedexStateType =
      usePokedexContext();
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
  } else if (stateManager == "Redux") {
    const dispatch = useDispatch();
    return {
      pokemonId: useSelector((state) => {
        return state.pokedex.pokemonId;
      }),
      increment: () => {
        dispatch(increment());
      },
      decrement: () => {
        dispatch(decrement());
      },
    };
  }
  return {
    pokemonId: 0,
    increment: () => {},
    decrement: () => {},
  };
}
