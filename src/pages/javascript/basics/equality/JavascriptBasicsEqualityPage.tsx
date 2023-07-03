import Alert from "../../../../components/common/alert/Alert";
import Card from "../../../../components/common/card/Card";
import Code from "../../../../components/common/code/Code";
import Typography from "../../../../components/common/typography/Typography";
import {
  AbstractEqualityStudentExampleCode,
  AbstractEqualityWorkshopEnrollmentExampleCode,
  ObjectComparisonCode,
} from "./code/JavascriptBasicsEqualityCode";

import AbstractEqualityComparison from "../../../../data/ecma6-spec/7-abstract-operations/2-testing-and-comparison-operations/7_2_14_abstract-equality-comparison";
import StrictEqualityComparison from "../../../../data/ecma6-spec/7-abstract-operations/2-testing-and-comparison-operations/7_2_15_strict-equality-comparison";

const JavascriptBasicsEqualityPage = () => {
  return (
    <>
      <Typography>
        Have you ever heard that the difference between == and === is that ==
        checks the value so called loose equality and === checks the value in
        the type so called strict equality? This is extremely common. And
        unfortunately even though it sounds really good it is not exactly the
        case. That is not exactly the difference.
      </Typography>
      <Typography>
        If we go to the spec https://262.ecma-international.org/9.0/ the section
        7.2.14. Abstract Equality Comparison, which is the double equals. And if
        double equals only checks the value and triple equals checks the value
        and the type, then why write up here at the very top of the algorithm,
        the very first thing, are the types of x and y checked?
      </Typography>
      <Card>
        <>{AbstractEqualityComparison}</>
      </Card>

      <Alert severity="info">
        {`1. If Type(x) is the same as Type(y), then: Return the result of performing
        Strict Equality Comparison x === y.`}
      </Alert>
      <Typography>
        Immediately we can debunk the myth that the difference between these two
        is whether the types are the same. That is not the difference. They both
        checked the types, it is just that one does something different with
        that information than the other one.
      </Typography>
      <Typography>Lets see that example:</Typography>
      <Code noHeader>
        <>{AbstractEqualityStudentExampleCode}</>
      </Code>
      <Code noHeader>
        <>{AbstractEqualityWorkshopEnrollmentExampleCode}</>
      </Code>
      <Typography>
        Having these two examples in mind and with the spec on hand. It turns
        out that when the types match, the == and the ===, are exactly the same.
        There is absolutely no difference.
      </Typography>
      <Typography>
        So now, in the case that types match and we know by the spec that what
        is trully doing is the === equals comparison. So if the look at the spec
        about triple equals.
      </Typography>
      <Card>{StrictEqualityComparison}</Card>
      <Typography>
        If you think about it. Essentially the real difference between strict
        equality and loose equality is whether or not we are going to allow any
        coercion to occur.
      </Typography>
      <Typography>
        Paying attention to the strict equality spec it will return false if
        there is any NaN and will return true and one value is 0 and the other
        is -0. Because if you remember in the coercion section. It will lie us
        about NaN value and -0.
      </Typography>
      <Typography>
        Maybe the good statement about both, is both check types but one stops
        at early check and the other later.
      </Typography>
      <Typography>Lets see another good example:</Typography>
      <Code noHeader>
        <>{ObjectComparisonCode}</>
      </Code>
      <Typography>
        So with all that seen we can now say the these two statement are false:
      </Typography>
      <Alert severity="error">FALSE: == checks value</Alert>
      <Alert severity="error">FALSE: === checks value and types</Alert>
      <Typography>these two statements are more correct:</Typography>
      <Alert severity="success">
        == allows coercion when the types are different
      </Alert>
      <Alert severity="success">
        === disallows coercion whene the types are the same
      </Alert>

      <Typography variant="h4">Coercive Equality</Typography>
      <Typography>
        Now with all in this section explained we should ask ourselves: If I
        know the types, is coercion here helpful or not? Maybe it is helpful,
        maybe it is not. In a particular case could be me more safe or less
        safe, more useful or less useful.
      </Typography>
      <Typography>
        The decision about double equals or triple equals is a trailing
        indicator of whether you actually understand your program. The choice of
        writing triple equals should not be because some guy wrote in a book
        that you should always use triple equals. The choice of use triple
        equals is because you do not know something about the types in that
        comparison and so you have to protect yourself.
      </Typography>
      <Typography>
        Maybe the correct approach is to solve the root problem, which is: I do
        not know what the types are in this comparison. It is too unpredictable,
        it is too polymorphic.
      </Typography>
      <Typography>
        if we look at the Abstract Equality Comparison (==) again and focus on
        the points about null al undefined. It says that If x is null and y is
        undefined, return true. If x is undefined and y is null, return true.
      </Typography>

      <Typography>
        In other words, the null value and the undefined valie are coercively
        equal to each other and to no other values in the language. So when we
        use == and one value is null and the other is undefined they are the
        same. With that we do not have two empty values.
      </Typography>
      <Code noHeader>
        <>{`
var a = null;
var b = undefined;

a == b     // true;
a === b    // false;`}</>
      </Code>
      <Typography>Lets see another example:</Typography>
      <Code noHeader>
        <>{`
var workshop1 = { topic: null;};
var workshop2 = {};

if (
  (workshop1.topic === null || workshop1.topic === undefined) &&
  (workshop2.topic === null || workshop2.topic === undefined)
) {
  // ...
}`}</>
      </Code>
      <Typography>This is the same as:</Typography>
      <Code noHeader>
        <>{`
var workshop1 = { topic: null;};
var workshop2 = {};

if (
  workshop1.topic == null &&
  workshop2.topic == null
) {
  // ...
}`}</>
      </Code>
      <Typography>
        So one option is for you to write what you do using triple equals that
        does not allow coercion and explicitly checks all of those cases.
        Explicitly checks that workshop1.topic is null or workshop1.topic is
        undefined and the same thing is true of workshop2 topic.
      </Typography>
      <Typography>
        Are you gaining anything readability-wise by being explicit here? Ask
        yourself the question if the reader has benefited from having to juggle
        in their head the distinction between two empty values? My assertion is
        that no, they are not benefited. And using the double equals it is far
        more clear. This is an example of using coercive equality.
      </Typography>
      <Typography>Some other examples:</Typography>
      <Code noHeader>
        <>{`
var a = 42;
var b = [42];

a == b // true
// 42 == [42]
// 42 == "42"
// 42 === 42`}</>
      </Code>
      <Typography>
        Javascript is calling toPrimitive of [42] and transforming to string and
        then to a number. When types are the same, then its using ===
      </Typography>
      <Typography variant="h4">Corner Cases</Typography>
      <Code noHeader>
        <>{`
[] == ![]  // true WHAT??!

var a = [];
var b = [];

a == !b
// [] == false
// "" == false
// 0 == false
// 0 === 0 // true`}</>
      </Code>

      <Code noHeader>
        <>{`
let a = [];

// Boolean(a)
if(a) {
  // true it will enter here
}

// a == true
// "" == true
// 0 === 1 // false
if (a == true) {
  // it will not enter here :(
} 

// a == false
// "" == false
// 0 === 0 // true
if (a == false) {
  // it will enter here :(
}`}</>
      </Code>
      <Alert severity="info">
        Knowing types is always better than not knowing them.
      </Alert>
      <Alert severity="info">
        Static Types is not the only (or even necessarily best) way to know your
        types.
      </Alert>
      <Alert severity="warning">
        Never use == when you do not know the types.
      </Alert>
      <Alert severity="info">
        if you know the type(s) in a comparison and these types are the same: ==
        is equal to ===
      </Alert>
    </>
  );
};

export default JavascriptBasicsEqualityPage;
