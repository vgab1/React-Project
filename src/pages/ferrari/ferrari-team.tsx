import Ferrari from "../../assets/teams/ferrari-logo.avif";

export function FerrariTeam() {
  return (
    <div>
      <img src={Ferrari} alt="McLaren Logo" className="w-60 mb-4" />
      <div className="grid grid-cols-2 gap-4 text-lg">
        <p className="font-bold">Full Team Name:</p>
        <p>Scuderia Ferrari</p>
        <p className="font-bold">Base:</p>
        <p>Maranello, Italy</p>
        <p className="font-bold">Team Chief:</p>
        <p>Frédéric Vasseur</p>
        <p className="font-bold">Technical Chief:</p>
        <p>Enrico Gualtieri</p>
        <p className="font-bold">Chassis:</p>
        <p>SF-24</p>
        <p className="font-bold">Power Unit:</p>
        <p>Ferrari</p>
        <p className="font-bold">First Team Entry:</p>
        <p>1950</p>
        <p className="font-bold">World Championships:</p>
        <p>16</p>
        <p className="font-bold">Highest Race Finish:</p>
        <p>1 (x246)</p>
        <p className="font-bold">Pole Positions:</p>
        <p>251</p>
        <p className="font-bold">Fastest Laps:</p>
        <p>262</p>
      </div>
    </div>
  );
}
