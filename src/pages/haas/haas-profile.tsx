import Car from "../../assets/cars/haas-car.avif";

export function HaasProfile() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">In profile</h2>
      <p className="text-md text-gray-700 mb-4 leading-10">
        The youngest team on the grid, Haas made their highly impressive debut
        in 2016, and in the process became the first all-American-led F1 squad
        in three decades. Founded by industrialist Gene Haas, they are based in
        the United States on the same Kannapolis, North Carolina facility as his
        championship-winning NASCAR Sprint Cup Series team, Stewart-Haas Racing.
        The Ferrari-powered team also have a UK factory in Banbury…
      </p>
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold mb-4">Haas Car</h3>
        <img src={Car} alt="McLaren Car" className="w-full max-w-screen-lg" />
      </div>
    </div>
  );
}
