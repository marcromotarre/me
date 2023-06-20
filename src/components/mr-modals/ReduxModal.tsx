import Modal from "../common/modal/Modal";
import InfoIcon from "../common/icons/InfoIcon";
import ReduxIcon from "../common/icons/ReduxIcon";
import { useNavigate } from "react-router-dom";

const ReduxModal = ({ onClose = () => {} }: { onClose?: VoidFunction }) => {
  const navigate = useNavigate();
  return (
    <>
      <Modal onClose={onClose}>
        <Modal.Header
          title="Redux"
          icon={<ReduxIcon size={30} />}
        ></Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-y-8">
            <div className="grid grid-cols-1 gap-y-2">
              <p className="font-light text-dark-text">
                React Redux is a popular JavaScript library combination used for
                managing the state of React applications.
              </p>
              <p className="font-light text-dark-text">
                By using React Redux, you can seamlessly integrate Redux into
                your React applications. It provides a set of bindings that
                enable React components to easily access and update the data
                stored in the Redux store. This integration simplifies the
                process of managing application state, enhances code
                organization, and facilitates efficient rendering and updates in
                React.
              </p>
              <p className="font-light text-dark-text">
                Redux Toolkit is an official package developed by the Redux team
                to streamline the usage of Redux and make it more
                beginner-friendly. It provides utility functions and
                abstractions that simplify common Redux tasks, such as creating
                actions, reducers, and the overall store setup.
              </p>
            </div>
            <div className="flex w-full justify-center">
              <button
                onClick={() => {
                  navigate("/redux");
                }}
                className="grid w-max grid-cols-[auto_auto] items-center gap-x-3 rounded-md bg-[#764ABB] p-3"
              >
                <ReduxIcon color="white" />
                <p className="text-white">Redux</p>
              </button>
            </div>
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

export default ReduxModal;
