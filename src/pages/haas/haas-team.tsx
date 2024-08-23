import Haas from "../../assets/teams/haas.png";

export function HaasTeam() {
  return (
    <div>
      <img src={Haas} alt="Haas Logo" className="w-60 mb-14" />
      <div className="grid grid-cols-2 gap-4 text-lg">
        <p className="font-bold">Full Team Name:</p>
        <p>MoneyGram Haas F1 Team</p>
        <p className="font-bold">Base:</p>
        <p>Kannapolis, United States</p>
        <p className="font-bold">Team Chief:</p>
        <p>Ayao Komatsu</p>
        <p className="font-bold">Technical Chief:</p>
        <p>Andrea De Zordo</p>
        <p className="font-bold">Chassis:</p>
        <p>VF-24</p>
        <p className="font-bold">Power Unit:</p>
        <p>Ferrari</p>
        <p className="font-bold">First Team Entry:</p>
        <p>2016</p>
        <p className="font-bold">World Championships:</p>
        <p>0</p>
        <p className="font-bold">Highest Race Finish:</p>
        <p>4 (x1)</p>
        <p className="font-bold">Pole Positions:</p>
        <p>1</p>
        <p className="font-bold">Fastest Laps:</p>
        <p>2</p>
      </div>
    </div>
  );
}
