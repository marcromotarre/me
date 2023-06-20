const NpmIcon = ({
  color,
  outColor = "#CB3837",
  inColor = "white",
  size = 20,
  className = "",
}: {
  color?: string;
  outColor?: string;
  inColor?: string;
  size?: number;
  className?: string;
}) => {
  const ASPECT_RATIO = 0.38888888888;
  return (
    <svg
      className={className}
      width={size}
      height={size * ASPECT_RATIO}
      viewBox="0 0 72 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4V20H12V8H16V20H20V4H4ZM24 4V24H32V20H40V4H24ZM44 20V4H68V20H64V8H60V20H56V8H52V20H44ZM36 8H32V16H36V8Z"
        fill={color ? "transparent" : inColor}
      />
      <path
        d="M0 0V24.0034H19.998V28H36V24.0034H72V0H0ZM19.998 19.9949H16.002V7.99314H11.997V19.9949H4.005V3.99957H19.998V19.9949ZM31.998 19.9949V24.0034H24.003V3.99957H40.005V19.9979L31.998 19.9949ZM68.001 19.9949H64.011V7.99314H60.003V19.9949H55.998V7.99314H52.008V19.9949H43.995V3.99957H68.001V19.9949ZM31.995 7.99914H36V16.0013H31.995V7.99914Z"
        fill={color ? color : outColor}
      />
    </svg>
  );
};

export default NpmIcon;
