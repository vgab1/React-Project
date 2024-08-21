import RedBull from "../../assets/teams/red-bull.avif";

export function RedBullTeam() {
  return (
    <div>
      <img src={RedBull} alt="McLaren Logo" className="w-60 mb-4" />
      <div className="grid grid-cols-2 gap-4 text-lg">
        <p className="font-bold">Full Team Name:</p>
        <p>Oracle Red Bull Racing</p>
        <p className="font-bold">Base:</p>
        <p>Milton Keynes, United Kingdom</p>
        <p className="font-bold">Team Chief:</p>
        <p>Christian Hornerr</p>
        <p className="font-bold">Technical Chief:</p>
        <p>Pierre Waché</p>
        <p className="font-bold">Chassis:</p>
        <p>RB20</p>
        <p className="font-bold">Power Unit:</p>
        <p>Honda RBPT</p>
        <p className="font-bold">First Team Entry:</p>
        <p>1997</p>
        <p className="font-bold">World Championships:</p>
        <p>6</p>
        <p className="font-bold">Highest Race Finish:</p>
        <p>1 (x120)</p>
        <p className="font-bold">Pole Positions:</p>
        <p>1051</p>
        <p className="font-bold">Fastest Laps:</p>
        <p>98</p>
      </div>
    </div>
  );
}
