import Car from "../../assets/cars/aston-martin-car.avif";

export function AstonMartinProfile() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">In profile</h2>
      <p className="text-md text-gray-700 mb-4 leading-10">
        Aston Martin’s original Formula 1 foray – over half a century ago –
        lasted just five races. This time, though, it’s serious. This F1 squad
        are no strangers to success, having won in their original guise of
        Jordan and most recently as Racing Point in 2020. Renowned for their
        ability to punch above their weight, and now with a two-time champion
        leading their driver line-up, Aston Martin are very much a team to
        watch…
      </p>
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold mb-4">Aston Martin Car</h3>
        <img src={Car} alt="McLaren Car" className="w-full max-w-screen-lg" />
      </div>
    </div>
  );
}
