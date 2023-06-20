import { useNavigate } from "react-router";
import TechnologyInterface from "../interfaces/TechnologyInterface";
import { cloneElement, useState } from "react";
import Modal, { ModalProps } from "./common/modal/Modal";
import ReactModal from "./mr-modals/ReactModal";

const Technology = (technology: TechnologyInterface) => {
  const { name, icon, click, modal } = technology;
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const onCloseModal = () => setShowModal(false);

  return (
    <div className="grid grid-cols-1 justify-center justify-items-center gap-y-2 align-middle">
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        <img className="h-14" src={icon} alt="some file" />
      </button>
      <p className="text-xs capitalize text-light-text">{name}</p>
      {showModal && cloneElement(modal, { onClose: onCloseModal })}
    </div>
  );
};

export default Technology;
