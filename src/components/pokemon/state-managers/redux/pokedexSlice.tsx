import { createSlice } from "@reduxjs/toolkit";
import { FIRST_POKEMON_INDEX, LAST_POKEMON_INDEX } from "../PokedexState";

export const pokedexSlice = createSlice({
  name: "pokedex",
  initialState: {
    pokemonId: 1,
  },
  reducers: {
    increment: (state /*, action*/) => {
      state.pokemonId =
        state.pokemonId + 1 > LAST_POKEMON_INDEX
          ? FIRST_POKEMON_INDEX
          : state.pokemonId + 1;
    },
    decrement: (state /*, action*/) => {
      state.pokemonId =
        state.pokemonId - 1 < FIRST_POKEMON_INDEX
          ? LAST_POKEMON_INDEX
          : state.pokemonId - 1;
    },
  },
});

export const { increment, decrement } = pokedexSlice.actions;
export default pokedexSlice.reducer;
