import Calendar from "../../../../components/common/calendar/Calendar";
import Card from "../../../../components/common/card/Card";
import Typography from "../../../../components/common/typography/Typography";

export default function ReactMyComponentsCalendarPage() {
  return (
    <>
      <Typography>
        I designed a configurable calendar component. The calendar component:
      </Typography>
      <ol className="grid list-[type1] gap-y-2 pl-9">
        <li>
          <Typography>
            Shows the current month and all of its days divided in weeks
          </Typography>
        </li>
        <li>
          <Typography>Shows focus on the selected date</Typography>
        </li>
        <li>
          <Typography>
            If another day is selected it shows the current date circled
          </Typography>
        </li>
        <li>
          <Typography>Allow to navigate between months </Typography>
        </li>
      </ol>
      <div className="flex w-full justify-center">
        <Calendar></Calendar>
      </div>
    </>
  );
}
