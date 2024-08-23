import Car from "../../assets/cars/ferrari-car.avif";

export function FerrariProfile() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">In profile</h2>
      <p className="text-md text-gray-700 mb-4 leading-10">
        For many, Ferrari and Formula 1 racing have become inseparable. The only
        team to have competed in every season since the world championship
        began, the Prancing Horse has grown from the humble dream of founder
        Enzo Ferrari to become one of the most iconic and recognised brands in
        the world. Success came quickly through the likes of Alberto Ascari and
        John Surtees, and continued – in amongst leaner times – with Niki Lauda
        in the 1970s and then Michael Schumacher in the 2000s, when Ferrari
        claimed a then unprecedented five consecutive title doubles, securing
        their status as the most successful and decorated team in F1 history...
      </p>
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold mb-4">Ferrari Car</h3>
        <img src={Car} alt="McLaren Car" className="w-full max-w-screen-lg" />
      </div>
    </div>
  );
}
