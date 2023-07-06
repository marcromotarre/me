import Code from "../../../components/common/code/Code";
import Typography from "../../../components/common/typography/Typography";

export default function TypescriptConditionalTypesPage() {
  return (
    <>
      <Typography variant="h4">Type Queries</Typography>
      <Typography>
        Type queries allow us to obtain type information from values, which is
        an incredibly important capability — particularly when working with
        libraries that may not expose type information in a way that&apos;s most
        useful for you
      </Typography>
      <Typography variant="h6">keyof</Typography>
      <Typography>
        The keyof type query allows us to obtain type representing all property
        keys on a given interface
      </Typography>
      <Code noHeader>
        <>{`
type DatePropertyNames = keyof Date`}</>
      </Code>
      <Typography>
        Not all keys are strings, so we can separate out those keys that are
        symbols and those that are strings using the intersection operator (&).
      </Typography>
    </>
  );
}
