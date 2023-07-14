import { useNavigate } from "react-router-dom";
import ComponentsData from "../data/ComponentsData";
import classnames from "classnames";
const ReactMyComponents = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 gap-y-4 p-8">
      <p className="font-light">
        Here you have a list of components developed by me.You can click on them
        to know more information such as the implementation code or some
        examples of them.
      </p>
    </div>
  );
};

export default ReactMyComponents;
