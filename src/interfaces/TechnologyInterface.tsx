import { NavigateFunction } from "react-router";
import { ModalProps } from "../components/common/modal/Modal";
import React, { ReactElement } from "react";

type TechnologyInterface = {
  name: string;
  icon: string;
  modal: ReactElement;
  click?: ({
    navigate,
  }: {
    navigate?: NavigateFunction;
    setModalProps: any;
  }) => void;
};

export default TechnologyInterface;
