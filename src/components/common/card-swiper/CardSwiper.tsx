import { ReactElement, cloneElement, useEffect, useState } from "react";
import Typography from "../typography/Typography";
import Card from "./Card";
import React from "../../../data/table-of-contents/sections/React";

export default function CardSwipper({ cardComponent, fetch }: ComponentProps) {
  const [next, setNext] = useState(null);
  const [elements, setElements] = useState([]);
  const [elementsToShow, setElementsToShow] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const a = async () => {
      if (elements.length < 2) {
        const refetchData = await refetch();
        setElements([...elements, ...refetchData]);
      }
    };
    a();
  }, [elements]);

  const fetchData = async () => {
    const { data, next } = await fetch();
    setElementsToShow([...data.splice(0, 1), ...data.splice(0, 1)]);
    setNext(next);
    setElements(data);
  };

  const refetch = async () => {
    if (next) {
      const { data, next: nextData } = await fetch(next);
      setNext(nextData);
      return data;
    }
    return [];
  };

  const goToNextCard = async (action) => {
    let copiedElements = [...elements];
    const element = copiedElements.splice(0, 1);
    setElementsToShow([...elementsToShow.splice(1, 1), ...element]);
    setElements(copiedElements);
  };

  return (
    <div
      style={{
        width: "fit-content",
        height: "fit-content",
        position: "relative",
      }}
    >
      {elementsToShow[1] && (
        <div style={{ position: "absolute" }}>
          <Card type="back" applyChange={goToNextCard}>
            {cloneElement(cardComponent, elementsToShow[1])}
          </Card>
        </div>
      )}
      {elementsToShow[0] && (
        <div style={{}}>
          <Card type="frontal" applyChange={goToNextCard}>
            {cloneElement(cardComponent, elementsToShow[0])}
          </Card>
        </div>
      )}
    </div>
  );
}

type ComponentProps = {
  cardComponent: ReactElement;
  fetch: () => {};
};
