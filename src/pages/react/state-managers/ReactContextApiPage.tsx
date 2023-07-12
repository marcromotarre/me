import Pokedex from "../../../components/pokemon/Pokedex";
import { PokedexProvider } from "../../../components/pokemon/PokedexProvider";

export default function ReactContextApiPage() {
  return (
    <PokedexProvider>
      <Pokedex className="max-w-[80%]" stateManager="ContextApi"></Pokedex>
    </PokedexProvider>
  );
}
