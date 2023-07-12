import { usePokedexContext } from "./PokedexProvider";
import PokedexState from "./state-managers/PokedexState";

export default function PokedexRightButton({ pokedexWidth, stateManager }) {
  const { increment } = PokedexState(stateManager);

  return (
    <button
      onClick={increment}
      style={{
        position: "absolute",
        width: `${pokedexWidth * 0.05}px`,
        height: `${pokedexWidth * 0.05}px`,
        top: `${pokedexWidth * 0.865}px`,
        left: `${pokedexWidth * 0.43}px`,
      }}
    ></button>
  );
}
