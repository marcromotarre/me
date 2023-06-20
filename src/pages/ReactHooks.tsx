import { useLayoutEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Title from "../components/common/Title";
import Code from "../components/common/code/Code";
import ReactIcon from "../components/common/icons/ReactIcon";
import {
  expensiveMathOperationCode,
  expensiveMathOperationUsingMemo,
  expensiveMathOperationWithoutUsingMemo,
  useMemoExample,
} from "../data/codes/UseMemoCode";
import {
  useRefExampleCode,
  useRefInicializerCode,
  useRefManipulatingDOMCode,
} from "../data/codes/UseRefCode";
import useStateExampleCode from "../data/codes/UseStateExampleCode";
import useStateInicialitzationCode from "../data/codes/UseStateInicialitzationCode";
import UseMemoModal from "../components/mr-modals/UseMemoModal";
import UseLayoutEffectModal from "../components/mr-modals/UseLayoutEffectModal";
import { useLayoutEffectCode } from "../data/codes/UseLayoutEffectCode";
import LateralMenu from "../components/common/lateral-menu/LateralMenu";

const ReactHooksPage = () => {
  const [useMemoModalState, setUseMemoModalState] = useState(false);
  const [useLayoutEefectState, setUseLayoutEefectState] = useState(false);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const el = useRef<HTMLTextAreaElement | null>(null);
  useLayoutEffect(() => {
    setWidth(el.current.clientWidth * 2);
    setHeight(el.current.clientHeight);
  });

  return (
    <div className="grid grid-cols-1 gap-y-4 p-8">
      <Title icon={<ReactIcon size={30} />} title="React Hooks" />
      <p className="font-light">
        React Hooks are a feature introduced in React 16.8 that allow developers
        to use state and other React features in functional components without
        the need for writing a class. Hooks are functions that enable you to add
        state and other React features to functional components. Traditionally,
        in React, state and lifecycle methods were managed in class components.
        Hooks provide a way to use these features in functional components,
        making them more powerful and easier to read and maintain. Hooks are
        built-in functions provided by React that you can use to add and manage
        state, perform side effects, and access the React lifecycle methods.
        There are several built-in hooks available in React, including:
      </p>
      <p>useState</p>
      <p className="font-light">
        This hook allows you to add and manage state in a functional component.
        It returns a state value and a function to update that state. When the
        value is updated component rerenders.
      </p>
      <Code>
        <div>{useStateInicialitzationCode}</div>
      </Code>
      <Code>
        <>{useStateExampleCode}</>
      </Code>

      <p>useEffect</p>
      <p className="font-light">
        This hook is used to perform side effects, such as fetching data from an
        API or subscribing to events. It replaces lifecycle methods like
        componentDidMount, componentDidUpdate, and componentWillUnmount.
      </p>
      <p className="font-light">
        Example of componentDidMount in FunctionalComponent
      </p>
      <Code>
        <>{`
          useEffect(() => {
          }, []);`}</>
      </Code>
      <p className="font-light">
        Example of componentWillUnmount in FunctionalComponent
      </p>
      <Code>
        <>{`
          useEffect(() => {
            return () => {
              // write here the code
            };
          }, []);;`}</>
      </Code>

      <p>useRef</p>
      <p className="font-light">
        useRef is a React Hook that lets you reference a value that is not
        needed for rendering
      </p>
      <Code>
        <>{useRefInicializerCode}</>
      </Code>
      <p className="font-light">
        This component uses a ref to keep track of how many times the button was
        clicked. Note that it is okay to use a ref instead of state here because
        the click count is only read and written in an event handler.
      </p>
      <Code>
        <>{useRefExampleCode}</>
      </Code>
      <p className="font-light">
        The most common use of useRef is to manipulate DOM elements. We gonna
        use useRef to setup a variable and then with the ref prop we are going
        to set the value of that variable.
      </p>
      <p className="font-light">
        In this example, clicking the button will focus the input:
      </p>
      <Code>
        <>{useRefManipulatingDOMCode}</>
      </Code>

      <p>useMemo</p>
      <p className="font-light">
        useMemo is a React Hook that lets you cache the result of a calculation
        between re-renders.
      </p>
      <p className="font-light">
        Imagine that we have an expensive math operation:
      </p>
      <Code>
        <>{expensiveMathOperationCode}</>
      </Code>
      <p className="font-light">
        We can use useMemo to cache the result of that operation and when the
        component rerenders will use the cached value instead of call the
        expensiveMathOperationAgain
      </p>
      <Code>
        <>{useMemoExample}</>
      </Code>
      <p className="font-light">
        You can try the same code without using useMemo and it will call the
        function in each single render
      </p>
      <p className="font-light">instead of this:</p>
      <Code>
        <>{expensiveMathOperationUsingMemo}</>
      </Code>
      <p className="font-light">write this:</p>
      <Code>
        <>{expensiveMathOperationWithoutUsingMemo}</>
      </Code>
      <button
        onClick={() => {
          setUseMemoModalState(true);
        }}
        className="grid w-max grid-cols-[auto_auto] items-center gap-x-3 rounded-md bg-[#F05033] p-3"
      >
        <p className="text-white">See useMemo Example</p>
      </button>
      {useMemoModalState && (
        <UseMemoModal
          onClose={() => {
            setUseMemoModalState(false);
          }}
        />
      )}
      <p>useCallback</p>
      <p className="font-light">
        useCallback is a React Hook that lets you cache a function definition
        between re-renders.
      </p>
      <p>useLayoutEffect</p>
      <p className="font-light">
        Only use useLayoutEffect when you want to measure something in the DOM
        after its being rendered. Everything else you need use useEffect
      </p>
      <p className="font-light">
        The following code updates width and height variables after the textarea
        is resized
      </p>
      <div>
        <h2>textarea width: {width}px</h2>
        <h2>textarea height: {height}px</h2>
        <textarea
          className="mh-[300px] mw-[500px] resize border-2"
          onClick={() => {
            setWidth(0); // this is basically saying "force update"
          }}
          ref={el}
        />
      </div>
      <Code>
        <>{useLayoutEffectCode}</>
      </Code>
    </div>
  );
};

export default ReactHooksPage;
