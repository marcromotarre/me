import me from "../data/MeData";
import PortfolioImage from "../images/portfolio.jpg";

const Me = () => {
  return (
    <div className="flex justify-center bg-main ">
      <div className="grid gap-x-10 p-4 sm:grid-cols-1 md:grid-cols-[200px_auto] lg:grid-cols-[200px_auto]">
        <div className="relative flex items-center justify-center">
          <div className=" relative h-halo-1 w-halo-1 rounded-full border-2"></div>
          <div className=" absolute h-halo-2 w-halo-2 rounded-full border-2"></div>
          <img
            alt="me"
            className=" absolute  h-image-portfolio w-image-portfolio rounded-full"
            src={PortfolioImage}
          ></img>
        </div>
        <div className="grid grid-cols-1 gap-y-3 sm:justify-items-center">
          <div className="flex">
            <h1 className="text-6xl font-bold text-white">{me.name}</h1>
            <h1 className="pl-2 text-6xl font-thin text-white">
              {me.lastName}
            </h1>
          </div>

          <h6 className="text-xl font-thin text-white">{me.role}</h6>
          <div className="h-px w-full bg-white"></div>
          <p className="font-thin text-white sm:text-center">
            {me.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Me;
