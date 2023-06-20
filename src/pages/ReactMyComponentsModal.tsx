import { cloneElement, useState } from "react";
import Header from "../components/Header";
import Title from "../components/common/Title";
import Code from "../components/common/code/Code";
import {
  CypressIcon,
  FigmaIcon,
  GitIcon,
  JavascriptIcon,
  JestIcon,
  NextIcon,
  NodeIcon,
  ReactIcon,
  ReduxIcon,
  TypescriptIcon,
  WebpackIcon,
} from "../components/common/icons";
import ReactModal from "../components/mr-modals/ReactModal";
import GitModal from "../components/mr-modals/GitModal";
import ReduxModal from "../components/mr-modals/ReduxModal";
import JavascriptModal from "../components/mr-modals/JavascriptModal";
import FigmaModal from "../components/mr-modals/FigmaModal";
import TypescriptModal from "../components/mr-modals/TypescriptModal";
import WebpackModal from "../components/mr-modals/WebpackModal";
import JestModal from "../components/mr-modals/JestModal";
import NodeModal from "../components/mr-modals/NodeModal";
import NextModal from "../components/mr-modals/NextModal";
import CypressModal from "../components/mr-modals/CypressModal";

const ReactMyComponentsModal = () => {
  const modals = [
    {
      icon: <ReactIcon color="white" />,
      component: <ReactModal />,
      name: "React Modal",
    },
    {
      icon: <GitIcon color="white" />,
      component: <GitModal />,
      name: "Git Modal",
    },
    {
      icon: <ReduxIcon color="white" />,
      component: <ReduxModal />,
      name: "Redux Modal",
    },
    {
      icon: <JavascriptIcon color="white" />,
      component: <JavascriptModal />,
      name: "Javascript Modal",
    },
    {
      icon: <FigmaIcon color="white" />,
      component: <FigmaModal />,
      name: "Figma Modal",
    },
    {
      icon: <TypescriptIcon color="white" />,
      component: <TypescriptModal />,
      name: "Typescript Modal",
    },
    {
      icon: <WebpackIcon color="white" />,
      component: <WebpackModal />,
      name: "Webpack Modal",
    },
    {
      icon: <JestIcon color="white" />,
      component: <JestModal />,
      name: "Jest Modal",
    },
    {
      icon: <NodeIcon color="white" />,
      component: <NodeModal />,
      name: "Node Modal",
    },
    {
      icon: <NextIcon color="white" />,
      component: <NextModal />,
      name: "Next Modal",
    },
    {
      icon: <CypressIcon color="white" />,
      component: <CypressModal />,
      name: "Cypress Modal",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  return (
    <div className="grid grid-cols-1 gap-y-4 p-8">
      <Title icon={<ReactIcon size={30} />} title="React My Components" />
      <p className="text-xl">Modal</p>

      <p className="font-light">
        I created a general modal to use in all the application.
      </p>
      <p className="font-light">Here you have some cool examples</p>
      <div className="relative h-[50px]">
        <div className="absolute left-[-32px] flex max-w-[100vw] flex-shrink items-center justify-start overflow-x-scroll pl-[32px]">
          {modals.map((modal, index) => (
            <button
              onClick={() => {
                setModalIndex(index);
                setIsModalOpen(true);
              }}
              key={index}
              className="mr-4 flex min-w-fit items-center justify-center rounded-md bg-blue-400 p-3"
            >
              {cloneElement(modal.icon, {})}
              <p className="ml-2 text-white">{modal.name}</p>
            </button>
          ))}
        </div>
      </div>

      {isModalOpen &&
        cloneElement(modals[modalIndex].component, {
          onClose: () => {
            setIsModalOpen(false);
          },
        })}
      <p className="font-light">
        {`As a model can only have one Instance in the whole application I created a unique div`}
      </p>
      <Code>
        <>{`<div id="modal"></div>`}</>
      </Code>
      <p className="font-light">{`The modal component use useRef React Hook in order to ensure that there is only one Instance. Eith the useEffect we append or remove the modal in div with id = "modal"`}</p>
      <Code>
        <>{`
const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
if (!elRef.current) {
  elRef.current = document.createElement("div");
}

useEffect(() => {
  const modalRoot = document.getElementById("modal");
  if (!modalRoot || !elRef.current) {
    return;
  }
  modalRoot.appendChild(elRef.current);
  return () => {
    if (elRef.current) {
      modalRoot.removeChild(elRef.current);
    }
  };
}, []);
`}</>
      </Code>
      <p className="font-light">{`Let's have a look to the modal component`}</p>
      <Code>
        <>{`
const Modal = ({ children, onClose = () => {} }: ModalProps) => {
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }
  const ModalHeaderMemo = React.memo(ModalHeader);
  const ModalBodyMemo = React.memo(ModalBody);
  const ModalFooterMemo = React.memo(ModalFooter);

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot || !elRef.current) {
      return;
    }
    document.body.style.overflow = "hidden";
    modalRoot.appendChild(elRef.current);
    return () => {
      if (elRef.current) {
        document.body.style.overflow = "unset";
        modalRoot.removeChild(elRef.current);
      }
    };
  }, []);

  const header: ReactElement | undefined = children?.find(
    (modalComponent: JSX.Element) =>
      modalComponent.type.name === ModalHeaderMemo.type.name
  );

  const body: ReactElement | undefined = children?.find(
    (modalComponent) => modalComponent.type.name === ModalBodyMemo.type.name
  );

  const footer: ReactElement | undefined = children?.find(
    (modalComponent) => modalComponent.type.name === ModalFooterMemo.type.name
  );

  const onCloseModal = () => {
    onClose();
  };

  return createPortal(
    <div className="z-30">
      <button
        onClick={() => {
          onCloseModal();
        }}
        className="fixed h-screen w-screen bg-black opacity-60"
      ></button>
      <div className="fixed left-1/2 top-1/2 w-[min(600px,95%)] -translate-x-1/2  -translate-y-1/2">
        <div
          className="flex h-[max(fit-content,80vh)] max-h-[80vh] 
       flex-col rounded bg-white"
        >
          {header && React.cloneElement(header, {
              onClose: onCloseModal,
              ...header.props,
            })}
          {body && body}
          {footer && footer}
        </div>
      </div>
    </div>,
    elRef.current
  );
};
`}</>
      </Code>
      <p className="font-light">{`I used React Compound Pattern to ensure that the modal its easy to use. Creating the ModalHeader ModalBody & the Modal Footer`}</p>
      <p className="">{`ModalHeader`}</p>
      <Code>
        <>{`
const ModalHeader = ({
  title,
  onClose,
  icon,
}: {
  title: string;
  onClose?: VoidFunction;
  icon?: ReactElement;
}) => {
  return (
    <div
      id="Modal.Header"
      className="flex w-full items-center justify-between border-b border-gray-600 p-4"
    >
      <Title icon={icon} title={title} />

      <button
        className="group rounded-md p-2 hover:bg-robin-egg-blue"
        onClick={() => {
          if (onClose) onClose();
        }}
      >
        <CloseIcon
          className="fill-robin-egg-blue group-hover:fill-black"
          size={12}
        />
      </button>
    </div>
  );
};
`}</>
      </Code>
      <p className="">{`ModalBody`}</p>
      <Code>
        <>{`
const ModalBody = ({ children }: { children?: ReactElement }) => {
  return (
    <div className="overflow-y-scroll">
      {children ? <div className="p-4">{children}</div> : <div></div>}
    </div>
  );
};
`}</>
      </Code>
      <p className="">{`ModalFooter`}</p>
      <Code>
        <>{`
const ModalFooter = ({ children }: { children?: ReactElement }) => {
  return (
    <div>
      <div className="w-full  border-b border-gray-600"></div>
      <div className="w-full p-4">{children}</div>
    </div>
  );
};
`}</>
      </Code>
      <p className="font-light">{`With this Component pattern now its so easy to use this component and create some modals`}</p>
      <Code>
        <>{`
<Modal onClose={onClose}>
  <Modal.Header title="Git" icon={<GitIcon size={30} />}></Modal.Header>
  <Modal.Body>
    <div className="grid grid-cols-1 gap-y-5">
      <p className="font-light text-dark-text">
        Some Git information
      </p>
      <div className="flex w-full justify-center">
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
`}</>
      </Code>
    </div>
  );
};

export default ReactMyComponentsModal;
