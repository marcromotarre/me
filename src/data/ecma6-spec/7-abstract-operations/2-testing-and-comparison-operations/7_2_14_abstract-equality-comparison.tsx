import Typography from "../../../../components/common/typography/Typography";
const AbstractEqualityComparison = (
  <div className="grid gap-y-2">
    <Typography variant="h5">7.2.14 Abstract Equality Comparison</Typography>
    <Typography>
      The comparison x == y, where x and y are values, produces true or false.
      Such a comparison is performed as follows:
    </Typography>
    <ol className="grid list-[type1] gap-y-2 pl-9">
      <li>
        <Typography>If Type(x) is the same as Type(y), then</Typography>
        <ol>
          <li className="pl-3">
            <Typography>
              Return the result of performing Strict Equality Comparison x === y
            </Typography>
          </li>
        </ol>
      </li>
      <li>
        <Typography>If x is null and y is undefined, return true.</Typography>
      </li>
      <li>
        <Typography>If x is undefined and y is null, return true.</Typography>
      </li>
      <li>
        <Typography>
          If Type(x) is Number and Type(y) is String, return the result of the
          comparison x == ! ToNumber(y).
        </Typography>
      </li>
      <li>
        <Typography>
          If Type(x) is String and Type(y) is Number, return the result of the
          comparison ! ToNumber(x) == y.
        </Typography>
      </li>
      <li>
        <Typography>
          If Type(x) is Boolean, return the result of the comparison !
          ToNumber(x) == y.
        </Typography>
      </li>
      <li>
        <Typography>
          If Type(y) is Boolean, return the result of the comparison x == !
          ToNumber(y).
        </Typography>
      </li>
      <li>
        <Typography>
          If Type(x) is either String, Number, or Symbol and Type(y) is Object,
          return the result of the comparison x == ToPrimitive(y).
        </Typography>
      </li>
      <li>
        <Typography>
          If Type(x) is Object and Type(y) is either String, Number, or Symbol,
          return the result of the comparison ToPrimitive(x) == y.
        </Typography>
      </li>
      <li>
        <Typography>Return false.</Typography>
      </li>
    </ol>
  </div>
);

export default AbstractEqualityComparison;
