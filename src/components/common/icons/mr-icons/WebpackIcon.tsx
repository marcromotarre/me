const WebpackIcon = ({
  color,
  inColor = "#1C78C0",
  outColor = "#8ED5FA",
  size = 20,
  className = "",
}: {
  color?: string;
  inColor?: string;
  outColor?: string;
  size?: number;
  className?: string;
}) => {
  const ASPECT_RATIO = 1.10869565217;
  return (
    <svg
      className={className}
      width={size}
      height={size * ASPECT_RATIO}
      viewBox="0 0 46 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.5 35L24 42V51L45 39.5L37.5 35Z"
        fill={color ? color : outColor}
      />
      <path d="M22 42V51L1 39.5L9 35L22 42Z" fill={color ? color : outColor} />
      <path d="M8 33.5L0 38V13.5L8 18V33.5Z" fill={color ? color : outColor} />
      <path d="M22 0L1 12L9 16.5L22 9V0Z" fill={color ? color : outColor} />
      <path d="M24 9V0L45 12L37.5 16.5L24 9Z" fill={color ? color : outColor} />
      <path
        d="M38.5 33.5V18L46 13.5V38L38.5 33.5Z"
        fill={color ? color : outColor}
      />
      <path
        d="M9.5 34V19.5L22 26.5V40.5L9.5 34Z"
        fill={color ? color : inColor}
      />
      <path
        d="M23 11L10 18L23 25L35.5 18L23 11Z"
        fill={color ? color : inColor}
      />
      <path
        d="M23.5 40.5V26.5L36 19.5V33.5L23.5 40.5Z"
        fill={color ? color : inColor}
      />
    </svg>
  );
};

export default WebpackIcon;
