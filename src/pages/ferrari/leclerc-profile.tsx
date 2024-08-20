import Charles from "../../assets/drivers/leclerc.avif";
import CharlesHelmet from "../../assets/helmets/leclerc-helmet.avif";
import MonacoFlag from "../../assets/country/monaco-flag.avif";
import { Header } from "../../components/header";

export function CharlesLeclercPage() {
  return (
    <div>
      <Header />

      <main className="bg-white max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:w-1/2">
            <div className="w-full h-96 overflow-hidden">
              <img
                src={Charles}
                alt="Charles Leclerc"
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <p className="text-zinc-400 text-5xl font-bold font-mono">16</p>
              <img
                src={MonacoFlag}
                alt="Monaco Flag"
                className="w-14 border border-gray-400 rounded-md"
              />
            </div>
            <h1 className="text-5xl font-bold mt-2">Charles Leclerc</h1>
          </div>
          <div className="flex flex-col md:w-1/2">
            <img
              src={CharlesHelmet}
              alt="Charles Helmet"
              className="w-60 p-5"
            />
            <div className="mt-4 grid grid-cols-2 gap-4 text-lg">
              <p className="font-bold">Team:</p>
              <p>Ferrari</p>
              <p className="font-bold">Country:</p>
              <p>Monaco</p>
              <p className="font-bold">Podiums:</p>
              <p>36</p>
              <p className="font-bold">Points:</p>
              <p>1251</p>
              <p className="font-bold">Grands Prix entered:</p>
              <p>139</p>
              <p className="font-bold">World Championships</p>
              <p>0</p>
              <p className="font-bold">Highest race finish:</p>
              <p>1 (x6)</p>
              <p className="font-bold">Highest grid position:</p>
              <p>1</p>
              <p className="font-bold">Date of birth:</p>
              <p>16/10/1997</p>
              <p className="font-bold">Place of birth:</p>
              <p>Monte Carlo, Monaco</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-10">
          <h2 className="text-3xl font-bold">Biography</h2>
          <p className="mt-4 text-lg leading-10">
            Born in the Mediterranean idyll of Monaco, Leclerc arrived in F1 on
            a tidal wave of expectation. Practically peerless on his way to the
            GP3 and Formula 2 crowns, he showcased a dazzling array of skills
            from scorching pole positions, commanding victories – even when his
            car caught fire twice at Silverstone – to an ability to muscle his
            way through the pack. Winning back-to-back championships also taught
            Leclerc how to handle pressure, another useful tool in the big pond
            of Formula 1 racing. Stepping up to F1 in 2018, Leclerc showed
            flashes of ballistic pace on Saturdays and racing brilliance on
            Sundays, dragging his Sauber beyond its limits – and earning himself
            a money-can’t-buy race seat at Ferrari for 2019, stepping into the
            shoes of the Scuderia’s last world champion, Kimi Raikkonen. There
            he immediately put the cat among the proverbial pigeons, unafraid to
            go wheel-to-wheel with established number one, Sebastian Vettel. A
            maiden F1 victory at Spa was followed by another a week later on
            Ferrari’s hallowed home turf of Monza. The tifosi had found another
            new hero – who then became the first man to out-score Vettel over a
            season with the Scuderia, a feat he repeated in crushing fashion the
            following year. The 2020 and ’21 seasons bore little fruit for
            Ferrari, but Leclerc maintained his resolve to emerge a true title
            contender in 2022. With three wins, 11 podiums and nine pole
            positions, he was the only man able to consistently take the fight
            to champion Max Verstappen - a feat he and the Scuderia were sadly
            unable to repeat in 2023. Out of the car, Leclerc is modest and
            thoughtful - but then he is on his own very personal mission. This
            exciting young talent is racing for his late father Herve and his
            friend and mentor Jules Bianchi, the F1 driver who died in 2015. On
            the evidence so far, he is doing them both proud.
          </p>
        </div>
      </main>
    </div>
  );
}
