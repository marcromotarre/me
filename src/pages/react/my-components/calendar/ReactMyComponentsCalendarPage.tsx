import Calendar from "../../../../components/common/calendar/Calendar";
import { dayDelay } from "../../../../components/common/calendar/utils/date";
import Card from "../../../../components/common/card/Card";
import Code from "../../../../components/common/code/Code";
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
      <Typography>
        The Calendar component is designed with a 7x7 grid. The first rows is a
        king of header to show the day of the week (Monday, Tuesday, Wednesday,
        Thursday, Friday, Saturday and Sunday). The next 6 rows are to display
        the days of the month. A month can have as maximum 6 weeks. So in some
        months the 6th week is not displayed, but the calendar will have the
        same size to do not change the layout when swiping between months.
      </Typography>

      <div className="flex w-full justify-center">
        <Card type="type1">
          <Calendar></Calendar>
        </Card>
      </div>
      <Code noHeader>
        <>{` <Calendar />`}</>
      </Code>
      <Typography>
        The Calendar component allows a lot of configuration. Lets see some
        examples
      </Typography>

      <Typography variant="h6">Default selected dates</Typography>
      <Typography>
        The calendar component allows the user to change the currentDate
        (simulation that you are in a different date than the actual), the
        default selected date, and the month to show
      </Typography>
      <Typography>
        Imagine than you want to set the selected date to tomorrow
      </Typography>

      <div className="flex w-full justify-center">
        <Card type="type1">
          <Calendar date={dayDelay(new Date(), 1)}></Calendar>
        </Card>
      </div>

      <Typography>
        or for example we want to simulate that the current date is yesterday
      </Typography>
      <div className="flex w-full justify-center">
        <Card type="type1">
          <Calendar currentDate={dayDelay(new Date(), -1)}></Calendar>
        </Card>
      </div>
      <Typography>you can set the showed month</Typography>
      <Typography>or just do not sete any selected date at all</Typography>
      <div className="flex w-full justify-center">
        <Card type="type1">
          <Calendar date={undefined}></Calendar>
        </Card>
      </div>
      <Typography variant="h6">Show Out of Month Days</Typography>
      <Typography>
        As you can see in this example you can show as disabled the days from
        previous month and next month that share weeks with the current month
      </Typography>
      <div className="flex w-full justify-center">
        <Card type="type1">
          <Calendar config={{ showOutMonth: true }}></Calendar>
        </Card>
      </div>
      <Code noHeader>
        <>{`<Calendar config={{ showOutMonth: true }}/>`}</>
      </Code>
      <Typography>
        As you can see in this example you can not click on the disabled dates
      </Typography>

      <Typography variant="h6">Allow out Month Selection</Typography>
      <Typography>
        This prop also activates showOutMonth. Allows the user to select the
        disabled days. It also change the monthcto show.
      </Typography>
      <div className="flex w-full justify-center">
        <Card type="type1">
          <Calendar config={{ allowOutMonthSelection: true }}></Calendar>
        </Card>
      </div>
      <Typography variant="h6">Selection Type week</Typography>
      <Typography>
        You can also allow the user to select a whole week
      </Typography>
      <div className="flex w-full justify-center">
        <Card type="type1">
          <Calendar
            config={{ showOutMonth: true, selectionType: "week" }}
          ></Calendar>
        </Card>
      </div>
      <Typography variant="h6">Disable some days</Typography>
      <div className="flex w-full justify-center">
        <Card type="type1">
          <Calendar
            config={{ disable: ["saturdays", "wednesdays", "sundays"] }}
          ></Calendar>
        </Card>
      </div>
    </>
  );
}
