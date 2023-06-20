import Modal from "../common/modal/Modal";
import ReactIcon from "../common/icons/ReactIcon";
import InfoIcon from "../common/icons/InfoIcon";
import classnames from "classnames";
import { useNavigate } from "react-router-dom";
import Code from "../common/code/Code";

const ReactModal = ({ onClose = () => {} }: { onClose?: VoidFunction }) => {
  const navigate = useNavigate();
  const buttons = [
    {
      name: "My Components",
      color: "bg-denim",
      navigate: "/react/my-components",
    },
    { name: "Patterns", color: "bg-jade", navigate: "/react/patterns" },
    { name: "Testing", color: "bg-dodger-blue", navigate: "/react/testing" },
    { name: "Hooks", color: "bg-silver", navigate: "/react/hooks" },
    {
      name: "Project Setup",
      color: "bg-yellow-orange",
      navigate: "/react/project-setup",
    },
    { name: "Styling", color: "bg-denim", navigate: "/react/patterns" },
    {
      name: "Interesting Questions",
      color: "bg-silver",
      navigate: "/react/questions",
    },
  ];
  return (
    <>
      <Modal onClose={onClose}>
        <Modal.Header
          title="React"
          icon={<ReactIcon size={30} />}
        ></Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-y-5">
            <div>
              <p className="font-light text-medium-text">
                Since 2017 React is my passion. During these years I have become
                a subject matter expert.
              </p>
              <p className="font-light text-medium-text">
                Click on any of these sections to know more about.
              </p>
            </div>

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
            <Code>
              <>{`npm i -D react react-dom`}</>
            </Code>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="grid grid-cols-[max-content_auto] items-center gap-x-3">
            <InfoIcon color={"#7675FC"} size={25} />
            <p className="font-light text-black">
              This application have been developed with React
            </p>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReactModal;
