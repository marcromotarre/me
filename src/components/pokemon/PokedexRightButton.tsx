import { usePokedexContext } from "./state-managers/PokedexProvider";
import PokedexState, { StateManagerType } from "./state-managers/PokedexState";

export default function PokedexRightButton({
  pokedexWidth,
  stateManager,
}: ComponentProps) {
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

type ComponentProps = {
  pokedexWidth: number;
  stateManager: StateManagerType;
};
