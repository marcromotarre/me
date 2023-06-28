import { useState } from "react";
import Button from "../../../components/common/buttons/Button";
import ReactQueryIcon from "../../../components/common/icons/mr-icons/ReactQueryIcon";
import Typography from "../../../components/common/typography/Typography";

const ReactReactQueryPage = () => {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const animate = isAnimationPlaying ? "animate-spin" : "";
  return (
    <>
      <Typography>{`I love React Query icon. So before start this section let me show how the <ReactQueryIcon /> can be customized`}</Typography>
      <div className="flex flex-wrap justify-around">
        <ReactQueryIcon className={animate} color="#61DAFB" size={60} />
        <ReactQueryIcon className={animate} color="black" size={60} />
        <ReactQueryIcon
          className={animate}
          outColor="#61DAFB"
          inColor="#61DAFB"
          lineHexaColor="black"
          lineColor="black"
          size={60}
        />
        <ReactQueryIcon
          className={animate}
          outColor="#61DAFB"
          inColor="#61DAFB"
          lineHexaColor="#52A1B7"
          lineColor="#52A1B7"
          size={60}
        />
        <ReactQueryIcon className={animate} size={60} />
        <ReactQueryIcon
          className={animate}
          outColor="red"
          inColor="yellow"
          lineHexaColor="black"
          lineColor="black"
          size={60}
        />
        <ReactQueryIcon
          className={animate}
          lineHexaColor="transparent"
          size={60}
        />
      </div>
      <div className="flex justify-center">
        <Button
          onClick={() => {
            setIsAnimationPlaying(!isAnimationPlaying);
          }}
          color={isAnimationPlaying ? "#FF4154" : "#FFD94C"}
          secondaryColor={isAnimationPlaying ? "#FFD94C" : "#FF4154"}
        >
          {isAnimationPlaying ? "Stop animation" : "Run Animation"}
        </Button>
      </div>
      <Typography>
        Ok now let&apos;s see the import thing about this library
      </Typography>
    </>
  );
};

export default ReactReactQueryPage;
