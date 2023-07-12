import { useLayoutEffect, useRef, useState } from "react";
import PokedexSVG from "./PokedexSVG";
import PokedexPokemonViewer from "./PokedexPokemonViewer";
import PokedexLeftButton from "./PokedexLeftButton";
import PokedexRightButton from "./PokedexRightButton";

export default function Pokedex({
  className = "",
  stateManager = "ContextApi",
}: ComponentProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [pokedexWidth, setPokedexWidth] = useState<number | null>(null);
  useLayoutEffect(() => {
    console.log("update", ref?.current?.clientWidth);
    if (ref?.current?.clientWidth) {
      setPokedexWidth(Math.min(Number(ref?.current?.clientWidth) * 0.8, 700));
    }
  });

  return (
    <div ref={ref} className="flex w-[100%] justify-center">
      {pokedexWidth && (
        <div className="relative">
          <PokedexPokemonViewer
            stateManager={stateManager}
            style={{
              position: "absolute",
              width: `${pokedexWidth * 0.3}px`,
              top: `${pokedexWidth * 0.485}px`,
              left: `${pokedexWidth * 0.105}px`,
            }}
          />
          <PokedexLeftButton
            stateManager={stateManager}
            pokedexWidth={pokedexWidth}
          />
          <PokedexRightButton
            stateManager={stateManager}
            pokedexWidth={pokedexWidth}
          />
          <PokedexSVG size={pokedexWidth} />
        </div>
      )}
    </div>
  );
}

type ComponentProps = {
  className?: string;
};
