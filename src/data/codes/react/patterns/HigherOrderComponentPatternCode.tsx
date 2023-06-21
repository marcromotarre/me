export const withLoaderCode = `
import { useEffect, useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";

export default function withLoader(Element, fetchFunction) {
  return (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetchFunction()
        .then((response) => setData(response))
        .catch(console.error);
    }, []);

    if (!data) return <LoadingSpinner />;

    return <Element {...props} data={data} />;
  };
}
`;

export const pokemonsWithLoaderCode = `
import { getPokemonsData } from "../fetch/FetchPokemons";
import Pokemons from "./Pokemons";
import withLoader from "./common/loader/withLoader";

export default withLoader(Pokemons, getPokemonsData);
`;

export const LoadingSpinnerCode = `
import { JavascriptIcon } from "../icons";

export const LoadingSpinner = () => (
  <div className="spinner-wrapper flex h-64 items-center justify-center">
    <JavascriptIcon className="animate-spin" size={50} />
  </div>
);
`;
