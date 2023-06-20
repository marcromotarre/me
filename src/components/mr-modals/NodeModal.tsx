import Modal from "../common/modal/Modal";
import { NodeIcon } from "../common/icons";

const NodeModal = ({ onClose = () => {} }: { onClose?: VoidFunction }) => {
  return (
    <>
      <Modal onClose={onClose}>
        <Modal.Header title="" icon={<NodeIcon size={60} />}></Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-y-5">
            <p className="font-light text-dark-text">
              Node.js is a runtime environment that allows you to run JavaScript
              code outside of a web browser. It is built on the Chrome V8
              JavaScript engine and provides a server-side execution environment
              for JavaScript applications. Node.js enables developers to build
              scalable, high-performance, and networked applications.
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NodeModal;
