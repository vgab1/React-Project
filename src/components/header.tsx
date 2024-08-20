import F1logo from "../assets/f1_logo.png";
import Alpine from "../assets/alpine.avif";
import Aston from "../assets/aston-martin.avif";
import Ferrari from "../assets/ferrari.jpg";
import Haas from "../assets/haas.png";
import Sauber from "../assets/kick-sauber.avif";
import McLaren from "../assets/mclaren-logo.avif";
import Mercedes from "../assets/mercedes.avif";
import Rb from "../assets/rb.avif";
import Redbull from "../assets/red-bull.avif";
import Williams from "../assets/williams.avif";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="bg-f1-red flex justify-center p-4 cursor-pointer">
        <img src={F1logo} alt="F1 Logo" onClick={() => navigate("/")} />
      </div>

      <div className="flex items-center justify-center gap-8 p-5 flex-wrap">
        <img src={Alpine} alt="Alpine" className="w-24 rounded-md" />
        <img src={Aston} alt="Aston Martin" className="w-24 rounded-md" />
        <img src={Ferrari} alt="Ferrari" className="w-24 rounded-md" />
        <img src={Haas} alt="Haas" className="w-24 rounded-md" />
        <img src={Sauber} alt="Sauber" className="w-24 rounded-md" />
        <img src={McLaren} alt="McLaren" className="w-24 rounded-md" />
        <img src={Mercedes} alt="Mercedes" className="w-24 rounded-md" />
        <img src={Rb} alt="Red Bull" className="w-24 rounded-md" />
        <img src={Redbull} alt="Red Bull" className="w-24 rounded-md" />
        <img src={Williams} alt="Williams" className="w-24 rounded-md" />
      </div>
    </div>
  );
}
