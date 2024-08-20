import { useNavigate } from "react-router-dom";
import Lando from "../assets/norris.avif";
import Oscar from "../assets/piastri.avif";

export function Drivers() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col md:flex-row ">
        <div className="text-center left-6 bottom-6 border overflow-hidden relative hover:bg-black hover:text-white w-64 md:w-96">
          <div className="h-[500px] overflow-hidden">
            <img
              src={Lando}
              alt="Lando Norris"
              className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
              onClick={() => navigate("/drivers/lando-norris")}
            />
          </div>
          <div className="mt-10">
            <p className="text-5xl font-semibold font-mono">4</p>
            <p className="text-xl font-bold">Lando Norris</p>
            <p className="text-md mb-10">McLaren</p>
          </div>
        </div>
        <div className="text-center left-6 bottom-6 border overflow-hidden relative hover:bg-black hover:text-white w-64 md:w-96">
          <div className="h-[500px] overflow-hidden">
            <img
              src={Oscar}
              alt="Oscar Piastri"
              className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
              onClick={() => navigate("/drivers/oscar-piastri")}
            />
          </div>
          <div className="mt-10">
            <p className="text-5xl font-semibold font-mono">81</p>
            <p className="text-xl font-bold">Oscar Piastri</p>
            <p className="text-md mb-10">McLaren</p>
          </div>
        </div>
      </div>
    </div>
  );
}
