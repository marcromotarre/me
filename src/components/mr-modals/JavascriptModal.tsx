import Modal from "../common/modal/Modal";
import ReactIcon from "../common/icons/ReactIcon";
import InfoIcon from "../common/icons/InfoIcon";
import classnames from "classnames";
import { useNavigate } from "react-router-dom";
import Code from "../common/code/Code";
import JavascriptIcon from "../common/icons/JavascriptIcon";

const JavascriptModal = ({
  onClose = () => {},
}: {
  onClose?: VoidFunction;
}) => {
  const navigate = useNavigate();
  const buttons = [
    { name: "Patterns", color: "bg-jade", navigate: "/javascript/patterns" },
    { name: "Styling", color: "bg-denim", navigate: "/javascript/styling" },
    {
      name: "Interesting Questions",
      color: "bg-silver",
      navigate: "/javascripteact/questions",
    },
    {
      name: "Icons",
      color: "bg-dodger-blue",
      navigate: "/javascripteact/icons",
    },
  ];
  return (
    <>
      <Modal onClose={onClose}>
        <Modal.Header
          title="Javascript"
          icon={<JavascriptIcon size={30} />}
        ></Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-y-5">
            <p className="font-light text-black">
              JavaScript is a high-level programming language primarily used for
              creating interactive and dynamic web content. It is one of the
              core technologies of the World Wide Web and is supported by all
              modern web browsers.
            </p>
            <p className="font-light text-black">
              JavaScript is a versatile language that allows developers to build
              a wide range of applications, including web and mobile
              applications, server-side development, game development, and more.
              It provides the ability to add interactivity and responsiveness to
              web pages by manipulating the Document Object Model (DOM), which
              represents the structure and content of a web page.
            </p>
            <p className="font-light text-black">
              JavaScript is an interpreted language, meaning that it doesn't
              require explicit compilation before execution. It is executed
              directly by the web browser or a JavaScript engine in other
              environments.
            </p>
            <div className="flex flex-wrap justify-start">
              {buttons.map((button, index) => (
                <button
                  onClick={() => {
                    navigate(button.navigate);
                  }}
                  key={index}
                  className={classnames(
                    button.color,
                    "m-2",
                    "rounded-md",
                    "p-3"
                  )}
                >
                  <p className={`w-max font-light text-white`}>{button.name}</p>
                </button>
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default JavascriptModal;
