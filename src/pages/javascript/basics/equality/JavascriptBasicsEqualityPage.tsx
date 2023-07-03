import Alert from "../../../../components/common/alert/Alert";
import Card from "../../../../components/common/card/Card";
import Code from "../../../../components/common/code/Code";
import Typography from "../../../../components/common/typography/Typography";
import {
  AbstractEqualityStudentExampleCode,
  AbstractEqualityWorkshopEnrollmentExampleCode,
} from "./code/JavascriptBasicsEqualityCode";

import SpecStrictEqualityComparison from "../../../../images/javascript-spec/7_2_15_strict_equality_comparison.png";

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
        <img
          alt="abstract equality comparison"
          src="../../../images/javascript-spec/7_2_14_abstract_equality_comparison.png"
        ></img>
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
      <Card>
        <img
          alt="strict equality comparison"
          src={SpecStrictEqualityComparison}
        ></img>
      </Card>
    </>
  );
};

export default JavascriptBasicsEqualityPage;
