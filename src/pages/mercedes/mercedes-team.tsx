import Mercedes from "../../assets/teams/mercedes.avif";

export function MercedesTeam() {
  return (
    <div>
      <img src={Mercedes} alt="Mercedes Logo" className="w-60 mb-4" />
      <div className="grid grid-cols-2 gap-4 text-lg">
        <p className="font-bold">Full Team Name:</p>
        <p>Mercedes-AMG PETRONAS F1 Team</p>
        <p className="font-bold">Base:</p>
        <p>Brackley, United Kingdom</p>
        <p className="font-bold">Team Chief:</p>
        <p>Toto Wolff</p>
        <p className="font-bold">Technical Chief:</p>
        <p>James Allison</p>
        <p className="font-bold">Chassis:</p>
        <p>W15</p>
        <p className="font-bold">Power Unit:</p>
        <p>Mercedes</p>
        <p className="font-bold">First Team Entry:</p>
        <p>1970</p>
        <p className="font-bold">World Championships:</p>
        <p>8</p>
        <p className="font-bold">Highest Race Finish:</p>
        <p>1 (x119)</p>
        <p className="font-bold">Pole Positions:</p>
        <p>131</p>
        <p className="font-bold">Fastest Laps:</p>
        <p>100</p>
      </div>
    </div>
  );
}
