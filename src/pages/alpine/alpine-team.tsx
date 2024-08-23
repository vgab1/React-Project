import Alpine from "../../assets/teams/alpine.avif";

export function AlpineTeam() {
  return (
    <div>
      <img src={Alpine} alt="Alpine Logo" className="w-60 mb-4" />
      <div className="grid grid-cols-2 gap-4 text-lg">
        <p className="font-bold">Full Team Name:</p>
        <p>BWT Alpine F1 Team</p>
        <p className="font-bold">Base:</p>
        <p>Enstone, United Kingdom</p>
        <p className="font-bold">Team Chief:</p>
        <p>Oliver Oakes</p>
        <p className="font-bold">Technical Chief:</p>
        <p>David Sanchez</p>
        <p className="font-bold">Chassis:</p>
        <p>A524</p>
        <p className="font-bold">Power Unit:</p>
        <p>Renault</p>
        <p className="font-bold">First Team Entry:</p>
        <p>1986</p>
        <p className="font-bold">World Championships:</p>
        <p>2</p>
        <p className="font-bold">Highest Race Finish:</p>
        <p>1 (x21)</p>
        <p className="font-bold">Pole Positions:</p>
        <p>20</p>
        <p className="font-bold">Fastest Laps:</p>
        <p>15</p>
      </div>
    </div>
  );
}
