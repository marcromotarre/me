import { create } from "zustand";

type Store = {
  pokemonId: number;
  increment: () => void;
  decrement: () => void;
};

const FIRST_POKEMON_INDEX = 1;
const LAST_POKEMON_INDEX = 1010;

export const usePokedexStore = create<Store>()((set) => ({
  pokemonId: 1,
  increment: () => {
    set((state) => {
      return state.pokemonId + 1 > LAST_POKEMON_INDEX
        ? { pokemonId: FIRST_POKEMON_INDEX }
        : { pokemonId: state.pokemonId + 1 };
    });
  },
  decrement: () => {
    set((state) => {
      return state.pokemonId - 1 < FIRST_POKEMON_INDEX
        ? { pokemonId: LAST_POKEMON_INDEX }
        : { pokemonId: state.pokemonId - 1 };
    });
  },
}));
