import McLaren from "../assets/mclaren-logo.avif";

export function TeamInfo() {
  return (
    <div>
      <img src={McLaren} alt="McLaren Logo" className="w-60 mb-4" />
      <div className="grid grid-cols-2 gap-4 text-lg">
        <p className="font-bold">Full Team Name:</p>
        <p>McLaren Formula 1 Team</p>
        <p className="font-bold">Base:</p>
        <p>Woking, United Kingdom</p>
        <p className="font-bold">Team Chief:</p>
        <p>Andrea Stella</p>
        <p className="font-bold">Technical Chief:</p>
        <p>Peter Prodromou / Neil Houldey</p>
        <p className="font-bold">Chassis:</p>
        <p>MCL38</p>
        <p className="font-bold">Power Unit:</p>
        <p>Mercedes</p>
        <p className="font-bold">First Team Entry:</p>
        <p>1966</p>
        <p className="font-bold">World Championships:</p>
        <p>8</p>
        <p className="font-bold">Highest Race Finish:</p>
        <p>1 (x185)</p>
        <p className="font-bold">Pole Positions:</p>
        <p>159</p>
        <p className="font-bold">Fastest Laps:</p>
        <p>167</p>
      </div>
    </div>
  );
}
