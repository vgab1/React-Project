import { useNavigate } from "react-router-dom";
import Yuki from "../../assets/drivers/tsunoda.avif";
import Daniel from "../../assets/drivers/ricciardo.avif";

export function RbDrivers() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="text-center left-6 bottom-6 border overflow-hidden relative hover:bg-black hover:text-white w-64 md:w-96">
        <div className="h-[500px] overflow-hidden">
          <img
            src={Yuki}
            alt="Yuki Tsunoda"
            className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
            onClick={() => navigate("/drivers/yuki-tsunoda")}
          />
        </div>
        <div className="mt-10">
          <p className="text-5xl font-semibold font-mono">22</p>
          <p className="text-xl font-bold">Yuki Tsunoda</p>
          <p className="text-md mb-10">RB</p>
        </div>
      </div>
      <div className="text-center left-6 bottom-6 border overflow-hidden relative hover:bg-black hover:text-white w-64 md:w-96">
        <div className="h-[500px] overflow-hidden">
          <img
            src={Daniel}
            alt="Daniel Ricciardo"
            className="w-full h-full object-cover object-top transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
            onClick={() => navigate("/drivers/daniel-ricciardo")}
          />
        </div>
        <div className="mt-10">
          <p className="text-5xl font-semibold font-mono">3</p>
          <p className="text-xl font-bold">Daniel Ricciardo</p>
          <p className="text-md mb-10">RB</p>
        </div>
      </div>
    </div>
  );
}
