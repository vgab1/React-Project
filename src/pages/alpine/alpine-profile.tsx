import Car from "../../assets/cars/alpine-car.avif";

export function AlpineProfile() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">In profile</h2>
      <p className="text-md text-gray-700 mb-4 leading-10">
        Alpine may be a relatively new name to Formula 1, but Renault’s famous
        sportscar arm has plenty of motorsport heritage. The 2021 rebrand of the
        team marked the next step in Renault’s F1 revival, begun in 2016 with
        the takeover of the then-Lotus squad. Already race winners in their new
        guise, regular podiums and a tilt at the title must be their next
        target…
      </p>
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold mb-4">Alpine Car</h3>
        <img src={Car} alt="McLaren Car" className="w-full max-w-screen-lg" />
      </div>
    </div>
  );
}
