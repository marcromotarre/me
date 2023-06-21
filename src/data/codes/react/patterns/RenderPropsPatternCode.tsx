export const kelvinComponentCode = `
export function Kelvin({ value }: { value: number }) {
  return (
    <div className="flex flex-col justify-between rounded-md bg-[#37373e] p-3 text-white">
      The temperature in Kelvin is:{" "}
      <span className="font-bold; text-xl text-[#ff4378]">{value}K</span>
    </div>
  );
}
`;

export const fahrenheitComponentCode = `
export function Fahrenheit({ value }: { value: number }) {
  return (
    <div className="flex flex-col justify-between rounded-md bg-[#37373e] p-3 text-white">
      The temperature in Fahrenheit is:
      <span className="font-bold; text-xl text-[#ff4378]">{value}°F</span>
    </div>
  );
}
`;

export const temperatureConverterCode = `
export function TemperatureConverter(props: {
  renderKelvin: ({ value }: { value: number }) => ReactNode;
  renderFahrenheit: ({ value }: { value: number }) => ReactNode;
}) {
  const [value, setValue] = useState(0);

  return (
    <div className="flex items-center justify-center rounded-md bg-[#151519] p-6">
      <div className="grid grid-cols-1 gap-y-3">
        <input
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
`;

export const temperatureConverterCallCode = `
<TemperatureConverter
  renderKelvin={({ value }) => <Kelvin value={value} />}
  renderFahrenheit={({ value }) => <Fahrenheit value={value} />}
/>
`;
