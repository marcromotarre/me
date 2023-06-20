import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import LateralMenu from "../../components/common/lateral-menu/LateralMenu";
import Title from "../../components/common/Title";
import { ReactIcon } from "../../components/common/icons";

const SECTIONS = {
  "/react/my-components": (
    <Title icon={<ReactIcon size={30} />} title="React My Components" />
  ),
  "/react/hooks": <Title icon={<ReactIcon size={30} />} title="React Hooks" />,
};

const InformationLayout = () => {
  const location = useLocation();
  const sectionId = Object.keys(SECTIONS).find((sectionId) =>
    location.pathname.startsWith(sectionId)
  );
  console.log(location.pathname, sectionId);
  return (
    <div className="flex h-[100vh] flex-col">
      <div className="h-[50px] flex-initial">
        <Header />
      </div>
      <div className="grid h-[calc(100%_-_50px)] sm:grid-cols-[0px_auto] md:grid-cols-[0px_auto] lg:grid-cols-[300px_auto]">
        <div className="h-[100%] overflow-x-hidden overflow-y-scroll p-3 shadow-2xl sm:invisible md:invisible lg:visible">
          <LateralMenu />
        </div>
        <div className="h-[100%] overflow-x-hidden overflow-y-scroll">
          <div className="grid grid-cols-1 gap-y-4 p-8">
            {SECTIONS[sectionId]}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationLayout;
