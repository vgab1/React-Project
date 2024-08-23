import Car from "../../assets/cars/williams-car.avif";

export function WilliamsProfile() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">In profile</h2>
      <p className="text-md text-gray-700 mb-4 leading-10">
        Driven on by the brilliance and passion of the late Sir Frank Williams,
        Williams grew from humble beginnings to become a Formula 1 behemoth,
        unrivalled by all except Ferrari and McLaren in terms of enduring
        success. Over the past four decades the team has racked up Grand Prix
        wins and championship glory, and in the process nurtured some of the
        greatest talents in the sport, both in and out the cockpit. And,
        following the Williams family's decision to step aside after the 2020
        sale of the team to Dorilton Capital, a new era has begun...
      </p>
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold mb-4">Williams Car</h3>
        <img src={Car} alt="McLaren Car" className="w-full max-w-screen-lg" />
      </div>
    </div>
  );
}
