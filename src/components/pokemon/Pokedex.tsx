import { useLayoutEffect, useRef, useState } from "react";
import PokedexSVG from "./PokedexSVG";
import PokedexPokemonViewer from "./PokedexPokemonViewer";

export default function Pokedex({ className = "" }: ComponentProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [pokedexWidth, setPokedexWidth] = useState<number | null>(null);
  useLayoutEffect(() => {
    console.log("update", ref?.current?.clientWidth);
    if (ref?.current?.clientWidth) {
      setPokedexWidth(Number(ref?.current?.clientWidth) * 0.8);
    }
  });
  return (
    <div ref={ref} className="flex w-[100%] justify-center">
      {pokedexWidth && (
        <div className="relative">
          <PokedexPokemonViewer
            style={{
              position: "absolute",
              width: `${pokedexWidth * 0.25}px`,
              height: `${pokedexWidth * 0.25}px`,
              top: `${pokedexWidth * 0.51}px`,
              left: `${pokedexWidth * 0.125}px`,
            }}
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
