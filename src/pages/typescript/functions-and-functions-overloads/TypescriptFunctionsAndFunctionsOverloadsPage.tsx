import Alert from "../../../components/common/alert/Alert";
import Code from "../../../components/common/code/Code";
import Typography from "../../../components/common/typography/Typography";

export default function TypescriptFunctionsAndFunctionsOverloadsPage() {
  return (
    <>
      <Typography variant="h4">Functions & Functions Overloads</Typography>
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
        The return value of a void function is intended to be ignored
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
    </>
  );
}
