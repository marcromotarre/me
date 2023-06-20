import Modal from "../common/modal/Modal";
import InfoIcon from "../common/icons/InfoIcon";
import { TypescriptIcon } from "../common/icons";

const TypescriptModal = ({
  onClose = () => {},
}: {
  onClose?: VoidFunction;
}) => {
  return (
    <>
      <Modal onClose={onClose}>
        <Modal.Header
          title="Typescript"
          icon={<TypescriptIcon size={30} />}
        ></Modal.Header>
        <Modal.Body>
          <div className="grid h-[100%] grid-cols-1 gap-y-3">
            <p className="font-light text-black">
              TypeScript is a programming language and a superset of JavaScript
              that adds optional static typing to JavaScript. It aims to enhance
              JavaScript by providing type checking at compile-time, enabling
              developers to catch errors and improve code quality.
            </p>
            <p className="font-light text-black">
              In TypeScript, you can explicitly declare variable types, function
              parameter types, return types, and more. This allows for early
              detection of type-related issues during development, reducing the
              likelihood of runtime errors.
            </p>
            <p className="font-light text-black">
              TypeScript also introduces advanced features such as interfaces,
              classes, modules, and generics, which promote better code
              organization and reusability. It provides tools for creating
              scalable and maintainable JavaScript applications, especially in
              large codebases.
            </p>
            <p className="font-light text-black">
              TypeScript code is transpiled into plain JavaScript, which means
              it can run in any JavaScript runtime environment. It integrates
              well with popular JavaScript frameworks and libraries and has
              gained significant adoption in the web development community.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="grid grid-cols-[max-content_auto] items-center gap-x-3">
            <InfoIcon color={"#7675FC"} size={25} />
            <p className="font-light text-black">
              All this project components are typescript Files and have properly
              .eslint configured
            </p>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TypescriptModal;
