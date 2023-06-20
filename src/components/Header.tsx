import { useNavigate } from "react-router-dom";
import me from "../data/MeData";
import PortfolioImage from "../images/portfolio.jpg";
const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="grid h-full w-full grid-cols-3 items-center bg-main"
      >
        <div className="relative -bottom-[7px] ml-4 flex self-end">
          <h1 className="text-2xl font-bold text-white">{me.name}</h1>
          <h1 className="pl-2 text-2xl font-thin text-white">{me.lastName}</h1>
        </div>
        <div className="justify-self-center">
          <h6 className="text-xl font-thin text-white sm:hidden md:hidden lg:block">{`<${me.role} />`}</h6>
          <h6 className="text-xl font-thin text-white sm:hidden md:block lg:hidden">{`<${me.roleShort} />`}</h6>
        </div>

        <img
          alt="me"
          className=" mr-4 h-10 w-10 justify-self-end rounded-full"
          src={PortfolioImage}
        ></img>
      </button>
    </>
  );
};

export default Header;
