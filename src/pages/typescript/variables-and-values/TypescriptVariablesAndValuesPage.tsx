import Alert from "../../../components/common/alert/Alert";
import Code from "../../../components/common/code/Code";
import Typography from "../../../components/common/typography/Typography";

export default function TypescriptVariablesAndValuesPage() {
  return (
    <>
      <Typography variant="h4">Variables and Values</Typography>
      <Code noHeader>
        <>{`
let age = 6; // typescript know that age now is a number
age = "now i want to be a string"; // Error
// Type 'string' is not assignable to type 'number'.ts(2322)`}</>
      </Code>
      <Code noHeader>
        <>{`
const age = 6; // typescript know that age now is 6 and cannot be modified`}</>
      </Code>
      <Typography>
        To add a type in typescript. Type any is the most flexible type in
        typescript, it means any type.
      </Typography>
      <Code noHeader>
        <>{`
let age: number; // you are specifying that age is a number
age = 6;
let myAge: number = 6; // Not necessary as 6 is already a number
let yourAge: any; // Caution with any type`}</>
      </Code>
      <Alert severity="warning">
        I would only type variables when its necessary.
      </Alert>
      <Alert severity="warning">
        Avoid any as much as you can. Any is like a virus that propagates
        through your code.
      </Alert>
    </>
  );
}
