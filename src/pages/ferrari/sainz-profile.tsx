import Carlos from "../../assets/drivers/sainz.avif";
import CarlosHelmet from "../../assets/helmets/sainz-helmet.avif";
import SpainFlag from "../../assets/country/spain-flag.avif";
import { Header } from "../../components/header";

export function CarlosSainzPage() {
  return (
    <div>
      <Header />

      <main className="bg-white max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:w-1/2">
            <div className="w-full h-96 overflow-hidden">
              <img
                src={Carlos}
                alt="Carlos Sainz"
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <p className="text-zinc-400 text-5xl font-bold font-mono">55</p>
              <img
                src={SpainFlag}
                alt="Spain Flag"
                className="w-14 border border-gray-400 rounded-md"
              />
            </div>
            <h1 className="text-5xl font-bold mt-2">Carlos Sainz</h1>
          </div>
          <div className="flex flex-col md:w-1/2">
            <img src={CarlosHelmet} alt="Carlos Helmet" className="w-60 p-5" />
            <div className="mt-4 grid grid-cols-2 gap-4 text-lg">
              <p className="font-bold">Team:</p>
              <p>Ferrari</p>
              <p className="font-bold">Country:</p>
              <p>Spain</p>
              <p className="font-bold">Podiums:</p>
              <p>23</p>
              <p className="font-bold">Points:</p>
              <p>1144.5</p>
              <p className="font-bold">Grands Prix entered:</p>
              <p>198</p>
              <p className="font-bold">World Championships</p>
              <p>0</p>
              <p className="font-bold">Highest race finish:</p>
              <p>1 (x3)</p>
              <p className="font-bold">Highest grid position:</p>
              <p>1</p>
              <p className="font-bold">Date of birth:</p>
              <p>01/09/1994</p>
              <p className="font-bold">Place of birth:</p>
              <p>Madrid, Spain</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-10">
          <h2 className="text-3xl font-bold">Biography</h2>
          <p className="mt-4 text-lg leading-10">
            He’s the matador from Madrid racing royalty. After entering F1’s
            Bull Ring paired alongside Max Verstappen at Toro Rosso in 2015,
            Sainz quickly showed his fighting spirit. A tenacious racer, he puts
            the car on the edge as he hustles his way through the pack. No
            wonder Sainz has earned the nickname Chilli. But the Spaniard is
            intelligent as well as instinctive, thinking his way through a race
            and into the points. This calm temperament follows him off track
            where he remains unfazed by the pressures of forging a Grand Prix
            career with a famous name. Sainz is the son of double World Rally
            champion, also his namesake, and has brought some of Dad’s driving
            skills to the F1 circuit – junior loves a delicious dose of drift
            for one. After following in his famous father’s tyre tracks, Sainz
            has had big racing boots to fill – first at McLaren where he
            replaced his childhood hero Fernando Alonso, and now at Ferrari, in
            the seat formerly owned by Sebastian Vettel. It is never easy living
            in the shadow of sporting giants, but Sainz has shown the drive and
            disposition to deal with it - he has scored a Grand Prix victory in
            both his Scuderia seasons to date. Vamos!
          </p>
        </div>
      </main>
    </div>
  );
}
