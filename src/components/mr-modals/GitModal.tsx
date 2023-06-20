import Modal from "../common/modal/Modal";
import InfoIcon from "../common/icons/InfoIcon";
import GitIcon from "../common/icons/GitIcon";
import Code from "../common/code/Code";
import { useNavigate } from "react-router-dom";

const GitModal = ({ onClose = () => {} }: { onClose?: VoidFunction }) => {
  const navigate = useNavigate();
  return (
    <>
      <Modal onClose={onClose}>
        <Modal.Header title="Git" icon={<GitIcon size={30} />}></Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-y-5">
            <p className="font-light text-dark-text">
              {`Git is a widely used distributed version control system (VCS) that
              helps developers track changes to source code and collaborate on
              software development projects. It was created by Linus Torvalds,
              the creator of Linux, and has since become a standard tool in the
              software development industry.`}
            </p>
            <Code>
              <>{`git clone https://github.com/marcromotarre/complete-intro-to-react-v8.git`}</>
            </Code>
            <div className="flex w-full justify-center">
              <button
                onClick={() => {
                  navigate("/git");
                }}
                className="grid w-max grid-cols-[auto_auto] items-center gap-x-3 rounded-md bg-[#F05033] p-3"
              >
                <GitIcon color="white" />
                <p className="text-white">Git Information</p>
              </button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="grid grid-cols-[max-content_auto] items-center gap-x-3">
            <InfoIcon color={"#7675FC"} size={25} />
            <p className="font-light text-black">
              This application is stored in GitHub and have been created
              branches during the development
            </p>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GitModal;
