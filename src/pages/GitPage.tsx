import Header from "../components/Header";
import Title from "../components/common/Title";
import GitIcon from "../components/common/icons/GitIcon";

const GitPage = () => {
  return (
    <div className="">
      <Header />
      <div className="grid grid-cols-1 gap-y-4 pt-4">
        <Title icon={<GitIcon />} title="Git" />
      </div>
    </div>
  );
};

export default GitPage;
