import Modal from "../common/modal/Modal";
import ReactIcon from "../common/icons/ReactIcon";
import InfoIcon from "../common/icons/InfoIcon";
import classnames from "classnames";
import { useNavigate } from "react-router-dom";
import Code from "../common/code/Code";
import JavascriptIcon from "../common/icons/JavascriptIcon";
import { WebpackIcon } from "../common/icons";

const WebpackModal = ({ onClose = () => {} }: { onClose?: VoidFunction }) => {
  const navigate = useNavigate();

  return (
    <>
      <Modal onClose={onClose}>
        <Modal.Header
          title="Webpack"
          icon={<WebpackIcon size={30} />}
        ></Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-y-5">
            <p className="font-light text-black">
              Webpack is a popular module bundler for JavaScript applications.
              It is commonly used in web development to bundle and optimize
              multiple JavaScript files and their dependencies into a single
              file that can be efficiently served to the browser.
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WebpackModal;
