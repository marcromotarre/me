export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const weekDays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export const weekDaysPlural = [
  "mondays",
  "tuesdays",
  "wednesdays",
  "thursdays",
  "fridays",
  "saturdays",
  "sundays",
];

export const weekDaysIndex = [1, 2, 3, 4, 5, 6, 0];

export function getDateId(date: Date) {
  return `${date.getDate()}_${date.getMonth()}_${date.getFullYear()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}`;
}

export function dayDelay(date: Date, delay = 0) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + delay,
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  );
}

export function monthDelay(date: Date, delay = 0) {
  return new Date(
    date.getFullYear(),
    date.getMonth() + delay,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  );
}

export function isDayIncluded(days: Date[], day: Date) {
  let found = false;
  let a = day;
  days.forEach((d) => {
    if (isSameDay(d, day)) {
      found = true;
    }
  });
  return found;
}

export function getLastDayInMonth(date: Date): Date {
  const daysInMonth = getDaysInMonth(date);
  return daysInMonth[daysInMonth.length - 1];
}

export function getFirstDayInMonth(date: Date): Date {
  const daysInMonth = getDaysInMonth(date);
  return daysInMonth[0];
}

export function getDaysInMonth(date: Date): Date[] {
  const month = date.getMonth();
  const year = date.getFullYear();
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

/*{
  isSelectable
  isSelected
  isVisible
}*/

type DayProps = {
  isSelectable: boolean;
  isHighlighted: boolean;
  isVisible: boolean;
  isCurrent: boolean;
  isDisabled: boolean;
  isClickable: boolean;
};

type weekDaysType =
  | "mondays"
  | "tuesdays"
  | "wednesdays"
  | "thursdays"
  | "fridays"
  | "saturdays"
  | "sundays";

type disabledConfig = weekDaysType | Date;

type Config = {
  selectionType: "day" | "week";
  allowOutMonthSelection: boolean;
  showOutMonth: boolean;
  disabled: disabledConfig[];
};

export function isDayDisabled(date: Date, disableConfig = []): boolean {
  for (
    let disableConfigIndex = 0;
    disableConfigIndex < disableConfig.length;
    disableConfigIndex++
  ) {
    const disableOption = disableConfig[disableConfigIndex];
    if (typeof disableOption === "string") {
      const weekDayIndex = weekDaysPlural.indexOf(disableOption);
      if (
        weekDayIndex !== -1 &&
        date.getDay() === weekDaysIndex[weekDayIndex]
      ) {
        return true;
      }
    }
  }
  return false;
}

export function getDateProps(
  date: Date,
  currentDate: Date,
  selectedDate: Date | undefined,
  showedDate: Date,
  config: Config
): DayProps {
  let isClickable = false;
  let isSelectable = false;
  let isVisible = false;
  let isHighlighted = false;
  let isCurrent = false;
  let isDisabled = false;

  if (isSameDay(date, currentDate)) {
    isCurrent = true;
    isClickable = true;
    isSelectable = true;
  }

  if (isSameDay(date, selectedDate)) {
    isHighlighted = true;
    isClickable = true;
    isSelectable = true;
  }

  if (isSameMonth(date, showedDate)) {
    isVisible = true;
    isSelectable = true;
    if (isSameDay(date, showedDate)) {
    }
  } else {
    if (config.showOutMonth) {
      isVisible = true;
    }
    if (config.allowOutMonthSelection) {
      isDisabled = true;
      isSelectable = true;
    } else {
      isDisabled = true;
      isSelectable = false;
    }
    const firstDayInMonth = getFirstDayInMonth(showedDate);
    const lastDayInMonth = getLastDayInMonth(showedDate);
    if (
      !isSameWeek(date, lastDayInMonth) &&
      !isSameWeek(date, firstDayInMonth)
    ) {
      isVisible = false;
    }
  }
  if (config.selectionType === "week") {
    if (isSameWeek(date, selectedDate)) {
      isHighlighted = true;
    }
  }
  if (isDayDisabled(date, config.disable)) {
    isDisabled = true;
    isSelectable = false;
  }

  return {
    isClickable,
    isSelectable,
    isHighlighted,
    isVisible,
    isCurrent,
    isDisabled,
  };
}

export function getMonthCalendar(date: Date): Date[] {
  // a complete month calendar has 6 weeks, can include last days of previous months and first days of the next one
  const daysInMonth = getDaysInMonth(date);

  let days = [
    ...Array.from(
      {
        length: daysInMonth[0].getDay() == 0 ? 6 : daysInMonth[0].getDay() - 1,
      },
      (_, index) => {
        const newDate = new Date(daysInMonth[0]);
        newDate.setDate(
          newDate.getDate() -
            (daysInMonth[0].getDay() == 0
              ? 7 - 1 - index
              : daysInMonth[0].getDay() - 1 - index)
        );
        return newDate;
      }
    ),
    ...daysInMonth,
  ];

  days = [
    ...days,
    ...Array.from({ length: 42 - days.length }, (_, index) => {
      const lastDay = daysInMonth[daysInMonth.length - 1];
      const newDate = new Date(lastDay);
      newDate.setDate(newDate.getDate() + (index + 1));
      return newDate;
    }),
  ];
  return days;
}

export function getDaysInWeek(date: Date): Date[] {
  let _date = new Date(date);
  var week = new Array();
  // Starting Monday not Sunday
  _date.setDate(
    _date.getDay() == 0
      ? _date.getDate() - 7 + 1
      : _date.getDate() - _date.getDay() + 1
  );
  for (var i = 0; i < 7; i++) {
    week.push(new Date(_date));
    _date.setDate(_date.getDate() + 1);
  }
  return week;
}

export const getWeek = (date: Date) => {
  const janFirst = new Date(date.getFullYear(), 0, 1);
  return Math.ceil(
    ((date.getTime() - janFirst.getTime()) / 86400000 + janFirst.getDay()) / 7
  );
};

export const isSameWeek = (d1?: Date, d2?: Date) => {
  if (!d1 || !d2) return false;
  return getWeek(d1) === getWeek(d2);
};

export function isSameDay(d1?: Date, d2?: Date) {
  if (!d1 || !d2) return false;
  return d1.getDate() === d2.getDate() && isSameMonth(d1, d2);
}

export function isSameMonth(d1?: Date, d2?: Date) {
  if (!d1 || !d2) return false;
  return isSameYear(d1, d2) && d1.getMonth() === d2.getMonth();
}

export function isSameYear(d1?: Date, d2?: Date) {
  if (!d1 || !d2) return false;
  return (
    d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth()
  );
}

export function getMonthString(month: number, short = false): string {
  if (short) return months[month];
  return months[month];
}

export function convertHour(hour: number) {
  if (hour < 10) return `0${hour}:00`;
  return `${hour}:00`;
}
