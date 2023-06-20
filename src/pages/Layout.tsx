import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LateralMenu from "../components/common/lateral-menu/LateralMenu";

const InformationLayout = () => {
  return (
    <div className="flex h-[100vh] flex-col">
      <div className="h-[100px] flex-initial">
        <Header />
      </div>
      <div className="grid h-[calc(100%_-_100px)] sm:grid-cols-[0px_auto] md:grid-cols-[0px_auto] lg:grid-cols-[300px_auto]">
        <div className="h-[100%] overflow-x-hidden overflow-y-scroll p-3 shadow-2xl sm:invisible md:invisible lg:visible">
          <LateralMenu />
        </div>
        <div className="h-[100%] overflow-x-hidden overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default InformationLayout;
