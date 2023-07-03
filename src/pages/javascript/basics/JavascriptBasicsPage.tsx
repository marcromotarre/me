import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/buttons/Button";

const JavascriptBasicsPage = () => {
  const sections = [
    { name: "types", path: "/javascript/basics/types" },
    { name: "coercion", path: "/javascript/basics/coercion" },
    { name: "equality", path: "/javascript/basics/equality" },
    { name: "static-typing", path: "/javascript/basics/static-typing" },
    { name: "scope", path: "/javascript/basics/scope" },
    { name: "closure", path: "/javascript/basics/closure" },
    { name: "objects", path: "/javascript/basics/objects" },
    { name: "prototype", path: "/javascript/basics/prototype" },
  ];

  const navigate = useNavigate();
  return (
    <>
      {sections.map((section) => (
        <Button
          key={section.name}
          onClick={() => {
            navigate(section.path);
          }}
        >
          {section.name}
        </Button>
      ))}
    </>
  );
};

export default JavascriptBasicsPage;
