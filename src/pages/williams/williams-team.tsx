import Williams from "../../assets/teams/williams.avif";

export function WilliamsTeam() {
  return (
    <div>
      <img src={Williams} alt="Williams Logo" className="w-60 mb-4" />
      <div className="grid grid-cols-2 gap-4 text-lg">
        <p className="font-bold">Full Team Name:</p>
        <p>Williams Racing</p>
        <p className="font-bold">Base:</p>
        <p>Grove, United Kingdom</p>
        <p className="font-bold">Team Chief:</p>
        <p>James Vowles</p>
        <p className="font-bold">Technical Chief:</p>
        <p>Pat Fry</p>
        <p className="font-bold">Chassis:</p>
        <p>FW46</p>
        <p className="font-bold">Power Unit:</p>
        <p>Mercedes</p>
        <p className="font-bold">First Team Entry:</p>
        <p>1978</p>
        <p className="font-bold">World Championships:</p>
        <p>9</p>
        <p className="font-bold">Highest Race Finish:</p>
        <p>1 (x114)</p>
        <p className="font-bold">Pole Positions:</p>
        <p>128</p>
        <p className="font-bold">Fastest Laps:</p>
        <p>133</p>
      </div>
    </div>
  );
}
