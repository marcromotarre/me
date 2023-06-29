import { PokemonType } from "../types/pokemon";
import Card from "./common/card/Card";
import { PokeballIcon } from "./common/icons";
import Typography from "./common/typography/Typography";

function Pokemon({ pokemon }: { pokemon?: PokemonType }) {
  return (
    <Card>
      <div className="grid grid-cols-[80px] grid-rows-[60px_25px] items-center justify-center gap-y-[5px]">
        {pokemon && pokemon.sprite ? (
          <img src={pokemon.sprite} alt={pokemon.name}></img>
        ) : (
          <div className="justify-self-center">
            <PokeballIcon
              className={
                pokemon && pokemon.name ? "animate-bounce" : "animate-spin"
              }
            />
          </div>
        )}
        {pokemon && pokemon.name ? (
          <div className="justify-self-center">
            <Typography variant="button">{pokemon.name}</Typography>
          </div>
        ) : (
          <div className="h-[20px] w-[100%] animate-pulse justify-self-center bg-slate-400" />
        )}
      </div>
    </Card>
  );
}

export default Pokemon;
