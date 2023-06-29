import Modal from "../common/modal/Modal";
import { PokeballIcon, ReactQueryIcon, RightIcon } from "../common/icons";
import React, { useEffect, useState } from "react";
import Pokemon from "../Pokemon";
import Card from "../common/card/Card";
import {
  useInfiniteQuery,
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import Button from "../common/buttons/Button";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Alert from "../common/alert/Alert";
import { getPokemonData } from "../../fetch/FetchPokemon";
import { getPokemonsRequests } from "../../fetch/FetchPokemonsRequests";
import Typography from "../common/typography/Typography";

const LIMIT = 3;

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import("@tanstack/react-query-devtools/build/lib/index.prod.js").then(
    (d) => ({
      default: d.ReactQueryDevtools,
    })
  )
);

const ReactQueryPokemon = ({ url, name }: { url: string; name: string }) => {
  const pokemonId = url.split("/").splice(-2, 1)[0];
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["pokemon", pokemonId],
    queryFn: () => getPokemonData({ url, waiting: 3000 }),
  });

  return <Pokemon pokemon={data ? data : { name }} />;
};

const ReactQueryPokemonModal = ({
  onClose = () => {},
}: {
  onClose?: VoidFunction;
}) => {
  const [offset, setOffset] = useState(0);
  const [reactQueryDevtools, setReactQueryDevtools] = useState(false);
  const [showDevtools, setShowDevtools] = React.useState(false);

  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: [
      "pokemons",
      ...Array.from({ length: LIMIT }, (_, i) => i + offset + 1),
    ],
    queryFn: () => getPokemonsRequests({ limit: LIMIT, offset, waiting: 3000 }),
  });

  const previousPage = () => {
    setOffset(offset - LIMIT);
  };

  const nextPage = () => {
    setOffset(offset + LIMIT);
  };

  const invalidateQuery = () => {};

  const mutation = useMutation({
    mutationFn: invalidateQuery,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["pokemons"] });
    },
  });

  return (
    <>
      <Modal onClose={onClose}>
        <Modal.Header
          title="Pokemon feat React Query"
          icon={<PokeballIcon size={30} />}
        ></Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-y-5">
            <Alert severity="info" variant="outlined">
              Each query has a 3 seconds delay
            </Alert>
            <div className="grid grid-cols-[max-content_auto_auto_auto_max-content] items-center justify-center gap-x-4">
              {offset > 0 ? (
                <Button
                  shape="rounded"
                  variant="text"
                  size="large"
                  startIcon={<RightIcon />}
                  onClick={previousPage}
                ></Button>
              ) : (
                <div></div>
              )}
              {!isLoading &&
                data?.map(({ name, url }, index) => (
                  <ReactQueryPokemon url={url} name={name} />
                ))}
              {isLoading && (
                <>
                  <Pokemon />
                  <Pokemon />
                  <Pokemon />
                </>
              )}
              <Button
                onClick={nextPage}
                shape="rounded"
                variant="text"
                size="large"
                startIcon={<RightIcon />}
              ></Button>
            </div>
            <div className="flex justify-evenly">
              <Button
                onClick={() => {
                  setReactQueryDevtools(!reactQueryDevtools);
                  window.toggleDevtools = () => setShowDevtools((old) => !old);
                }}
                startIcon={<ReactQueryIcon />}
              >
                {reactQueryDevtools ? "Hide DevTools" : "Show DevTools"}
              </Button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="grid grid-cols-[max-content_auto] items-center gap-x-3">
            <ReactQueryIcon size={25} />
            <p className="font-light text-black">
              This example suses React Query Library
            </p>
          </div>
        </Modal.Footer>
      </Modal>
      {reactQueryDevtools && <ReactQueryDevtools initialIsOpen={false} />}
      {showDevtools && (
        <React.Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </React.Suspense>
      )}
    </>
  );
};

export default ReactQueryPokemonModal;
