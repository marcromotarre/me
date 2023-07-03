import Typography from "../../../../components/common/typography/Typography";
const StrictEqualityComparison = (
  <div className="grid gap-y-2">
    <Typography variant="h5">7.2.15 Strict Equality Comparison</Typography>
    <Typography>
      The comparison x === y, where x and y are values, produces true or false.
      Such a comparison is performed as follows:
    </Typography>
    <ol className="grid list-[type1] gap-y-2 pl-9">
      <li>
        <Typography>
          If Type(x) is different from Type(y), return false.
        </Typography>
      </li>
      <li>
        <Typography>If Type(x) is Number, then</Typography>
        <ol className="grid list-[lower-alpha] gap-y-2 pl-6">
          <li>
            <Typography>If x is NaN, return false.</Typography>
          </li>
          <li>
            <Typography>If y is NaN, return false.</Typography>
          </li>
          <li>
            <Typography>
              If x is the same Number value as y, return true.
            </Typography>
          </li>
          <li>
            <Typography>If x is +0 and y is -0, return true.</Typography>
          </li>
          <li>
            <Typography>If x is -0 and y is +0, return true.</Typography>
          </li>
          <li>
            <Typography>Return false.</Typography>
          </li>
        </ol>
      </li>
      <li>
        <Typography>Return SameValueNonNumber(x, y).</Typography>
      </li>
    </ol>
  </div>
);

export default StrictEqualityComparison;
