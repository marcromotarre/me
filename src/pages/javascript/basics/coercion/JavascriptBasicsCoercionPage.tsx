import Code from "../../../../components/common/code/Code";
import Typography from "../../../../components/common/typography/Typography";

const JavascriptBasicsCoercionPage = () => {
  return (
    <>
      <Typography>
        In Javascript Coercion and type conversion is the same.
      </Typography>
      <Typography variant="h4">Abstract Operations</Typography>
      <Typography>
        Abstract operations are used to convert a value from one type to
        another.
      </Typography>
      <Typography variant="h6">ToPrimitive</Typography>
      <Typography>
        {`The first abstract operation that we have is called ToPrimitive(hint).  
          Now obviously, if we don't have a primitive, we need to turn it 
          into a primitive. So if we have something non-primitive, 
          like one of the object types, like an object, an array, 
          a function, whatever, and we need to make it into a primitive, 
          this is the abstract operation that's going to be involved in doing that.`}
      </Typography>
      <Typography>
        {`The hint "number" will call valueOf() and then toString()`}
      </Typography>

      <Typography>
        {`The hint "string" will call toString() and then valueOf()`}
      </Typography>
      <Typography>
        {`In your mind, you should realize, it is going to end up coercing it
        through this ToPrimitive algorithm, and it's gonna end up either
        invoking the valueOf() or the toString(). We'll see examples of the
        usage of those in a little bit.`}
      </Typography>
      <Typography variant="h6">toString</Typography>
      <Typography>
        The toString abstract operation does what it sounds like. It is very
        descriptive on the label. It takes any value and gives us the
        representation of that value in string form. And almost every value that
        you can imagine has at least some kind of representation in string form.
      </Typography>
      <Typography>
        If we call the ToString on an object it is going to invoke the
        toPrimitive with the string hint and that gonna end calling the toString
        and then valueOf
      </Typography>
      <Typography variant="subtitle1">toString with arrays</Typography>

      <Code noHeader>
        <>{`
[].toString()                   // ""
[1,2,3].toString                // "1,2,3"
[null,undefined].toString()     // ","
[[[],[],[]],[]].toString()      // ",,,"
[,,,,].toString()               // ",,,"`}</>
      </Code>
      <Typography>
        So what is that gonna look like on some particular object? Well, if it
        is an array, for example, arrays have a default toString, which
        serializes the representation of the array. It is a bit of a strange
        serialization, in my opinion, because they are leaving off the brackets.
        So if you serialized a empty array, you get an empty string.
      </Typography>
      <Typography>
        I think that was a really dumb decision. I do not know why they left off
        the brackets. Because it turns out, there is a bunch of things that can
        serialize to strings. So how am I supposed to know whether it was an
        empty array? But nevertheless, this is how it works.
      </Typography>
      <Typography>
        The built-in toString on arrays leaves off the brackets. If we have an
        array with some contents in it, it will show those contents unless they
        are null and undefined. And this is even weirder, the toString
        definition for this. I actually was just reading the spec the other day
        and I was like why on earth they do this, nulls and undefines, when they
        show up in arrays just get left out. I mean they are there presently.
        You can see there is a comma there. They are there presently in terms of
        position, but they are not represented as nulls and undefines the way
        null and undefine when toStrings do. In my opinion, a bizarre
        inconsistency. Essentially, array to stringification is like maybe you
        could use it in the dev console but I would never use something like
        this in my program because all these weird corner cases of its behavior.
      </Typography>

      <Typography variant="subtitle1">toString with objects</Typography>
      <Code noHeader>
        <>{`
({}).toString()                           // "[object Object]"
({a: 2}).toString()                       // "[object Object]"
({toString(){return "x"}}).toString()     // "x"`}</>
      </Code>
      <Typography>
        What about on objects? I am sure you have seen the bracket object object
        thing which is like, what on earth is that? The default toString on the
        object of prototype is to do that whole bracket thing. And this, let me
        just rant for just a micro moment here, why on earth did they leave off
        the square brackets for arrays and put the square brackets on objects?
      </Typography>
      <Typography variant="h6">Number</Typography>
      <Typography>
        So what about Number? This one is a bit more interesting because there
        is a lot more corner cases involved. Anytime we need to do something
        numeric and we do not have a number, we are gonna invoke the ToNumber
        abstract operation. So what are some examples of those? Some of them are
        well formed, but some of them are strange.
      </Typography>
      <Code noHeader>
        <>{`
Number("")                           // 0
Number("0")                           // 0
Number("-0")                           // -0
Number(" 009 ")                           // 9
Number("3.14159")                           // 3.14159
Number("0.")                           // 0
Number(".0")                           // 0
Number(".")                           // NaN
Number("0xaf")                           // 175
`}</>
      </Code>
      <Typography>
        Empty string, I think, is the one that drives me the most bonkers. Empty
        string, whenever numericofied, or whatever the right word would be for
        that, becomes 0. Now as far as I am concerned, empty string is the way
        that you say I have no values in a string. It is the absence of any
        string value within that type. There is no other representation of the
        absence of values within the string type, other than an empty string, as
        far as I can tell. So if it is the absence of value, why on Earth does
        it, when it becomes a number, become an actual number like the number 0
        instead of the number that already exist in the language, that
        represents we do not have a valid number? Which would have been NaN. I
        am ranting on this particular point because it turns out, we are gonna
        see that is the root of all evil in JavaScript. But most of the rest of
        these are all very sensible. If you had the string 0, it becomes 0. If
        you had the string -0, here is a surprise, it actually becomes -0, very
        cool.
      </Typography>
      <Code noHeader>
        <>{`
Number(false)                           // 0
Number(true)                           // 1
Number(null)                           // 0
Number(undefined)                           // NaN`}</>
      </Code>
      <Typography>
        What about dealing with the numerification of falses or trues, or nulls
        or undefined? What about those other primitives? Well, false becomes 0,
        true becomes 1. And at the outset, you might think, well, that makes
        complete sense. Historically, we have always thought of false as being 0
        and true as being 1, from bit-wise perspective. That was a terrible
        idea, that false and true, when represented as numbers should have
        represented as NaN. But that, I do not like that decision. But I
        understand why, within the context of greater programming, that is
        probably what most people would expect.
      </Typography>
      <Typography>
        Null becomes 0, okay? But undefined becomes NaN, what? Here they decided
        to finally use NaN, but they did not use it with null? Somebody explain
        that one to me. Null should have been NaN, just like undefined should
        have been NaN. Okay, so when we use ToNumber on a nonprimitive that is
        not a string, or not an undefined, or a boolean or whatever, when we use
        it in an object, remember it evokes the ToPrimitive with the number
        hint.
      </Typography>
      <Typography variant="h6">toBoolean</Typography>
    </>
  );
};

export default JavascriptBasicsCoercionPage;
