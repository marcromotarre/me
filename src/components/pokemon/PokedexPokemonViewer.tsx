import Styles from "../types/style";
import PokedexPokemonViewerSVG from "./PokedexPokemonViewerSVG";
import { usePokedexContext } from "./PokedexProvider";
import Pokemon from "./Pokemon";

const WIDTH = 200;
export default function PokedexPokemonViewer({
  style = {},
  stateManager,
}: ComponentProps) {
  const width = style.width ? Number(style.width.replace("px", "")) : WIDTH;
  return (
    <div style={{ position: "relative", ...style }}>
      <div
        style={{
          position: "absolute",
          width: `${width * 0.79}px`,
          height: `${width * 0.77}px`,
          top: `${width * 0.1}px`,
          left: `${width * 0.11}px`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pokemon stateManager={stateManager} />
      </div>
      <PokedexPokemonViewerSVG size={width} />
    </div>
  );
}

type ComponentProps = {
  style: Styles;
};
