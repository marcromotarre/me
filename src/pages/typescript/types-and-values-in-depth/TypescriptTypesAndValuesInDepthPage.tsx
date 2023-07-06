import Alert from "../../../components/common/alert/Alert";
import Code from "../../../components/common/code/Code";
import Typography from "../../../components/common/typography/Typography";

export default function TypescriptTypesAndValuesInDepthPage() {
  return (
    <>
      <Typography variant="h4">Top and bottom types</Typography>
      <Typography>
        Let&apos;s imagine that types describe a set of allowed values that a
        value might be.
      </Typography>
      <Typography variant="h6">Top types</Typography>
      <Typography variant="subtitle1">any</Typography>
      <Typography>
        You can think of values with an any type as “playing by the usual
        JavaScript rules”. Here is an illustrative example:
      </Typography>
      <Alert severity="warning">I do not recommend use any.</Alert>
      <Code noHeader>
        <>{`
let flexible: any = 4
flexible = "Download some more ram"
flexible = window.document
flexible = setTimeout`}</>
      </Code>
      <Typography>
        It&apos;s important to understand that any is not necessarily a problem
        — sometimes it&apos;s exactly the right type to use for a particular
        situation.
      </Typography>
      <Typography variant="subtitle1">unknowk</Typography>
      <Code noHeader>
        <>{`
let flexible: unknown = 4
flexible = "Download some more ram"
flexible = window.document
flexible = setTimeout`}</>
      </Code>
      <Typography>
        Like any, unknown can accept any value. But there is an important
        diference :
      </Typography>
      <Alert severity="info">
        Values with an unknown type cannot be used without first applying a type
        guard
      </Alert>
      <Typography>
        unknown is great for values received at runtime (e.g., your data layer).
        By obligating consumers of these values to perform some light validation
        before using them, errors are caught earlier, and can often be surfaced
        with more context.
      </Typography>
      <Code noHeader>
        <>{`
const myUnknown: unknown = 3;
if (typeof myUnknown === "string") {
  // This code runs for { myUnknown| all strings }
  console.log(myUnknown, "is a string");
} else if (typeof myUnknown === "number") {
  // This code runs for { myUnknown| all numbers }
  console.log(myUnknown, "is a number");
} else {
  // this would run for "the leftovers"
  // { myUnknown| anything except string or numbers }
}`}</>
      </Code>

      <Typography variant="h6">Bottom types</Typography>
      <Typography>The opposite from Top Types are Bottom Types. </Typography>
      <Typography variant="subtitle1">never</Typography>
      <Typography>
        A bottom type (symbol: ⊥) is a type that describes no possible value
        allowed by the system. We use never in return type functions to specify
        that function will never arrive to end. A function returning never
        cannot have a reachable end point.
      </Typography>
      <Code noHeader>
        <>{`
function a(message: string): never {
  throw new Error(message);
}`}</>
      </Code>

      <Typography variant="h4">Type Guards</Typography>
      <Typography>
        We&apos;ve explored built-in type guards like typeof and instanceof, but
        there&apos;s a lot more power in type guards, including the ability to
        define your own!
      </Typography>
      <Code noHeader>
        <>{`
let value:
| Date
| null
| undefined
| "pineapple"
| [number]
| { dateRange: [Date, Date] }

// instanceof
if (value instanceof Date) {
  // we know that here value is Date type
  value
}

// typeof
else if (typeof value === "string") {
  // we know here that value is "pineapple"
  value
}

// Specific value check
else if (value === null) {
  // we know here that value is null
  value
}

// Truthy/falsy check
else if (!value) {
  // here value must to be undefined
  value
}
// Some built-in functions
else if (Array.isArray(value)) {
  // we know here value must be [number]
  value
}
// Property presence check
else if ("dateRange" in value) {
  // we know here value is { dateRange: [Date, Date] }
  value
} else {
  // here value must be never as we cover all other types
  value
}`}</>
      </Code>
      <Typography variant="h6">User defined-type guards</Typography>
      <Code noHeader>
        <>{`
 interface CarLike {
  make: string;
  model: string;
  year: number;
}

let maybeCar: unknown;

// the guard
function isCarLike(valueToTest: unknown): valueToTest is CarLike {
  return (
    valueToTest !== null &&
    typeof valueToTest === "object" &&
    "make" in valueToTest &&
    typeof valueToTest["make"] === "string" &&
    "model" in valueToTest &&
    typeof valueToTest["model"] === "string" &&
    "year" in valueToTest &&
    typeof valueToTest["year"] === "number"
  );
}

// using the guard
if (isCarLike(maybeCar)) {
  maybeCar;
}
`}</>
      </Code>

      <Code noHeader>
        <>{`
interface CarLike {
  make: string;
  model: string;
  year: number;
}

let maybeCar: unknown;

// the guard
function assertsIsCarLike(valueToTest: any): asserts valueToTest is CarLike {
  if (
    !(
      valueToTest &&
      typeof valueToTest === "object" &&
      "make" in valueToTest &&
      typeof valueToTest["make"] === "string" &&
      "model" in valueToTest &&
      typeof valueToTest["model"] === "string" &&
      "year" in valueToTest &&
      typeof valueToTest["year"] === "number"
    )
  )
    throw new Error('Value does not appear to be a CarLike');
}

maybeCar; // here is unknown

assertsIsCarLike(maybeCar);
maybeCar; // we know that here is CarLike`}</>
      </Code>
      <Typography variant="h4">Nullish values</Typography>
      <Alert severity="info">
        null means: there is a value, and that value is nothing. While some
        people believe that null is not an important part of the JS language, I
        find that it’s useful to express the concept of a “nothing” result (kind
        of like an empty array, but not an array).
      </Alert>
      <Typography>
        This nothing is very much a defined value, and is certainly a presence —
        not an absence — of information.
      </Typography>
      <Code noHeader>
        <>{`
const userInfo = {
  name: "Mike",
  email: "mike@example.com",
  secondaryEmail: null, // user has no secondary email
}`}</>
      </Code>
    </>
  );
}
