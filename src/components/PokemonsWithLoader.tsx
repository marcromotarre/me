import { getPokemonsData } from "../fetch/FetchPokemons";
import Pokemons from "./Pokemons";
import { PokeballIcon } from "./common/icons";
import withLoader from "./common/loader/withLoader";

export default withLoader(
  Pokemons,
  () => getPokemonsData({ waiting: 10000 }),
  <PokeballIcon />
);
