import { useNavigate } from "react-router-dom";
import Lewis from "../../assets/drivers/hamilton.avif";
import George from "../../assets/drivers/russell.avif";

export function MercedesDrivers() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="text-center left-6 bottom-6 border overflow-hidden relative hover:bg-black hover:text-white w-64 md:w-96">
        <div className="h-[500px] overflow-hidden">
          <img
            src={Lewis}
            alt="Lewis Hamilton"
            className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
            onClick={() => navigate("/drivers/lewis-hamilton")}
          />
        </div>
        <div className="mt-10">
          <p className="text-5xl font-semibold font-mono">44</p>
          <p className="text-xl font-bold">Lewis Hamilton</p>
          <p className="text-md mb-10">Mercedes</p>
        </div>
      </div>
      <div className="text-center left-6 bottom-6 border overflow-hidden relative hover:bg-black hover:text-white w-64 md:w-96">
        <div className="h-[500px] overflow-hidden">
          <img
            src={George}
            alt="George Russell"
            className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
            onClick={() => navigate("/drivers/george-russell")}
          />
        </div>
        <div className="mt-10">
          <p className="text-5xl font-semibold font-mono">63</p>
          <p className="text-xl font-bold">George Russell</p>
          <p className="text-md mb-10">Mercedes</p>
        </div>
      </div>
    </div>
  );
}
