import Code from "../../../components/common/code/Code";
import Typography from "../../../components/common/typography/Typography";

export default function TypescriptArraysPage() {
  return (
    <>
      <Typography variant="h4">Arrays</Typography>
      <Typography>You can type arrays in different ways:</Typography>
      <Code noHeader>
        <>{`
const phones: Array<Phone> = [];`}</>
      </Code>
      <Code noHeader>
        <>{`
const phones: Phone[] = [];`}</>
      </Code>
      <Typography>Now lets add some data to variable phone</Typography>
      <Code noHeader>
        <>{`
// Argument of type '{}' is not assignable to parameter of type 'Phone'.
phones.push({}); // ERROR
// Type 'number' is not assignable to type 'string'.ts(2322)
phones.push({ phoneNumber: 987654321 }); // ERROR
phones.push({ phoneNumber: "987654321" }); // CORRECT :)`}</>
      </Code>
    </>
  );
}
