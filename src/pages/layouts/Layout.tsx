import { Outlet, useLocation } from "react-router-dom";
import LateralMenu from "../../components/common/lateral-menu/LateralMenu";
import Title from "../../components/common/Title";
import {
  JavascriptIcon,
  PointIcon,
  ReactIcon,
  TypescriptIcon,
} from "../../components/common/icons";
import Breadcrumb from "../../components/common/breadcrumb/Breadcrumb";
import BreadcrumbLink from "../../components/common/breadcrumb/BreadcrumbLink";
import ReactQueryIcon from "../../components/common/icons/mr-icons/ReactQueryIcon";
import TableOfContents from "../../data/table-of-contents/sections/TableOfContents";
import { getLinearList } from "../../utils/menu";

const SECTIONS = {
  "/react/react-query": (
    <Title icon={<ReactQueryIcon size={30} />} title="React Query" />
  ),
  "/react/interesting-questions": (
    <Title icon={<ReactIcon size={30} />} title="React Interesting Questions" />
  ),
  "/react/my-components": (
    <Title icon={<ReactIcon size={30} />} title="React My Components" />
  ),
  "/react/hooks": <Title icon={<ReactIcon size={30} />} title="React Hooks" />,
  "/react/patterns": (
    <Title icon={<ReactIcon size={30} />} title="React Patterns" />
  ),
  "/react": <Title icon={<ReactIcon size={30} />} title="React" />,

  "/javascript/basics/types": (
    <Title
      icon={<JavascriptIcon size={30} />}
      title="Javascript Basics: Types"
    />
  ),
  "/javascript/basics/coercion": (
    <Title
      icon={<JavascriptIcon size={30} />}
      title="Javascript Basics: Coercion"
    />
  ),
  "/javascript/basics/static-typing": (
    <Title
      icon={<JavascriptIcon size={30} />}
      title="Javascript: Static Typing"
    />
  ),
  "/javascript/basics/equality": (
    <Title
      icon={<JavascriptIcon size={30} />}
      title="Javascript Basics: Equality"
    />
  ),
  "/javascript/basics/scope": (
    <Title
      icon={<JavascriptIcon size={30} />}
      title="Javascript Basics: Scope"
    />
  ),
  "/javascript/basics/closure": (
    <Title
      icon={<JavascriptIcon size={30} />}
      title="Javascript Basics: Closure"
    />
  ),
  "/javascript/basics/objects": (
    <Title
      icon={<JavascriptIcon size={30} />}
      title="Javascript Basics: Objects"
    />
  ),
  "/javascript/basics/prototype": (
    <Title
      icon={<JavascriptIcon size={30} />}
      title="Javascript Basics: Prototype"
    />
  ),
  "/javascript/basics": (
    <Title icon={<JavascriptIcon size={30} />} title="Javascript Basics" />
  ),
  "/javascript/arrays": (
    <Title icon={<JavascriptIcon size={30} />} title="Javascript Arrays" />
  ),
  "/javascript": (
    <Title icon={<JavascriptIcon size={30} />} title="Javascript" />
  ),
  "/typescript/arrays": (
    <Title icon={<TypescriptIcon size={30} />} title="Typescript: Arrays" />
  ),
  "/typescript/tuples": (
    <Title icon={<TypescriptIcon size={30} />} title="Typescript: Tuples" />
  ),
  "/typescript/types-and-values": (
    <Title
      icon={<TypescriptIcon size={30} />}
      title="Typescript: Types and Values"
    />
  ),
  "/typescript/generics": (
    <Title icon={<TypescriptIcon size={30} />} title="Typescript: Generics" />
  ),
  "/typescript/typescript-with-react": (
    <Title icon={<TypescriptIcon size={30} />} title="Typescript with React" />
  ),
  "/typescript": (
    <Title icon={<TypescriptIcon size={30} />} title="Typescript" />
  ),
  "/me": <Title title="Me" />,
  "/": <Title title="Default" />,
};

const InformationLayout = () => {
  const location = useLocation();
  const sectionId = Object.keys(SECTIONS).find((sectionId) =>
    location.pathname.startsWith(sectionId)
  );
  const sections = location.pathname.split("/").filter((a) => a !== "");
  sections.map((section, index) => {
    return "/" + sections.filter((_, i) => i <= index).join("/");
  });

  const linearList = getLinearList(TableOfContents);
  const breadcrumbs = sections
    .map((_, index) => {
      return "/" + sections.filter((_, i) => i <= index).join("/");
    })
    .map((section) =>
      linearList.find((linearItem) => linearItem.path === section)
    );
  return (
    <div className="flex h-[100vh] flex-col">
      <div className="grid h-[100%] sm:grid-cols-[0px_auto] md:grid-cols-[0px_auto] lg:grid-cols-[300px_auto]">
        <div className="h-[100%] overflow-x-hidden overflow-y-scroll shadow-2xl sm:invisible md:invisible lg:visible">
          <LateralMenu />
        </div>
        <div className="h-[100%] overflow-x-hidden overflow-y-scroll sm:p-4 md:p-8 lg:p-8">
          <div className="mb-4 flex sm:items-center sm:justify-center md:items-center md:justify-center lg:items-center lg:justify-start">
            {sections.length > 0 && (
              <Breadcrumb
                separator="/"
                style={{
                  color: "black",
                  backgroundColor: "#E7EBF0",
                }}
              >
                {[{ path: "/", icon: <PointIcon /> }, ...breadcrumbs].map(
                  (section, index) => (
                    <BreadcrumbLink
                      key={index}
                      icon={section.icon}
                      href={section.path}
                    >
                      {section.name}
                    </BreadcrumbLink>
                  )
                )}
              </Breadcrumb>
            )}
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
