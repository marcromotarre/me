import { ReactElement, useEffect, useRef, useState } from "react";

import "./styles.css";

export default function Card({
  type = "back",
  children,
  applyChange,
}: ComponentProps) {
  const cardRef = useRef();

  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePositionX, setMousePositionX] = useState(0);
  const [mouseStartPositionX, setMouseStartPositionX] = useState(0);
  const [className, setClassName] = useState("");

  useEffect(() => {
    const xDelay = mousePositionX - mouseStartPositionX;
    const deg = xDelay / 10;
    cardRef.current.style.transform = `translateX(${xDelay}px) rotate(${deg}deg)`;
  }, [isAnimating, mouseStartPositionX, mousePositionX]);

  function startMovement(e) {
    console.log("haha");
    if (type === "frontal") {
      const x = e.changedTouches[0].pageX;
      setIsAnimating(true);
      setMousePositionX(x);
      setMouseStartPositionX(x);
    }
  }

  function move(e) {
    if (isAnimating && type === "frontal") {
      const x = e.changedTouches[0].pageX;
      setMousePositionX(x);
    }
  }

  function endMovement() {
    if (type === "frontal") {
      const xDelay = mousePositionX - mouseStartPositionX;
      if (xDelay > 50) {
        setClassName("like");
      } else if (xDelay < -50) {
        setClassName("dislike");
      } else {
        setClassName("neutral");
      }
      setIsAnimating(false);
    }
  }

  const onAnimationEnd = () => {
    if (className !== "neutral") {
      applyChange(className);
    }
    setClassName("");
    setMousePositionX(0);
    setMouseStartPositionX(0);
  };

  return (
    <div
      ref={cardRef}
      className={className}
      style={{ position: "relative" }}
      onTouchMove={(e) => {
        move(e);
      }}
      onTouchStart={(e) => {
        startMovement(e);
      }}
      onTouchEnd={endMovement}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  );
}

type ComponentProps = {
  type: "frontal" | "back";
  children: ReactElement;
  applyChange: () => {};
};
