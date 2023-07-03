import Alert from "../../../../components/common/alert/Alert";
import Code from "../../../../components/common/code/Code";
import QuestionAnswer, {
  Answer,
  Question,
} from "../../../../components/common/question-answer/QuestionAnswer";
import Typography from "../../../../components/common/typography/Typography";

const JavascriptBasicsTypesPage = () => {
  return (
    <>
      <Typography variant="h4">Primitype Types</Typography>
      <Typography>Let&aps;s talk about the primitive types.</Typography>
      <Alert severity="error">
        This statement is FALSE: In Javascript all are Objects.
      </Alert>
      <Typography>There are other types than the object type.</Typography>
      <Typography variant="h6">undefined</Typography>
      <Typography>
        The Undefined type has exactly one value, called undefined. Any variable
        that has not been assigned a value has the value undefined.
      </Typography>
      <Typography>
        The undefined type means that the variable does not currently have a
        value. A variable can be set to a value, and in the future be set to
        undefined again.
      </Typography>

      <Code noHeader>
        <>{`
      var v = 5; 
      v = undefined;`}</>
      </Code>
      <Typography variant="h6">string</Typography>
      <Typography variant="h6">number</Typography>
      <Typography variant="h6">boolean</Typography>
      <Typography>
        The Boolean type represents a logical entity having two values, called
        true and false.
      </Typography>
      <Typography variant="h6">objects</Typography>
      <Typography>
        Yes the object is a type. And it has a lot of subtypes and something can
        behave as an object that doesn&aps;t make it an object.
      </Typography>

      <Typography variant="h6">symbol</Typography>
      <Typography>
        The Symbol type is the set of all non-String values that may be used as
        the key of an Object property (6.1.7).
      </Typography>
      <Typography>
        Each possible Symbol value is unique and immutable.
      </Typography>
      <Typography>
        Each Symbol value immutably holds an associated value called
        [[Description]] that is either undefined or a String value.
      </Typography>

      <Typography variant="h4">Not considered primitive types</Typography>
      <Typography variant="h6">undeclared</Typography>
      <Typography variant="h6">null</Typography>
      <Typography>The Null type has exactly one value, called null.</Typography>
      <Typography variant="h6">function</Typography>
      <Typography variant="h6">array</Typography>
      <Typography variant="h6">bigint</Typography>

      <Typography variant="h4">Which of these are objects?</Typography>
      <Alert severity="info">Objects: objects, arrays, functions</Alert>
      <Alert severity="warning">
        No Objects: undefined, string, number, boolean, object, symbol, null,
        bigint
      </Alert>
      <Typography variant="h4">typeof Operator</Typography>
      <Alert severity="info">
        The typeof operator always returns a string with the value type
        information.
      </Alert>
      <Typography>
        In Javascript the type is in the value not in the variable. When we use
        typeof to know the type. We are not asking the type of the var, we are
        asking the type of the value of this var
      </Typography>
      <Code noHeader>
        <>{`
      var v; 
      typeof v;     // "undefined"
      v = "1"
      typeof v;     // "string"
      v = "2"
      typeof v;     // "number"
      v = true
      typeof v;     // "boolean"
      v = {}
      typeof v;     // "object"
      v = Symbol()
      typeof v;     // "symbol"
      
      v = 42n
      typeof v;     // "bigint"`}</>
      </Code>

      <Code noHeader>
        <>{`
typeof doesNotExist     // 'undefined'

var v = null
typeof v;               // "object"    OOPS!

v = functions(){}
typeof v;               // "function"

v = [1, 2, 3]
typeof v;               // "object"    hmmm?`}</>
      </Code>
      <Alert severity="info">
        To know if a value is an array you can use Array.isArray([1, 2, 3])
      </Alert>

      <Typography variant="h4">
        undefined vs. undeclared vs. uninitialized
      </Typography>
      <Typography>
        In Javascript undefined and undeclared are two very different concepts
      </Typography>
      <Typography>
        {`In the previous example where doesNotExist  was not even declared as a var, its typeof was "undefined". How is it posible I get a backquoted undefined when something doesn't even exist?"`}
      </Typography>
      <Typography>
        The typeof operator is the only operator in existence that is able to
        reference a thing that does not exist and not throw an error.
      </Typography>
      <Typography>
        In ES6 the concept uninitialized was introduced. When something is
        uninitialized you are not allowed to touch it in any way, shape or form,
        or you will get an error. The error you get is the TDZ error.
      </Typography>
      <Typography variant="h4">NaN & isNaN</Typography>
      <Typography>
        NaN is suposed to be an acronym for not a number. In reality indicated
        an invalid number.
      </Typography>

      <Code noHeader>
        <>{`
var myAge = Number("0o46");     // 38
var myNextAge = Number("39");   // 39
var myCatsAge = Number("n/a");  // NaN
"33" - 28                       // 5
myAge - "my son's age"          // NaN

myCatsAge === myCatsAge;        // false OOPS!

isNaN(myAge);                   // false
isNaN(myCatsAge);               // true
isNaN("my son's age");          // true OOPS!

Number.isNaN(myCatsAge);        // trye
Number.isNaN("my son's age");   // false`}</>
      </Code>

      <Typography>
        For Javascript - is a number operator so when we try to use it with
        string Javascript tries to convert that string into number. When we try
        to apply the minus operator with a string that cannot be converted to a
        number Javascript turns that string into a NaN value.
      </Typography>

      <Alert severity="info">
        NaN with any other mathematical operation is always NaN.
      </Alert>
      <Typography>
        NaN is the only value in existence, at least in Javascript, that does
        not have what we call the identity property. Meaning that is not equal
        to itself.
      </Typography>
      <Alert severity="info">
        If the value is a NaN the === operator will lie to us.
      </Alert>
      <Typography>
        Since ES6 we have the utility Number.isNaN which will say to us if a
        value is NaN or not
      </Typography>

      <Typography>And the most fun part</Typography>
      <Code noHeader>
        <>{`typeof NaN      // "number"     WHAAAAT??`}</>
      </Code>
      <Typography>
        So when we think about NaN we should not think about is not number.
        Instead, we should seen it as invalid number.
      </Typography>
      <Typography>
        But NaN is a really good response for invalid number. 40 years ago, in
        the c times, when you look for an number in an array and was not found,
        the returned value was -1. I cannot think of a better option than return
        a NaN
      </Typography>

      <Typography variant="h4">Negative Zero</Typography>
      <Code noHeader>
        <>{`
var trendRate = -0;    
trendRate === -0           // true

trendRate.toString();      // "0"     OOPS!
trendRate === 0;           // true     OOPS!
trendRate < 0;             // false     
trendRate > 0;             // false     

Object.is(trendRate, -0);  // true
Object.is(trendRate, 0);   // true`}</>
      </Code>

      <Alert severity="info">
        With the Negative Zero the === operator also lies to us.
      </Alert>
      <Code noHeader>
        <>{`
Math.sign(-3)     // -1
Math.sign(3)      // 1
Math.sign(-0)     // -0 WTF?
Math.sign(0)      // 0 WTF?

// "fix" Math.sign(..)
function sign(v) {
  return v !== 0 ? Math.sign(v) : Object.is(v,-0) ? -1 : 1;
} 

sign(-3)          // -1
sign(3)           // 1
sign(-0)          // -1
sign(0)           // 1`}</>
      </Code>

      <Typography variant="h4">Fundamental Objects</Typography>
      <Typography>When we should use new?</Typography>
      <Alert severity="success">
        {`Use new: Object(), Array(), Function(), Date(), RegExp(), Error()`}
      </Alert>
      <Alert severity="error">
        {`Do not use new: String(), Number(), Boolean()`}
      </Alert>
      <Code noHeader>
        <>{`
var yesterday = new Date("May 19 2023");
yesterday.toUTCString();
// 'Thu, 18 May 2023 22:00:00 GMT'

var myGPA = String(transcript.gpa)`}</>
      </Code>
      <Typography variant="h4">Exercise:</Typography>
      <Code noHeader>
        <>{`
# Polyfill for 'Object.is(..)'

In this exercise, you will define a polyfill for 'Object.is(..)'. No cheating and looking it up online!

## Instructions

1. 'Object.is(..)' should take two parameters.

2. It should return 'true' if the passed in parameters are exactly the same value (not just '===' -- see below!), or 'false' otherwise.

3. For 'NaN' testing, you can use 'Number.isNaN(..)', but first see if you can find a way to test without usage of any utility?

4. For '-0' testing, no built-in utility exists, but here's a hint: '-Infinity'.

5. If the parameters are any other values, just test them for strict equality.

6. You cannot use the built-in 'Object.is(..)' -- that's cheating!

## Polyfill Pattern

**NOTE:** Since your JS environment probably already has 'Object.is(..)', to test your polyfill you'll have to first unconditionally define it (no 'if' guard), and then add the 'if' guard when you're done.

To define a polyfill, it looks like this:

'''js
if (!Object.is) {
	Object.is = function ObjectIs(..) { .. };
}`}</>
      </Code>
      <Typography>
        To know if you resolve it correctly you can pass these tests
      </Typography>
      <Code noHeader>
        <>{`
// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);`}</>
      </Code>
      <QuestionAnswer>
        <Question>Solution</Question>
        <Answer>
          <Code noHeader>
            <>{`
if(!Object.is || true) {
  Object.is = function ObjectIs(x, y) {
    var xNegZero = isItNegZero(x);
    var yNegZero = isItNegZero(y);

    if(xNegZero || yNegZero) {
      return xNegZero && yNegZero
    }
    else if (isItNaN(x) && isItNaN(y)) {
      return true
    }
    else {
      return x === y;
    }

    function isItNegZero(v) {
      return v === 0 && (1/v) == -Infinity;
    }

    function isItNaN(v) {
      return v !== v;
    }
  }
}`}</>
          </Code>
        </Answer>
      </QuestionAnswer>
    </>
  );
};

export default JavascriptBasicsTypesPage;
