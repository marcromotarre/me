import Alert from "../../components/common/alert/Alert";
import Code from "../../components/common/code/Code";
import Typography from "../../components/common/typography/Typography";

export default function TypescriptPage() {
  class Car {
    make: string;
    year: number;
    isElectric: boolean;

    constructor(make: string, year: number, isElectric: boolean) {
      this.make = make;
      this.year = year;
      this.isElectric = isElectric;
    }
  }

  class Truck {
    make: string;
    model: string;
    year: number;
    towingCapacity: number;

    constructor(
      make: string,
      model: string,
      year: number,
      towingCapacity: number
    ) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.towingCapacity = towingCapacity;
    }
  }

  const vehicle = {
    make: "Honda",
    model: "Accord",
    year: 2017,
  };

  function printCar(car: { make: string; model: string; year: number }) {
    console.log(car.make + " " + car.model + " " + String(car.year));
  }

  printCar(new Car("Nissan", 2021, true));
  printCar(new Truck("Mercedes", "Anhiquilator", 2002, 6000));
  printCar(vehicle);

  return (
    <>
      <Typography>
        TypeScript is an open-source programming. Is a statically-typed superset
        of JavaScript that compiles to plain JavaScript code. TypeScript adds
        optional static type checking, classes, interfaces, and other features
        to JavaScript, enhancing its functionality and tooling support.
      </Typography>
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
        I will only type variables when its necessary.
      </Alert>
      <Alert severity="warning">
        Avoid any as much as you can. Any is like a virus that propagates
        through your code.
      </Alert>
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
      <Typography>Type Defintion</Typography>
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
      <Typography variant="h4">Tuples</Typography>
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

      <Typography variant="h4">Structural vs Nominal Types</Typography>
      <Typography variant="h6">What is type checking?</Typography>
      <Typography>
        Type-checking can be thought of as a task that attempts to evaluate the
        question of compatibility or type equivalence.
      </Typography>
      <Typography>
        Lets see some examples of what typescript is doing when type checking
      </Typography>
      <Code noHeader>
        <>{`
// is the value y hold type-equivalent to what 'x' allow?
x = y`}</>
      </Code>
      <Code noHeader>
        <>{`
function foo(x: number) {
  // ... mystery code ...
}
//
// TYPE CHECKING
// ----------------
// Is "myValue" type-equivalent to what 'foo' wants to receive?
foo(myValue)`}</>
      </Code>
      <Code noHeader>
        <>{`
const myStrings = ["a"]
function bar(): string[] {
  // ... mystery that might return early ...
  //
  // TYPE CHECKING
  // --------------
  // Is 'myStrings' type-equivalent to what 'bar' states it will return?
  return myStrings;
}`}</>
      </Code>
      <Typography variant="h6">Static vs Dynamic</Typography>
      <Typography>
        Sorting type systems as either static or dynamic has to do with whether
        type-checking is performed at compile time or runtime.
      </Typography>
      <Alert severity="info">Typescript&apos;s type system is static</Alert>
      <Typography>
        Dynamic type systems perform their &ldquo;type equivalence&rdquo;
        evaluation at runtime: Javascript, Python, Ruby, Perl and PHP fall into
        this category
      </Typography>
      <Typography variant="h6">Nominal vs Structural</Typography>
      <Typography>
        Nominal type systems are all about NAMES. Let&apos;s take a look at a
        simple Java example:
      </Typography>
      <Code noHeader>
        <>{`
public class Car {
  String make;
  String model;
  int make;
}
public class CarChecker {
  // takes a "Car" argument, return a 'String'
  public static String printCar(Car car) { }
}

Car myCar = new Car();
// TYPE CHECKING
// ----------------
// Is 'myCar' type-equivalent to what 'checkCar' want as an argument?
CarChecker.checkCar(myCar)`}</>
      </Code>
      <Typography>
        Structural type systems are all about STRUCTURE or SHAPE. Let&apos;s
        look at a Typescript example:
      </Typography>

      <Typography>We define a couple of classes in typescript</Typography>
      <Code noHeader>
        <>{`
class Car {
  make: string;
  model: string;
  year: number;
  isElectric: boolean;

  constructor(
    make: string,
    model: string,
    year: number,
    isElectric: boolean
  ) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isElectric = isElectric;
  }
}`}</>
      </Code>

      <Code noHeader>
        <>{`
class Truck {
  make: string;
  model: string;
  year: number;
  towingCapacity: number;

  constructor(
    make: string,
    model: string,
    year: number,
    towingCapacity: number
  ) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.towingCapacity = towingCapacity;
  }
}`}</>
      </Code>
      <Typography>And also initialize vehicle</Typography>

      <Code noHeader>
        <>{`
const vehicle = {
  make: "Honda",
  model: "Accord",
  year: 2017,
};`}</>
      </Code>
      <Typography>
        Let&apos;s see what happens if we create a printCar fucntion which
        reveives an object with the three common params
      </Typography>

      <Code noHeader>
        <>{`
function printCar(car: { make: string; model: string; year: number }) {
  console.log(car.make + " " + car.model + " " + String(car.year));
}

printCar(new Car("Nissan", "Qashqai", 2021, false)); // Nissan Qashqai 2021
printCar(new Truck("Mercedes", "Anhiquilator", 2002, 6000)); // Mercedes Anhiquilator 2002
printCar(vehicle); // Honda Accord 2017`}</>
      </Code>
      <Typography>
        It work well in the three cases. It does not care which is the real type
        of the variable. It only cares if the structure you defined fits in the
        function props
      </Typography>
      <Alert severity="warning">
        If car for example does not have the prop model an error will appear in
        the function call as it is required
      </Alert>
      <Typography variant="h6">Strong vs Weak types</Typography>
      <Typography>
        These terms, while used frequently, have no agreed-upon technical
        definition. In the context of Typescript it is common for those who say
        &ldquo;strong&rlquo; to really &ldquo;static&rlquo;
      </Typography>
      <Typography variant="h4">Union Types</Typography>
    </>
  );
}
