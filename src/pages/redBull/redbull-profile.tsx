import Car from "../../assets/cars/red-bull-car.avif";

export function RedBullProfile() {
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">In profile</h2>
        <p className="text-md text-gray-700 mb-4 leading-10">
          Red Bull were no strangers to F1 - as sponsors - prior to formally
          entering as a works team in 2004. Nonetheless, the scale of their
          success over the following decade was staggering. After a first podium
          in 2006, the team hit their stride in 2009, claiming six victories and
          second in the constructors' standings. Over the next four seasons they
          were a tour de force, claiming consecutive title doubles between 2010
          and 2013, with Sebastian Vettel emerging as the sport's youngest
          quadruple champion. Now they are recapturing that glory with an
          equally exciting talent – one named Max Verstappen…
        </p>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-4">Red Bull Car</h3>
          <img src={Car} alt="McLaren Car" className="w-full max-w-screen-lg" />
        </div>
      </div>
    </div>
  );
}
