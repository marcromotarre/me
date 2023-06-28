import { api } from ".";

export const POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/";

type PokemonsDDBB = { results: Array<{ name: string; url: string }> };
type PokemonDDBB = { name: string; sprites: { front_shiny: string } };

export const getPokemonsData = async ({
  offset = 0,
  limit = 20,
  url,
}: {
  offset?: number;
  limit?: number;
  url?: string;
}) => {
  const pokemons = [];
  const { results } = await api.get<PokemonsDDBB>(
    url ? url : `${POKEMONS_URL}?offset=${offset}&limit=${limit}`
  );

  for (let index = 0; index < results.length; index++) {
    const url = results[index].url;
    const pokemonResponse = await api.get<PokemonDDBB>(url);
    pokemons.push({
      name: pokemonResponse.name,
      sprite: pokemonResponse.sprites.front_shiny,
      url,
    });
  }

  return pokemons;
};
