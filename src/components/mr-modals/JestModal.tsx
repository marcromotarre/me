import Modal from "../common/modal/Modal";
import { JestIcon } from "../common/icons";

const JestModal = ({ onClose = () => {} }: { onClose?: VoidFunction }) => {
  return (
    <>
      <Modal onClose={onClose}>
        <Modal.Header title="Jest" icon={<JestIcon size={30} />}></Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-y-5">
            <p className="font-light text-dark-text">
              Jest is a popular JavaScript testing framework developed by
              Facebook. It is widely used for testing JavaScript applications,
              including React components, Node.js applications, and other
              JavaScript codebases. Jest provides a comprehensive and
              feature-rich testing environment that makes it easy to write, run,
              and manage tests.
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default JestModal;
