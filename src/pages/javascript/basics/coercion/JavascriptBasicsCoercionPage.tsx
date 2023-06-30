import Alert from "../../../../components/common/alert/Alert";
import Code from "../../../../components/common/code/Code";
import Typography from "../../../../components/common/typography/Typography";
import {
  CoercionArrayJoinCode,
  CoercionNumberToStringExampleCode,
  CoercionStringConcatenationExampleCode,
  CoercionStringExampleCode,
  CoercionToStringExampleCode,
  StudentsExampleCode,
} from "./_code/JavascriptBasicsCoercionCode";

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
      <Code noHeader>
        <>{`
Number({ a: 2 })                           // NaN
Number({valueOf() {return 3;}}) // 3
({valueOf() {return 2;}}) == 2   // false
({valueOf() {return 3;}}) == 3   // true
({valueOf() {return 3;}}) === 3   // false`}</>
      </Code>
      <Typography variant="h6">Boolean</Typography>
      <Typography>
        And finally, lets look at the Boolean abstract operation. And by the
        way, these four are what we are looking at, two primitive, two string,
        two number, and two Boolean. There are other abstract operations that
        they refer to and use. So read those in the spec if you are curious, but
        these are the major ones you are gonna run into. So ToBoolean, section
        7.1.2 in the spec. Anytime you have any value that is not a Boolean, and
        it is used in a place that needs a Boolean, this operation occurs.
        Exactly the same as the other ones, okay? This operation is less
        algorithmic and more lookup. There is not really anything to do, other
        than to say, is the value, what we call falsy, or not, that is really
        the only question here.
      </Typography>
      <Alert severity="info">{`Falsy values: "", 0, -0, null, NaN, false, undefined`}</Alert>
      <Typography>
        For the truthy values the list is much more longer, here you have some
        examples:
      </Typography>
      <Alert severity="info">{`Truthy values: "foo", 23, {a: 1}, [1,3], true, function(){..}`}</Alert>
      <Typography variant="h4">Cases of Coercion</Typography>
      <Typography>
        You cliam to avoid coercion because it is evil, but I think it is one of
        the most under valued and under looked that things in all of JavaScript.
      </Typography>
      <Typography>
        So to start off with I know most of you follow that behavior and that
        advice that says, no I just avoid coercions. I just use the triple
        equals, I do not deal with types, not so much. Lets look at some
        examples where you are already doing coercion whether you realize it or
        not.
      </Typography>
      <Code noHeader>
        <>{StudentsExampleCode}</>
      </Code>
      <Typography>
        Might be on my top three favorite features. I use it all the time,
        especially in my colsole.log statements. I just use it everywhere and I
        love template strings. And if you drop in values into those expressions,
        that are nott already strings, probably, like all of you. Guess, what is
        happening there? That number is getting coers to a string, you are
        already doing coercion, all of you!
      </Typography>
      <Code noHeader>
        <>{CoercionStringConcatenationExampleCode}</>
      </Code>
      <Typography>
        Now, why is that end up producing a coercion? Well, it is actually
        invoking another a little magical thing that programmers love to do
        which is we have got operator overloading. The plus operator is normally
        thought of is doing numerical operation. Thought? The spec says that if
        you use the plus operator with something that is a string, and here is
        an example that lot of you have probably done.
      </Typography>
      <Code noHeader>
        <>{CoercionNumberToStringExampleCode}</>
      </Code>
      <Typography>
        Add an empty string to a thing to turn it into a number. Did you ever
        stop to wonder how that worked? Well, it is because the specs says that
        the plus operator. If either one of them is a string, notice that or
        there, if either one of them is a string, the plus operator prefers
        string concatenation. Which means, if only one of them is a string,
        guess what is gonna happen to the other one? A two-string operation. It
        is gonna call a two string abstract operation on it, and turn it in to a
        string with all of the weirdnesses in caveats there of.
      </Typography>
      <Typography>
        When it is a well formed number, like the number 16, not such a big
        deal. But there is lots of corner cases on numbers, and lots of corner
        cases on other values, and you are just invoking these things happily,
        and not worrying at all, about the fact that you are using coercion.
      </Typography>
      <Alert severity="info">
        No, I am not here to tell you to stop using coercion, I am here to tell
        you you are using coercion, so would not it make sense for you to learn
        it? That is why we dive into this, okay? So, you may say, well, listen,
        I do not like to do those implicit coercions, I wanna be super explicit
        about it.
      </Alert>
      <Typography>
        Okay, so, here you have some crazy ways that you can be explicit about
        it:
      </Typography>
      <Code noHeader>
        <>{CoercionArrayJoinCode}</>
      </Code>
      <Typography>
        You can throw a value into an array, just the one value into an array,
        and then call dot join on it. And that actually ends up string it even
        though it does no string concatenation at all, the spec for that join
        first turns it into a string.
      </Typography>
      <Typography>
        You might, for example, call the toString method. Okay, cool, the
        toString method at least on the label says what it is doing. It is gonna
        turn a number into a string so that is not too bad. There is a little
        weirdness here which is how are you calling a method on a primitive
        value?
      </Typography>
      <Code noHeader>
        <>{CoercionToStringExampleCode}</>
      </Code>
      <Typography>
        Primitive values do not have methods. So you are actually already still
        doing implicit coercion her.
      </Typography>
      <Typography>
        If you do not wanna do any implicit coercion at all, basically your only
        option. Is to use that fundamental object without a new keyword string,
        and this is my preferred way of explicitly coercing that number to a
        string, the capital S string function is gonna do that for you.
      </Typography>
      <Code noHeader>
        <>{CoercionStringExampleCode}</>
      </Code>
      <Typography>
        So, if you are one of those that says hey, listen, all those implicit
        things, those are magical and we do not wanna do them, and you wanna be
        explicit about it, there is an example of being explicit about it. I am
        not so sure that that is a great idea in all cases, but that is at least
        a way of being explicit.
      </Typography>
      <Typography>
        All right, all right, all right, so string to, number to string all
        right, but what about the other way around? You are already doing that
        too. Because all of you are dealing with web applications, or at least
        most of you are dealing with web applications which means you are
        dealing with user input from things like form elements. Which means you
        are grabbing things as strings, and then you are just doing numeric
        stuff with them. When you throw that string value at the plus operation,
        like I am doing here, guess what happens? Oops, we get a string
        concatenation. Instead of getting 17, we get the string 161. But okay,
        okay, I will go ahead and force it to be a number.
      </Typography>
      <Code noHeader>
        <>{`
function addAStudent(numStudents) {
  return numStudents + 1;
}

addAStudent(studentsInputElem.value);
// "161"  // OOPS!`}</>
      </Code>
      <Typography>
        Okay, there is two ways of forcing it to be a number one, this plus
        operator here. The plus operator, if you will look in the spec for it.
        Guess what it invokes which abstract operation when we expect that turns
        out that the two number abstract operation, okay? Just making sure you
        are all the way, okay? It invokes the two number operation, that is all
        it does. So here we are saying take that thing that is a string or
        whatever it is, and turn it into a number before we pass it in. If it is
        a well-formed numeric representation in string form, for example, you
        are gonna end up with good results here, like 17.
      </Typography>
      <Code noHeader>
        <>{`
function addAStudent(numStudents) {
  return numStudents + 1;
}

addAStudent(+studentsInputElem.value);
// 17`}</>
      </Code>
      <Typography>
        If it is empty, guess what you are gonna end up with? Zero, it may not
        be what you want but it is gonna happen. So here is another example this
        kind of coercion happens all over the place. And my biggest frustration
        is that people do not deal with it and then just sort of slap a name
        badge on this is all I do not have to worry about types and coercion.
      </Typography>
      <Alert severity="warning">
        This is where bugs come from. Using tools that you do not understand how
        they work.
      </Alert>
      <Typography>
        If you use the minus operator that one is only defined for numbers. That
        it is not overloaded for string, it would not make any sense to subtract
        one string from another. It is gonna invoke that two number abstract
        operation.
      </Typography>
      <Code noHeader>
        <>{`
function kickStudentOut(numStudents) {
  return numStudents - 1;
}

addAStudent(studentsInputElem.value);
// 15`}</>
      </Code>

      <Typography>
        Okay, strings and numbers are always work things but you know what I
        never do, because I never mess around with coercion my Boolean.
        Extremely common practice, guess what that is called coercion. Okay, and
        guess what? All of the weird corner cases of coercion Booleans are in a
        fact, even with your little simple if statements they are in a fact.
      </Typography>
      <Code noHeader>
        <>{`
if(studentInputElem.value) {
  numStudents = Number(studentsInputElem.value);
} 

while(newStudents.length) {
  enrollStudent(newStudents.pop();)
}`}</>
      </Code>
      <Typography>
        I would say there are more corner cases with boolean, maybe than any
        other primitive type. If students input that value as an empty that is
        gonna be falsy, alright? But what if that string has just a bunch of
        white space in it? Now it is gonna be truthy, right? Corner cases even
        with our Boolean.
      </Typography>
      <Typography>
        Okay, there is all kinds of corner cases in all of these coercions. So
        if you are in the habit of using some of these and not using others, I
        mean I hate to call this out but it sort of hypocritical to say, I used
        this form or magic but I do not like that form of magic. I do not know
        if we should use the magic at all, I think we should learn it, use it,
        and then it is not magical at all. Once you learn it, you are doing
        something intentional, and you are communicating your intent to other
        people. That does not mean that implicitness is always bad. As a matter
        of fact, implicitness can be very useful. It just simply means we have
        to be very careful and intentional.
      </Typography>
      <Code noHeader>
        <>{`
if(!!studentInputElem.value) {
  numStudents = Number(studentsInputElem.value);
} 

while(newStudents.length > 0) {
  enrollStudent(newStudents.pop();)
}`}</>
      </Code>

      <Code noHeader>
        <>{`
Boolean("")   // false
Boolean(" ")   // true
Boolean(undefined)   // false
Boolean(null)   // false
Boolean({})   // true`}</>
      </Code>
    </>
  );
};

export default JavascriptBasicsCoercionPage;
