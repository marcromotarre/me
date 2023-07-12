import { PokedexIcon } from "../../../components/common/icons";
import Typography from "../../../components/common/typography/Typography";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Pokedex from "../../../components/pokemon/Pokedex";

const FIRST_POKEMON_INDEX = 1;
const LAST_POKEMON_INDEX = 1010;

export default function ReactRecoilPage() {
  return (
    <RecoilRoot>
      <Pokedex stateManager="Recoil"></Pokedex>
    </RecoilRoot>
  );
}

export const pokedexState = atom({
  key: "pokedexState",
  default: 1,
});
