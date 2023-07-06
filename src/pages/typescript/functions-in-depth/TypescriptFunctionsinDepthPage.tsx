import Alert from "../../../components/common/alert/Alert";
import Code from "../../../components/common/code/Code";
import Typography from "../../../components/common/typography/Typography";

export default function TypescriptFunctionsinDepthPage() {
  return (
    <>
      <Typography variant="h4">Functions in Depth</Typography>
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
        The return value of a void function is intended to be ignored. Void
        should only be used as return type.
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
      <Typography variant="h6">Construct Signatures</Typography>
      <Typography>
        Construct signatures are similar to call signatures, except they
        describe what should happen with the new keyword.
      </Typography>
      <Code noHeader>
        <>{`
interface DateConstructor {
  new (value: number): Date
}
 
let MyDateConstructor: DateConstructor = Date
const d = new MyDateConstructor()`}</>
      </Code>
      <Typography>
        This is not much used but is good to know to recognise it if you see it.
      </Typography>
      <Typography variant="h6">Function overloads</Typography>

      <Code noHeader>
        <>{`
function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: number | string, b: number | string): number | string {
  return a + b;
}

const stringSum = add("Hello ", "Steve"); // returns "Hello Steve"
const numberSum = add(10, 20); // returns 30
const booleanSum = add(true, false); // ERROR No overload matches this call.
const numberStringSum = add(10, "steve"); // ERROR No overload matches this call.`}</>
      </Code>

      <Typography variant="h6">this types</Typography>
      <Typography variant="h6">Classes</Typography>
      <Typography>
        TypeScript classes add some powerful and important features on top of
        traditional JavaScript classes. In this unit, we will take a closer look
        at class fields, access modifier keywords and more!
      </Typography>
      <Code noHeader>
        <>{`
class Car {
  make: string;
  model: string;
  year: number;
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

let sedan = new Car("Honda", "Accord", 2017);
// Property 'activateTurnSignal' does not exist on type 'Car'.ts(2339)
sedan.activateTurnSignal("left"); // ERROR
// Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
new Car(2017, "Honda", "Accord"); // ERROR`}</>
      </Code>
      <Typography>
        This syntax is getting a bit verbose now — for example, the words
        “make”, “model” and “year” are written in four places each. As we will
        see below, TypeScript has a more concise way to write code like this.
        But first, we need to discuss the concept of access modifier keywords.
      </Typography>
      <Typography variant="subtitle1">Access modifier keywords</Typography>
      <Typography>
        TypeScript provides three access modifier keywords, which can be used
        with class fields and methods, to describe who should be able to see and
        use them.
      </Typography>
      <ol className="grid list-[lower-alpha] gap-y-2 pl-6">
        <li>
          <Typography>public: everyone (this is the default)</Typography>
        </li>
        <li>
          <Typography>
            protected: the instance itself, and subclasses
          </Typography>
        </li>
        <li>
          <Typography>private: only the instance itself</Typography>
        </li>
      </ol>
      <Code noHeader>
        <>{`
class Car {
  public make: string
  public model: string
  public year: number
  protected vinNumber = generateVinNumber()
  private doorLockCode = generateDoorLockCode()
  
  constructor(make: string, model: string, year: number) {
    this.make = make
    this.model = model
    this.year = year
  }
  
  protected unlockAllDoors() {
    unlockCar(this, this.doorLockCode)
  }
}`}</>
      </Code>

      <Code noHeader>
        <>{`
class Sedan extends Car {
  constructor(make: string, model: string, year: number) {
    super(make, model, year)
  }

  // can access to this.vinNumber
  // cannot access to this.doorLookCode

  public unlock() {
    console.log("Unlocking at " + new Date().toISOString())
    // that function will access to this.doorLookCode
    this.unlockAllDoors()
  }
}`}</>
      </Code>
      <Code noHeader>
        <>{`
let s = new Sedan("Honda", "Accord", 2017)

// can access to that prop as it is public
s.make

// Property 'vinNumber' is protected and only accessible within class 'Car' and its subclasses.
s.vinNumber

// Property 'doorLockCode' is private and only accessible within class 'Car'.
s.doorLockCode

// OK!
s.unlock()
`}</>
      </Code>
      <Alert severity="warning">
        It is important to understand that, just like any other aspect of type
        information, access modifier keywords are only validated at compile
        time, with no real privacy or security benefits at runtime. This means
        that even if we mark something as private, if a user decides to set a
        breakpoint and inspect the code that&apos;s executing at runtime,
        they&apos;ll still be able to see everything.
      </Alert>

      <Typography>
        TypeScript also provides readonly. While not strictly an access modifier
        keyword (because it has nothing to do with visibility), TypeScript
        provides a readonly keyword that can be used with class fields.
      </Typography>
      <Code noHeader>
        <>{`
class Car {
  public make: string
  public model: string
  public readonly year: number
 
  constructor(make: string, model: string, year: number) {
    this.make = make
    this.model = model
    this.year = year
  }
 
  updateYear() {
    // Cannot assign to 'year' because it is a read-only property.
    this.year++
  }
}`}</>
      </Code>

      <Typography variant="subtitle1">Param properties</Typography>
      <Typography>
        TypeScript provides a more concise syntax for code like this, through
        the use of param properties:
      </Typography>
      <Code noHeader>
        <>{`
class Car {
  constructor(
    public make: string,
    public model: string,
    public year: number
  ) {}
}
  
const myCar = new Car("Honda", "Accord", 2017)
// Now with myCar we can access to Car props`}</>
      </Code>
    </>
  );
}
