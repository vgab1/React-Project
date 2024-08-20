import Car from "../assets/mclaren-car.avif";

export function TeamProfile() {
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">In profile</h2>
        <p className="text-md text-gray-700 mb-4 leading-10">
          Since entering the sport in 1966 under the guidance and restless
          endeavour of eponymous founder Bruce, McLaren’s success has been
          nothing short of breathtaking. Five glittering decades have yielded
          countless victories, pole positions and podiums, not to mention eight
          constructors' championships. What’s more, some of the sport’s greatest
          drivers made their names with the team, including Emerson Fittipaldi,
          Ayrton Senna, Mika Hakkinen and Lewis Hamilton...
        </p>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-4">McLaren Car</h3>
          <img src={Car} alt="McLaren Car" className="w-full max-w-screen-lg" />
        </div>
      </div>
    </div>
  );
}
