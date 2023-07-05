import Code from "../../../components/common/code/Code";
import Typography from "../../../components/common/typography/Typography";

export default function TypescriptIndexSignaturesPage() {
  return (
    <>
      <Typography variant="h4">Index Signatures</Typography>
      <Typography>
        We can specify that the index of an object is a string, but we
        don&apos;t specify value
      </Typography>
      <Code noHeader>
        <>{`
type Phones = { [key: string]: Phone | undefined };

const phones: Phones = {
// Property 'number' is missing in type '{}' but required in type 'Phone'.ts(2741)
emptyPhone: {}, // ERROR
wrongPhoneType: {
// Type 'number' is not assignable to type 'string'.ts(2322)
phoneNumber: 987654321, // ERROR
},
aRandomKey: { // CORRECT PHONE
phoneNumber: "number-for-random-key",
},
anotherRandomKey: { // CORRECT PHONE
phoneNumber: "number-for-another-random-key",
country: "country-for-another-random-key",
},
};`}</>
      </Code>
    </>
  );
}
