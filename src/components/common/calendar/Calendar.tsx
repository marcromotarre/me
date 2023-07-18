import { useState } from "react";
import Typography from "../typography/Typography";
import { LeftIcon, RightIcon } from "../icons";
import {
  getDateId,
  getDateProps,
  getMonthCalendar,
  isSameMonth,
  monthDelay,
  months,
} from "./utils/date";
import Styles from "../../types/style";
import {
  DEFAULT_STYLES,
  dayCurrentStyle,
  dayDisabledStyle,
  dayHighlightedOutOfMonthStyle,
  dayHighlightedStyle,
  dayInivisibleStyle,
  dayVisibleStyle,
} from "./styles";

const DEFAULT_CONFIG = {
  selectionType: "day",
  allowOutMonthSelection: false,
  showOutMonth: false,
};

type CalendarConfig = {
  selectionType?: "day" | "week";
  allowOutMonthSelection?: boolean;
  showOutMonth?: boolean;
};

export default function Calendar({
  style = {},
  date = new Date(),
  currentDate = new Date(),
  onClick = () => {},
  config = {},
}: ComponentProps) {
  const _config = { ...DEFAULT_CONFIG, ...config };
  _config.showOutMonth = _config.allowOutMonthSelection
    ? true
    : _config.showOutMonth;

  const _style = { ...DEFAULT_STYLES, ...style };

  const [dateSelected, setSelectedDate] = useState(date);
  const [dateShowed, setDateShowed] = useState(date);

  const datesThisMonth = getMonthCalendar(dateShowed);

  function goToPreviousMonth() {
    setDateShowed(monthDelay(dateShowed, -1));
  }

  function goToNextMonth() {
    setDateShowed(monthDelay(dateShowed, 1));
  }

  function clickOnDay(date: Date) {
    setDateShowed(date);
    setSelectedDate(date);
    onClick(date);
  }

  return (
    <div style={_style} className="grid grid-cols-1 gap-y-4">
      <div className="flex justify-between">
        <Typography variant="h6">{`${
          months[dateShowed.getMonth()]
        } ${dateShowed.getFullYear()}`}</Typography>
        <div className="grid grid-cols-[30px_30px] gap-x-2">
          <button onClick={() => goToPreviousMonth()}>
            <LeftIcon size={12} color="#555555" />
          </button>
          <button onClick={() => goToNextMonth()}>
            <RightIcon size={12} color="#555555" />
          </button>
        </div>
      </div>
      <div
        style={{ gridAutoRows: "1fr", gridAutoColumns: "1fr" }}
        className="grid w-[100%] grid-cols-7  grid-rows-6 items-center justify-center gap-x-2 gap-y-2"
      >
        <Typography className="aspect-square self-center justify-self-center">
          M
        </Typography>
        <Typography className="aspect-square self-center justify-self-center">
          T
        </Typography>
        <Typography className="aspect-square self-center justify-self-center">
          W
        </Typography>
        <Typography className="aspect-square self-center justify-self-center">
          T
        </Typography>
        <Typography className="aspect-square self-center justify-self-center">
          F
        </Typography>
        <Typography className="aspect-square self-center justify-self-center">
          S
        </Typography>
        <Typography className="aspect-square self-center justify-self-center">
          S
        </Typography>
        {datesThisMonth.map((day, index) => {
          const { isCurrent, isVisible, isHighlighted, isDisabled } =
            getDateProps(day, currentDate, dateSelected, dateShowed, _config);
          return (
            <button
              onClick={() => clickOnDay(day)}
              disabled={isDisabled}
              style={
                !isVisible
                  ? dayInivisibleStyle
                  : isHighlighted
                  ? isSameMonth(day, dateShowed)
                    ? dayHighlightedStyle
                    : dayHighlightedOutOfMonthStyle
                  : isCurrent
                  ? dayCurrentStyle
                  : !isSameMonth(day, dateShowed)
                  ? dayDisabledStyle
                  : dayVisibleStyle
              }
              key={getDateId(day)}
              className="aspect-square self-center justify-self-center"
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

type ComponentProps = {
  date?: Date;
  currentDate?: Date;
  style?: Styles;
  completed?: boolean;
  selection?: "day" | "week";
  onClick?: (date?: Date) => void;
  config?: CalendarConfig;
};
