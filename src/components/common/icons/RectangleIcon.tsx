const RectangleIcon = ({
  color = "black",
  size = 20,
  className = "",
}: {
  color?: string;
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      data-testid={"rectangle-icon"}
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="72" height="72" fill={color} />
    </svg>
  );
};

export default RectangleIcon;
