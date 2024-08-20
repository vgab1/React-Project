import { useNavigate } from "react-router-dom";
import Charles from "../../assets/drivers/leclerc.avif";
import Carlos from "../../assets/drivers/sainz.avif";

export function FerrariDrivers() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col md:flex-row ">
        <div className="text-center left-[90px] bottom-6 border overflow-hidden relative hover:bg-black hover:text-white w-64 md:w-96">
          <div className="h-[500px] overflow-hidden">
            <img
              src={Charles}
              alt="Charles Leclerc"
              className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
              onClick={() => navigate("/drivers/charles-leclerc")}
            />
          </div>
          <div className="mt-10">
            <p className="text-5xl font-semibold font-mono">16</p>
            <p className="text-xl font-bold">Charles Leclerc</p>
            <p className="text-md mb-10">Ferrari</p>
          </div>
        </div>
        <div className="text-center left-[90px] bottom-6 border overflow-hidden relative hover:bg-black hover:text-white w-64 md:w-96">
          <div className="h-[500px] overflow-hidden">
            <img
              src={Carlos}
              alt="Carlos Sainz"
              className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
              onClick={() => navigate("/drivers/carlos-sainz")}
            />
          </div>
          <div className="mt-10">
            <p className="text-5xl font-semibold font-mono">55</p>
            <p className="text-xl font-bold">Carlos Sainz</p>
            <p className="text-md mb-10">Ferrari</p>
          </div>
        </div>
      </div>
    </div>
  );
}
