import { useNavigate } from "react-router-dom";
import Pierre from "../../assets/drivers/gasly.avif";
import Esteban from "../../assets/drivers/ocon.avif";

export function AlpineDrivers() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="text-center left-14 bottom-6 border overflow-hidden relative hover:bg-black hover:text-white w-64 md:w-96">
        <div className="h-[500px] overflow-hidden">
          <img
            src={Pierre}
            alt="Pierre Gasly"
            className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
            onClick={() => navigate("/drivers/pierre-gasly")}
          />
        </div>
        <div className="mt-10">
          <p className="text-5xl font-semibold font-mono">10</p>
          <p className="text-xl font-bold">Pierre Gasly</p>
          <p className="text-md mb-10">Alpine</p>
        </div>
      </div>
      <div className="text-center left-14 bottom-6 border overflow-hidden relative hover:bg-black hover:text-white w-64 md:w-96">
        <div className="h-[500px] overflow-hidden">
          <img
            src={Esteban}
            alt="Esteban Ocon"
            className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
            onClick={() => navigate("/drivers/esteban-ocon")}
          />
        </div>
        <div className="mt-10">
          <p className="text-5xl font-semibold font-mono">31</p>
          <p className="text-xl font-bold">Esteban Ocon</p>
          <p className="text-md mb-10">Alpine</p>
        </div>
      </div>
    </div>
  );
}
