import { api } from ".";
type PokemonDDBB = { name: string; sprites: { front_shiny: string } };

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const getPokemonData = async ({
  url,
  waiting = 0,
}: {
  offset?: number;
  limit?: number;
  url: string;
  waiting?: number;
}) => {
  return delay(waiting).then(() => {
    return getPokemonAfterWaiting({ url });
  }, []);
};

const getPokemonAfterWaiting = async ({ url }: { url: string }) => {
  const pokemonResponse = await api.get<PokemonDDBB>(url);
  const pokemon = {
    name: pokemonResponse.name,
    sprite: pokemonResponse.sprites.front_shiny,
    url,
  };
  return pokemon;
};
