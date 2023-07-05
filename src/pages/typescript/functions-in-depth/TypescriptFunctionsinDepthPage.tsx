import Alert from "../../../components/common/alert/Alert";
import Code from "../../../components/common/code/Code";
import Typography from "../../../components/common/typography/Typography";

export default function TypescriptFunctionsinDepthPage() {
  function add(a: string, b: string): string;
  function add(a: number, b: number): number;

  function add(a: unknown, b: unknown): unknown {
    return a + b;
  }

  const stringSum = add("Hello ", "Steve"); // returns "Hello Steve"
  const numberSum = add(10, 20); // returns 30
  const booleanSum = add(true, false); // ERROR No overload matches this call.
  const numberStringSum = add(10, "steve"); // ERROR No overload matches this call.

  return (
    <>
      <Typography variant="h4">Functions in Depth</Typography>
      <Code noHeader>
        <>{`
interface TwoNumberCalculation {
  (x: number, y: number): number;
}
 
type TwoNumberCalc = (x: number, y: number) => number;
 
// here we don't need to specify agaig what's a and b
const add: TwoNumberCalculation = (a, b) => a + b;

// here we don't need to specify agaig what's a and b
const subtract: TwoNumberCalc = (x, y) => x - y;`}</>
      </Code>
      <Typography variant="h6">Void</Typography>
      <Typography>
        Sometimes functions don&apos;t return anything, and we know from
        experience with JavaScript, what actually happens in the situation below
        is that x will be undefined:
      </Typography>

      <Code noHeader>
        <>{`
  function printFormattedJSON(obj: string[]) {
    console.log(JSON.stringify(obj, null, "  "))
  }
  const x = printFormattedJSON(["hello", "world"])`}</>
      </Code>

      <Typography>
        void is a special type, that&apos;s specifically used to describe
        function return values.
      </Typography>
      <Alert severity="info">
        The return value of a void function is intended to be ignored. Void
        should only be used as return type.
      </Alert>

      <Typography>
        Be careful void and undefined does not means the same:
      </Typography>
      <Code noHeader>
        <>{`
function invokeInFourSeconds(callback: () => undefined) {
  setTimeout(callback, 4000)
}
function invokeInFiveSeconds(callback: () => void) {
  setTimeout(callback, 5000)
}`}</>
      </Code>
      <Typography variant="h6">Construct Signatures</Typography>
      <Typography>
        Construct signatures are similar to call signatures, except they
        describe what should happen with the new keyword.
      </Typography>
      <Code noHeader>
        <>{`
interface DateConstructor {
  new (value: number): Date
}
 
let MyDateConstructor: DateConstructor = Date
const d = new MyDateConstructor()`}</>
      </Code>
      <Typography>
        This is not much used but is good to know to recognise it if you see it.
      </Typography>
      <Typography variant="h6">Function overloads</Typography>

      <Code noHeader>
        <>{`
function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: number | string, b: number | string): number | string {
  return a + b;
}

const stringSum = add("Hello ", "Steve"); // returns "Hello Steve"
const numberSum = add(10, 20); // returns 30
const booleanSum = add(true, false); // ERROR No overload matches this call.
const numberStringSum = add(10, "steve"); // ERROR No overload matches this call.`}</>
      </Code>

      <Typography variant="h6">this types</Typography>
    </>
  );
}
