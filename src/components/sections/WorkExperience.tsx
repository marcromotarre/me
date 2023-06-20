import workExperienceData from "../../data/WorkExperienceData";
import JobInterface from "../../interfaces/Job";
import Job from "../Job";

const WorkExperience = () => {
  return (
    <div className="grid grid-cols-1 gap-y-8 p-4">
      {workExperienceData.map((workExperience: JobInterface, index: number) => (
        <Job key={index} {...workExperience} />
      ))}
    </div>
  );
};

export default WorkExperience;
