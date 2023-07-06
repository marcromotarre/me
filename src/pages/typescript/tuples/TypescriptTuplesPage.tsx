import Alert from "../../../components/common/alert/Alert";
import Code from "../../../components/common/code/Code";
import Typography from "../../../components/common/typography/Typography";

export default function TypescriptTuplesPage() {
  return (
    <>
      <Code noHeader>
        <>{`
const numPair: [number, number] = [4, 5];`}</>
      </Code>
      <Code noHeader>
        <>{`
// Type 'string' is not assignable to type 'number'.ts(2322)
const numPair: [number, number] = [4, "5"]; // ERROR`}</>
      </Code>
      <Code noHeader>
        <>{`
const numPair: [number, number] = [4, 5];
const [number1, number2] = numPair;
console.log(number1) + number2); // 9`}</>
      </Code>
      <Typography>Lets see a corner case here:</Typography>
      <Typography>
        There is no concept in typecript yet of like, I&apos;m calling this
        thing push and that can modify its type. In typescript you only get
        validations on assignaments and you can get a shoot on your foot when
        you use push and pop
      </Typography>
      <Code noHeader>
        <>{`
const numPair: [number, number] = [4, 5]; 
numPair.push(6);
console.log(numPair); // [4, 5, 6] :(

numPair.pop();
numPair.pop();
console.log(numPair); // [4] :(`}</>
      </Code>

      <Alert severity="warning">
        There is no type equivalende check on when we invoke method on a
        variable
      </Alert>
    </>
  );
}
