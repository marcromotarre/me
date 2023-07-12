import { useState } from "react";
import Button from "../../../components/common/buttons/Button";
import {
  ReactIcon,
  RecoilIcon,
  ReduxIcon,
} from "../../../components/common/icons";
import List from "../../../components/common/list/List";
import ListItem from "../../../components/common/list/ListItem";
import Pokedex from "../../../components/pokemon/Pokedex";
import { RecoilRoot } from "recoil";
import { PokedexProvider } from "../../../components/pokemon/PokedexProvider";
import Typography from "../../../components/common/typography/Typography";
import Alert from "../../../components/common/alert/Alert";

const DEFAULT_STATE_MANAGER = "ContextApi";
export default function ReactStateManagersPage() {
  const [stateManager, setStateManager] = useState<StateManagerType>(
    DEFAULT_STATE_MANAGER
  );
  return (
    <>
      <Typography>
        State management in front-end development refers to the management and
        manipulation of application data. It involves techniques and tools to
        efficiently handle the changing state of a web application, allowing
        components to access and update shared data across different parts of
        the application. This helps ensure data consistency, facilitates
        component communication, and enhances the overall user experience.
        Popular state management solutions in the front-end ecosystem include
        Redux, Zustand, Recoild and React's built-in Context API.
      </Typography>
      <Typography>
        The idea of an State Manager is to encapsulate all the components that
        will consume this data inside a Provider. Thanks to the State Manager it
        will not be necessary to pass this data from parents to children.
      </Typography>
      <Alert severity="warning">
        If you refresh the page the State will be relead to its default state
      </Alert>
      <Typography>
        Imagine that we have a state to store a pokemonId: number. This state
        its used in a Pokedex Component that is not receiving this data on its
        props.
      </Typography>

      <Typography>
        Imagine that we have a state to store a pokemonId: number. This state
        its used in a Pokedex Component that is not receiving this data on its
        props.
      </Typography>
      <div className="grid grid-cols-4 gap-x-2">
        <Button
          variant={stateManager == "ContextApi" ? "contained" : "outlined"}
          onClick={() => {
            setStateManager("ContextApi");
          }}
          startIcon={<ReactIcon />}
        >
          ContextApi
        </Button>
        <Button
          variant={stateManager == "Recoil" ? "contained" : "outlined"}
          onClick={() => {
            setStateManager("Recoil");
          }}
          startIcon={<RecoilIcon />}
        >
          Recoil
        </Button>
        <Button
          variant={stateManager == "Zustand" ? "contained" : "outlined"}
          onClick={() => {
            setStateManager("Zustand");
          }}
        >
          Zustand
        </Button>
        <Button
          variant={stateManager == "Redux" ? "contained" : "outlined"}
          onClick={() => {
            setStateManager("Redux");
          }}
          startIcon={<ReduxIcon />}
        >
          Redux
        </Button>
      </div>
      <div>
        <PokedexProvider>
          {stateManager == "ContextApi" && (
            <Pokedex stateManager="ContextApi" />
          )}
        </PokedexProvider>
        <RecoilRoot>
          {stateManager == "Recoil" && <Pokedex stateManager="Recoil" />}
        </RecoilRoot>
        <RecoilRoot>
          {stateManager == "Zustand" && <Pokedex stateManager="Zustand" />}
        </RecoilRoot>
      </div>
    </>
  );
}

export type StateManagerType = "Recoil" | "Zustand" | "ContextApi" | "Redux";
