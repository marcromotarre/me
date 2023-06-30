import Alert from "../../../../components/common/alert/Alert";
import Code from "../../../../components/common/code/Code";
import Typography from "../../../../components/common/typography/Typography";

const JavascriptBasicsTypesPage = () => {
  return (
    <>
      <Typography variant="h3">Primitype Types</Typography>
      <Typography>Let&aps;s talk about the primitive types.</Typography>
      <Alert severity="error">
        This statement is FALSE: In Javascript all are Objects.
      </Alert>
      <Typography>There are other types than the object type.</Typography>
      <Typography variant="h6">undefined</Typography>
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
      <Typography variant="h6">objects</Typography>
      <Typography>
        Yes the object is a type. And it has a lot of subtypes and something can
        behave as an object that doesn&aps;t make it an object.
      </Typography>

      <Typography variant="h6">symbol</Typography>

      <Typography variant="h5">Not considered primitive types</Typography>
      <Typography variant="h6">undeclared</Typography>
      <Typography variant="h6">null</Typography>
      <Typography variant="h6">function</Typography>
      <Typography variant="h6">array</Typography>
      <Typography variant="h6">bigint</Typography>

      <Typography variant="h5">Which of these are objects?</Typography>
      <Alert severity="info">Objects: objects, arrays, functions</Alert>
      <Alert severity="warning">
        No Objects: undefined, string, number, boolean, object, symbol, null,
        bigint
      </Alert>
      <Typography variant="h5">typeof Operator</Typography>
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

      <Typography variant="h5">
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
      <Typography variant="h5">NaN & isNaN</Typography>
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

      <Typography variant="h5">Negative Zero</Typography>
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
sign(0)           // 1

`}</>
      </Code>
    </>
  );
};

export default JavascriptBasicsTypesPage;
