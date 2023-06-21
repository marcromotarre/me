import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/buttons/Button";
import LateralMenu, { getChildren } from "../../../data/LateralMenu";

const ReactPatternsPage = () => {
  const navigate = useNavigate();

  const patternsSectionChildren = getChildren(["react", "patterns"]);

  return (
    <>
      <p className="font-light">
        In this section I will cover different React Patterns it is so useful to
        understand and practice these patterns to be able to implement them when
        needed. Here you have a list of the differnt Patterns that will be
        covered in this section:
      </p>

      {patternsSectionChildren.map((patternSection, index: number) => (
        <div key={index}>
          <Button onClick={() => navigate(patternSection.path)}>
            {patternSection.name}
          </Button>
        </div>
      ))}
    </>
  );
};

export default ReactPatternsPage;
