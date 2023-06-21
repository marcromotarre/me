import { ReactNode, useState } from "react";
import Alert from "../../../components/common/alert/Alert";
import Code from "../../../components/common/code/Code";
import {
  fahrenheitComponentCode,
  kelvinComponentCode,
  temperatureConverterCallCode,
  temperatureConverterCode,
} from "../../../data/codes/react/patterns/RenderPropsPatternCode";

const ReactPatternsRenderPropsPage = () => {
  return (
    <>
      <p className="text-xl">Render Props Pattern</p>
      <p className="font-light">
        Pass JSX elements to components through props
      </p>
      <p className="font-light">
        With the Render Props pattern, we pass components as props to other
        components. The components that are passed as props can in turn receive
        props from that component.
      </p>
      <p className="font-light">
        Render props make it easy to reuse logic across multiple components.
      </p>
      <Alert severity="success">
        <>
          <span>Reusability:</span> Since render props can be different each
          time, we can make components that receive render props highly reusable
          for multiple usecases.
        </>
      </Alert>
      <Alert severity="success">
        <>
          <span>Separation of concerns:</span> We can separate our app&apos;s
          logic from rendering components through render props. The stateful
          component that receives a render prop can pass the data onto stateless
          components, which merely render the data.
        </>
      </Alert>
      <Alert severity="success">
        <>
          <span>Solution to HOC problems:</span> Since we explicitly pass props,
          we solve the HOC&apos;s implicit props issue. The props that should
          get passed down to the element, are all visible in the render
          prop&apos;s arguments list. We know exactly where certain props come
          from.
        </>
      </Alert>
      <Alert severity="warning">
        <>
          <span>Solution to HOC problems:</span> Since we explicitly pass props,
          we solve the HOC&apos;s implicit props issue. The props that should
          get passed down to the element, are all visible in the render
          prop&apos;s arguments list. We know exactly where certain props come
          from.
        </>
      </Alert>
      <p className="font-light">
        Let&apos;s see an example of a Component using Render Props Pattern.
        Imagine that we have a {`<Kelvin />`} Component and {`<Fahrenheit />`}
      </p>
      <div className="flex justify-evenly">
        <Kelvin value={0} />
        <Fahrenheit value={0} />
      </div>
      <Code>
        <>{kelvinComponentCode}</>
      </Code>
      <Code>
        <>{fahrenheitComponentCode}</>
      </Code>
      <p className="font-light">
        Yes I know that both looks almost the same and maybe we could refactor
        that in a single reusable component. But for the example I need them as
        two separate components.
      </p>
      <p className="font-light">
        Now imagine that we want to build a temperature converter from Celsius
        to Kelvin and Fahrenheit
      </p>
      <Code>
        <>{temperatureConverterCode}</>
      </Code>
      <p className="font-light">
        So now we can call the {`<TemperatureConverter />`} component
      </p>
      <Code>
        <>{temperatureConverterCallCode}</>
      </Code>
      <div className="flex justify-center">
        <div className="w-[90%] max-w-[500px]">
          <TemperatureConverter
            renderKelvin={({ value }) => <Kelvin value={value} />}
            renderFahrenheit={({ value }) => <Fahrenheit value={value} />}
          />
        </div>
      </div>
    </>
  );
};

export function Kelvin({ value }: { value: number }) {
  return (
    <div className="flex flex-col justify-between rounded-md bg-[#37373e] p-3 text-white">
      The temperature in Kelvin is:{" "}
      <span className="font-bold; text-xl text-[#ff4378]">{value}K</span>
    </div>
  );
}

export function Fahrenheit({ value }: { value: number }) {
  return (
    <div className="flex flex-col justify-between rounded-md bg-[#37373e] p-3 text-white">
      The temperature in Fahrenheit is:
      <span className="font-bold; text-xl text-[#ff4378]">{value}°F</span>
    </div>
  );
}

export function TemperatureConverter(props: {
  renderKelvin: ({ value }: { value: number }) => ReactNode;
  renderFahrenheit: ({ value }: { value: number }) => ReactNode;
}) {
  const [value, setValue] = useState(0);

  return (
    <div className="flex items-center justify-center rounded-md bg-[#151519] p-6">
      <div className="grid grid-cols-1 gap-y-3">
        <input
          className="rounded-md border-none bg-[#37373e] pb-[5px] pl-[10px] pr-[10px] pt-[5px] text-white"
          type="number"
          placeholder="Degrees Celcius"
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
        <div className="grid max-w-[500px] grid-cols-2 gap-x-3">
          {props.renderKelvin({ value: Math.floor(value + 273.15) })}
          {props.renderFahrenheit({ value: Math.floor((value * 9) / 5 + 32) })}
        </div>
      </div>
    </div>
  );
}

export default ReactPatternsRenderPropsPage;
