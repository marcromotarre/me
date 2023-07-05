import Alert from "../../../components/common/alert/Alert";
import Code from "../../../components/common/code/Code";
import Typography from "../../../components/common/typography/Typography";

export default function TypescriptStructuralVsNominalTypesPage() {
  return (
    <>
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
    </>
  );
}
