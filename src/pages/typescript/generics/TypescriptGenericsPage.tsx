import Code from "../../../components/common/code/Code";
import Typography from "../../../components/common/typography/Typography";

export default function TypescriptGenericsPage() {
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

      <Typography variant="h4">Dictiona</Typography>
    </>
  );
}
