import { useNavigate } from "react-router-dom";
import Valtteri from "../../assets/drivers/bottas.avif";
import Zhou from "../../assets/drivers/zhou.avif";

export function SauberDrivers() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="text-center left-9 bottom-6 border overflow-hidden relative hover:bg-black hover:text-white w-64 md:w-96">
        <div className="h-[500px] overflow-hidden">
          <img
            src={Valtteri}
            alt="Valtteri Bottas"
            className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
            onClick={() => navigate("/drivers/valtteri-bottas")}
          />
        </div>
        <div className="mt-10">
          <p className="text-5xl font-semibold font-mono">77</p>
          <p className="text-xl font-bold">Valtteri Bottas</p>
          <p className="text-md mb-10">Kick Sauber</p>
        </div>
      </div>
      <div className="text-center left-9 bottom-6 border overflow-hidden relative hover:bg-black hover:text-white w-64 md:w-96">
        <div className="h-[500px] overflow-hidden">
          <img
            src={Zhou}
            alt="Zhou Guanyu"
            className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
            onClick={() => navigate("/drivers/zhou-guanyu")}
          />
        </div>
        <div className="mt-10">
          <p className="text-5xl font-semibold font-mono">24</p>
          <p className="text-xl font-bold">Zhou Guanyu</p>
          <p className="text-md mb-10">Kick Sauber</p>
        </div>
      </div>
    </div>
  );
}
