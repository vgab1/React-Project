import { useNavigate } from "react-router-dom";
import Fernando from "../../assets/drivers/alonso.avif";
import Lance from "../../assets/drivers/stroll.avif";

export function AstonMartinDrivers() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="text-center left-6 bottom-6 border overflow-hidden relative hover:bg-black hover:text-white w-64 md:w-96">
        <div className="h-[500px] overflow-hidden">
          <img
            src={Fernando}
            alt="Fernando Alonso"
            className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
            onClick={() => navigate("/drivers/fernando-alonso")}
          />
        </div>
        <div className="mt-10">
          <p className="text-5xl font-semibold font-mono">14</p>
          <p className="text-xl font-bold">Fernando Alonso</p>
          <p className="text-md mb-10">Aston Martin</p>
        </div>
      </div>
      <div className="text-center left-6 bottom-6 border overflow-hidden relative hover:bg-black hover:text-white w-64 md:w-96">
        <div className="h-[500px] overflow-hidden">
          <img
            src={Lance}
            alt="Lance Stroll"
            className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
            onClick={() => navigate("/drivers/lance-stroll")}
          />
        </div>
        <div className="mt-10">
          <p className="text-5xl font-semibold font-mono">18</p>
          <p className="text-xl font-bold">Lance Stroll</p>
          <p className="text-md mb-10">Aston Martin</p>
        </div>
      </div>
    </div>
  );
}
