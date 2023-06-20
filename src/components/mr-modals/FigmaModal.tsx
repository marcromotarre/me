import Modal from "../common/modal/Modal";
import InfoIcon from "../common/icons/InfoIcon";
import { useNavigate } from "react-router-dom";
import FigmaIcon from "../common/icons/FigmaIcon";

const FigmaModal = ({ onClose = () => {} }: { onClose?: VoidFunction }) => {
  const navigate = useNavigate();
  const buttons = [
    { name: "Patterns", color: "bg-jade", navigate: "/javascript/patterns" },
    { name: "Styling", color: "bg-denim", navigate: "/javascript/styling" },
    {
      name: "Interesting Questions",
      color: "bg-silver",
      navigate: "/rjavascripteact/questions",
    },
  ];
  return (
    <>
      <Modal onClose={onClose}>
        <Modal.Header
          title="Figma"
          icon={<FigmaIcon size={20} />}
        ></Modal.Header>
        <Modal.Body>
          <div className="flex h-[100%] items-center">
            <p>
              <span className="text-[#FF4D12]">
                Figma is a cloud-based design and prototyping tool used for
              </span>
              <span className="text-[#FF7361]">{`creating user interfaces (UI) and user experience (UX) designs. `}</span>
              <span className="text-[#B659FF]">
                It provides a collaborative platform that enables designers,
                developers,
              </span>
              <span className="text-[#00BCFF]">
                designers, developers, and stakeholders{" "}
              </span>
              <span className="text-[#00CF7F]">
                to work together in real-time on design projects.
              </span>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="grid grid-cols-[max-content_auto] items-center gap-x-3">
            <InfoIcon color={"#7675FC"} size={25} />
            <p className="font-light text-black">
              <span className="text-[#FF4D12]">{`I've `}</span>
              <span className="text-[#FF7361]">{`designed `}</span>
              <span className="text-[#B659FF]">{`this`}</span>
              <span className="text-[#00BCFF]">{`application `} </span>
              <span className="text-[#00CF7F]">{`with `} </span>
              <span className="text-[#FF4D12]">F</span>
              <span className="text-[#FF7361]">i</span>
              <span className="text-[#B659FF]">g</span>
              <span className="text-[#00BCFF]">m</span>
              <span className="text-[#00CF7F]">a</span>
            </p>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FigmaModal;
