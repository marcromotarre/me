import { useLocation, useNavigate } from "react-router-dom";
import pages from "../../../data/LateralMenu";

const PageButton = ({
  page,
  level = 0,
  pathname,
}: {
  page: Page;
  level?: number;
  pathname: string;
}) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate(page.path);
        }}
        className={`text-left ${pathname == page.path ? "font-bold" : ""}`}
        style={{ marginLeft: `${20 * level}px` }}
      >
        {page.name}
      </button>
      {page.children &&
        page.children.map((subpage: Page, index) => (
          <PageButton
            key={`${page.name}_${page.path}_${index}`}
            page={subpage}
            level={level + 1}
            pathname={pathname}
          />
        ))}
    </>
  );
};

const LateralMenu = () => {
  const location = useLocation();
  return (
    <div className="grid grid-cols-1 justify-start gap-y-4">
      {pages.map((page: Page) => (
        <PageButton key={page.path} page={page} pathname={location.pathname} />
      ))}
    </div>
  );
};

export default LateralMenu;

type Page = {
  name: string;
  path: string;
  children?: Array<Page>;
};
