import { api } from ".";
type PokemonDDBB = {
  id: string;
  name: string;
  sprites: { front_default: string };
  height: string;
  weight: string;
};

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
    id: pokemonResponse.id,
    name: pokemonResponse.name,
    sprite: pokemonResponse.sprites.front_default,
    url,
    height: pokemonResponse.height,
    weight: pokemonResponse.weight,
  };
  return pokemon;
};
