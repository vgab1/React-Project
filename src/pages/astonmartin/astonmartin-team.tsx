import AstonMartin from "../../assets/teams/aston-martin.avif";

export function AstonMartinTeam() {
  return (
    <div>
      <img src={AstonMartin} alt="Aston Martin Logo" className="w-60 mb-10" />
      <div className="grid grid-cols-2 gap-4 text-lg">
        <p className="font-bold">Full Team Name:</p>
        <p>Aston Martin Aramco F1 Team</p>
        <p className="font-bold">Base:</p>
        <p>Silverstone, United Kingdom</p>
        <p className="font-bold">Team Chief:</p>
        <p>Mike Krack</p>
        <p className="font-bold">Technical Chief:</p>
        <p>Dan Fallows</p>
        <p className="font-bold">Chassis:</p>
        <p>AMR24</p>
        <p className="font-bold">Power Unit:</p>
        <p>Mercedes</p>
        <p className="font-bold">First Team Entry:</p>
        <p>2018</p>
        <p className="font-bold">World Championships:</p>
        <p>0</p>
        <p className="font-bold">Highest Race Finish:</p>
        <p>1 (x1)</p>
        <p className="font-bold">Pole Positions:</p>
        <p>1</p>
        <p className="font-bold">Fastest Laps:</p>
        <p>3</p>
      </div>
    </div>
  );
}
