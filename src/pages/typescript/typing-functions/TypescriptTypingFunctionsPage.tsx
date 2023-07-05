import Alert from "../../../components/common/alert/Alert";
import Code from "../../../components/common/code/Code";
import Typography from "../../../components/common/typography/Typography";

export default function TypescriptTypingFunctionsPage() {
  return (
    <>
      <Typography variant="h4">Typing Functions</Typography>
      <Typography>
        In the next example we are specifying that the function add receives two
        numbers and must be numbers. Also this function returns a number
      </Typography>
      <Code noHeader>
        <>{`
function add(a: number, b: number): number {
return a + b;
}

add(3, 4);
add(3, "0"); 
// Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)`}</>
      </Code>
      <Alert severity="info">
        Typescript types avoid coercion as we can control value types
      </Alert>
      <Code noHeader>
        <>{`
function add(a: number, b: number): number {
// Type 'null' is not assignable to type 'number'.ts(2322)
return null;
}`}</>
      </Code>
      <Typography variant="h6">Optional properties</Typography>
      <Typography>
        To have an optional property we will use ?(question mark)
      </Typography>
      <Code noHeader>
        <>{`
function add(a: number, b: number, c?: number): number {
return a + b + c;
}

console.log(add(3, 4)); // NaN as c is undefined
console.log(add(3, 4, 5)); // 12`}</>
      </Code>
      <Typography>To avoid the NaN case we will use a type guard</Typography>
      <Code noHeader>
        <>{`
function add(a: number, b: number, c?: number): number {
return c ? a + b + c : a + b;
}

console.log(add(3, 4)); // 7
console.log(add(3, 4, 5)); // 12`}</>
      </Code>
      <Typography>Or much better simply set a default value</Typography>
      <Code noHeader>
        <>{`
function add(a: number, b: number, c = 0): number {
return  a + b + c;
}

console.log(add(3, 4)); // 7
console.log(add(3, 4, 5)); // 12
// Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
console.log(add(3, 4, "hola")); // 7hola  `}</>
      </Code>
      <Typography variant="h6">Multiple Property Types</Typography>
      <Code noHeader>
        <>{`
function add(a: number | string, b: number | string): number {
return a + b; 
// Error number + string == string
}

console.log(add(4, 5)); // 9
console.log(add("4", 5)); // 45 !caution`}</>
      </Code>
      <Code noHeader>
        <>{`
function add(a: number | string, b: number | string): number {
return Number(a) + Number(b); 
}

console.log(add(4, 5)); // 9
console.log(add("4", 5)); // 9`}</>
      </Code>
      <Typography>Type Alias</Typography>
      <Code noHeader>
        <>{`
type Phone = {
phoneNumber: string;
country?: string;
area?: string;
};
`}</>
      </Code>
      <Alert severity="info">
        We also can define types in external files and export them to be
        imported and reused in other files of our project
      </Alert>
      <Code noHeader>
        <>{`
// Property 'number' is missing in type '{}' but required in type 'Phone'.ts(2741)
const emptyPhone: Phone = {};

// Property 'number' is missing in type '{ area: string; }' but required in type 'Phone'.ts(2741)
const justAreaPhone: Phone = { area: "my-area" };

// Type 'number' is not assignable to type 'string'.ts(2322)
const notStringNumberPhone: Phone = { phoneNumber: 987654321 };

const fullPhone: Phone = {
phoneNumber: "my-phone-number",
area: "my-area",
country: "my-country",
};

const correctPhone: Phone = { phoneNumber: "my-phone-number" };
correctPhone.area = "my-area";
correctPhone.country = "my-country";`}</>
      </Code>
    </>
  );
}
