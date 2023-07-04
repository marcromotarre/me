const PointIcon = ({
  color = "black",
  size = 20,
  className = "",
}: ComponentProps) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="40" cy="40" r="36.5" stroke={color} strokeWidth="7" />
      <circle cx="40" cy="40" r="24" fill={color} />
    </svg>
  );
};

export type ComponentProps = {
  color?: string;
  size?: number;
  className?: string;
};
export default PointIcon;
