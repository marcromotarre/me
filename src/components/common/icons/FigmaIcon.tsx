const FigmaIcon = ({
  color,
  colors = {
    topLeft: "#FF4D12",
    topRight: "#FF7361",
    middleLeft: "#B659FF",
    middleRight: "#00BCFF",
    bottom: "#00CF7F",
  },
  size = 20,
  className = "",
}: {
  color?: string;
  colors?: {
    topLeft: string;
    topRight: string;
    middleLeft: string;
    middleRight: string;
    bottom: string;
  };
  size?: number;
  className?: string;
}) => {
  const ASPECT_RATIO_WIDTH_HEIGHT = 1.36842105263;

  return (
    <svg
      className={className}
      width={size / ASPECT_RATIO_WIDTH_HEIGHT}
      height={size}
      viewBox="0 0 38 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.76923 0C3.92613 0 0 3.80559 0 8.5C0 13.1944 3.92613 17 8.76923 17H29.2308C34.074 17 38 13.1944 38 8.5C38 3.80559 34.074 0 29.2308 0H8.76923Z"
        fill={color ? color : colors.topLeft}
      />
      <path
        d="M18 0H29.5C34.1944 0 38 3.80558 38 8.5V8.5C38 13.1944 34.1944 17 29.5 17H18V0Z"
        fill={color ? color : colors.topRight}
      />
      <path
        d="M27 17C22.0293 17 18 21.0293 18 26C18 30.9707 22.0293 35 27 35C31.9707 35 36 30.9707 36 26C36 21.0293 31.9707 17 27 17Z"
        fill={color ? color : colors.middleRight}
      />
      <path
        d="M1 26C1 21.0293 4.80559 17 9.5 17H18V35H9.5C4.80559 35 1 30.9707 1 26Z"
        fill={color ? color : colors.middleLeft}
      />
      <path
        d="M9.5 35C4.80559 35 1 38.8054 1 43.5C1 48.1945 4.80559 52 9.5 52C14.1945 52 18 48.1945 18 43.5V35H9.5Z"
        fill={color ? color : colors.bottom}
      />
    </svg>
  );
};

export default FigmaIcon;
