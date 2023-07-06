import Code from "../../../components/common/code/Code";
import Typography from "../../../components/common/typography/Typography";

export default function TypescriptGenericsPage() {
  interface HasId {
    id: string;
    [k: string]: any;
  }

  interface Dict<T> {
    [k: string]: T;
  }

  function listToDict(list: HasId[]): Dict<HasId> {
    const dict: Dict<HasId> = {};
    list.forEach((item) => {
      dict[item.id] = item;
    });
    return dict;
  }

  interface Person {
    id: string;
    name: string;
  }

  interface PersonWithoutID {
    name: string;
  }

  const persons: Person[] = [{ id: "0", name: "Marc" }];
  const personsWithNoId: PersonWithoutID[] = [{ name: "Marc" }];

  let dictOfPersons = listToDict(persons);

  // Argument of type 'PersonWithoutID[]' is not assignable to parameter of type 'HasId[]'.
  //Property 'id' is missing in type 'PersonWithoutID' but required in type 'HasId'
  let dictOfPersonsWithoutId = listToDict(personsWithNoId);

  return (
    <>
      <Typography>
        In an earlier chapter, we discussed the concept of dictionary data
        structures that could be typed using index signatures:
      </Typography>
      <Code noHeader>
        <>{`
const phones: {
  [k: string]: {
    customerId: string
    areaCode: string
    num: string
  }
} = {}`}</>
      </Code>
      <Typography>
        Let&apos;s take as a given that sometimes it is more convenient to
        organize collections as key-value dictionaries, and other times it is
        more convenient to use arrays or lists.
      </Typography>
      <Typography>
        It would be nice to have some kind of utility that would allow us to
        convert a list of things into a dictionary of things.
      </Typography>
      <Typography>
        So, let&apos;s treat this array of objects as our starting point:
      </Typography>
      <Code noHeader>
        <>{`
const phoneList = [
  { customerId: "0001", areaCode: "321", num: "123-4566" },
  { customerId: "0002", areaCode: "174", num: "142-3626" },
  { customerId: "0003", areaCode: "192", num: "012-7190" },
  { customerId: "0005", areaCode: "402", num: "652-5782" },
  { customerId: "0004", areaCode: "301", num: "184-8501" },
]`}</>
      </Code>
      <Typography>… and this as what we aim to get in the end…</Typography>
      <Code noHeader>
        <>{`
const phoneDict = {
  "0001": {
    customerId: "0001",
    areaCode: "321",
    num: "123-4566",
  },
  "0002": {
    customerId: "0002",
    areaCode: "174",
    num: "142-3626",
  },
  /*... and so on */
}
`}</>
      </Code>
      <Typography>
        Maybe our function signature would look something like this:
      </Typography>
      <Code noHeader>
        <>{`
function listToDict(
  list: PhoneInfo[], // take the list as an argument
  idGen: (arg: PhoneInfo) => string // a callback to get Ids
): { [k: string]: PhoneInfo } {
  // create an empty dictionary
  const dict: { [k: string]: PhoneInfo } = {}
 
  // Loop through the array
  list.forEach((element) => {
    const dictKey = idGen(element)
    dict[dictKey] = element // store element under key
  })
 
  // return the dictionary
  return dict
}
 
console.log(
  listToDict(phoneList, (item) => item.customerId)
)`}</>
      </Code>
      <Typography>
        Now, let&apos;s attempt to generalize this, and make it so that it works
        for lists and dictionaries of our PhoneInfo type, but lots of other
        types as well. How about if we replace every PhoneInfo type with a no
        specific type. To make a function generic we use the character T or the
        word Type
      </Typography>
      <Code noHeader>
        <>{`
function listToDict<Type>(
  list: Type[],
  idGen: (arg: Type) => string
): { [k: string]: Type } {
  const dict: { [k: string]: Type } = {};
  list.forEach((element) => {
    const dictKey = idGen(element);
    dict[dictKey] = element;
  });
  return dict;
}`}</>
      </Code>
      <Code noHeader>
        <>{`
// const phoneDictionary: { [k: string]: PhoneInfo; }
const phoneDictionary = listToDict(phoneList, (item) => item.customerId);

// const phoneDictionary: { [k: string]: number; }
const numbersDictionary = listToDict([1, 2, 4, 8, 16, 32], (item) => String(item));`}</>
      </Code>
      <Typography>More examples of generic:</Typography>
      <Code noHeader>
        <>{`
function wrapInArray<T>(arg: T): [T] {
    return [arg]
}

// function wrapInArray<number>(arg: number): [number]
wrapInArray(3) 

// function wrapInArray<Date>(arg: Date): [Date]
wrapInArray(new Date())

// function wrapInArray<RegExp>(arg: RegExp): [RegExp]
wrapInArray(new RegExp("/s/"))
`}</>
      </Code>

      <Typography variant="h4">Generic constraints</Typography>
      <Typography>
        Now that we have covered the basic use of Generics, let&apos;s layer on
        two more concepts: how scoping work with type params, and how we can
        describe type params that have more specific requirement than any.
      </Typography>
      <Typography>
        Generic constraints allow us to describe the minimum requirement for a
        type param, such that we can achieve a high degree of flexibility, while
        still being able to safely assume some minimal structure and behavior.
      </Typography>
      <Typography>
        To explain that lets take the previous example of generics about
        listToDict:
      </Typography>

      <Code noHeader>
        <>{`
function listToDict<T>(
  list: T[],
  idGen: (arg: T) => string
): { [k: string]: T } {
  return {}
}`}</>
      </Code>
      <Typography>
        In this situation, we ask the caller of listToDict to provide us with a
        means of obtaining an id, but let&apos;s imagine that every type we wish
        to use this with has an id: string property, and we should just use that
        as a key.
      </Typography>
      <Typography>
        Now we are going to create an example where we must to provide an id to
        each object of the list, and that id will be used to create the
        dictionary
      </Typography>

      <Code noHeader>
        <>{`
interface HasId {
  id: string;
  [k: string]: any;
}

interface Dict<T> {
  [k: string]: T;
}

function listToDict(list: HasId[]): Dict<HasId> {
  const dict: Dict<HasId> = {};
  list.forEach((item) => {
    dict[item.id] = item;
  });
  return dict;
}`}</>
      </Code>
      <Typography>
        As we can see now the listToDict only receives one arguments that is an
        array of objects, Each of this objects must have id prop and also can
        have any other prop.
      </Typography>

      <Code noHeader>
        <>{`
interface Person {
  id: string;
  name: string;
}

interface PersonWithoutID {
  name: string;
}

const persons: Person[] = [{ id: "0", name: "Marc" }];
const personsWithNoId: PersonWithoutID[] = [{ name: "Marc" }];

let dictOfPersons = listToDict(persons); // WORKS FINE

// Argument of type 'PersonWithoutID[]' is not assignable to parameter of type 'HasId[]'.
    //Property 'id' is missing in type 'PersonWithoutID' but required in type 'HasId'
let dictOfPersonsWithoutId = listToDict(personsWithNoId); // ERROR`}</>
      </Code>
    </>
  );
}
