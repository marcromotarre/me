import { useEffect, useState } from "react";
import CardSwipper from "../components/common/card-swiper/CardSwiper";
import { getPokemonData } from "../fetch/FetchPokemon";
import { getPokemonsData } from "../fetch/FetchPokemons";
import Card from "../components/common/card/Card";
import Typography from "../components/common/typography/Typography";

function PokemonCard({
  id,
  sprite,
  name,
  sprites,
}: {
  sprite: string;
  name: string;
}) {
  console.log(id);
  useEffect(() => {
    console.log(name, spriteIndex);
    setSpriteIndex(0);
  }, [id]);

  useEffect(() => {
    return function remove() {
      setSpriteIndex(0);
    };
  }, []);

  const [spriteIndex, setSpriteIndex] = useState(0);

  function nextImage() {
    if (spriteIndex < sprites.length - 1) setSpriteIndex(spriteIndex + 1);
  }

  function previousImage() {
    if (spriteIndex > 0) setSpriteIndex(spriteIndex - 1);
  }
  return (
    <div
      className="relative grid grid-cols-1 justify-items-center gap-y-2 rounded-md p-4 shadow-md"
      style={{
        backgroundColor: "white",
      }}
    >
      <div className="relative">
        <img
          style={{
            userSelect: "none",
            width: "150px",
            height: "150px",
          }}
          draggable={false}
          src={sprites[spriteIndex]}
          alt={name}
        ></img>
      </div>
      <Typography variant="button">{name}</Typography>
      <>
        <div
          onClick={previousImage}
          className="absolute left-0 z-50 h-full w-[50%]"
        ></div>
        <div
          onClick={nextImage}
          className="absolute right-0 z-50 h-full w-[50%]"
        ></div>
        <div className="absolute flex h-full w-full justify-center pl-1 pr-1 pt-1">
          <div
            className="grid h-[3px] w-full gap-x-1"
            style={{ gridTemplateColumns: `repeat(${sprites.length}, auto)` }}
          >
            {sprites.map((_, index) => (
              <div
                key={index}
                className="h-full w-full rounded"
                style={{
                  backgroundColor: spriteIndex === index ? "black" : "white",
                  border: `1px solid ${spriteIndex === index ? "" : "black"}`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
}

export default function ReactMyComponentsCardSwipperPage() {
  const fetchPokemons = async (next = { offset: 0 }) => {
    const elementsToFetch = 5;
    const pokemonsData = await getPokemonsData({
      limit: elementsToFetch,
      offset: next.offset,
    });

    return { data: pokemonsData, next: { offset: next.offset + 5 } };
  };

  return (
    <>
      <div className="flex w-full justify-center">
        <CardSwipper cardComponent={<PokemonCard />} fetch={fetchPokemons} />
      </div>
    </>
  );
}
