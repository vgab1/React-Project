import Sauber from "../../assets/teams/kick-sauber.avif";

export function SauberTeam() {
  return (
    <div>
      <img src={Sauber} alt="Sauber Logo" className="w-60 mb-4" />
      <div className="grid grid-cols-2 gap-4 text-lg">
        <p className="font-bold">Full Team Name:</p>
        <p>Stake F1 Team Kick Sauber</p>
        <p className="font-bold">Base:</p>
        <p>Hinwil, Switzerland</p>
        <p className="font-bold">Team Chief:</p>
        <p>Alessandro Alunni Bravi</p>
        <p className="font-bold">Technical Chief:</p>
        <p>James Key</p>
        <p className="font-bold">Chassis:</p>
        <p>C44</p>
        <p className="font-bold">Power Unit:</p>
        <p>Ferrari</p>
        <p className="font-bold">First Team Entry:</p>
        <p>1993</p>
        <p className="font-bold">World Championships:</p>
        <p>0</p>
        <p className="font-bold">Highest Race Finish:</p>
        <p>1 (x1)</p>
        <p className="font-bold">Pole Positions:</p>
        <p>1</p>
        <p className="font-bold">Fastest Laps:</p>
        <p>7</p>
      </div>
    </div>
  );
}
