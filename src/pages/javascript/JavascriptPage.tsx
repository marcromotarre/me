import { useNavigate } from "react-router-dom";
import Button from "../../components/common/buttons/Button";

const JavascriptPage = () => {
  const sections = [
    { name: "basics", path: "/javascript/basics" },
    { name: "arrays", path: "/javascript/arrays" },
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

export default JavascriptPage;
