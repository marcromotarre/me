import { useEffect } from "react";
import CardSwipper from "../components/common/card-swiper/CardSwiper";
import { getPokemonData } from "../fetch/FetchPokemon";
import { getPokemonsData } from "../fetch/FetchPokemons";
import Card from "../components/common/card/Card";

function PokemonCard({ sprite, name }: { sprite: string; name: string }) {
  return (
    <Card>
      <div
        className="flex items-center justify-center"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "white",
        }}
      >
        <img src={sprite} alt={name}></img>
      </div>
    </Card>
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
