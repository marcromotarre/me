import { api } from ".";

export const POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/";

type PokemonsDDBB = { results: Array<{ name: string; url: string }> };
type PokemonDDBB = { name: string; sprites: { front_default: string } };

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const getPokemonsData = async ({
  offset = 0,
  limit = 20,
  url,
  waiting = 0,
}: {
  offset?: number;
  limit?: number;
  url?: string;
  waiting?: number;
}) => {
  return delay(waiting).then(() => {
    return getPokemonsAfterWaiting({ offset, limit, url });
  }, []);
};

const getSprites = (sprites) => {
  const _sprites = [];
  if (sprites.front_default) {
    _sprites.push(sprites.front_default);
  }
  if (sprites.back_default) {
    _sprites.push(sprites.back_default);
  }

  if (sprites.other.dream_world.front_default) {
    _sprites.push(sprites.other.dream_world.front_default);
  }
  return _sprites;
};

const getPokemonsAfterWaiting = async ({
  offset,
  limit,
  url,
}: {
  offset: number;
  limit: number;
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
      sprite: pokemonResponse.sprites.front_default,
      sprites: getSprites(pokemonResponse.sprites),
      url,
    });
  }

  return pokemons;
};
