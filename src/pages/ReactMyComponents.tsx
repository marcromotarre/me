import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Title from "../components/common/Title";
import ReactIcon from "../components/common/icons/ReactIcon";
import ComponentsData from "../data/ComponentsData";
import classnames from "classnames";
const ReactMyComponents = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 gap-y-4 p-8">
      <Title icon={<ReactIcon size={30} />} title="React My Components" />
      <p className="font-light">
        Here you have a list of components developed by me.You can click on them
        to know more information such as the implementation code or some
        examples of them.
      </p>
      <div className="flex flex-wrap justify-start">
        {ComponentsData.map((componentData, index) => (
          <button
            onClick={() => {
              navigate(componentData.url);
            }}
            key={index}
            className={classnames(
              componentData.backgoundColor,
              "m-2",
              "rounded-md",
              "p-3"
            )}
          >
            <p className={`w-max font-light text-white`}>
              {componentData.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReactMyComponents;
