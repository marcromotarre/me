const PokedexPokemonViewerSVG = ({
  color = "black",
  strokeColor = "transparent",
  strokeWidth = "0.2",
  size = 20,
  className = "",
}: {
  color?: string;
  strokeColor?: string;
  strokeWidth?: string;
  size?: number;
  className?: string;
}) => {
  const ASPECT_RATIO = 205 / 202;

  return (
    <svg
      width={size}
      height={size * ASPECT_RATIO}
      viewBox="0 0 202 205"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 1.5H200.5V203.5H40C18.737 203.5 1.5 186.263 1.5 165V1.5Z"
        fill="white"
        stroke="black"
        strokeWidth="3"
      />
      <rect
        x="22"
        y="18"
        width="160"
        height="160"
        rx="9"
        fill="#98CB98"
        stroke="black"
        strokeWidth="2"
      />
      <circle
        cx="39"
        cy="191"
        r="6"
        fill="#FF0102"
        stroke="black"
        strokeWidth="2"
      />
      <circle opacity="0.3" cx="37" cy="190" r="2" fill="white" />
      <rect x="141" y="182" width="26" height="3" fill="#030303" />
      <rect x="141" y="187" width="26" height="3" fill="#030303" />
      <rect x="141" y="192" width="26" height="3" fill="#030303" />
    </svg>
  );
};

export default PokedexPokemonViewerSVG;
