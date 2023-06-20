import Modal from "../common/modal/Modal";
import InfoIcon from "../common/icons/InfoIcon";
import { CypressIcon } from "../common/icons";

const CypressModal = ({ onClose = () => {} }: { onClose?: VoidFunction }) => {
  return (
    <>
      <Modal onClose={onClose}>
        <Modal.Header
          title="Cypress"
          icon={<CypressIcon size={30} />}
        ></Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-y-5">
            <p className="font-light text-dark-text">
              React Redux is a popular JavaScript library combination used for
              managing the state of React applications. React is a declarative
              UI library, while Redux is a predictable state container. React
              Redux integrates the two by providing a set of bindings that allow
              React components to easily access and update data stored in the
              Redux store. It simplifies the management of complex application
              states, promotes code organization, and facilitates efficient
              rendering and updates in React applications.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="grid grid-cols-[max-content_auto] items-center gap-x-3">
            <InfoIcon color={"#7675FC"} size={25} />
            <p className="font-light text-black">
              This application have been developed with React Redux & Redux
              Toolkit
            </p>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CypressModal;
