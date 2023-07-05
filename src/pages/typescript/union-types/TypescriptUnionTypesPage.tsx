import Alert from "../../../components/common/alert/Alert";
import Code from "../../../components/common/code/Code";
import Typography from "../../../components/common/typography/Typography";

export default function TypescriptUnionTypesPage() {
  return (
    <>
      <Typography variant="h4">Union Types</Typography>
      <Typography>
        We have seen some examples of Union Types already in the Typescript
        section. To specify a union type we use the case |
      </Typography>
      <Typography>
        In the next example we are saying that the return value of the function
        flipCoin is a string, But not any string it must have the value
        &ldquo;heads&rdquo; or &ldquo;tails&rdquo;
      </Typography>
      <Code noHeader>
        <>{`
function flipCoin() : "heads" | "tails" {
if(Math.random() > 0.5) return "heads";
return "tails";
}`}</>
      </Code>
      <Typography>Another example:</Typography>
      <Code noHeader>
        <>{`
function maybeGetUserInfo():
| ["error", Error]
| ["success", { name: string; email: string }] {
if (flipCoin() == "heads") {
  return ["success", { name: "Marc Romo", email: "marcromotarre@gmail.com" }];
} else {
  return ["error", new Error("The coin landed on TAILS :(")];
}
}

const outcome = maybeGetUserInfo();

const [type, data] = outome;`}</>
      </Code>
      <Typography>
        If you write this code on a ts file and position mouse on outcome var
        you will see the type. And now the magic of Typescript. Lets assign
        first array value to type var and second one to data. See the types of
        these variables.
      </Typography>
      <Typography>
        It will say to you that type is &ldquo;error&rdquo; or
        &ldquo;succes&rdquo;. And data is Error or &#123; name: string; email:
        string &#125;
      </Typography>
      <Alert severity="info">
        When a value has a type that includes a union, we are only able to use
        the &ldquo;common behaviour&rdquo; that is guaranteed to be there.
      </Alert>
      <Typography>
        In the case of data we can access to name because the object of success
        contains name and the Error class also contains name.
      </Typography>
      <Typography variant="h6">Narrowing with type guards</Typography>
      <Typography>
        Ultinately we need to &ldquo;separate&rdquo; the two potenctial
        possibilities for our value, or we won&apos;t be able to get very far.
        We can do this with type guards
      </Typography>
      <Alert severity="info">
        Type guards are expressions, which when used with control flow
        statement, allow us to have a more specific type for a particular value.
      </Alert>
      <Typography>
        I like to think of these as &ldquo;glue&rdquo; between the compile time
        type-checking and runtime execution of your code. We will work woth one
        that should already be familiar with to start: instanceof.
      </Typography>
      <Code noHeader>
        <>{`
const [type, data] = outcome;
if (data instanceof Error) {
// now you can access to Error props (cause, message, name, stack) using (data.)
} else {
// here you can access to email and name :)
}`}</>
      </Code>
      <Typography variant="h6">Discriminated Unions</Typography>
      <Typography>
        With conditionals checking what is in the first position of the array we
        know what will be in the second. There is one scenario and there is
        another scenario. This is what is called discriminated union. And what
        makes discriminated union is that we have some sort of key to use with
        the type guard that lets us in a broader sense switch between many
        different possibilities.
      </Typography>
      <Code noHeader>
        <>{`
const [type, data] = outcome;
if (outcome[0] === "error") {
// In this branch of your code outcome[1] is an Error
outocome
} else {
// In this branch of your code outcome[1] is user info
outocome
}`}</>
      </Code>
      <Typography>
        If there where 57 posibilites as long as each of these posibilitas had a
        key we could make a nice case switch that would handle each one of those
        cases. Typescript cooperates with you in that cases.
      </Typography>
    </>
  );
}
