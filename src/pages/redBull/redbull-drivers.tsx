import { useNavigate } from "react-router-dom";
import Max from "../../assets/drivers/verstappen.avif"
import Sergio from "../../assets/drivers/perez.avif"

export function RedBullDrivers() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="text-center left-6 bottom-6 border overflow-hidden relative hover:bg-black hover:text-white w-64 md:w-96">
        <div className="h-[500px] overflow-hidden">
          <img
            src={Max}
            alt="Max Verstappen"
            className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
            onClick={() => navigate("/drivers/max-verstappen")}
          />
        </div>
        <div className="mt-10">
          <p className="text-5xl font-semibold font-mono">1</p>
          <p className="text-xl font-bold">Max Verstappen</p>
          <p className="text-md mb-10">Red Bull Racing</p>
        </div>
      </div>
      <div className="text-center left-6 bottom-6 border overflow-hidden relative hover:bg-black hover:text-white w-64 md:w-96">
        <div className="h-[500px] overflow-hidden">
          <img
            src={Sergio}
            alt="Sergio Perez"
            className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
            onClick={() => navigate("/drivers/sergio-perez")}
          />
        </div>
        <div className="mt-10">
          <p className="text-5xl font-semibold font-mono">11</p>
          <p className="text-xl font-bold">Sergio Perez</p>
          <p className="text-md mb-10">Red Bull Racing</p>
        </div>
      </div>
    </div>
  );
}
