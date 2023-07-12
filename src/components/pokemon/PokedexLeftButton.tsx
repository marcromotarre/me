import { usePokedexContext } from "./state-managers/PokedexProvider";
import PokedexState from "./state-managers/PokedexState";

export default function PokedexLeftButton({ pokedexWidth, stateManager }) {
  const { decrement } = PokedexState(stateManager);

  return (
    <button
      onClick={decrement}
      style={{
        position: "absolute",
        width: `${pokedexWidth * 0.05}px`,
        height: `${pokedexWidth * 0.05}px`,
        top: `${pokedexWidth * 0.865}px`,
        left: `${pokedexWidth * 0.34}px`,
      }}
    ></button>
  );
}
