import JobInterface from "../interfaces/Job";

const Job = (job: JobInterface) => {
  const { roleName, startDate, endDate, company, description, tecnologies } =
    job;

  const formatDates = (startDate: string, endDate?: string) => {
    return `${new Date(startDate).getFullYear()} - ${
      endDate ? new Date(endDate).getFullYear() : "ACTUAL"
    }`;
  };
  return (
    <div className="grid grid-cols-[20px_auto] gap-x-3">
      <div className="m-2 h-2 w-2 rounded-full bg-dark-text"></div>
      <div className="grid grid-cols-1 gap-y-1">
        <div className="flex">
          <h1 className="pr-2 text-lg font-normal uppercase text-dark-text">
            {roleName}
          </h1>
          <h6 className="text-base font-light text-light-text">
            {formatDates(startDate, endDate)}
          </h6>
        </div>
        <h6 className="text-base font-light text-light-text">{company.name}</h6>
        <p className="text-sm font-light text-medium-text">{description}</p>
        {tecnologies && (
          <p className="text-sm font-medium text-medium-text">
            {tecnologies.join(", ")}
          </p>
        )}
      </div>
    </div>
  );
};

export default Job;

const styles = {};
