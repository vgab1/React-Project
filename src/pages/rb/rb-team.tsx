import RB from "../../assets/teams/rb.avif";

export function RbTeam() {
  return (
    <div>
      <img src={RB} alt="McLaren Logo" className="w-60 mb-4" />
      <div className="grid grid-cols-2 gap-4 text-lg">
        <p className="font-bold">Full Team Name:</p>
        <p>Visa Cash App RB Formula One Team</p>
        <p className="font-bold">Base:</p>
        <p>Faenza, Italy</p>
        <p className="font-bold">Team Chief:</p>
        <p>Laurent Mekies</p>
        <p className="font-bold">Technical Chief:</p>
        <p>Jody Egginton</p>
        <p className="font-bold">Chassis:</p>
        <p>VCARB 01</p>
        <p className="font-bold">Power Unit:</p>
        <p>Honda RBPT</p>
        <p className="font-bold">First Team Entry:</p>
        <p>1985</p>
        <p className="font-bold">World Championships:</p>
        <p>0</p>
        <p className="font-bold">Highest Race Finish:</p>
        <p>1 (x2)</p>
        <p className="font-bold">Pole Positions:</p>
        <p>1</p>
        <p className="font-bold">Fastest Laps:</p>
        <p>3</p>
      </div>
    </div>
  );
}
