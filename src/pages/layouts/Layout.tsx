import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import LateralMenu from "../../components/common/lateral-menu/LateralMenu";
import Title from "../../components/common/Title";
import { JavascriptIcon, ReactIcon } from "../../components/common/icons";
import Breadcrumb from "../../components/common/breadcrumb/Breadcrumb";
import BreadcrumbLink from "../../components/common/breadcrumb/BreadcrumbLink";
import TABLE_OF_CONTENTS_DATA, { getLinearList } from "../../data/LateralMenu";

const SECTIONS = {
  "/react/my-components": (
    <Title icon={<ReactIcon size={30} />} title="React My Components" />
  ),
  "/react/hooks": <Title icon={<ReactIcon size={30} />} title="React Hooks" />,
  "/react/patterns": (
    <Title icon={<ReactIcon size={30} />} title="React Patterns" />
  ),
  "/javascript/arrays": (
    <Title icon={<JavascriptIcon size={30} />} title="Arrays" />
  ),
};

const InformationLayout = () => {
  const location = useLocation();
  const sectionId = Object.keys(SECTIONS).find((sectionId) =>
    location.pathname.startsWith(sectionId)
  );
  const sections = location.pathname.split("/");
  sections.shift();
  sections.map((section, index) => {
    return "/" + sections.filter((_, i) => i <= index).join("/");
  });

  const linearList = getLinearList(TABLE_OF_CONTENTS_DATA);
  const breadcrumbs = sections
    .map((_, index) => {
      return "/" + sections.filter((_, i) => i <= index).join("/");
    })
    .map((section) =>
      linearList.find((linearItem) => linearItem.path === section)
    );
  return (
    <div className="flex h-[100vh] flex-col">
      <div className="h-[50px] flex-initial">
        <Header />
      </div>
      <div className="grid h-[calc(100%_-_50px)] sm:grid-cols-[0px_auto] md:grid-cols-[0px_auto] lg:grid-cols-[300px_auto]">
        <div className="h-[100%] overflow-x-hidden overflow-y-scroll p-3 shadow-2xl sm:invisible md:invisible lg:visible">
          <LateralMenu />
        </div>
        <div className="h-[100%] overflow-x-hidden overflow-y-scroll sm:p-4 md:p-8 lg:p-8">
          <div className="mb-4 flex sm:items-center sm:justify-center md:items-center md:justify-center lg:items-center lg:justify-start">
            <Breadcrumb
              separator="/"
              style={{
                color: "black",
                backgroundColor: "#E7EBF0",
              }}
            >
              {breadcrumbs.map((section, index) => (
                <BreadcrumbLink
                  key={index}
                  icon={section.icon}
                  href={section.path}
                >
                  {section.name}
                </BreadcrumbLink>
              ))}
            </Breadcrumb>
          </div>
          <div className="grid grid-cols-1 gap-y-4">
            {SECTIONS[sectionId]}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationLayout;
