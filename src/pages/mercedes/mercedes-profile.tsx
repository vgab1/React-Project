import Car from "../../assets/cars/mercedes-car.avif";

export function MercedesProfile() {
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">In profile</h2>
        <p className="text-md text-gray-700 mb-4 leading-10">
          Mercedes’ modern F1 revival started with the creation of a works squad
          for 2010 - the platform for a meteoric rise up the Grand Prix order.
          The team generated huge excitement from the off with the sensational
          return of Michael Schumacher, but headlines soon followed on track:
          three podiums in their debut season, all via Nico Rosberg - who then
          claimed a breakthrough pole/victory double at China in 2012. The
          following season he was paired with Lewis Hamilton, the duo going on
          to stage some epic title battles as the Silver Arrows swept all before
          them to become one of the most dominant forces of the modern F1 era –
          until Red Bull came and stole that crown. Nevertheless, with Hamilton
          now partnered by proven race-winner George Russell, Mercedes remain
          very much one of the teams to beat…
        </p>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-4">Mercedes Car</h3>
          <img src={Car} alt="McLaren Car" className="w-full max-w-screen-lg" />
        </div>
      </div>
    </div>
  );
}
