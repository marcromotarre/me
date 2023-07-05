import Code from "../../../components/common/code/Code";
import Typography from "../../../components/common/typography/Typography";

export default function TypescriptTypeAliasesAndInterfacesPage() {
  return (
    <>
      <Typography variant="h4">Type Aliases & Interfaces</Typography>
      <Typography>
        TypeScript provides two mechanisms for centrally defining types and
        giving them useful and meaningful names: interfaces dn type aliases. We
        will study both concepts in depth, and explain when it makes sense to
        use each type.
      </Typography>
      <Typography variant="h6">Type Aliases</Typography>
      <Typography>
        Think back to the &#123; name: string; email: string &#125; syntax used
        up until this point for type annotations. This syntax will get
        increasingly complicated as more properties are added to this type.
        Furthermore, if we pass objects of this type around through various
        functions and variables, we will end up with a lot of types that need to
        be manually updated whenever we need to make any changes!
      </Typography>
      <Typography>
        Type aliases help to address this, by allowing us to:
      </Typography>
      <ol className="grid list-[disc] gap-y-2 pl-9">
        <li>
          <Typography>define a more meaningful name for this type</Typography>
        </li>
        <li>
          <Typography>
            declare the particulars of the type in a single place
          </Typography>
        </li>
        <li>
          <Typography>
            import and export this type from modules, the same as if it were an
            exported value
          </Typography>
        </li>
      </ol>
      <Typography>
        As we see in previous section this is the way you create a Type Alias
      </Typography>
      <Code noHeader>
        <>{`
type UserContactInfo = {
  name: string;
  email: string;
};

function printUserContactInfo(info: UserContactInfo) {
  console.log(info.name + " " + info.email);
}`}</>
      </Code>
      <Typography variant="h6">Interfaces</Typography>
      <Typography>
        An interface is a way of defining an object type. An &ldquo;Object
        type&rdquo; can be thought of as, &ldquo;an instance of a class could
        conceivably look like this&rdquo;.
      </Typography>
      <Typography>
        For example, string | number is not an object type, because it makes us
        of union type operator.
      </Typography>
      <Code noHeader>
        <>{`
interface UserInfo = {
  name: string;
  email: string;
};

function printUserInfo(info: UserInfo) {
  console.log(info.name + " " + info.email);
}`}</>
      </Code>
      <Typography>
        Like type aliases, interfaces can be imported/exported between modules
        just like values, and they serve to provide a &ldquo;name&rdquo; for a
        specific type.
      </Typography>
      <Typography>Interfaces can extends from other interfaces</Typography>

      <Code noHeader>
        <>{`
interface Animal {
  isAlive: boolean;
}

interface Mammal extends Animal {
  getFurOrHairColor(): string;
}

interface Dog extends Mammal {
  getBreed(): string;
}

function careForDog(dog: Dog) {
  // we can access here isAlive, getFurOrHairColor() and getBreed()
  dog.
}`}</>
      </Code>
      <Typography>
        TypeScript adds a second heritage clause that can be used to state that
        a given class should produce instances that confirm to a given
        interface: implements.
      </Typography>
      <Code noHeader>
        <>{`
interface AnimalLike {
  eat(food: string): void;
}

// ERROR
// Class 'Dog' incorrectly implements interface 'AnimalLike'.
    // Property 'eat' is missing in type 'Dog' but required in type 'AnimalLike'.ts(2420)
class Dog implements AnimalLike {
  bark() {
    return "woof";
  }
}`}</>
      </Code>
      <Typography>
        In the example above, we can see that TypeScript is objecting to us
        failing to add an eat() method to our Dog class. Without this method,
        instances of Dog do not conform to the AnimalLike interface. Let&apos;s
        update our code:
      </Typography>
      <Code noHeader>
        <>{`
interface AnimalLike {
  eat(food: string): void;
}

class Dog implements AnimalLike {
  bark() {
    return "woof";
  }
  eatFood() {
   consumeFood(food);
  }
}`}</>
      </Code>
      <Typography>
        There, that is better. While TypeScript (and JavaScript) does not
        support true multiple inheritance (extending from more than one base
        class), this implements keyword gives us the ability to validate, at
        compile time, that instances of a class conform to one or more
        “contracts” (types). Note that both extends and implements can be used
        together:
      </Typography>
      <Code noHeader>
        <>{`
class LivingOrganism {
  isAlive() {
    return true
  }
}
interface AnimalLike {
  eat(food): void
}
interface CanBark {
  bark(): string
}
 
class Dog
  extends LivingOrganism
  implements AnimalLike, CanBark
{
  bark() {
    return "woof"
  }
  eat(food) {
    consumeFood(food)
  }
}`}</>
      </Code>
      <Typography>
        While it&apos;s possible to use implements with a type alias, if the
        type ever breaks the “object type” rules there&apos;s some potential for
        problems…
      </Typography>
      <Code noHeader>
        <>{`
type CanBark =
| number
| {
    bark(): string
  }

class Dog implements CanBark {
  // ERROR! A class can only implement an object type or intersection of object types with statically known members.ts(2422)
  bark() {
    return "woof"
  }
  eat(food: string) {
    consumeFood(food)
  }
}`}</>
      </Code>
      <Typography>
        For this reason, it is best to use interfaces for types that are used
        with the implements heritage clause.
      </Typography>
      <Typography variant="subtitle1">Open interfaces</Typography>
      <Code noHeader>
        <>{`
interface AnimalLike {
  isAlive(): boolean;
}
function feed(animal: AnimalLike) {
  // here you can access both methods isAlive() and eat(food)
}

// SECOND DECLARATION OF THE SAME NAME
interface AnimalLike {
  eat(food: string): void;
}`}</>
      </Code>
      <Typography>
        These declarations are merged together to create a result identical to
        what you would see if both the isAlive and eat methods were on a single
        interface declaration.
      </Typography>
      <Typography>
        You may be asking yourself: where and how is this useful?
      </Typography>
      <Typography>
        Imagine a situation where you want to add a global property to the
        window object
      </Typography>

      <Code noHeader>
        <>{`
// tells TS that 'exampleProperty' exists
interface Window {
  exampleProperty: number
}`}</>
      </Code>

      <Typography>
        In many situations, either a type alias or an interface would be
        perfectly fine, however…
      </Typography>
      <ol className="grid list-[type1] gap-y-2 pl-9">
        <li>
          <Typography>
            If you need to define something other than an object type (e.g., use
            of the | union type operator), you must use a type alias
          </Typography>
        </li>
        <li>
          <Typography>
            If you need to define a type to use with the implements heritage
            term, it&apos;s best to use an interface
          </Typography>
        </li>
        <li>
          <Typography>
            If you need to allow consumers of your types to augment them, you
            must use an interface.
          </Typography>
        </li>
      </ol>
      <Typography variant="subtitle1">Recursion</Typography>
      <Typography>Imagine that you have that array:</Typography>
      <Code noHeader>
        <>{`[3, 4, [5, 6, [7], 59], 221]`}</>
      </Code>
      <Typography>
        Recursive types, are self-referential, and are often used to describe
        infinitely nestable types. For example, consider infinitely nestable
        arrays of numbers
      </Typography>

      <Code noHeader>
        <>{`
type NestedNumbers = number | NestedNumbers[]

const val: NestedNumbers = [3, 4, [5, 6, [7], 59], 221]
  
if (typeof val !== "number") {
  val.push(41); // this works fine
        
  // Argument of type 'string' is not assignable to parameter of type 'NestedNumbers'.
  val.push("this will not work")
}`}</>
      </Code>
    </>
  );
}
