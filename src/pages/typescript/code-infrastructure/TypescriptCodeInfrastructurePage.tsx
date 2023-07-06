import Code from "../../../components/common/code/Code";
import Typography from "../../../components/common/typography/Typography";

export default function TypescriptCodeInfrastructurePage() {
  return (
    <>
      <Typography variant="h4">Declaration Merging</Typography>
      <Typography>
        We have different types of “named things” in TypeScript, including
        values and functions (and occasionally things that can be used as both).
        By the end of this chapter, you&apos;ll have a solid understanding of
        how to examine and understand these entities in TypeScript.
      </Typography>
      <Typography>
        In order to truly understand how types and values “stack” on each other,
        we&apos;ll first tackle the concept of declaration merging. Often when
        people grasp how TypeScript handles this, they never look at the
        language the same way again.
      </Typography>
      <Typography>
        Many things can be declared with a name and referenced later in the
        TypeScript world, this includes variables and interfaces as we can see
        below
      </Typography>
      <Code noHeader>
        <>{`
interface Fruit {
  name: string
  mass: number
  color: string
}
  
const banana: Fruit = {
  name: "banana",
  color: "yellow",
  mass: 183,
}`}</>
      </Code>
      <Typography variant="h6">
        Stacking multiple things on an identifier
      </Typography>
      <Typography>
        It may seem a little silly, but what if we renamed banana to Fruit. What
        do you think would happen?
      </Typography>
      <Code noHeader>
        <>{`
interface Fruit {
  name: string
  mass: number
  color: string
}

const Fruit = {
  name: "banana",
  color: "yellow",
  mass: 183,
}
export { Fruit }`}</>
      </Code>

      <Code noHeader>
        <>{`
class Fruit {
  static createBanana(): Fruit {
    return { name: "banana", color: "yellow", mass: 183 };
  }
}

interface Fruit {
  name: string;
  mass: number;
  color: string;
}

// the namespace
namespace Fruit {
  function createFruit(): Fruit {
    // the type
    return Fruit.createBanana(); // the class
  }
}

export { Fruit };`}</>
      </Code>
      <Typography>
        I propose that in the situation above, we have one identifier that’s
        three things in one:
      </Typography>
      <ol className="grid list-[type1] gap-y-2 pl-9">
        <li>
          <Typography>a value (class)</Typography>
        </li>
        <li>
          <Typography>a type</Typography>
        </li>
        <li>
          <Typography>a namespace</Typography>
        </li>
      </ol>
      <Typography>
        Proving this hypothesis will be easier if we have some way to tell
        what&apos;s on an identifier
      </Typography>
    </>
  );
}
