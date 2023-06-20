import SkillsData from "../../data/SkillsData";
import SkillInterface from "../../interfaces/SkillInterface";
import Skill from "../Skill";

const Skills = () => {
  return (
    <div>
      {" "}
      <div className="flex w-full items-center justify-around p-4">
        {SkillsData.map((skill: SkillInterface, index: number) => (
          <Skill key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
