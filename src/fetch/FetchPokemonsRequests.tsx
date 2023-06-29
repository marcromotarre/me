import { api } from ".";

export const POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/";

type PokemonsDDBB = { results: Array<{ name: string; url: string }> };
type PokemonDDBB = { name: string; sprites: { front_shiny: string } };

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const getPokemonsRequests = async ({
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
    return getPokemonsRequestsAfterWaiting({ offset, limit, url });
  }, []);
};

const getPokemonsRequestsAfterWaiting = async ({
  offset,
  limit,
  url,
}: {
  offset: number;
  limit: number;
  url?: string;
}) => {
  const { results } = await api.get<PokemonsDDBB>(
    url ? url : `${POKEMONS_URL}?offset=${offset}&limit=${limit}`
  );
  return results;
};
