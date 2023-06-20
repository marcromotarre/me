import { Company } from "./Company";

type JobInterface = {
  roleName: string;
  description: string;
  company: Company;
  startDate: string;
  endDate?: string;
  tecnologies?: Array<string>;
  hashtags?: Array<string>;
};

export default JobInterface;
