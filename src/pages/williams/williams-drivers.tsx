import { useNavigate } from "react-router-dom";
import Alexander from "../../assets/drivers/albon.avif";
import Franco from "../../assets/drivers/colapinto.avif";

export function WilliamsDrivers() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="text-center left-[90px] bottom-6 border overflow-hidden relative hover:bg-black hover:text-white w-64 md:w-96">
        <div className="h-[500px] overflow-hidden">
          <img
            src={Alexander}
            alt="Alexander Albon"
            className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
            onClick={() => navigate("/drivers/alexander-albon")}
          />
        </div>
        <div className="mt-10">
          <p className="text-5xl font-semibold font-mono">23</p>
          <p className="text-xl font-bold">Alexander Albon</p>
          <p className="text-md mb-10">Williams</p>
        </div>
      </div>
      <div className="text-center left-[90px] bottom-6 border overflow-hidden relative hover:bg-black hover:text-white w-64 md:w-96">
        <div className="h-[500px] overflow-hidden">
          <img
            src={Franco}
            alt="Franco Colapinto"
            className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
            onClick={() => navigate("/drivers/franco-colapinto")}
          />
        </div>
        <div className="mt-10">
          <p className="text-5xl font-semibold font-mono">43</p>
          <p className="text-xl font-bold">Franco Colapinto</p>
          <p className="text-md mb-10">Williams</p>
        </div>
      </div>
    </div>
  );
}
