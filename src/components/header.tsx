import F1logo from "../assets/f1_logo.png";
import Alpine from "../assets/teams/alpine.avif";
import Aston from "../assets/teams/aston-martin.avif";
import Ferrari from "../assets/teams/ferrari.jpg";
import Haas from "../assets/teams/haas.png";
import Sauber from "../assets/teams/kick-sauber.avif";
import McLaren from "../assets/teams/mclaren-logo.avif";
import Mercedes from "../assets/teams/mercedes.avif";
import Rb from "../assets/teams/rb.avif";
import Redbull from "../assets/teams/red-bull.avif";
import Williams from "../assets/teams/williams.avif";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-f1-red flex justify-center p-4 cursor-pointer">
        <img src={F1logo} alt="F1 Logo" onClick={() => navigate("/")} />
      </div>

      <div className="flex items-center justify-center gap-8 p-5 flex-wrap cursor-pointer">
        <img
          src={Alpine}
          onClick={() => navigate("/teams/alpine")}
          alt="Alpine"
          className="w-24 rounded-md"
        />
        <img
          src={Aston}
          onClick={() => navigate("/teams/aston-martin")}
          alt="Aston Martin"
          className="w-24 rounded-md"
        />
        <img
          src={Ferrari}
          onClick={() => navigate("/teams/ferrari")}
          alt="Ferrari"
          className="w-24 rounded-md"
        />
        <img
          src={Haas}
          onClick={() => navigate("/teams/haas")}
          alt="Haas"
          className="w-24 rounded-md"
        />
        <img
          src={Sauber}
          onClick={() => navigate("/teams/kick-sauber")}
          alt="Sauber"
          className="w-24 rounded-md"
        />

        <img
          src={McLaren}
          onClick={() => navigate("/")}
          alt="McLaren"
          className="w-24 rounded-md"
        />
        <img
          src={Mercedes}
          alt="Mercedes"
          onClick={() => navigate("/teams/mercedes")}
          className="w-24 rounded-md"
        />
        <img
          src={Rb}
          onClick={() => navigate("/teams/rb")}
          alt="RB"
          className="w-24 rounded-md"
        />
        <img
          src={Redbull}
          onClick={() => navigate("/teams/red-bull-racing")}
          alt="Red Bull Racing"
          className="w-24 rounded-md"
        />
        <img
          src={Williams}
          onClick={() => navigate("/teams/williams")}
          alt="Williams"
          className="w-24 rounded-md"
        />
      </div>
    </div>
  );
}
