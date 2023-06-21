import { getPokemonsData } from "../fetch/FetchPokemons";
import Pokemons from "./Pokemons";
import withLoader from "./common/loader/withLoader";

export default withLoader(Pokemons, getPokemonsData);
