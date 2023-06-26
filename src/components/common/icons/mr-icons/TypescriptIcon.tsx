const TypescriptIcon = ({
  color,
  lettersColor,
  tColor = "white",
  sColor = "white",
  backgroundColor = "#007ACC",
  size = 20,
  className = "",
}: {
  color?: string;
  lettersColor?: string;
  tColor?: string;
  sColor?: string;
  backgroundColor?: string;
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 84 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.9883 38.9648H18.5391V45.9375H29.3672V76.5762H37.4062V45.9375H47.9883V38.9648Z"
        fill={color ? "transparent" : lettersColor ? lettersColor : tColor}
      />
      <path
        d="M47.9883 38.9648H18.5391V45.9375H29.3672V76.5762H37.4062V45.9375H47.9883V38.9648Z"
        fill={color ? "transparent" : lettersColor ? lettersColor : tColor}
      />
      <path
        d="M47.9883 38.9648H18.5391V45.9375H29.3672V76.5762H37.4062V45.9375H47.9883V38.9648Z"
        fill={color ? "transparent" : lettersColor ? lettersColor : tColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H84V84H0V0ZM50.2031 69.507C52.4961 74.1067 57.1941 77.4375 64.4639 77.4375C71.9028 77.4375 77.4395 73.7101 77.4375 66.5537C77.4375 59.9148 73.6902 56.9578 67.0339 54.0613L65.0774 53.2096C61.7224 51.733 60.2681 50.7682 60.2681 48.3833C60.2681 46.4612 61.7224 44.9845 64.0156 44.9845C66.2585 44.9845 67.7053 45.9419 69.0481 48.3833L75.1555 44.3973C72.5798 39.7976 69.0034 38.2266 64.0249 38.2266C57.0339 38.2266 52.5613 42.5808 52.5613 48.542C52.5613 55.0167 56.3069 58.0831 61.9568 60.5227L63.9133 61.3762C67.4934 62.9736 69.4331 63.9386 69.4331 66.6633C69.4331 68.9348 67.5491 70.3926 64.3057 70.3926C60.4468 70.3926 58.2615 68.5383 56.5876 65.755L50.2031 69.507ZM18.5391 38.9648H47.9883V45.9375H37.4062V76.5762H29.3672V45.9375H18.5391V38.9648Z"
        fill={color ? color : backgroundColor}
      />
      <path
        d="M50.2031 69.5069C52.4962 74.1067 57.194 77.4375 64.4638 77.4375C71.9028 77.4375 77.4394 73.7101 77.4375 66.5538C77.4375 59.9147 73.6901 56.9578 67.034 54.0612L65.0775 53.2096C61.7225 51.7331 60.2682 50.7682 60.2682 48.3833C60.2682 46.4611 61.7225 44.9845 64.0156 44.9845C66.2585 44.9845 67.7054 45.9419 69.0481 48.3833L75.1556 44.3973C72.5798 39.7976 69.0035 38.2266 64.0249 38.2266C57.034 38.2266 52.5613 42.5808 52.5613 48.542C52.5613 55.0167 56.3069 58.0832 61.9568 60.5228L63.9133 61.3762C67.4933 62.9737 69.4331 63.9386 69.4331 66.6633C69.4331 68.9348 67.5491 70.3925 64.3057 70.3925C60.4467 70.3925 58.2615 68.5383 56.5877 65.755L50.2031 69.5069Z"
        fill={color ? "transparent" : lettersColor ? lettersColor : sColor}
      />
    </svg>
  );
};

export default TypescriptIcon;
