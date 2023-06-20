import Modal from "../common/modal/Modal";
import InfoIcon from "../common/icons/InfoIcon";
import { NextIcon } from "../common/icons";

const NextModal = ({ onClose = () => {} }: { onClose?: VoidFunction }) => {
  return (
    <>
      <Modal onClose={onClose}>
        <Modal.Header title="Next" icon={<NextIcon size={30} />}></Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-y-5">
            <p className="font-light text-dark-text">
              Next.js is a popular open-source framework for building React
              applications, specifically focused on server-rendered and
              statically-generated websites. It provides a powerful and
              opinionated set of tools and features that simplify the
              development of modern web applications.
            </p>
            <p className="font-light text-dark-text">
              {`I've developed some AttackIQ PoCs (Proof of Concept) and two personal projects (7meeples & Filmotek)`}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NextModal;
