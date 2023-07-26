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

  let _isAnimating = false;
  let _mousePositionX = 0;
  let _mouseStartPositionX = 0;

  useEffect(() => {
    if (type === "frontal") {
      document.addEventListener("mousedown", (event) => {
        handleClickOutside(event, isAnimating, setIsAnimating);
      });
      document.addEventListener("mousemove", (event) => {
        handleMove(event, isAnimating);
      });
      document.addEventListener("mouseup", handleUp);
    }
    return function cleanup() {
      if (type === "frontal") {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("mousemove", handleMove);
        document.removeEventListener("mouseup", handleUp);
      }
    };
  }, []);

  useEffect(() => {
    const xDelay = mousePositionX - mouseStartPositionX;
    const deg = xDelay / 10;
    cardRef.current.style.transform = `translateX(${xDelay}px) rotate(${deg}deg)`;
  }, [isAnimating, mouseStartPositionX, mousePositionX]);

  const onAnimationEnd = () => {
    if (className !== "neutral") {
      applyChange(className);
    }
    setClassName("");
    setMousePositionX(0);
    setMouseStartPositionX(0);
  };

  const handleClickOutside = (event) => {
    _isAnimating = true;
    const x = event.pageX;
    setIsAnimating(true);
    setMousePositionX(x);
    setMouseStartPositionX(x);
    _mousePositionX = x;
    _mouseStartPositionX = x;
  };

  const handleMove = (event) => {
    const x = event.pageX;
    if (_isAnimating) {
      _mousePositionX = x;
      setMousePositionX(x);
    }
  };

  const handleUp = (event) => {
    _isAnimating = false;
    const xDelay = _mousePositionX - _mouseStartPositionX;
    if (xDelay > 50) {
      setClassName("like");
    } else if (xDelay < -50) {
      setClassName("dislike");
    } else {
      setClassName("neutral");
    }
    setIsAnimating(false);
  };

  return (
    <div
      ref={cardRef}
      className={className}
      style={{ position: "relative" }}
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
