import Car from "../../assets/cars/rb-car.avif";

export function RbProfile() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">In profile</h2>
      <p className="text-md text-gray-700 mb-4 leading-10">
        Established in 2006 as a squad in which young drivers from Red Bull’s
        prodigious talent pool could cut their F1 teeth, RB – originally named
        Toro Rosso and then AlphaTauri – were formed from the ashes of the
        plucky Minardi team. Sebastian Vettel gave validity to the approach
        almost immediately, delivering a fairy-tale win in 2008, before going on
        to enjoy world championship success with parent team Red Bull Racing.
        Today the ethos of nurturing talent still holds true, though the Italian
        squad are no longer simply a ‘B team’ but a constructor in their own
        right...
      </p>
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold mb-4">RB Car</h3>
        <img src={Car} alt="McLaren Car" className="w-full max-w-screen-lg" />
      </div>
    </div>
  );
}
