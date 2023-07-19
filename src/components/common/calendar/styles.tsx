export const DEFAULT_STYLES = {
  width: "250px",
};

export const commonStyle = {
  width: "100%",
};

export const dayCurrentStyle = {
  ...commonStyle,
  borderRadius: "100%",
  border: "1px solid #266EF1",
  color: "#266EF1",
};

export const dayCurrentDisabledStyle = {
  ...commonStyle,
  borderRadius: "100%",
  border: "1px solid #CCC",
  color: "#CCC",
};

export const dayHighlightedStyle = {
  ...commonStyle,
  ...dayCurrentStyle,
  backgroundColor: "#266EF1",
  color: "white",
};

export const dayHighlightedOutOfMonthStyle = {
  ...dayHighlightedStyle,
  opacity: 0.3,
};

export const dayDisabledStyle = {
  ...commonStyle,
  borderRadius: "100%",
  color: "#CCC",
};

export const dayVisibleStyle = {
  ...commonStyle,
  color: "black",
};

export const dayInivisibleStyle = {
  ...commonStyle,
  color: "white",
};
