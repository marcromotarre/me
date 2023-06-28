import Modal from "../common/modal/Modal";
import { PokeballIcon, ReactQueryIcon, RightIcon } from "../common/icons";
import { useEffect, useState } from "react";
import Pokemon from "../Pokemon";
import Card from "../common/card/Card";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPokemonsData } from "../../fetch/FetchPokemons";
import Button from "../common/buttons/Button";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const LIMIT = 3;

const ReactQueryPokemonModal = ({
  onClose = () => {},
}: {
  onClose?: VoidFunction;
}) => {
  const [offset, setOffset] = useState(0);
  const [reactQueryDevtools, setReactQueryDevtools] = useState(false);

  const queryClient = useQueryClient();

  console.log("offset", offset);
  const query = useQuery({
    queryKey: ["pokemons"],
    queryFn: () => getPokemonsData({ limit: LIMIT, offset }),
  });
  useEffect(() => {}, [offset]);

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
            <div className="grid grid-cols-[max-content_auto_auto_auto_max-content] items-center justify-center gap-x-4">
              <Button
                shape="rounded"
                variant="text"
                size="large"
                startIcon={<RightIcon />}
                onClick={previousPage}
              ></Button>
              {query.data?.map((pokemon, index) => (
                <Card key={index}>
                  <Pokemon pokemon={pokemon} />
                </Card>
              ))}
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
              This uses React Query Library
            </p>
          </div>
        </Modal.Footer>
      </Modal>
      {reactQueryDevtools && <ReactQueryDevtools initialIsOpen={false} />}
    </>
  );
};

export default ReactQueryPokemonModal;
