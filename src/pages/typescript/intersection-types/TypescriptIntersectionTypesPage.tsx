import Code from "../../../components/common/code/Code";
import Typography from "../../../components/common/typography/Typography";

export default function TypescriptIntersectionTypesPage() {
  return (
    <>
      <Typography variant="h4">Intersection Types</Typography>
      <Typography>
        Let me say before starting this section that Union Types are much more
        common. So you will find them more often .
      </Typography>
      <Code noHeader>
        <>{`
function makeWeek(): { date: Date } & { end: Date } {
const ONE_WEEK = 604800000;
const start = new Date();
const end = new Date(start.valueOf() + ONE_WEEK);
return { date: start, end };
}

const thisWeek = makeWeek();
thisWeek.date.toISOString();
thisWeek.end.toISOStrin();`}</>
      </Code>
    </>
  );
}
