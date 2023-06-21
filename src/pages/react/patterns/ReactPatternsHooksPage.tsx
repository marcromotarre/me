import { useCallback, useState } from "react";
import usePokemons from "../../../hooks/usePokemons";
import { PokemonType } from "../../../types/pokemon";
import Pokemon from "../../../components/Pokemon";
import { usePokemonsCode } from "../../../data/codes/react/patterns/HooksPatternCode";
import Code from "../../../components/common/code/Code";

const ReactPatternsHooksPage = () => {
  return (
    <>
      <p className="text-xl">Hooks Pattern</p>
      <p className="font-light">
        Use functions to reuse stateful logic among multiple components
        throughout the app
      </p>
      <p className="font-light">
        React Hooks are functions special types of functions that you can use in
        order to:
      </p>
      <p className="ml-6 font-light">- Add state to a functional component</p>
      <p className="ml-6 font-light">
        - Reuse stateful logic among multiple components throughout the app.
      </p>
      <p className="ml-6 font-light">- Manage a component&apos;s lifecycle</p>
      <p className="font-light">
        Besides built-in hooks, such as useState, useEffect, and useReducer, we
        can create custom hooks to easiliy share stateful logic across multiple
        components within the application.
      </p>
      <p className="font-light">
        We always will name hooks as {`'use[hookName]'`}. Now we are going to
        create the usePokemons where will have all the fetch logic about
        Pokemons API call
      </p>
      <Code>
        <>{usePokemonsCode}</>
      </Code>
      <p className="font-light">
        Now if we want to use that logic on a component that will paint this
        data on the view is as easy as this:
      </p>
      <Code>
        <>{`const pokemons = usePokemons();`}</>
      </Code>
      <p className="font-light">
        A really good reason to use hooks is make that logic reusable in
        different components.
      </p>
      <p className="font-light">
        We are going to create a couple of component {`<Pokemons />`} and
        {`<Input />`}. Both of this components will use usePokemons and will be
        able to render pokemons data
      </p>

      <div>
        <Input />
        <Pokemons />
      </div>
    </>
  );
};

const Pokemons = () => {
  const pokemons = usePokemons();
  return (
    <div className="flex w-[100%] flex-wrap items-center justify-center">
      {pokemons.map((pokemon: PokemonType, index: number) => (
        <Pokemon key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};

const Input = (props) => {
  const pokemons = usePokemons();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const toggle = useCallback(() => setOpen((state) => !state), []);

  return (
    <div className="relative w-[400px]">
      <input
        onFocus={toggle}
        onBlur={toggle}
        onChange={(e) => setValue(e.target.value)}
        className=""
        value={value}
        placeholder="Enter a Pokemon name..."
        {...props}
      />
      {open && (
        <div className="absolute w-[100%] rounded-md bg-[#f0f3f3]">
          <ul>
            {pokemons.map((pokemon, index) => (
              <li
                key={index}
                onMouseDown={() => {
                  setValue(pokemon.name);
                }}
              >
                {pokemon.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ReactPatternsHooksPage;
