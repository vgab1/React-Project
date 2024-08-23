import { useNavigate } from "react-router-dom";
import Nico from "../../assets/drivers/hulkenberg.avif";
import Kevin from "../../assets/drivers/magnussen.avif";

export function HaasDrivers() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="text-center left-8 bottom-6 border overflow-hidden relative hover:bg-black hover:text-white w-64 md:w-96">
        <div className="h-[500px] overflow-hidden">
          <img
            src={Nico}
            alt="Nico Hulkenberg"
            className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
            onClick={() => navigate("/drivers/nico-hulkenberg")}
          />
        </div>
        <div className="mt-10">
          <p className="text-5xl font-semibold font-mono">27</p>
          <p className="text-xl font-bold">Nico Hulkenberg</p>
          <p className="text-md mb-10">Haas</p>
        </div>
      </div>
      <div className="text-center left-8 bottom-6 border overflow-hidden relative hover:bg-black hover:text-white w-64 md:w-96">
        <div className="h-[500px] overflow-hidden">
          <img
            src={Kevin}
            alt="Kevin Magnussen"
            className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
            onClick={() => navigate("/drivers/kevin-magnussen")}
          />
        </div>
        <div className="mt-10">
          <p className="text-5xl font-semibold font-mono">20</p>
          <p className="text-xl font-bold">Kevin Magnussen</p>
          <p className="text-md mb-10">Haas</p>
        </div>
      </div>
    </div>
  );
}
